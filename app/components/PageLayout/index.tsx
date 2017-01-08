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

export class ToTopButton extends React.Component<any, void> {

  clickHandler (evt: any) {
    document.querySelector('body').scrollTop = 0
  }

  render () {
    return (
      <AddHover type="div" className="totop-button" onClick={this.clickHandler.bind(this)}>
        <svg viewBox="0 0 64 64">
          <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" d="M 16 38 L 32 25 L 48 38" />
        </svg>
      </AddHover>
    )
  }
}
