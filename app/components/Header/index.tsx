import * as React from 'react'

export interface HeaderProps {}

export class Header extends React.Component<HeaderProps, {}> {
  render () {
    return (
      <div className="head">
        <div className="logo-title">Ascend NTNU!!!!</div>
      </div>
    )
  }
}

export default Header
