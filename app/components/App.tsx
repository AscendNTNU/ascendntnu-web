import * as React from 'react'

import Header from './Header'
import Footer from './Footer'
import { ToTopButton } from './PageLayout'

export interface AppProps {}
export interface AppState {
  showMenu: boolean,
  theme: string,
}

export class App extends React.Component<AppProps, AppState> {
  constructor(props: any) {
    super(props)

    try {
      if (!localStorage['theme'] || !localStorage['theme'].length)
        localStorage['theme'] = 'dark'

      this.state = {
        showMenu: false,
        theme: localStorage['theme'],
      }
    } catch (ex) {
      this.state = {
        showMenu: false,
        theme: 'dark',
      }
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
    try {
      localStorage['theme'] = localStorage['theme'] == 'dark' ? 'light' : 'dark'
      this.setState({
        showMenu: this.state.showMenu,
        theme: localStorage['theme']
      })
    } catch (ex) {
      this.setState({
        showMenu: this.state.showMenu,
        theme: this.state.theme == 'dark' ? 'light' : 'dark'
      })
    }
  }

  render () {
    return (
      <div className={'app' + (this.state.showMenu ? ' menu-visible' : '') + (this.state.theme === 'dark' ? ' dark-theme' : '')}>
          <Header toggleMenuHandler={this.toggleMenu.bind(this)} toggle={this.state.showMenu} />
          {this.props.children}
          <ToTopButton />
          <Footer changeTheme={this.changeTheme.bind(this)} theme={this.state.theme} />
      </div>
    )
  }
}

export default App
