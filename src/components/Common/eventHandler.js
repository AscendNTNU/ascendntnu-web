import React, { Component } from 'react'

export class AddHover extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false,
      touch: false,
    }
  }

  /**
   * Updating the hover class on the element. Touch is triggered before mouse events,
   * but as touch triggers by both touch and mouse - we need a way of detecting the
   * first start/end sequence.
   *
   * @param hoverOn {boolean} Telling if event is for turning on/off the hover class.
   * @param isTouch {boolean} Telling if it is a touchevent.
   */
  updateHover(hoverOn, isTouch) {
    if (hoverOn) {
      this.setState(
        Object.assign({}, this.state, {
          hover: true,
          touch: isTouch,
        })
      )
    } else {
      if (this.state.touch === isTouch) {
        this.setState(
          Object.assign({}, this.state, {
            hover: false,
            touch: isTouch,
          })
        )

        if (isTouch) {
          setTimeout(() => {
            this.setState(Object.assign({}, this.state, { hover: false }))
          }, 100)
        }
      }
    }
  }

  render() {
    let className =
      this.props.className.replace(/(^| )hover( |$)/g, '') +
      (this.state.hover ? ' hover' : '')
    let Container = this.props.type || 'div'

    return (
      <Container
        {...this.props}
        className={className}
        onClick={this.props.onClick}
        onTouchStart={() => this.updateHover(true, true)}
        onTouchEnd={() => this.updateHover(false, true)}
        onTouchCancel={() => this.updateHover(false, true)}
        onMouseEnter={() => this.updateHover(true, false)}
        onMouseMove={() => this.updateHover(true, false)}
        onMouseLeave={() => this.updateHover(false, false)}
      >
        {this.props.children}
      </Container>
    )
  }
}
