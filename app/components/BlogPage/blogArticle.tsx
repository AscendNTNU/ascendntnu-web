import * as React from 'react'
import { Link } from 'react-router'
import { HtmlRenderer, Parser } from 'commonmark'
import * as Katex from 'katex'
import { polyfill } from 'es6-promise'
polyfill()

import { Section } from '../PageLayout'

interface BlogArticleProps {
  post: string,
}

interface BlogArticleState {
  attributes?: any & {
    layout?: string,
    title: string,
    date?: string,
    categories?: string,
    author?: string,
  },
  post: any
}

export class BlogArticle extends React.Component<BlogArticleProps, BlogArticleState> {
  private parser: Parser
  private renderer: HtmlRenderer

  constructor (props: any) {
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

    this.fetchPost(`/api/v1/posts/${this.props.post}`)
  }

  componentDidUpdate (prevProp: BlogArticleProps, prevState: BlogArticleState) {
    let refs: any = this.refs

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

  componentWillReceiveProps (nextProps: any) {
    if (nextProps.post !== this.props.post) {
      this.fetchPost(`/api/v1/posts/${nextProps.post}`)
    }
  }

  private fetchPost (url: string) {
    fetch(url)
      .then(r => r.json())
      .then(r => {
        let parsed: any = this.parser.parse(r.body)
        let rendered: any = this.renderer.render(parsed)
        r.attributes['dateFormatted'] = this.formatDate(r.attributes.date, 'dag DD/MM/YY')
        r.attributes['categoriesList'] = r.attributes.categories.split(' ')
        this.setState({
          attributes: r.attributes,
          post: rendered
        })
      })
      .catch(err => console.error('Could not fetch file from: ' + url))
  }

  public formatDate (date: string, format?: string): string {
    if (!date.length)
      return ''

    if (typeof date === 'string') {
      format = (typeof format === 'string' ? format : 'dag DD.MM.YYYY (HH:mm:SS)')
      let dager: string[] = ['Man', 'Tirs', 'Ons', 'Tors', 'Fre', 'Lør', 'Søn']
      let d: Date = new Date(date.replace(/-/g, '/').replace(/T/g, ' ').slice(0,19))
      let formatted: string = format.replace(new RegExp('da[gy]', 'ig'), dager[d.getDay()])

      for (let i: number = 5; i > 0; i--) {
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

  public digits (value: number, places?: number): string {
    places = (typeof places === 'number' ? places : 2)

    return (Array(places).join('0') + value).slice(-(places))
  }

  render () {
    let categories: any[] = this.state.attributes.categoriesList.map((cat: string, k: number) => {
      return (
        <Link to={`/blog/tags/${cat}`} className="category" key={k}>{cat}</Link>
      )
    })

    return (
      <Section className="page-blog" title={this.state.attributes.title}>
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
                Del
              </a>
            </div>
            {categories}
          </div>
        </div>
        <div ref="post" dangerouslySetInnerHTML={ {__html: this.state.post} } />
      </Section>
    )
  }
}
