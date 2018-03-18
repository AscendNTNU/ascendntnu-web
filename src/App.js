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

    //const [first, ...rest] = args.location.pathname.slice(1) || 'home'
    //document.title = 'Ascend NTNU - ' + first.toUpperCase() + rest
  }

  // Switches page and goes to top on the new page
  switchPage(props, Component) {
    this.gotoTop()
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
            render={(props) => {
              return this.switchPage(props, FrontPage)
            }} 
          />
          <Route 
            path="/about" 
            render={(props) => {
              return this.switchPage(props, AboutPage)
            }} 
          />
          <Route 
            path="/blog" 
            render={(props) => {
              return this.switchPage(props, BlogPage)
            }} 
          />
          <Route 
            path="/blog/tags/:tags?" 
            render={(props) => {
              return this.switchPage(props, BlogPage)
            }} 
          />
          <Route 
            path="/blog/:post" 
            render={(props) => {
              return this.switchPage(props, BlogPage)
            }}
          />
          <Route
            path="/contact"
            render={(props) => {
              return this.switchPage(props, ContactPage)
            }}
          />
          <Route 
            path="/cv/:key?" 
            render={(props) => {
              return this.switchPage(props, CVPage)
            }} 
          />
          <Route 
            path="/drones"
            render={(props) => {
              return this.switchPage(props, DronePage)
            }} 
          />
          <Route
            path="/join/:language?"
            //component={JoinPage}
            render={(props) => {
              return this.switchPage(props, JoinPage)
            }}
          />
          <Route
            path="/missions"
            render={(props) => {
              return this.switchPage(props, MissionPage)
            }}
          />
          <Route
            path="/sponsors/:year?"
            render={(props) => {
              return this.switchPage(props, SponsorPage)
            }}
          />
          <Route
            path="/team/:year?"
            render={(props) => {
              return this.switchPage(props, TeamPage)
            }}
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
