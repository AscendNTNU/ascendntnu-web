import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hoverAbout: false,
    }

    this.toggleMenuHandler = this.toggleMenuHandler.bind(this)
  }

  hideMenu() {
    if (this.props.toggle) this.props.toggleMenuHandler()
  }

  toggleMenuHandler(evt) {
    this.props.toggleMenuHandler(evt)
    this.setState(
      Object.assign({}, this.state, {
        hoverAbout: false,
      })
    )
  }

  render() {
    return (
      <div className="head">
        <div className="head-content page-container">
          <NavLink exact onClick={this.hideMenu} to="/">
            <div className="logo-title">
              {/* logo on top left header */}
              <img
                className="logo-img"
                alt="Logo"
                src="/images/logo/logo.png"
              />
              <div className="logo-title-text">
                asc<span className="logo-title-e">e</span>nd
              </div>
            </div>
          </NavLink>
          <div className="toggle-menu" onClick={this.props.toggleMenuHandler}>
            <i className={'fa fa-' + (this.props.toggle ? 'times' : 'bars')} />
          </div>
          {/* Linkt to different pagees */}
          <nav className="nav-bar">
            {/* Home */}
            <NavLink
              exact
              onClick={this.toggleMenuHandler}
              className="nav-element"
              activeClassName="active"
              to="/"
            >
              Home
            </NavLink>
            {/* Join */}
            <NavLink
              onClick={this.toggleMenuHandler}
              className="nav-element"
              /* To remove, change to false */
              activeClassName="active"
              /* linke to page /"name" */
              to="/join"
            >
              Join
            </NavLink>
            {/* Drones */}
            <NavLink
              onClick={this.toggleMenuHandler}
              className="nav-element"
              activeClassName="active"
              to="/drones"
            >
              Drones
            </NavLink>
            {/* team */}
            <NavLink
              onClick={this.toggleMenuHandler}
              className="nav-element"
              activeClassName="active"
              to="/team"
            >
              Team
            </NavLink>
            {/* Missions */}
            <NavLink
              onClick={this.props.toggleMenuHandler}
              className="nav-element"
              activeClassName="active"
              to="/missions"
            >
              Competitions
            </NavLink>
            {/* Contact */}
            <NavLink
              onClick={this.props.toggleMenuHandler}
              className="nav-element"
              activeClassName="active"
              to="/contact"
            >
              Contact
            </NavLink>
          </nav>
        </div>
      </div>
    )
  }
}

export default Header
