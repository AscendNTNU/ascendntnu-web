import * as React from 'react'

export interface FrontPageProps {}

export class FrontPage extends React.Component<FrontPageProps, {}> {
  render () {
    return (
      <div className="page page-front">
        <div className="front-splash">
          <div className="front-splash-left">
            <p>
              Autonomus aerial robotics for fun and learning.
              Ascend NTNU is the
              &nbsp;<a href="http://www.ntnu.edu/">Norwegian University Of Science and Technology's</a>
              &nbsp;team in the
              &nbsp;<a href="http://www.aerialroboticscompetition.org/">International Aerial Robotics Competition</a>.
            </p>
          </div>
          <div className="front-splash-center"><img src="images/logo/logo-ascend-below-shadow.svg" /></div>
          <div className="front-splash-right"></div>
        </div>
      </div>
    )
  }
}

export default FrontPage
