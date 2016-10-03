import * as React from 'react'

export interface AppProps {}

export class App extends React.Component<AppProps, {}> {
  render () {
    return (
      <div>
        <img src="images/logo-ascend-below.svg" />
        <pre>Welcome to AscendNTNU!</pre>
      </div>
    )
  }
}

export default App
