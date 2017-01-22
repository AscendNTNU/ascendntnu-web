import * as React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, browserHistory, IndexRoute, useRouterHistory } from 'react-router'
//import { createHistory } from 'history'

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

//const browserHistory = useRouterHistory(createHistory)({ basename: '/' })

render (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={FrontPage} onEnter={gotoTop} />
      <Route path="/blog" component={BlogPage} onEnter={gotoTop} />
      <Route path="/blog/tags(/:tags)" component={BlogPage} />
      <Route path="/blog/:post" component={BlogPage} />
      <Route path="/drones" component={DronePage} onEnter={gotoTop} />
      <Route path="/team" component={TeamPage} onEnter={gotoTop} />
      <Route path="/team/:year" component={TeamPage} />
      <Route path="/join" component={JoinPage} onEnter={gotoTop} />
      <Route path="/sponsors" component={SponsorPage} onEnter={gotoTop} />
      <Route path="/sponsors/:year" component={SponsorPage} />
      <Route path="/about" component={AboutPage} onEnter={gotoTop} />
    </Route>
  </Router>,
  document.querySelector('#app')
)
