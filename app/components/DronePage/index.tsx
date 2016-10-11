import * as React from 'react'

export interface DronePageProps {}

export class DronePage extends React.Component<DronePageProps, {}> {
  render () {
    return (
      <div className="page page-drone">
        <h2>Drone page.</h2>
      </div>
    )
  }
}

export default DronePage
