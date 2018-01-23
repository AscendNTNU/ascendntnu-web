import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

export class Breadcrumb extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let links = []
    let last = null

    if (this.props.routes) {
      let build = ''
      links = this.props.routes.slice(0, -1).map((b, i) => {
        build += '/' + b
        return (<Link key={i} to={build}>{b}</Link>)
      })
      last = (<span>{this.props.routes.slice(-1)[0]}</span>)
    }

    return (
      <div className="page-container flex no-grow">
        <div className="breadcrumb-container">
          <NavLink exact to="/">Home</NavLink>
          {links}
          {last}
        </div>
      </div>
    )
  }
}
