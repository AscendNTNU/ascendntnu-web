import * as React from 'react'
import { Link } from 'react-router'
import { HtmlRenderer, Parser } from 'commonmark'

import { Section, SubSection } from '../PageLayout'

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
    console.log(props)
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
      this.fetchPosts('/api/v1/posts')
    }
  }

  fetchPost (url: string) {
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

  fetchPosts (url: string) {
    fetch(url)
      .then(r => r.json())
      .then(r => {
        this.setState({
          posts: r
        })
      })
      .catch(err => console.error('Could not fetch file from: ' + url))
  }

  reload () {
    if (this.props.params.post) {
      this.fetchPost('/api/v1/posts/' + this.props.params.post)
    } else {
      this.fetchPosts('/api/v1/posts')
    }
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
      return (
        <div className="page page-blog">
          <Section title={this.state.attributes.title}>
            <div dangerouslySetInnerHTML={ {__html: this.state.post} } />
          </Section>
        </div>
      )
    } else {
      let links: any[] = this.state.posts.map((post, i) => {
        return (<Link onClick={this.reload} to={'/blog/' + post} key={i}>{post}</Link>)
      })
      return (
        <div className="page page-blog">
          <Section title="Artikler">
            {links}
          </Section>
        </div>
      )
    }
  }
}

export default BlogPage
