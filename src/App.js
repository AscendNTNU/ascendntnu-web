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
    console.log("Changing")
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
              this.gotoTop()
              console.log("testing")
              return <FrontPage {...props}/>
            }} 
          />
          <Route 
            path="/about" 
            render={(props) => {
              this.gotoTop()
              console.log("testing")
              return <AboutPage {...props}/>
            }} 
          />
          <Route 
            path="/blog" 
            render={(props) => {
              this.gotoTop()
              console.log("testing")
              return <BlogPage {...props}/>
            }} 
          />
          <Route 
            path="/blog/tags/:tags?" 
            render={(props) => {
              this.gotoTop()
              console.log("testing")
              return <BlogPage {...props}/>
            }} 
          />
          <Route 
            path="/blog/:post" 
            render={(props) => {
              this.gotoTop()
              console.log("testing")
              return <BlogPage {...props}/>
            }}
          />
          <Route
            path="/contact"
            render={(props) => {
              this.gotoTop()
              console.log("testing")
              return <ContactPage {...props}/>
            }}
          />
          <Route 
            path="/cv/:key?" 
            render={(props) => {
              this.gotoTop()
              console.log("testing")
              return <CVPage {...props}/>
            }} 
          />
          <Route 
            path="/drones"
            render={(props) => {
              this.gotoTop()
              console.log("testing")
              return <DronePage {...props}/>
            }} 
          />
          <Route
            path="/join/:language?"
            //component={JoinPage}
            render={(props) => {
              this.gotoTop()
              console.log("testing")
              return <JoinPage {...props}/>
            }}
          />
          <Route
            path="/missions"
            render={(props) => {
              this.gotoTop()
              console.log("testing")
              return <MissionPage {...props}/>
            }}
          />
          <Route
            path="/sponsors/:year?"
            render={(props) => {
              this.gotoTop()
              console.log("testing")
              return <SponsorPage {...props}/>
            }}
          />
          <Route
            path="/team/:year?"
            render={(props) => {
              this.gotoTop()
              console.log("testing")
              return <TeamPage {...props}/>
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
