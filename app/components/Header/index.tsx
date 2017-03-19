import * as React from 'react'
import { Link, IndexLink } from 'react-router'

export interface HeaderProps {
  toggleMenuHandler: any,
  toggle: boolean,
}

export interface HeaderState {
  hoverAbout: boolean
}

export class Header extends React.Component<HeaderProps, HeaderState> {
  constructor (props: HeaderProps) {
    super(props)
    this.state = {
      hoverAbout: false
    }
  }

  private hideMenu () {
    if (this.props.toggle)
      this.props.toggleMenuHandler
  }

  render() {
    return (
      <div className="head">
        <div className="head-content page-container">
          <IndexLink onClick={this.hideMenu} to="/">
            <div className="logo-title">
              <img className="logo-img" src="/images/logo/logo.png" />
              <div className="logo-title-text">
                asc<span className="logo-title-e">e</span>nd
              </div>
            </div>
          </IndexLink>
          <div className="toggle-menu" onClick={this.props.toggleMenuHandler}>
            <i className={"fa fa-" + (this.props.toggle ? "times" : "bars")}></i>
          </div>
          <nav className="nav-bar">
            <IndexLink onClick={this.props.toggleMenuHandler} className="nav-element" activeClassName="active" to="/">Home</IndexLink>
            <Link onClick={this.props.toggleMenuHandler} className="nav-element" activeClassName="active" to="/blog">Blog</Link>
            <Link onClick={this.props.toggleMenuHandler} className="nav-element" activeClassName="active" to="/drones">Drones</Link>
            <Link onClick={this.props.toggleMenuHandler} className="nav-element" activeClassName="active" to="/join">Join Us</Link>
            <Link onClick={this.props.toggleMenuHandler} className="nav-element" activeClassName="active" to="/sponsors">Sponsors</Link>
            <div className={`nav-element dropdown ${this.state.hoverAbout ? 'show' : ''}`}
              onClick={() => {this.setState({ hoverAbout: !this.state.hoverAbout })}}>
              <div className="toggle-menu">
                <i className={`fa fa-${this.state.hoverAbout ? 'times' : 'bars'}`}></i>
              </div>
              <div className="toggle-menu-small-screen">
                More <i className={`fa fa-caret-${this.state.hoverAbout ? 'up' : 'down'}`}></i>
              </div>
              <div className="links">
                <Link onClick={this.props.toggleMenuHandler} className="nav-element" activeClassName="active" to="/about">About</Link>
                <Link onClick={this.props.toggleMenuHandler} className="nav-element" activeClassName="active" to="/missions">Missions</Link>
                <Link onClick={this.props.toggleMenuHandler} className="nav-element" activeClassName="active" to="/teams">Teams</Link>
                <Link onClick={this.props.toggleMenuHandler} className="nav-element" activeClassName="active" to="/contact">Contact</Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    )
  }
}

export default Header
