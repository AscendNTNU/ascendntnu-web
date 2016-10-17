import * as React from 'react'

import Header from './Header'
import Footer from './Footer'

export interface AppProps {}
export interface AppState {
  showMenu: boolean,
}

export class App extends React.Component<AppProps, AppState> {
  constructor(props: any) {
    super(props)
    this.state = {
      showMenu: false
    }
  }

  toggleMenu() {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  render () {
    return (
      <div className={"app" + (this.state.showMenu ? " menu-visible" : "")}>
          <Header toggleMenuHandler={this.toggleMenu.bind(this)} toggle={this.state.showMenu} />
          {this.props.children}
          <Footer />
      </div>
    )
  }
}

export default App
