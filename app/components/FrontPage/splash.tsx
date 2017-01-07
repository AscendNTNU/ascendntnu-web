import * as React from 'react'

import { ModelRenderer } from '../Common/model'

export interface SplashProps {}

export class Splash extends React.Component<SplashProps, {}> {
  render () {
    return (
      <div className="front-splash">
        <ModelRenderer models={['images/drones/sylinder2.stl']} wireframe={true} style={{ position: 'absolute' }} />
        <div className="front-splash-left">
          <p>
              Autonomus aerial robotics for fun and learning.
              Ascend NTNU is the
              &nbsp;<a href="http://www.ntnu.edu/">Norwegian University Of Science and Technology's</a>
              &nbsp;team in the
              &nbsp;<a href="http://www.aerialroboticscompetition.org/">International Aerial Robotics Competition</a>.
          </p>
        </div>
        <div className="front-splash-center">
          <img src="images/logo/logo-ascend-below-shadow.svg" />
        </div>
        <div className="front-splash-right">
          <ModelRenderer models={['images/drones/sylinder2.stl']} style={{ position: 'absolute' }} />
        </div>
      </div>
    )
  }
}

export default Splash
