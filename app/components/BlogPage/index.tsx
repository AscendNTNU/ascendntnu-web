import * as React from 'react'
import { Link } from 'react-router'
import { HtmlRenderer, Parser } from 'commonmark'
import * as Katex from 'katex'
import { polyfill } from 'es6-promise'
polyfill()

import { Section, SubSection } from '../PageLayout'
import { Breadcrumb } from '../Common/breadcrumb'
import { BlogArticle } from './blogArticle'

export interface BlogPageProps {
  params: any & {
    tags: string
  }
}

export interface BlogPageState {
  searchValue?: string,
  tagValues?: string[],
  post?: string,
  posts?: any[],
  viewMode?: string,
}

export class BlogPage extends React.Component<BlogPageProps, BlogPageState> {
  private parser: Parser
  private renderer: HtmlRenderer
  private showAllPosts: boolean
  private renderedTex: boolean

  constructor (props: BlogPageProps) {
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

    if (this.props.params && this.props.params.post) {
    } else {
      if (this.props.params && this.props.params.tags)
        this.state.tagValues = this.props.params.tags.split(',')
      this.fetchPosts('/api/v1/posts/all')
    }
  }

  componentDidUpdate (prevProp: BlogPageProps, prevState: BlogPageState) {
    this.renderTex()
  }

  private renderTex () {
    if (!this.renderedTex) {
      let refs: any = this.refs

      for (let i = 0; i < this.state.posts.length; i++) {
        this.renderedTex = true
        let ref: any = refs[`post-${i}`]
        if (ref) {
          for (let child of ref.children) {
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
  }

  private fetchPosts (url: string) {
    fetch(url)
      .then(r => r.json())
      .then(r => {
        r = r.map((p: any) => {
          p.attributes['dateFormatted'] = this.formatDate(p.attributes.date, 'dag DD/MM/YY')
          p.attributes['categoriesList'] = p.attributes.categories.split(" ")
          p['parsedBody'] = this.parser.parse(p.body)
          p['renderedFirstChild'] = this.renderer.render(p.parsedBody._firstChild)
          p['renderedBody'] = this.renderer.render(p.parsedBody)
          p['renderedBodySearch'] = p['renderedBody']

          return p
        })
        this.setState({
          posts: r.sort((a: any, b: any) => a.file > b.file ? -1 : 1)
        })
      })
      .catch(err => console.error('Could not fetch file from: ' + url))
  }

  componentWillReceiveProps (nextProps: any) {
    if (this.props.params !== nextProps.params && nextProps.params.tags) {
      this.state.tagValues = nextProps.params.tags.split(',')
    }
  }

  public addTagToFilterHandler (evt: any) {
    let tag: string = evt.target.innerText
    let tags: any = this.state.tagValues
    let index: number = tags.indexOf(tag)

    if (index === -1) tags.push(tag)
    else tags.splice(index, 1)

    this.setState({
      tagValues: tags
    })
  }

  public filterByTags (filter: any, el: any): boolean {
    if (filter.length) {
      for (let val of filter) {
        if (el.attributes.categoriesList.indexOf(val) !== -1) return true
      }

      return false
    }

    return true
  }

  public filterBySearch (filter: string, el: any, keys?: string[]): boolean {
    let prop: string

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

    let re: RegExp = new RegExp(filter, 'i')
    let rer: RegExp = new RegExp(`(.)(${filter})(.{0,2})`, 'ig')
    let hasFound: boolean = false

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
          el.attributes[prop] = el.attributes[prop].replace(rer, '$1<found>$2</found>$3')
          hasFound = true
        }
      }
    }

    return hasFound
  }

  public search (evt: any) {
    let value: string = evt.target.value
    value = value.replace(/^[^a-zøæå0-9 \-]|[^a-zøæå0-9 \-*]+/gi, '')
    value = value.replace(/^\*+/gi, '')
    value = value.replace(/\*/gi, '[a-zøæå0-9 \-]')
    this.setState({
      searchValue: value
    })
  }

  public reload () {
    if (this.props.params && this.props.params.post) {
    } else {
      this.fetchPosts('/api/v1/posts/all')
    }
  }

  public digits (value: number, places?: number): string {
    places = (typeof places === 'number' ? places : 2)

    return (Array(places).join('0') + value).slice(-(places))
  }

  public formatDate (date: string, format?: string): string {
    if (!date.length)
      return ''

    if (typeof date === 'string') {
      format = (typeof format === 'string' ? format : 'dag DD.MM.YYYY (HH:mm:SS)')
      let dager: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
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

  private changeView (type: string) {
    this.setState({
      viewMode: type
    })
    try {
      localStorage['viewMode'] = type
    } catch (ex) {}
  }

  private changeViewToSmallHandler (evt: any) {
    this.changeView('small')
  }

  private changeViewToBigHandler (evt: any) {
    this.changeView('big')
  }

  render () {
    if (this.showAllPosts && !this.props.params.post) {
      this.reload()
      this.showAllPosts = false
    } else if (!this.showAllPosts && this.props.params.post) {
      this.reload()
      this.showAllPosts = true
    }

    if (this.props.params && this.props.params.post) {
      return (
        <div className="page page-blog">
          <Breadcrumb routes={['blog', this.props.params.post]} />
          <BlogArticle post={this.props.params.post} />
        </div>
      )
    } else {
      let links: any[] = this.state.posts
        .filter(post => this.filterByTags(this.state.tagValues, post))
        .filter(post => this.filterBySearch(this.state.searchValue, post, ['title', 'dateFormatted', 'author', 'renderedBody']))
        .map((post, i) => {
        let categories: any[] = post.attributes.categoriesList.map((cat: string, k: number) => {
          let className: string = 'category' + (this.state.tagValues.indexOf(cat) === -1 ? '' : ' selected')
          let tags: string[] = this.state.tagValues.slice()
          let index = tags.indexOf(cat)
          if (index === -1) tags.push(cat)
          else {
            let newTags: string[] = []
            for (let tag of tags) {
              if (tag !== cat) newTags.push(tag)
            }
            tags = newTags
          }
          return (<Link to={`/blog/tags/${tags.join(',')}`} className={className} key={k} onClick={this.addTagToFilterHandler.bind(this)}>{cat}</Link>)
        })
        return (
          <div className="page-blog-list-link" key={i}>
            <Link className="blog-list-link"
              onClick={this.reload}
              to={'/blog/' + post.link}
              dangerouslySetInnerHTML={ {__html: post.attributes.title } } />
            <div className="blog-list-details">
              <div className="blog-list-author" dangerouslySetInnerHTML={ {__html: post.attributes.author } } />
              <div className="blog-list-date" dangerouslySetInnerHTML={ {__html: post.attributes.dateFormatted } } />
            </div>
            <div className="blog-list-preview">
              <div ref={`post-${i}`} dangerouslySetInnerHTML={ {__html: this.state.viewMode && this.state.viewMode == 'small' ? post.renderedFirstChild : post.renderedBody } } />
            </div>
            <div className="blog-list-categories">
              {categories}
            </div>
          </div>
        )
      })

      return (
        <div className="page page-blog">
          <Section titleText="Our blog">
            <input onChange={this.search.bind(this)} placeholder="Search in articles..." title="Use * as wildcard" />
            <SubSection className="page-blog-list">
              {links}
            </SubSection>
          </Section>
        </div>
      )
    }
  }
}

export default BlogPage
