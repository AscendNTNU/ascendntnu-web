import * as React from 'react'

export interface ContentProps {}

export class Content extends React.Component<ContentProps, {}> {
  render () {
    return (
      <div className="content">
        <img src="images/logo/logo-ascend-below.svg" />
      </div>
    )
  }
}

export default Content
