import React, { Component } from 'react'

export class Announcement extends Component {

  constructor (props) {
    super(props)
    this.state = {
      hidden: false,
    }
  }

  removeAnnouncement (evt) {
    this.setState(Object.assign({}, this.state, { hidden: true }))
  }

  render () {
    let link = null
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
