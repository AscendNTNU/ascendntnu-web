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
          <nav className="nav-bar">
            <NavLink
              exact
              onClick={this.toggleMenuHandler}
              className="nav-element"
              activeClassName="active"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              onClick={this.toggleMenuHandler}
              className="nav-element"
              activeClassName="active"
              to="/blog"
            >
              Blog
            </NavLink>
            <NavLink
              onClick={this.toggleMenuHandler}
              className="nav-element"
              activeClassName="active"
              to="/join"
            >
              Join
            </NavLink>
            <NavLink
              onClick={this.toggleMenuHandler}
              className="nav-element"
              activeClassName="active"
              to="/drones"
            >
              Drones
            </NavLink>
            <NavLink
              onClick={this.toggleMenuHandler}
              className="nav-element"
              activeClassName="active"
              to="/team"
            >
              Team
            </NavLink>
            <NavLink
              onClick={this.props.toggleMenuHandler}
              className="nav-element"
              activeClassName="active"
              to="/missions"
            >
              Missions
            </NavLink>
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
