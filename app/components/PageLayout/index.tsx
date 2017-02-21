import * as React from 'react'

import { AddHover } from '../Common/eventHandler'

export class Title extends React.Component<{}, {}> {
  render() {
    return (
      <h1 className="section-title">{this.props.children}</h1>
    )
  }
}

export class SubTitle extends React.Component<{}, {}> {
  render() {
    return (
      <h2 className="sub-section-title">{this.props.children}</h2>
    )
  }
}

export class SubSubTitle extends React.Component<{}, {}> {
  render() {
    return (
      <h3 className="sub-sub-section-title">{this.props.children}</h3>
    )
  }
}

export interface SectionProps {
  title?: string,
  theme?: string,
  className?: string,
}

export class Section extends React.Component<SectionProps, {}> {
  public title: JSX.Element
  public className: string

  constructor(props: SectionProps) {
    super(props)

    this.className = "section page-container"

    if (this.props.className)
      this.className += " " + this.props.className

    if (this.props.theme) {
      let theme: string = ""

      switch (this.props.theme) {
        case "dark":
          theme = "dark"
          break
        default:
          theme = "light"
          break
      }

      this.className += " " + theme
    }
  }

  render() {
    if (this.props.title) {
      this.title = (
        <Title>{this.props.title}</Title>
      )
    }

    return (
      <div className={this.className}>
        {this.title}
        {this.props.children}
      </div>
    )
  }
}

export interface SubSectionProps {
  title?: string,
  theme?: string,
  className?: string,
}

export class SubSection extends React.Component<SubSectionProps, {}> {
  public title: JSX.Element
  public className: string

  constructor(props: SectionProps) {
    super(props)

    this.className = "sub-section page-container"

    if (this.props.className)
      this.className += " " + this.props.className

    if (this.props.theme) {
      let theme: string = ""

      switch (this.props.theme) {
        case "dark":
          theme = "dark"
          break
        default:
          theme = "light"
          break
      }
    }
  }

  render() {
    if (this.props.title) {
      this.title = (
        <SubTitle>{this.props.title}</SubTitle>
      )
    }

    return (
      <div className={this.className}>
        {this.title}
        {this.props.children}
      </div>
    )
  }
}

export interface SubSubSectionProps {
  title?: string,
  theme?: string,
  className?: string,
}

export class SubSubSection extends React.Component<SubSubSectionProps, {}> {
  public title: JSX.Element
  public className: string

  constructor(props: SectionProps) {
    super(props)

    this.className = "sub-sub-section page-container"

    if (this.props.className)
      this.className += " " + this.props.className

    if (this.props.theme) {
      let theme: string = ""

      switch (this.props.theme) {
        case "dark":
          theme = "dark"
          break
        default:
          theme = "light"
          break
      }
    }
  }

  render() {
    if (this.props.title) {
      this.title = (
        <SubSubTitle>{this.props.title}</SubSubTitle>
      )
    }

    return (
      <div className={this.className}>
        {this.title}
        {this.props.children}
      </div>
    )
  }
}

interface ToTopButtonState {
  onTop: boolean
}

export class ToTopButton extends React.Component<any, ToTopButtonState> {

  constructor (props: any) {
    super(props)

    this.state = {
      onTop: true
    }

    document.querySelector('#app').addEventListener('scroll', this.scrollHandler.bind(this))
    document.querySelector('#app').addEventListener('touchmove', this.scrollHandler.bind(this))
    document.querySelector('#app').addEventListener('touchend', this.scrollHandler.bind(this))
  }

  scrollHandler (evt: any) {
    let app: any = document.querySelector('#app')
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

  clickHandler (evt: any) {
    let app: any = document.querySelector('#app')
    let startScroll: number = (app.scrollTop || document.body.scrollTop)
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
