import React, { Component } from 'react'

import { AddHover } from '../Common/eventHandler'

export class Title extends Component {
  render() {
    return (
      <h1 className="section-title">{this.props.children}</h1>
    )
  }
}

export class SubTitle extends Component {
  render() {
    return (
      <h2 className="sub-section-title">{this.props.children}</h2>
    )
  }
}

export class SubSubTitle extends Component {
  render() {
    return (
      <h3 className="sub-sub-section-title">{this.props.children}</h3>
    )
  }
}

export class Section extends Component {
  constructor(props) {
    super(props)

    this.className = 'section page-container'

    if (this.props.className)
      this.className += ' ' + this.props.className

    if (this.props.theme) {
      let theme = ''

      switch (this.props.theme) {
        case 'dark':
          theme = 'dark'
          break
        default:
          theme = 'light'
          break
      }

      this.className += ' ' + theme
    }
  }

  render() {
    if (this.props.titleText) {
      this.title = (
        <Title>{this.props.titleText}</Title>
      )
    }

    let props = Object.assign({}, this.props)
    delete props.titleText

    return (
      <div {...props} className={this.className}>
        {this.title}
        {this.props.children}
      </div>
    )
  }
}

export class SubSection extends Component {
  constructor(props) {
    super(props)

    this.className = 'sub-section page-container'

    if (this.props.className)
      this.className += ' ' + this.props.className

    if (this.props.theme) {
      //let theme = ''

      switch (this.props.theme) {
        case 'dark':
          //theme = 'dark'
          break
        default:
          //theme = 'light'
          break
      }
    }
  }

  render() {
    if (this.props.titleText) {
      this.title = (
        <SubTitle>{this.props.titleText}</SubTitle>
      )
    }

    let props = Object.assign({}, this.props)
    delete props.titleText

    return (
      <div {...props} className={this.className}>
        {this.title}
        {this.props.children}
      </div>
    )
  }
}

export class SubSubSection extends Component {
  constructor(props) {
    super(props)

    this.className = 'sub-sub-section page-container'

    if (this.props.className)
      this.className += ' ' + this.props.className

    if (this.props.theme) {
      //let theme = ''

      switch (this.props.theme) {
        case 'dark':
          //theme = 'dark'
          break
        default:
          //theme = 'light'
          break
      }
    }
  }

  render() {
    if (this.props.titleText) {
      this.title = (
        <SubSubTitle>{this.props.titleText}</SubSubTitle>
      )
    }

    let props = Object.assign({}, this.props)
    delete props.titleText

    return (
      <div {...props} className={this.className}>
        {this.title}
        {this.props.children}
      </div>
    )
  }
}

export class ToTopButton extends Component {
  constructor (props) {
    super(props)

    this.state = {
      onTop: true
    }

    document.querySelector('#app').addEventListener('scroll', this.scrollHandler.bind(this))
    document.querySelector('#app').addEventListener('touchmove', this.scrollHandler.bind(this))
    document.querySelector('#app').addEventListener('touchend', this.scrollHandler.bind(this))
  }

  scrollHandler (evt) {
    let app = document.querySelector('#app')
    if ((app.scrollTop || document.body.scrollTop) > 100 && this.state.onTop) {
      this.setState({
        onTop: false
      })
    } else if ((app.scrollTop || document.body.scrollTop) <= 100 && !this.state.onTop) {
      this.setState({
        onTop: true
      })
    }
  }

  clickHandler (evt) {
    let app = document.querySelector('#app')
    let startScroll = (app.scrollTop || document.body.scrollTop)
    let interval = setInterval(() => {
      app.scrollTop -= 10 / (.1 + Math.pow(app.scrollTop / startScroll - .5, 2))
      document.body.scrollTop -= 10 / (.1 + Math.pow(document.body.scrollTop / startScroll - .5, 2))
      if ((app.scrollTop || document.body.scrollTop) <= 0) {
        clearInterval(interval)
        this.setState({
          onTop: true
        })
      }
    }, 10)
  }

  render () {
    return (
      <AddHover type="div" className={'totop-button' + (this.state.onTop ? ' on-top' : '')} onClick={this.clickHandler.bind(this)}>
        <svg viewBox="0 0 64 64">
          <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" d="M 16 38 L 32 25 L 48 38" />
        </svg>
      </AddHover>
    )
  }
}
