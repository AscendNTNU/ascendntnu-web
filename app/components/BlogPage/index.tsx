import * as React from 'react'

import { Section, SubSection } from '../PageLayout'

export interface BlogPageProps {}

export class BlogPage extends React.Component<BlogPageProps, {}> {
  render () {
    return (
      <div className="page page-blog">
        <Section title="Blog page">
        </Section>
      </div>
    )
  }
}

export default BlogPage
