import * as React from 'react'

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

    if (this.props.title) {
      this.title = (
        <Title>{this.props.title}</Title>
      )
    }

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

    if (this.props.title) {
      this.title = (
        <SubTitle>{this.props.title}</SubTitle>
      )
    }

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
    return (
      <div className={this.className}>
        {this.title}
        {this.props.children}
      </div>
    )
  }
}
