import * as React from 'react'

export class Title extends React.Component<{}, {}> {
  render() {
    return (
      <h2 className="section-title">{this.props.children}</h2>
    )
  }
}

export interface SectionProps {
  title?: string,
  theme?: string
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

    this.className = "section"

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

export interface SubSectionProps {}

export class SubSection extends React.Component<SubSectionProps, {}> {
  render() {
    return (
      <div className="sub-section">
        {this.props.children}
      </div>
    )
  }
}
