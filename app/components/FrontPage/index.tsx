import * as React from 'react'

export interface FrontPageProps {}

export class FrontPage extends React.Component<FrontPageProps, {}> {
  render () {
    return (
      <div className="page page-front">
        <div className="front-splash">
          <div className="front-splash-left">AscendNTNU</div>
          <div className="front-splash-center"><img src="images/logo/logo-ascend-below.svg" /></div>
          <div className="front-splash-right"></div>
        </div>
      </div>
    )
  }
}

export default FrontPage
