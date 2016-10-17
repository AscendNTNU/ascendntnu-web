import * as React from 'react'
import { Link, IndexLink } from 'react-router'

export interface HeaderProps {
  toggleMenuHandler: any,
  toggle: boolean,
}

export class Header extends React.Component<HeaderProps, {}> {
  render() {
    return (
      <div className="head">
        <div className="head-content page-container">
          <Link to="/">
            <div className="logo-title">
              <img className="logo-img" src="images/logo/logo.png" />
              <div className="logo-title-text">
                asc<span className="logo-title-e">e</span>nd
              </div>
            </div>
          </Link>
          <div className="toggle-menu" onClick={this.props.toggleMenuHandler}>
            <i className={"fa fa-" + (this.props.toggle ? "times" : "bars")}></i>
          </div>
          <nav className="nav-bar">
            <IndexLink onClick={this.props.toggleMenuHandler} className="nav-element" activeClassName="active" to="/">Home</IndexLink>
            <Link onClick={this.props.toggleMenuHandler} className="nav-element" activeClassName="active" to="/blog">Blog</Link>
            <Link onClick={this.props.toggleMenuHandler} className="nav-element" activeClassName="active" to="/drones">Drones</Link>
            <Link onClick={this.props.toggleMenuHandler} className="nav-element" activeClassName="active" to="/team">Team</Link>
            <Link onClick={this.props.toggleMenuHandler} className="nav-element" activeClassName="active" to="/join">Join Us</Link>
            <Link onClick={this.props.toggleMenuHandler} className="nav-element" activeClassName="active" to="/about">About</Link>
          </nav>
        </div>
      </div>
    )
  }
}

export default Header
