import * as React from 'react'

import Header from './Header'
import Footer from './Footer'

export interface AppProps {}
export interface AppState {
  showMenu: boolean,
  theme: string,
}

export class App extends React.Component<AppProps, AppState> {
  constructor(props: any) {
    super(props)

    if (!localStorage['theme'].length)
      localStorage['theme'] = 'light'

    this.state = {
      showMenu: false,
      theme: localStorage['theme'],
    }
  }

  toggleMenu() {
    this.setState({
      showMenu: !this.state.showMenu,
      theme: this.state.theme
    })

    if (this.state.showMenu)
      document.body.classList.remove('no-scroll')
    else
      document.body.classList.add('no-scroll')
  }

  private changeTheme (evt: any) {
    localStorage['theme'] = localStorage['theme'] == 'dark' ? 'light' : 'dark'
    this.setState({
      showMenu: this.state.showMenu,
      theme: localStorage['theme']
    })
  }

  render () {
    return (
      <div className={'app' + (this.state.showMenu ? ' menu-visible' : '') + (this.state.theme === 'dark' ? ' dark-theme' : '')}>
          <Header toggleMenuHandler={this.toggleMenu.bind(this)} toggle={this.state.showMenu} />
          {this.props.children}
          <Footer changeTheme={this.changeTheme.bind(this)} theme={this.state.theme} />
      </div>
    )
  }
}

export default App
