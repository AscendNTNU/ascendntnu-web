import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hoverAbout: false
    }

    this.toggleMenuHandler = this.toggleMenuHandler.bind(this)
  }

  hideMenu () {
    if (this.props.toggle)
      this.props.toggleMenuHandler()
  }

  toggleMenuHandler (evt) {
    this.props.toggleMenuHandler(evt)
    this.setState(Object.assign({}, this.state, {
      hoverAbout: false
    }))
  }

  render() {
    return (
      <div className="head">
        <div className="head-content page-container">
          <NavLink exact onClick={this.hideMenu} to="/">
            <div className="logo-title">
              <img className="logo-img" alt="Logo" src="/images/logo/logo.png" />
              <div className="logo-title-text">
                asc<span className="logo-title-e">e</span>nd
              </div>
            </div>
          </NavLink>
          <div className="toggle-menu" onClick={this.props.toggleMenuHandler}>
            <i className={"fa fa-" + (this.props.toggle ? "times" : "bars")}></i>
          </div>
          <nav className="nav-bar">
            <NavLink exact onClick={this.toggleMenuHandler} className="nav-element" activeClassName="active" to="/">Home</NavLink>
            <NavLink onClick={this.toggleMenuHandler} className="nav-element" activeClassName="active" to="/blog">Blog</NavLink>
            <NavLink onClick={this.toggleMenuHandler} className="nav-element" activeClassName="active" to="/drones">Drones</NavLink>
            <NavLink onClick={this.toggleMenuHandler} className="nav-element" activeClassName="active" to="/join">Join Us</NavLink>
            <NavLink onClick={this.toggleMenuHandler} className="nav-element" activeClassName="active" to="/team">Team</NavLink>
            <div className={`nav-element dropdown ${this.state.hoverAbout ? 'show' : ''}`}
              onClick={() => {this.setState({ hoverAbout: !this.state.hoverAbout })}}>
              <div className="toggle-menu">
                More <i className={`fa fa-${this.state.hoverAbout ? 'caret-up' : 'caret-down'}`}></i>
              </div>
              <div className="toggle-menu-small-screen">
                More <i className={`fa fa-caret-${this.state.hoverAbout ? 'up' : 'down'}`}></i>
              </div>
              <div className="links">
                <NavLink onClick={this.props.toggleMenuHandler} className="nav-element" activeClassName="active" to="/sponsors">Sponsors</NavLink>
                <NavLink onClick={this.props.toggleMenuHandler} className="nav-element" activeClassName="active" to="/missions">Missions</NavLink>
                <NavLink onClick={this.props.toggleMenuHandler} className="nav-element" activeClassName="active" to="/about">About</NavLink>
                <NavLink onClick={this.props.toggleMenuHandler} className="nav-element" activeClassName="active" to="/contact">Contact</NavLink>
              </div>
            </div>
          </nav>
        </div>
      </div>
    )
  }
}

export default Header
