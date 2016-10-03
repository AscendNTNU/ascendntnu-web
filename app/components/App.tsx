import * as React from 'react'

export interface AppProps {}

export class App extends React.Component<AppProps, {}> {
  render () {
    return (
      <div>
        <img src="images/logo-ascend-below.svg" />
        <pre>React is up and working. Welcome to AscendNTNU btw.</pre>
      </div>
    )
  }
}

export default App
