import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import { ToTopButton } from './components/PageLayout'
import FrontPage from './components/FrontPage'
import BlogPage from './components/BlogPage'
import DronePage from './components/DronePage'
import TeamPage from './components/TeamPage'
import JoinPage from './components/JoinPage'
import AboutPage from './components/AboutPage'
import SponsorPage from './components/SponsorPage'
import MissionPage from './components/MissionPage'
import CVPage from './components/CVPage'
import ContactPage from './components/ContactPage'

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

    this.gotoTop = this.gotoTop.bind(this)
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
      localStorage['theme'] = localStorage['theme'] === 'dark' ? 'light' : 'dark'
      this.setState({
        showMenu: this.state.showMenu,
        theme: localStorage['theme']
      })
    } catch (ex) {
      this.setState({
        showMenu: this.state.showMenu,
        theme: this.state.theme === 'dark' ? 'light' : 'dark'
      })
    }
  }

  gotoTop (args) {
    document.querySelector('body').scrollTop = 0
    document.querySelector('#app').scrollTop = 0
  
    const [ first, ...rest ] = args.location.pathname.slice(1) || 'home'
    document.title = 'Ascend NTNU - ' + first.toUpperCase() + rest
  }

  render () {
    return (
      <div className={'app' + (this.state.showMenu ? ' menu-visible' : '') + (this.state.theme === 'dark' ? ' dark-theme' : '')}>
          <Header toggleMenuHandler={this.toggleMenu.bind(this)} toggle={this.state.showMenu} />
          <Switch>
            <Route exact path="/" component={FrontPage} onEnter={this.gotoTop} />
            <Route path="/about" component={AboutPage} onEnter={this.gotoTop} />
            <Route path="/blog" component={BlogPage} onEnter={this.gotoTop} />
            <Route path="/blog/tags/:tags?" component={BlogPage} />
            <Route path="/blog/:post" component={BlogPage} />
            <Route path="/contact" component={ContactPage} onEnter={this.gotoTop} />
            <Route path="/cv/:key?" component={CVPage} onEnter={this.gotoTop} />
            <Route path="/drones" component={DronePage} onEnter={this.gotoTop} />
            <Route path="/join/:language?" component={JoinPage} onEnter={this.gotoTop} />
            <Route path="/missions" component={MissionPage} onEnter={this.gotoTop} />
            <Route path="/sponsors/:year?" component={SponsorPage} onEnter={this.gotoTop} />
            <Route path="/team/:year?" component={TeamPage} onEnter={this.gotoTop} />
          </Switch>
          <ToTopButton />
          <Footer changeTheme={this.changeTheme.bind(this)} theme={this.state.theme} />
      </div>
    )
  }
}

export default App
