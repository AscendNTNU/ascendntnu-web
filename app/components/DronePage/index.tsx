import * as React from 'react'

import { Section, SubSection } from '../PageLayout'
import { Breadcrumb } from '../Common/breadcrumb'
import { ModelRenderer } from '../Common/model'

export interface DronePageProps {}
export interface DronePageState {
  droneImages: any
}

export class DronePage extends React.Component<DronePageProps, DronePageState> {
  drones: any[]
  constructor () {
    super()

    this.drones = [
      {
        style: {
          backgroundImage: 'url(/images/drones/drone1-flying-minimized.jpg)'
        }
      },
      {
        models: ['images/drones/drone2.stl', 'images/drones/propell.stl'],
        style: {
          backgroundImage: 'url(/images/drones/drone2-minimized.jpg)'
        }
      }
    ]

    this.state = {
      droneImages: [
        (<div className="drone-image" style={this.drones[0].style}></div>),
        (<div className="drone-model"><ModelRenderer models={this.drones[1].models} process={[-80, 160, 160]} /></div>)
      ]
    }
  }

  render () {
    return (
      <div className="page page-drone">
        <Breadcrumb routes={['drone']} />
        <Section className="row">
          <SubSection title="Drone 1" className="drone-container">
            {this.state.droneImages[0]}
            <p className="drone-text">
              Our first aerial robot was born last fall. Creating it, flying it and using it has been a great learning experience for the team. The drone is however quite small, and we needed an upgrade in order to carry all the desired equipment.
            </p>
          </SubSection>
          <SubSection title="Drone 2" className="drone-container">
            {this.state.droneImages[1]}
            <p className="drone-text">
              Our second aerial robot is custom designed using carbon fiber and 3D-printed parts. It was build for the 2016 IARC and designed with Mission 7 in mind, and it is able to carry all the equipment we need to herd the target robots across the green line.
            </p>
            <p className="drone-text">
              The <b>sensors</b> it has for navigation, ground robot detection and collision avoidance is five cameras, one laser rangefinder, one 2D laser scanner, and an inertial measurement unit.
            </p>
            <p className="drone-text">
              The <b>data processing</b> is done using an on-board Intel NUC, in addition to an external computer communicating using WiFi. The flight controller is a Pixhawk connected to the NUC.
            </p>
            <p className="drone-text">
              Our <b>software</b> can recognize the lines and corners of the grid, detect target robots and decide when and how to interact with them.
            </p>
          </SubSection>
        </Section>
      </div>
    )
  }
}

export default DronePage
