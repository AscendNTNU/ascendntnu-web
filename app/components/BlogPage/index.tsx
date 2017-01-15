import * as React from 'react'
import { Link } from 'react-router'
import { HtmlRenderer, Parser } from 'commonmark'

import { Section, SubSection } from '../PageLayout'
import { Breadcrumb } from '../Common/breadcrumb'

export interface BlogPageProps {
  params: any
}

export interface BlogPageState {
  attributes?: any & {
    layout?: string,
    title: string,
    date?: string,
    categories?: string,
    author?: string,
  },
  searchValue?: string,
  post?: string,
  posts?: any[],
  viewMode?: string,
}

export class BlogPage extends React.Component<BlogPageProps, BlogPageState> {
  private parser: Parser
  private renderer: HtmlRenderer
  private showAllPosts: boolean

  constructor (props: BlogPageProps) {
    super(props)
    this.state = {
      attributes: {
        layout: '',
        title: '',
        date: '',
        categories: '',
        author: '',
      },
      searchValue: 'e',
      post: '',
      posts: [],
      viewMode: localStorage['viewMode'] || 'small',
    }
    this.parser = new Parser()
    this.renderer = new HtmlRenderer()
    this.showAllPosts = true
    if (this.props.params.post) {
      this.fetchPost('/api/v1/posts/' + this.props.params.post)
    } else {
      this.fetchPosts('/api/v1/posts/all')
    }
  }

  private fetchPost (url: string) {
    fetch(url)
      .then(r => r.json())
      .then(r => {
        let parsed: any = this.parser.parse(r.body)
        r.attributes['dateFormatted'] = this.formatDate(r.attributes.date, 'dag DD/MM/YY')
        this.setState({
          attributes: r.attributes,
          post: this.renderer.render(parsed)
        })
      })
      .catch(err => console.error('Could not fetch file from: ' + url))
  }

  private fetchPosts (url: string) {
    fetch(url)
      .then(r => r.json())
      .then(r => {
        r = r.map((p: any) => {
          p.attributes['dateFormatted'] = this.formatDate(p.attributes.date, 'dag DD/MM/YY')
          p['parsedBody'] = this.parser.parse(p.body)
          p['renderedFirstChild'] = this.renderer.render(p.parsedBody._firstChild)
          p['renderedBody'] = this.renderer.render(p.parsedBody)

          return p
        })
        this.setState({
          posts: r.sort((a: any, b: any) => a.file > b.file ? -1 : 1)
        })
      })
      .catch(err => console.error('Could not fetch file from: ' + url))
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
    let rer: RegExp = new RegExp(`(${filter})`, 'ig')
    let hasFound: boolean = false

    for (let key in keys) {
      prop = keys[key]
      if (el.hasOwnProperty(prop)) {
        el[prop] = el[prop].replace(/<\/?found>/g, '')
        if (re.test(el[prop])) {
          el[prop] = el[prop].replace(rer, '<found>$1</found>')
          hasFound = true
        }
      } else if (el.attributes.hasOwnProperty(prop)) {
        el.attributes[prop] = el.attributes[prop].replace(/<\/?found>/g, '')
        if (re.test(el.attributes[prop])) {
          el.attributes[prop] = el.attributes[prop].replace(rer, '<found>$1</found>')
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
    if (this.props.params.post) {
      this.fetchPost('/api/v1/posts/' + this.props.params.post)
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

  private changeView (type: string) {
    this.setState({
      viewMode: type
    })
    localStorage['viewMode'] = type
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

    if (this.props.params.post) {
      let categories: any[] = this.state.attributes.categories.split(" ").map((cat: string, k: number) => {
        return (<div className="category" key={k}>{cat}</div>)
      })
      return (
        <div className="page page-blog">
          <Breadcrumb routes={['blog', this.props.params.post]} />
          <Section title={this.state.attributes.title}>
            <div className="blog-post-details">
              <div className="blog-post-author">
                {this.state.attributes.author}
              </div>
              <div className="blog-post-date">
                {this.state.attributes.dateFormatted}
              </div>
              <div className="blog-post-categories">
                {categories}
              </div>
            </div>
            <div dangerouslySetInnerHTML={ {__html: this.state.post} } />
          </Section>
        </div>
      )
    } else {
      let links: any[] = this.state.posts
        .filter(post => this.filterBySearch(this.state.searchValue, post, ['title', 'dateFormatted', 'author', 'renderedBody']))
        .map((post, i) => {
        let categories: any[] = post.attributes.categories.split(" ").map((cat:string, k:number) => {
          return (<div className="category" key={k}>{cat}</div>)
        })
        return (
          <div className="page-blog-list-link" key={i}>
            <div className="blog-list-details">
              <Link className="blog-list-link"
                onClick={this.reload}
                to={'/blog/' + post.link}
                dangerouslySetInnerHTML={ {__html: post.attributes.title } } />
              <div className="blog-list-author" dangerouslySetInnerHTML={ {__html: post.attributes.author } } />
              <div className="blog-list-date" dangerouslySetInnerHTML={ {__html: post.attributes.dateFormatted } } />
            </div>
            <div className="blog-list-preview">
              <div dangerouslySetInnerHTML={ {__html: this.state.viewMode && this.state.viewMode == 'small' ? post.renderedFirstChild : post.renderedBody } } />
            </div>
            <div className="blog-list-categories">
              {categories}
            </div>
          </div>
        )
      })

      return (
        <div className="page page-blog">
          <Breadcrumb routes={['blog']} />
          <Section title="Artikler">
            <div title="Hele innlegg" onClick={this.changeViewToBigHandler.bind(this)}><i className="fa fa-file-text"></i></div>
            <div title="Listevisning" onClick={this.changeViewToSmallHandler.bind(this)}><i className="fa fa-th-list"></i></div>
            <input onChange={this.search.bind(this)} placeholder="Søk i artikler..." title="Bruk * som wildcard" />
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
