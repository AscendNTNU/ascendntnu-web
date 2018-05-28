import React, { Component } from 'react'

import { Section, SubSection } from '../PageLayout'
import { Breadcrumb } from '../Common/breadcrumb'
//import { ModelRenderer } from '../Common/model'

export class DronePage extends Component {
  constructor() {
    super()

    this.drones = [
      {
        name: 'Drone 2.0',
        version: 'v2.0',
        model: {
          name: 'Drone 2',
          parts: ['/images/drones/drone2.stl', '/images/drones/propell.stl'],
        },
        imageCollection: [],
        image: (
          <div
            className="drone-image"
            style={{
              backgroundImage: 'url(/images/drones/drone2-minimized.jpg)',
            }}
          />
        ),
        //image: <div className="drone-model"><ModelRenderer models={['/images/drones/drone2.stl', '/images/drones/propell.stl']} process={[-80, 160, 160]} /></div>,
        content: [
          <span>
            Our second aerial robot is custom designed using carbon fiber and
            3D-printed parts. It was build for the 2016 IARC and designed with
            Mission 7 in mind, and it is able to carry all the equipment we need
            to herd the target robots across the green line.
          </span>,
          <span>
            The <b>sensors</b> it has for navigation, ground robot detection and
            collision avoidance is five cameras, one laser rangefinder, one 2D
            laser scanner, and an inertial measurement unit.
          </span>,
          <span>
            The <b>data processing</b> is done using an on-board Intel NUC, in
            addition to an external computer communicating using WiFi. The
            flight controller is a Pixhawk connected to the NUC.
          </span>,
          <span>
            Our <b>software</b> can recognize the lines and corners of the grid,
            detect target robots and decide when and how to interact with them.
          </span>,
        ],
        testDrone: {
          name: 'Drone 0.0.1',
          version: 'v0.0.1',
          image: (
            <div
              className="drone-image"
              style={{
                backgroundImage:
                  'url(/images/drones/drone1-flying-minimized.jpg)',
              }}
            />
          ),
          content: [
            <span>
              Our first aerial robot was born fall of 2015. Creating it, flying
              it and using it has been a great learning experience for the team.
              The drone is however quite small, and we needed an upgrade in
              order to carry all the desired equipment.
            </span>,
          ],
        },
      },

      {
        name: 'Valkyrie',
        version: 'v3.0',
        image: (
          <div
            className="drone-image"
            style={{
              backgroundImage: 'url(/images/drones/drone4-minimized.jpg)',
            }}
          />
        ),
        content: [
          <span>
            Our third quadcopter was designed as a physically robust platform
            for testing new control software. The small size and low weight
            means that we can test new control strategies, including landing on
            ground robots, with less risk of damage to equipment.
          </span>,
          <span>
            It has a Pixhawk flight controller and an Intel NUC onboard
            computer running Ubuntu Server with ROS. The custom made frame made
            of carbon fiber and 3D-printed parts allows compact placement of the
            hardware and even weight distribution, and well balanced motors from
            T-Motor minimize vibrations and yields high efficiency.
          </span>,
        ],
        testDrone: {
          name: 'Drone 1.1',
          version: 'v1.1',
          image: (
            <div
              className="drone-image"
              style={{
                backgroundImage: 'url(/images/drones/drone3-minimized.jpg)',
              }}
            />
          ),
          content: [
            <span>
              Our third quadcopter was designed as a physically robust platform
              for testing new control software. The small size and low weight
              means that we can test new control strategies, including landing
              on ground robots, with less risk of damage to equipment.
            </span>,
            <span>
              It has a Pixhawk flight controller, an Odroid XU4 onboard computer
              running Ubuntu Server with ROS, and is used with an Optitrack
              tracking system. The custom made frame made of carbon fiber and
              3D-printed parts allows compact placement of the hardware and even
              weight distribution, and well balanced motors from T-Motor
              minimize vibrations and yields high efficiency.
            </span>,
          ],
        },
      },
      {
        name: 'Mist',
        version: 'v3.0',
        image: (
          <div
            className="drone-image"
            style={{
              backgroundImage: 'url(/images/drones/mist-without-case.png)',
            }}
          />
        ),
        content: [
          <span>
            This year´s drone is a new and improved version of last year´s drone. 
            It got more computing power and sensors than the previous one. The 
            structure of the drone is made out of carbon fibre and 3d printed parts. 
            This makes it modular, which allows easy testing of multiple technologies. 
          </span>,
          <span>
            The drone feature two Nvidia TX2s, which run the operating system based on 
            ROS. The landing gear has multiple sensors for detection of height, 
            landing and physical contact with ground robots. The new and lighter cameras 
            is isolated from the frame to minimize vibrations.
          </span>,
        ],
        testDrone: {
          name: 'Drone 1.1',
          version: 'v1.1',
          image: (
            <div
              className="drone-image"
              style={{
                backgroundImage: 'url(/images/drones/drone3-minimized.jpg)',
              }}
            />
          ),
          content: [
            <span>
              Our third quadcopter was designed as a physically robust platform
              for testing new control software. The small size and low weight
              means that we can test new control strategies, including landing
              on ground robots, with less risk of damage to equipment.
            </span>,
            <span>
              It has a Pixhawk flight controller, an Odroid XU4 onboard computer
              running Ubuntu Server with ROS, and is used with an Optitrack
              tracking system. The custom made frame made of carbon fiber and
              3D-printed parts allows compact placement of the hardware and even
              weight distribution, and well balanced motors from T-Motor
              minimize vibrations and yields high efficiency.
            </span>,
            <span>
              The drone has new landing sensors for 
            </span>,
          ],
        },
      },
    ]

    this.years = [
      {
        year: 2016,
        drone: this.drones[0],
      },
      {
        year: 2017,
        drone: this.drones[1],
      },
      {
        year: 2018,
        drone: this.drones[2],
      },
    ]

    this.years = this.years.reverse()
  }

  render() {
    let drones = this.years.map((yearContent, i) => {
      //let year = yearContent.year
      let drone = yearContent.drone
      //let testDrone = drone.testDrone

      let content = null
      if (drone.content) {
        content = drone.content.map((e, n) => (
          <p className="drone-text" key={n}>
            {e}
          </p>
        ))
      }

      let images = null
      if (drone.imageCollection) {
        images = drone.imageCollection.map((e, n) => {
          return <div className="drone-gallery-image">{e}</div>
        })
      }

      //let image = null
      //if (typeof drone.image === "string") {
      //  image = <img src={drone.image} />
      //} else {
      //  image = drone.image
      //}

      return (
        <SubSection key={i} className="drone-container">
          <div className="drone-main">
            <div className="drone-image">{drone.image}</div>
            <div className="drone-title-container">
              <h1 className="drone-title">
                {yearContent.year}
                {yearContent.year === 2016 ? (
                  <span className="fa fa-star birth" />
                ) : (
                  ''
                )}
              </h1>
              <h2 className="drone-sub-title">{drone.name}</h2>
            </div>
          </div>
          <div className="drone-more">
            <div className="drone-content">{content}</div>
            <div className="drone-gallery">{images}</div>
          </div>
        </SubSection>
      )
    })

    return (
      <div className="page page-drone">
        <Breadcrumb routes={['drone']} />
        <Section titleText="Drones">
          <SubSection className="row">{drones}</SubSection>
        </Section>
      </div>
    )
  }
}

export default DronePage
