import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import App from './App';

import FrontPage from './components/FrontPage';
import BlogPage from './components/BlogPage';
import DronePage from './components/DronePage';
import TeamPage from './components/TeamPage';
import JoinPage from './components/JoinPage';
import AboutPage from './components/AboutPage';
import SponsorPage from './components/SponsorPage';
import MissionPage from './components/MissionPage';
import CVPage from './components/CVPage';
import ContactPage from './components/ContactPage';

let gotoTop = (args) => {
  document.querySelector('body').scrollTop = 0;
  document.querySelector('#app').scrollTop = 0;

  const [ first, ...rest ] = args.location.pathname.slice(1) || 'home';
  document.title = 'Ascend NTNU - ' + first.toUpperCase() + rest;
}

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={App}>
      <Route exact component={FrontPage} onEnter={gotoTop} />
      <Route path="/about" component={AboutPage} onEnter={gotoTop} />
      <Route path="/blog" component={BlogPage} onEnter={gotoTop} />
      <Route path="/blog/tags(/:tags)" component={BlogPage} />
      <Route path="/blog/:post" component={BlogPage} />
      <Route path="/contact" component={ContactPage} onEnter={gotoTop} />
      <Route path="/cv(/:key)" component={CVPage} onEnter={gotoTop} />
      <Route path="/drones" component={DronePage} onEnter={gotoTop} />
      <Route path="/join(/:language)" component={JoinPage} onEnter={gotoTop} />
      <Route path="/missions" component={MissionPage} onEnter={gotoTop} />
      <Route path="/sponsors" component={SponsorPage} onEnter={gotoTop} />
      <Route path="/sponsors/:year" component={SponsorPage} />
      <Route path="/team" component={TeamPage} onEnter={gotoTop} />
      <Route path="/team/:year" component={TeamPage} />
    </Route>
  </BrowserRouter>,
  document.querySelector('#app')
);
registerServiceWorker();
