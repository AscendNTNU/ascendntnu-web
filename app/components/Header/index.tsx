import * as React from 'react'

export interface HeaderProps {}

export class Header extends React.Component<HeaderProps, {}> {
  render () {
    return (
      <div className="head">
        <div className="logo-title">
          <img className="logo-img" src="images/logo/logo.png" />
          <div className="logo-title-text">
            asc<span className="logo-title-e">e</span>nd
          </div>
        </div>
      </div>
    )
  }
}

export default Header
