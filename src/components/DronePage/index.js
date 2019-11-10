import React, { Component } from 'react'

import { Section, SubSection } from '../PageLayout'
import { Breadcrumb } from '../Common/breadcrumb'
//import { ModelRenderer } from '../Common/model'
import { ASSETS_URL } from '../../constants'

export class DronePage extends Component {
  render() {
    return (
      <div className="page page-drone">
        <div id="home">
          <slider>
            <slide></slide>
            <slide></slide>
            <slide></slide>
            <slide></slide>
          </slider>
        </div>

        <div class="padding">
          <div id="nxt">
            <div class="container">
              <div
                class="row"
                style={{ display: 'flex', flexWrap: 'wrap-reverse' }}
              >
                <div class="col-sm-6">
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <a href="Index.html">
                    <img src={ASSETS_URL + '/images/assets/2019_new.png'} />
                  </a>
                </div>
                <div class="col-sm-6 text-center">
                  <h1>INKY, BLINKY, PINKY & CLYDE</h1>
                  <center>
                    <h2>2019</h2>
                  </center>
                  <hr />
                  <p class="lead">
                    This year we for the first time had a drone swarm! We built
                    four drones and named them after Pacman. The drones
                    prominently feature carbon fiber ducts around the
                    propellers, which ensures human-safe operation and provides
                    an increase in lift. Other parts of the frame are
                    constructed using carbon fiber and 3d printed parts to
                    ensure strength and light weight. Each drone is equipped
                    with an Nvidia Jetson TX2 computer. These provide ample
                    computing power to handle data from the stereo cameras and
                    other sensors. The systems are built on the framework of ROS
                    (Robot Operating Systems), allowing for a modular structure
                    of the software stack from the sensors to the control
                    systems.
                  </p>

                  <p class="lead">
                    The drones localize themselves on the field using
                    SLAM-systems with data from the stereo cameras, while
                    simultaneously detecting QR-code segments and human poses
                    for gesture recognition. The player on the field can
                    communicate with the drones through a microphone and speech
                    recognition, with the drones being able to perform complex
                    tasks from simple commands. Upon executing the commands,
                    obstacle avoidance systems ensure that the drones don't
                    collide with the environment or the player on the field.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>

        <div class="inner">
          <div class="padding">
            <div class="container">
              <div class="row">
                <div class="col-sm-6">
                  <br />
                  <br />
                  <br />
                  <center>
                    <h1>MIST</h1>
                  </center>
                  <center>
                    <h2>2018</h2>
                  </center>
                  <hr />
                  <center>
                    <p>
                      This years drone is a new and improved version of last
                      year´s drone. It got more computing power and sensors than
                      the previous one. The structure of the drone is made out
                      of carbon fibre and 3d printed parts. This makes it
                      modular, which allows easy testing of multiple
                      technologies.
                    </p>

                    <p>
                      The drone feature two Nvidia TX2s, which run the operating
                      system based on ROS. The landing gear has multiple sensors
                      for detection of height, landing and physical contact with
                      ground robots. The new and lighter cameras is isolated
                      from the frame to minimize vibrations.
                    </p>
                  </center>
                </div>
                <div class="col-sm-6">
                  <br />
                  <br />
                  <br />
                  <a href="alphapilot.html">
                    <img src={ASSETS_URL + '/images/assets/mist_2.png'} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="padding">
          <div id="nxt">
            <div class="container">
              <div
                class="row"
                style={{ display: 'flex', flexWrap: 'wrap-reverse' }}
              >
                <div class="col-sm-6">
                  <a href="Index.html">
                    <img src={ASSETS_URL + '/images/assets/VALKYRIE (2).png'} />
                  </a>
                </div>
                <div class="col-sm-6 text-center">
                  <br />
                  <h1>Valkyrie</h1>
                  <center>
                    <h2>2017</h2>
                  </center>
                  <hr />
                  <p class="lead">
                    Our third quadcopter was designed as a physically robust
                    platform for testing new control software. The small size
                    and low weight means that we can test new control
                    strategies, including landing on ground robots, with less
                    risk of damage to equipment.
                  </p>

                  <p class="lead">
                    It has a Pixhawk flight controller and an Intel NUC onboard
                    computer running Ubuntu Server with ROS. The custom made
                    frame made of carbon fiber and 3D-printed parts allows
                    compact placement of the hardware and even weight
                    distribution, and well balanced motors from T-Motor minimize
                    vibrations and yields high efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="inner">
          <div class="padding">
            <div class="container">
              <div class="row">
                <div class="col-sm-6">
                  <center>
                    <h1>Drone 2.0</h1>
                  </center>
                  <center>
                    <h2>2016</h2>
                  </center>
                  <hr />
                  <p>
                    Our second aerial robot is custom designed using carbon
                    fiber and 3D-printed parts. It was build for the 2016 IARC
                    and designed with Mission 7 in mind, and it is able to carry
                    all the equipment we need to herd the target robots across
                    the green line. The sensors it has for navigation, ground
                    robot detection and collision avoidance is five cameras, one
                    laser rangefinder, one 2D laser scanner, and an inertial
                    measurement unit.
                  </p>

                  <p>
                    The data processing is done using an on-board Intel NUC, in
                    addition to an external computer communicating using WiFi.
                    The flight controller is a Pixhawk connected to the NUC. Our
                    software can recognize the lines and corners of the grid,
                    detect target robots and decide when and how to interact
                    with them.
                  </p>
                </div>
                <div class="col-sm-6">
                  <br />
                  <br />
                  <br />
                  <a href="alphapilot.html">
                    <img src={ASSETS_URL + '/images/assets/drone2_0.png'} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html: `
        html,body {
          height: 100%;
          width: 100%;
          background-color: #333333;
        } 
        
        #home{
          background: url(${ASSETS_URL}/images/Ciruit.png) no-repeat center center fixed;
          display: table;
          height: 100%;
          position: relative;
          width: 100%;
          background-size: cover;
        }
        
        .padding{
          padding: 0px 0;
        }
        .padding img {
          width: 100%;
          padding-bottom: 70px;
          height: 670px;
        }
        
        .col-sm-6 {
          margin-top: 80px; 
        }
        
        #fixed {
          background: url(${ASSETS_URL}/images/Ciruit.png) no-repeat center center fixed;
          display: table;
          height: 60%;
          position: relative;
          width: 100%;
          background-size: cover;
        }
        
        .inner{
          background-color: #37373b;
        }
        
        h2, h3, h4 {
          color: #FFF;
          text-align: center;
        }
        
        h1 {
          color: #D7572D;
        }
        
        p {
          color: #FFF;
          font-size: 20px;
        }

        slider {
          display: block;
          width: 100%;
          height: calc(100vh - 64px);
          background-color: #1f1f1f;
          overflow: hidden;
         }
         
         slider > * {
          position: absolute;
          display: block;
          width: 100%;
          height: 100%;
          background: #1f1f1f;
          animation: slide 12s infinite;
          overflow: hidden;
         }
         
         slide:nth-child(1){
          left: 0%;
          animation-delay: -1s;
          background-image: url(${ASSETS_URL}/images/assets/squad.png);
          background-size: cover;
          background-position: center;
         }
         
         slide:nth-child(2){
          animation-delay: 2s;
          background-image: url(${ASSETS_URL}/images/assets/mist_2.png);
          background-size: cover;
          background-position: center;
          left: 100%;
         }
         
         slide:nth-child(3){
          animation-delay: 5s;
          background-image: url(${ASSETS_URL}/images/assets/VALKYRIE.png);
          background-size: cover;
          background-position: center;
          left: 100%;
         }
         
         slide:nth-child(4){
          animation-delay: 8s;
          background-image: url(${ASSETS_URL}/images/assets/drone2_0.png);
          background-size: cover;
          background-position: center;
          left: 100%;
         }
         
         slide p {
          font-family: Comfortaa;
          font-size: 70px;
          display: inline-block;
          margin: 675px;
          color: #fff;
         }
         
         @keyframes slide {
          0% { left: 100%; width: 100%; }
          5% { left: 0%; }
          25% { left: 0%; }
          30% { left: -100%; width: 100%; }
          40% { left: -100%; width: 0%; }
          100% { left: 100%; width: 0%; }
         }
         
         @media (max-width: 768px) {
           .slider {
             width: 50%;
              height: 50%;
           
           }
         }
        
        `,
          }}
        />
      </div>
    )
  }
}

export default DronePage
