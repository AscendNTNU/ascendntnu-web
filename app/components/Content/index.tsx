import * as React from 'react'
import FrontPage from '../FrontPage'

export interface ContentProps {}

export class Content extends React.Component<ContentProps, {}> {
  render () {
    return (
      <div className="content">
        <FrontPage />
      </div>
    )
  }
}

export default Content
