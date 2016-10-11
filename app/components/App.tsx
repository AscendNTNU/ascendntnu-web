import * as React from 'react'

import Header from './Header'
import Footer from './Footer'

export interface AppProps {}

export class App extends React.Component<AppProps, {}> {
  render () {
    return (
      <div className="app">
          <Header />
          {this.props.children}
          <Footer />
      </div>
    )
  }
}

export default App
