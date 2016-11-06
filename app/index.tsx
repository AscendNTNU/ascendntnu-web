import * as React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, browserHistory, IndexRoute } from 'react-router'

import App from './components/App'

import FrontPage from './components/FrontPage'
import BlogPage from './components/BlogPage'
import DronePage from './components/DronePage'
import TeamPage from './components/TeamPage'
import JoinPage from './components/JoinPage'
import AboutPage from './components/AboutPage'
import SponsorPage from './components/SponsorPage'

let gotoTop = () => {
  document.querySelector('body').scrollTop = 0
  document.querySelector('#app').scrollTop = 0
}

render (
  <Router onUpdate={gotoTop} history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={FrontPage} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/blog/:post" component={BlogPage} />
      <Route path="/drones" component={DronePage} />
      <Route path="/team" component={TeamPage} />
      <Route path="/team/:year" component={TeamPage} />
      <Route path="/join" component={JoinPage} />
      <Route path="/sponsors" component={SponsorPage} />
      <Route path="/sponsors/:year" component={SponsorPage} />
      <Route path="/about" component={AboutPage} />
    </Route>
  </Router>,
  document.querySelector('#app')
)
