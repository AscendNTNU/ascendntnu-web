import * as React from 'react'

import Header from './Header'
import Footer from './Footer'

export interface AppProps {}
export interface AppState {
  showMenu: boolean,
}

export class App extends React.Component<AppProps, AppState> {
  isChomeMobile: boolean
  userAgent: any

  constructor(props: any) {
    super(props)
    this.state = {
      showMenu: false
    }

    this.userAgent = navigator.userAgent
    this.isChomeMobile = this.userAgent.match('CriOS')
  }

  toggleMenu() {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  render () {
    return (
      <div className={"app" + (this.state.showMenu ? " menu-visible" : "") + (this.isChomeMobile ? " is-chrome-mobile" : "")}>
          <Header toggleMenuHandler={this.toggleMenu.bind(this)} toggle={this.state.showMenu} />
          {this.props.children}
          <Footer />
      </div>
    )
  }
}

export default App
