import * as React from 'react'
import { Link, IndexLink } from 'react-router'

export interface HeaderProps {}

export class Header extends React.Component<HeaderProps, {}> {
  render () {
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
          <nav className="nav-bar">
            <IndexLink className="nav-element" activeClassName="active" to="/">Home</IndexLink>
            <Link className="nav-element" activeClassName="active" to="/blog">Blog</Link>
            <Link className="nav-element" activeClassName="active" to="/drones">Drones</Link>
            <Link className="nav-element" activeClassName="active" to="/team">Team</Link>
            <Link className="nav-element" activeClassName="active" to="/join">Join Us</Link>
            <Link className="nav-element" activeClassName="active" to="/about">About</Link>
          </nav>
        </div>
      </div>
    )
  }
}

export default Header
