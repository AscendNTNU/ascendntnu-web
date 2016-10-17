import * as React from 'react'

export interface BlogPageProps {}

export class BlogPage extends React.Component<BlogPageProps, {}> {
  render () {
    return (
      <div className="page page-blog">
        <h2>Blog page.</h2>
      </div>
    )
  }
}

export default BlogPage
