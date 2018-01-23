import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { ToTopButton } from './components/PageLayout'

export class App extends Component {
  constructor(props) {
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

  changeTheme (evt) {
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
