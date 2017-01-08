import * as React from 'react'

import { ModelRenderer } from '../Common/model'

export interface SplashProps {}
export interface SplashState {
  pos: number,
  down: boolean,
  startPos: {
    x: number,
    y: number
  }
}

export class Splash extends React.Component<SplashProps, SplashState> {
  private distance: number

  constructor (props: any) {
    super(props)
    this.distance = window.innerWidth
    this.state = {
      pos: this.distance / 2,
      down: false,
      startPos: {
        x: 0,
        y: 0
      }
    }
    window.addEventListener('resize', () => {
      this.distance = window.innerWidth
    })
    window.addEventListener('mousemove', this.mouseMoveHandler.bind(this))
    window.addEventListener('mouseup', this.mouseUpHandler.bind(this))
    window.addEventListener('touchmove', this.mouseMoveHandler.bind(this))
    window.addEventListener('touchend', this.mouseUpHandler.bind(this))
    window.addEventListener('touchcancel', this.mouseUpHandler.bind(this))
  }

  mouseMoveHandler (evt: any) {
    if (this.state.down) {
      let pos = {
        x: 0,
        y: 0
      }

      if (evt.type === 'mousemove') {
        pos = {
          x: evt.clientX,
          y: evt.clientY
        }
      } else {
        evt.preventDefault()
        pos = {
          x: evt.touches[0].clientX,
          y: evt.touches[0].clientY
        }
      }

      this.setState(Object.assign({}, this.state, {
        pos: pos.x - this.state.startPos.x
      }))
    }
  }

  mouseDownHandler (evt: any) {
    let pos = {
      x: 0,
      y: 0
    }

    if (evt.type === 'mousedown') {
      pos = {
        x: evt.clientX - this.state.pos,
        y: evt.clientY - this.state.pos
      }
    } else {
      pos = {
        x: evt.touches[0].clientX - this.state.pos,
        y: evt.touches[0].clientY - this.state.pos
      }
    }

    this.setState(Object.assign({}, this.state, {
      down: true,
      startPos: pos
    }))
  }

  mouseUpHandler (evt: any) {
    this.setState(Object.assign({}, this.state, {
      down: false
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
        <div className="front-splash-center" style={styles.centerStyle}
          onMouseDown={this.mouseDownHandler.bind(this)}
          onTouchStart={this.mouseDownHandler.bind(this)}>
          <img src="images/logo/logo-ascend-below-shadow.svg" draggable={false} />
        </div>
        <div className="front-splash-right" style={styles.rightStyle}>
          <ModelRenderer models={['images/drones/sylinder2.stl']} style={{ position: 'absolute' }} />
        </div>
      </div>
    )
  }
}

export default Splash
