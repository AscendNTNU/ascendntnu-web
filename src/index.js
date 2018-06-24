import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import ReactGA from 'react-ga'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

import App from './App'

ReactGA.initialize("UA-113307510-1")
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#app')
)
registerServiceWorker()
