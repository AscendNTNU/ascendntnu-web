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
  post?: string,
  posts?: any[],
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
      post: '',
      posts: [],
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
          p['parsedBody'] = this.parser.parse(p.body)
          p['renderedBody'] = this.renderer.render(p.parsedBody._firstChild)
          return p
        })
        this.setState({
          posts: r.sort((a: any, b: any) => a.file > b.file ? -1 : 1)
        })
      })
      .catch(err => console.error('Could not fetch file from: ' + url))
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

  render () {
    if (this.showAllPosts && !this.props.params.post) {
      this.reload()
      this.showAllPosts = false
    } else if (!this.showAllPosts && this.props.params.post) {
      this.reload()
      this.showAllPosts = true
    }

    if (this.props.params.post) {
      let categories: any[] = this.state.attributes.categories.split(" ").map((cat:string, k:number) => {
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
                {this.formatDate(this.state.attributes.date, 'dag DD/MM/YY (HH:mm)')}
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
      let links: any[] = this.state.posts.map((post, i) => {
        let categories: any[] = post.attributes.categories.split(" ").map((cat:string, k:number) => {
          return (<div className="category" key={k}>{cat}</div>)
        })
        return (
          <div className="page-blog-list-link" key={i}>
            <div className="blog-list-details">
              <Link className="blog-list-link" onClick={this.reload} to={'/blog/' + post.link}>{post.attributes.title}</Link>
              <div className="blog-list-author">
                {post.attributes.author}
              </div>
              <div className="blog-list-date">
                {this.formatDate(post.attributes.date, 'dag DD/MM/YY')}
              </div>
            </div>
            <div className="blog-list-preview">
              <div dangerouslySetInnerHTML={ {__html: post.renderedBody } } />
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
