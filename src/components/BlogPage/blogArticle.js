import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { HtmlRenderer, Parser } from 'commonmark'
import * as Katex from 'katex'
import { polyfill } from 'es6-promise'
import { Section } from '../PageLayout'
import { API_URL } from '../../constants'

polyfill()

export class BlogArticle extends Component {
  constructor (props) {
    super(props)

    this.state = {
      attributes: {
        layout: '',
        title: '',
        date: '',
        categories: '',
        categoriesList: [],
        author: '',
      },
      post: ''
    }

    this.parser = new Parser()
    this.renderer = new HtmlRenderer()

    this.fetchPost(`${API_URL}/posts/${this.props.post}`)
  }

  componentDidUpdate (prevProp, prevState) {
    let refs = this.refs

    if (prevState.post !== this.state.post) {
      if (refs.post) {
        for (let child of refs.post.children) {
          if (child.tagName === 'TEX') Katex.render(child.innerText, child)
          else {
            for (let subchild of child.children) {
              if (subchild.tagName === 'TEX') Katex.render(subchild.innerText, subchild)
            }
          }
        }
      }
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.post !== this.props.post) {
      this.fetchPost(`${API_URL}/posts/${nextProps.post}`)
    }
  }

  fetchPost (url) {
    fetch(url, { mode: 'cors' })
      .then(r => r.json())
      .then(r => {
        let parsed = this.parser.parse(r.body)
        let rendered = this.renderer.render(parsed)
        r.attributes['dateFormatted'] = this.formatDate(r.attributes.date, 'dag DD/MM/YY')
        r.attributes['categoriesList'] = r.attributes.categories.split(' ')
        this.setState({
          attributes: r.attributes,
          post: rendered
        })
      })
      .catch(err => console.error('Could not fetch file from: ' + url))
  }

  formatDate (date, format) {
    if (!date.length)
      return ''

    if (typeof date === 'string') {
      format = (typeof format === 'string' ? format : 'dag DD.MM.YYYY (HH:mm:SS)')
      let dager = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      let d = new Date(date.replace(/-/g, '/').replace(/T/g, ' ').slice(0,19))
      let formatted = format.replace(new RegExp('da[gy]', 'ig'), dager[d.getDay()])

      for (let i = 5; i > 0; i--) {
        formatted = formatted
          .replace(new RegExp(`(^|\\W)Y{${i},}($|\\W)`, 'g'), `$1${this.digits(d.getFullYear(), i)}$2`)
          .replace(new RegExp(`(^|\\W)M{${i},}($|\\W)`, 'g'), `$1${this.digits(d.getMonth() + 1, i)}$2`)
          .replace(new RegExp(`(^|\\W)D{${i},}($|\\W)`, 'g'), `$1${this.digits(d.getDate(), i)}$2`)
          .replace(new RegExp(`(^|\\W)H{${i},}($|\\W)`, 'g'), `$1${this.digits(d.getHours(), i)}$2`)
          .replace(new RegExp(`(^|\\W)m{${i},}($|\\W)`, 'g'), `$1${this.digits(d.getMinutes(), i)}$2`)
          .replace(new RegExp(`(^|\\W)S{${i},}($|\\W)`, 'g'), `$1${this.digits(d.getSeconds(), i)}$2`)
      }

      return formatted
    }

    return ''
  }

  digits (value, places) {
    places = (typeof places === 'number' ? places : 2)

    return (Array(places).join('0') + value).slice(-(places))
  }

  render () {
    let categories = this.state.attributes.categoriesList.map((cat, k) => {
      return (
        <Link to={`/blog/tags/${cat}`} className="category" key={k}>{cat}</Link>
      )
    })

    return (
      <Section className="page-blog">
        <h1 className="section-title">{this.state.attributes.title}</h1>
        <div className="blog-post-details">
          <div className="blog-post-author">
            {this.state.attributes.author}
          </div>
          <div className="blog-post-date">
            {this.state.attributes.dateFormatted}
          </div>
          <div className="blog-post-categories">
            <div className="fb-share-button"
              data-href={`https://ascendntnu.no/blog/${this.props.post}`}
              data-layout="button_count"
              data-size="small"
              data-mobile-iframe="true">
              <a className="fb-xfbml-parse-ignore"
                target="_blank"
                href={encodeURIComponent(`https://www.facebook.com/sharer/sharer.php?u=https://ascendntnu.no/blog/${this.props.post}&amp;src=sdkpreparse`)}>
              </a>
            </div>
            {categories}
          </div>
        </div>
        <div className="blog-post-content" ref="post" dangerouslySetInnerHTML={ {__html: this.state.post} } />
      </Section>
    )
  }
}
