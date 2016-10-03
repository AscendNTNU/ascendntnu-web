import * as React from 'react'

import Header from './Header'
import Content from './Content'

export interface AppProps {}

export class App extends React.Component<AppProps, {}> {
  render () {
    return (
      <div className="app">
        <Header />
        <Content />
      </div>
    )
  }
}

export default App
