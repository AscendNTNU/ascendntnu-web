import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import {
  Header,
  Footer,
  ToTopButton,
  FrontPage,
  BlogPage,
  DronePage,
  TeamPage,
  JoinPage,
  AboutPage,
  SponsorPage,
  MissionPage,
  CVPage,
  ContactPage,
} from './components'

import QuotePage from './components/QuotePage'
console.log(process)

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
      theme: this.state.theme,
    })

    if (this.state.showMenu) document.body.classList.remove('no-scroll')
    else document.body.classList.add('no-scroll')
  }

  changeTheme(evt) {
    try {
      localStorage['theme'] =
        localStorage['theme'] === 'dark' ? 'light' : 'dark'
      this.setState({
        showMenu: this.state.showMenu,
        theme: localStorage['theme'],
      })
    } catch (ex) {
      this.setState({
        showMenu: this.state.showMenu,
        theme: this.state.theme === 'dark' ? 'light' : 'dark',
      })
    }
  }

  gotoTop(args) {
    document.querySelector('body').scrollTop = 0
    document.querySelector('#app').scrollTop = 0
  }

  // Switches page and goes to top on the new page
  switchPage(props, Component, title = '') {
    this.gotoTop()
    document.title = 'Ascend NTNU' + (title ? ' - ' + title : '');
    return <Component {...props} />
  }

  render() {
    return (
      <div
        className={
          'app' +
          (this.state.showMenu ? ' menu-visible' : '') +
          (this.state.theme === 'dark' ? ' dark-theme' : '')
        }
      >
        <Header
          toggleMenuHandler={this.toggleMenu.bind(this)}
          toggle={this.state.showMenu}
        />
        <Switch>
          <Route exact path="/" 
            render={(props) => this.switchPage(props, FrontPage)} 
          />
          <Route 
            path="/about" 
            render={(props) => this.switchPage(props, AboutPage, 'About us')} 
          />
          <Route 
            exact path="/blog" 
            render={(props) => this.switchPage(props, BlogPage, 'Blog')} 
          />
          <Route 
            path="/about" 
            render={(props) => this.switchPage(props, AboutPage, 'About us')} 
          />
          <Route 
            exact path="/blog" 
            render={(props) => this.switchPage(props, BlogPage, 'Blog')} 
          />
          <Route 
            path="/blog/tags/:tags?" 
            render={(props) => this.switchPage(props, BlogPage, 'Blog')} 
          />
          <Route 
            exact path="/blog" 
            render={(props) => this.switchPage(props, BlogPage, 'Blog')} 
          />
          <Route 
            path="/blog/tags/:tags?" 
            render={(props) => this.switchPage(props, BlogPage, 'Blog')} 
          />
          <Route 
            exact path="/blog" 
            render={(props) => this.switchPage(props, BlogPage, 'Blog')} 
          />
          <Route 
            path="/blog/tags/:tags?" 
            render={(props) => this.switchPage(props, BlogPage, 'Blog')} 
          />
          <Route 
            exact path="/blog" 
            render={(props) => this.switchPage(props, BlogPage, 'Blog')} 
          />
          <Route 
            path="/blog/tags/:tags?" 
            render={(props) => this.switchPage(props, BlogPage, 'Blog')} 
          />
          <Route 
            exact path="/blog" 
            render={(props) => this.switchPage(props, BlogPage, 'Blog')} 
          />
          <Route 
            path="/blog/tags/:tags?" 
            render={(props) => this.switchPage(props, BlogPage, 'Blog')} 
          />
          <Route 
            path="/blog/:post" 
            render={(props) => this.switchPage(props, BlogPage, 'Blog')}
          />
          <Route
            path="/contact"
            render={(props) => this.switchPage(props, ContactPage, 'Contact us')}
          />
          <Route 
            path="/cv/:key?" 
            render={(props) => this.switchPage(props, CVPage, 'CV')} 
          />
          <Route 
            path="/drones"
            render={(props) => this.switchPage(props, DronePage, 'Drones')} 
          />

          <Route
            path="/quotes"
            render={(props) => this.switchPage(props, QuotePage, 'Quotes')}
          />
          <Route
            path="/missions"
            render={(props) => this.switchPage(props, MissionPage, 'Missions')}
          />
          <Route
            path="/sponsors/:year?"
            render={(props) => this.switchPage(props, SponsorPage, 'Sponsors')}
          />
          <Route
            path="/team/:year?"
            render={(props) => this.switchPage(props, TeamPage, 'Team')}
          />
        </Switch>
        <ToTopButton />
        <Footer
          changeTheme={this.changeTheme.bind(this)}
          theme={this.state.theme}
        />
      </div>
    )
  }
}

export default App
