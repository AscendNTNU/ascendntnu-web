import * as React from 'react'
import { HtmlRenderer, Parser } from 'commonmark'

import { Section, SubSection } from '../PageLayout'

export interface BlogPageProps {}
export interface BlogPageState {
  attributes: {
    layout?: string,
    title: string,
    date?: string,
    categories?: string,
    author?: string,
  },
  post: string,
}

export class BlogPage extends React.Component<BlogPageProps, BlogPageState> {
  private parser: Parser
  private renderer: HtmlRenderer

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
    }
    this.parser = new Parser()
    this.renderer = new HtmlRenderer()
    this.fetchPost("/api/v1/posts/2016-01-17-Rekruttering.md")
  }

  fetchPost (url: string) {
    fetch(url)
      .then(r => r.json())
      .then(r => {
        let parsed: any = this.parser.parse(r.body)
        console.log(r.attributes)
        this.setState({
          attributes: r.attributes,
          post: this.renderer.render(parsed)
        })
      })
      .catch(err=>console.error('Could not fetch file from: ' + url))
  }

  render () {
    return (
      <div className="page page-blog">
        <Section title={this.state.attributes.title}>
          <div dangerouslySetInnerHTML={ {__html: this.state.post} } />
        </Section>
      </div>
    )
  }
}

export default BlogPage
