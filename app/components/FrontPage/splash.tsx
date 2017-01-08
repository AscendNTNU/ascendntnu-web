import * as React from 'react'

import { ModelRenderer } from '../Common/model'

export interface SplashProps {}
export interface SplashState {
  pos: number
}

export class Splash extends React.Component<SplashProps, SplashState> {
  private distance: number

  constructor (props: any) {
    super(props)
    this.distance = window.innerWidth
    this.state = {
      pos: this.distance / 2
    }
    window.addEventListener('resize', () => {
      this.distance = window.innerWidth
    })
  }

  mouseMove (evt: any) {
    this.setState(Object.assign({}, this.state, {
      pos: evt.nativeEvent.clientX
    }))
  }

  render () {
    let centerPos = this.distance / 2
    let process = this.state.pos / this.distance

    let growLeft: number = centerPos / (1 - process) - centerPos
    let growRight: number = centerPos
    if (process > .5) {
      growLeft = centerPos
      growRight = centerPos / process - centerPos
    }

    let styles: any = {
      leftStyle: {
        flexGrow: growLeft
      },
      centerStyle: {
        position: 'absolute',
        left: (100 * this.state.pos / this.distance) + '%'
      },
      rightStyle: {
        flexGrow: growRight
      }
    }

    return (
      <div className="front-splash">
        <ModelRenderer models={['images/drones/sylinder2.stl']} wireframe={true} style={{ position: 'absolute' }} />
        <div className="front-splash-left" style={styles.leftStyle}>
          <p>
              Autonomus aerial robotics for fun and learning.
              Ascend NTNU is the
              &nbsp;<a href="http://www.ntnu.edu/">Norwegian University Of Science and Technology's</a>
              &nbsp;team in the
              &nbsp;<a href="http://www.aerialroboticscompetition.org/">International Aerial Robotics Competition</a>.
          </p>
        </div>
        <div className="front-splash-center" style={styles.centerStyle} onMouseMove={this.mouseMove.bind(this)}>
          <img src="images/logo/logo-ascend-below-shadow.svg" />
        </div>
        <div className="front-splash-right" style={styles.rightStyle}>
          <ModelRenderer models={['images/drones/sylinder2.stl']} style={{ position: 'absolute' }} />
        </div>
      </div>
    )
  }
}

export default Splash
