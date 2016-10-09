import * as React from 'react'

import Header from './Header'
import Content from './Content'
import Footer from './Footer'

export interface AppProps {}

export class App extends React.Component<AppProps, {}> {
  render () {
    return (
      <div className="app">
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }
}

export default App
