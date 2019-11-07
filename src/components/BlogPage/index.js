import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { HtmlRenderer, Parser } from 'commonmark'
import * as Katex from 'katex'
import { polyfill } from 'es6-promise'
import { Section, SubSection } from '../PageLayout'
import { Breadcrumb } from '../Common/breadcrumb'
import { BlogArticle } from './blogArticle'
import { API_URL, ASSETS_URL } from '../../constants'

polyfill()

export class BlogPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: 'e',
      tagValues: [],
      posts: [],
      viewMode: 'big', //localStorage['viewMode'] || 'small',
    }
    this.parser = new Parser()
    this.renderer = new HtmlRenderer()
    this.showAllPosts = true
    this.renderedTex = false

    if (this.props.match.params && this.props.match.params.post) {
    } else {
      if (this.props.match.params && this.props.match.params.tags)
        this.state.tagValues = this.props.match.params.tags.split(',')
      this.fetchPosts()
    }
  }

  componentDidUpdate(prevProp, prevState) {
    this.renderTex()
  }

  renderTex() {
    if (!this.renderedTex) {
      let refs = this.refs

      for (let i = 0; i < this.state.posts.length; i++) {
        this.renderedTex = true
        let ref = refs[`post-${i}`]
        if (ref) {
          for (let child of ref.children) {
            if (child.tagName === 'TEX') Katex.render(child.innerText, child)
            else {
              for (let subchild of child.children) {
                if (subchild.tagName === 'TEX')
                  Katex.render(subchild.innerText, subchild)
              }
            }
          }
        }
      }
    }
  }

  fetchPosts() {
    let setup = process.env.NODE_ENV === 'production' ? {} : { mode: 'cors' }

    let postsURL = 'posts/all'
    if (/v2/.test(API_URL)) {
      postsURL = 'blog/'
    }

    let url = `${API_URL}/${postsURL}`
    //url = 'api/v1/posts/all'

    fetch(url, setup)
      .then(r => r.json())
      .then(r => {
        r = r.map(p => {
          p.attributes['dateFormatted'] = this.formatDate(
            p.attributes.date,
            'dag DD/MM/YY'
          )
          p.attributes['categoriesList'] = p.attributes.categories.split(' ')
          p['parsedBody'] = this.parser.parse(p.body)
          p['renderedFirstChild'] = this.renderer.render(
            p.parsedBody._firstChild
          )
          p['renderedBody'] = this.renderer.render(p.parsedBody)
          p['renderedBodySearch'] = p['renderedBody']

          return p
        })
        this.setState({
          posts: r.sort((a, b) => (a.file > b.file ? -1 : 1)),
        })
      })
      .catch(err => console.error('Could not fetch file from: ' + url))
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.match.params !== nextProps.match.params &&
      nextProps.match.params.tags
    ) {
      this.setState(
        Object.assign({}, this.state, {
          tagValues: nextProps.match.params.tags.split(','),
        })
      )
    }
  }

  addTagToFilterHandler(evt) {
    let tag = evt.target.innerText
    let tags = this.state.tagValues
    let index = tags.indexOf(tag)

    if (index === -1) tags.push(tag)
    else tags.splice(index, 1)

    this.setState({
      tagValues: tags,
    })
  }

  filterByTags(filter, el) {
    if (filter.length) {
      for (let val of filter) {
        if (el.attributes.categoriesList.indexOf(val) !== -1) return true
      }

      return false
    }

    return true
  }

  filterBySearch(filter, el, keys) {
    let prop = ''

    if (filter.length < 2) {
      for (let key in keys) {
        prop = keys[key]
        if (el.hasOwnProperty(prop)) {
          el[prop] = el[prop].replace(/<\/?found>/g, '')
        } else if (el.attributes.hasOwnProperty(prop)) {
          el.attributes[prop] = el.attributes[prop].replace(/<\/?found>/g, '')
        }
      }

      return true
    }

    let re = new RegExp(filter, 'i')
    let rer = new RegExp(`(.)(${filter})(.{0,2})`, 'ig')
    let hasFound = false

    for (let key in keys) {
      prop = keys[key]
      if (el.hasOwnProperty(prop)) {
        el[prop] = el[prop].replace(/<\/?found>/g, '')
        if (re.test(el[prop])) {
          el[prop] = el[prop].replace(rer, '$1<found>$2</found>$3')
          hasFound = true
        }
      } else if (el.attributes.hasOwnProperty(prop)) {
        el.attributes[prop] = el.attributes[prop].replace(/<\/?found>/g, '')
        if (re.test(el.attributes[prop])) {
          el.attributes[prop] = el.attributes[prop].replace(
            rer,
            '$1<found>$2</found>$3'
          )
          hasFound = true
        }
      }
    }

    return hasFound
  }

  search(evt) {
    let value = evt.target.value
    value = value.replace(/^[^a-zøæå0-9 -]|[^a-zøæå0-9 \-*]+/gi, '')
    value = value.replace(/^\*+/gi, '')
    value = value.replace(/\*/gi, '[a-zøæå0-9 -]')
    this.setState({
      searchValue: value,
    })
  }

  reload() {
    if (this.props.match.params && this.props.match.params.post) {
    } else {
      this.fetchPosts()
    }
  }

  digits(value, places) {
    places = typeof places === 'number' ? places : 2

    return (Array(places).join('0') + value).slice(-places)
  }

  formatDate(date, format) {
    if (!date.length) return ''

    if (typeof date === 'string') {
      format = typeof format === 'string' ? format : 'dag DD.MM.YYYY (HH:mm:SS)'
      let dager = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      let d = new Date(
        date
          .replace(/-/g, '/')
          .replace(/T/g, ' ')
          .slice(0, 19)
      )
      let formatted = format.replace(
        new RegExp('da[gy]', 'ig'),
        dager[d.getDay()]
      )

      for (let i = 5; i > 0; i--) {
        formatted = formatted
          .replace(
            new RegExp(`(^|\\W)Y{${i},}($|\\W)`, 'g'),
            `$1${this.digits(d.getFullYear(), i)}$2`
          )
          .replace(
            new RegExp(`(^|\\W)M{${i},}($|\\W)`, 'g'),
            `$1${this.digits(d.getMonth() + 1, i)}$2`
          )
          .replace(
            new RegExp(`(^|\\W)D{${i},}($|\\W)`, 'g'),
            `$1${this.digits(d.getDate(), i)}$2`
          )
          .replace(
            new RegExp(`(^|\\W)H{${i},}($|\\W)`, 'g'),
            `$1${this.digits(d.getHours(), i)}$2`
          )
          .replace(
            new RegExp(`(^|\\W)m{${i},}($|\\W)`, 'g'),
            `$1${this.digits(d.getMinutes(), i)}$2`
          )
          .replace(
            new RegExp(`(^|\\W)S{${i},}($|\\W)`, 'g'),
            `$1${this.digits(d.getSeconds(), i)}$2`
          )
          .replace(new RegExp(`/images/`, 'g'), ASSETS_URL + `/images/`)
      }

      return formatted
    }

    return ''
  }

  changeView(type) {
    this.setState({
      viewMode: type,
    })
    try {
      localStorage['viewMode'] = type
    } catch (ex) {}
  }

  changeViewToSmallHandler(evt) {
    this.changeView('small')
  }

  changeViewToBigHandler(evt) {
    this.changeView('big')
  }

  render() {
    if (this.showAllPosts && !this.props.match.params.post) {
      this.reload()
      this.showAllPosts = false
    } else if (!this.showAllPosts && this.props.match.params.post) {
      this.reload()
      this.showAllPosts = true
    }

    if (this.props.match.params && this.props.match.params.post) {
      return (
        <div className="page page-blog">
          <BlogArticle post={this.props.match.params.post} />
        </div>
      )
    } else {
      let links = this.state.posts
        .filter(post => this.filterByTags(this.state.tagValues, post))
        .filter(post =>
          this.filterBySearch(this.state.searchValue, post, [
            'title',
            'dateFormatted',
            'author',
            'renderedBody',
          ])
        )
        .map((post, i) => {
          let categories = post.attributes.categoriesList.map((cat, k) => {
            let className =
              'category' +
              (this.state.tagValues.indexOf(cat) === -1 ? '' : ' selected')
            let tags = this.state.tagValues.slice()
            let index = tags.indexOf(cat)
            if (index === -1) tags.push(cat)
            else {
              let newTags = []
              for (let tag of tags) {
                if (tag !== cat) newTags.push(tag)
              }
              tags = newTags
            }
            return (
              <Link
                to={`/blog/tags/${tags.join(',')}`}
                className={className}
                key={k}
                onClick={this.addTagToFilterHandler.bind(this)}
              >
                {cat}
              </Link>
            )
          })
          return (
            <div className="page-blog-list-link" key={i}>
              <Link
                className="blog-list-link"
                onClick={this.reload}
                to={'/blog/' + post.link}
                dangerouslySetInnerHTML={{ __html: post.attributes.title }}
              />
              <div className="blog-list-details">
                <div
                  className="blog-list-author"
                  dangerouslySetInnerHTML={{ __html: post.attributes.author }}
                />
                <div
                  className="blog-list-date"
                  dangerouslySetInnerHTML={{
                    __html: post.attributes.dateFormatted,
                  }}
                />
              </div>
              <div className="blog-list-preview">
                <hr />
                <div
                  ref={`post-${i}`}
                  dangerouslySetInnerHTML={{
                    __html:
                      this.state.viewMode && this.state.viewMode === 'small'
                        ? post.renderedFirstChild
                        : post.renderedBody,
                  }}
                />
              </div>
              <div className="blog-list-categories">{categories}</div>
            </div>
          )
        })

      return (
        <div className="page page-blog">
          <Section titleText="Our blog">
            <input
              onChange={this.search.bind(this)}
              placeholder="Search in articles..."
              title="Use * as wildcard"
            />
            <SubSection className="page-blog-list">{links}</SubSection>
          </Section>
        </div>
      )
    }
  }
}

export default BlogPage
