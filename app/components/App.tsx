import * as React from 'react'

export interface AppProps {}

export class App extends React.Component<AppProps, {}> {
  render () {
    return (
      <div>
        <h3>Welcome to AscendNTNU!</h3>
        <img src="images/logo-ascend-below.svg" />
      </div>
    )
  }
}

export default App
