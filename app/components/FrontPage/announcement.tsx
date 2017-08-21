import * as React from 'react'

export interface AnnouncementProps {
  titleText: string | JSX.Element,
  link?: string | JSX.Element,
}
export interface AnnouncementState {
  hidden: boolean,
}

export class Announcement extends React.Component<AnnouncementProps, AnnouncementState> {

  constructor (props: any) {
    super(props)
    this.state = {
      hidden: false,
    }
  }

  removeAnnouncement (evt: any) {
    this.setState(Object.assign({}, this.state, { hidden: true }))
  }

  render () {
    let link: JSX.Element
    if (typeof this.props.link === 'string') {
      link = <a href={this.props.link} />
    } else {
      link = this.props.link
    }

    return (
      <div className={ `front-announcement ${this.state.hidden ? 'hidden' : ''}` } onClick={this.removeAnnouncement.bind(this)}>
        <h1>{this.props.titleText}</h1>
        <div className="front-announcement-content page-container-big">{this.props.children}</div>
        {link}
      </div>
    )
  }
}

export default Announcement
