import React, { Component } from 'react'

import { Section, SubSection } from '../PageLayout'
import { Breadcrumb } from '../Common/breadcrumb'
//import { ModelRenderer } from '../Common/model'
import { ASSETS_URL } from '../../constants'

export class DronePage extends Component {
  render() {
    return (
      <div className="page page-drone">
        {/*Image slider */}
        {/*To add antoher image, just add another slide attribute and add image in with css down below*/}
        <div id="home">
          <slider>
            <slide></slide>
            <slide></slide>
            <slide></slide>
            <slide></slide>
          </slider>
        </div>

        {/*INKY, BLINKY, PINKY & CLYDE */}
        <div class="padding_2">
          <div class="container">
            <div
              class="row"
              style={{ display: 'flex', flexWrap: 'wrap-reverse' }}
            >
              {/*Image of drone*/}
              <div class="col-sm-6">
                <br />
                <br />
                <br />
                <br />
                <br />

                <img src={ASSETS_URL + '/images/assets/2019_new.png'} />
              </div>
              <div class="col-sm-6 text-center">
                <h1>INKY, BLINKY, PINKY & CLYDE</h1>

                {/*Icon*/}
                <center>
                  <h2>&#9733; 2019 &#9733;</h2>
                </center>
                <hr />
                <p class="lead">
                  To solve IARC Mission 8, Ascend has for the first time
                  developed a swarm of four drones. The drones prominently
                  feature carbon fiber ducts around the propellers, which
                  ensures human-safe operation and provides an increase in lift.
                  Other parts of the frame are constructed using carbon fiber
                  and 3d printed parts to ensure strength and light weight. Each
                  drone is equipped with an Nvidia Jetson TX2 computer. These
                  provide ample computing power to handle data from the stereo
                  cameras and other sensors. The systems are built on the
                  framework of ROS (Robot Operating Systems), allowing for a
                  modular structure of the software stack from the sensors to
                  the control systems.
                </p>

                <p class="lead">
                  The drones localize themselves on the field using SLAM-systems
                  with data from the stereo cameras, while simultaneously
                  detecting QR-code segments and human poses for gesture
                  recognition. The player on the field can communicate with the
                  drones through a microphone and speech recognition, with the
                  drones being able to perform complex tasks from simple
                  commands. Upon executing the commands, obstacle avoidance
                  systems ensure that the drones don't collide with the
                  environment or the player on the field.
                </p>
                <br />
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>

        {/*Drone: Mist*/}
        <div class="padding">
          <div class="container">
            <div class="row">
              <div class="col-sm-6">
                <center>
                  <h1>MIST </h1>
                </center>
                <center>
                  {/*Icon*/}
                  <h2>&#9733; 2018 &#9733;</h2>
                </center>
                <hr />
                <left>
                  <p>
                    Mist was Ascend NTNUs final Mission 7 drone, and was an
                    improved version of the previous drones. The structure is
                    made out of carbon fiber, with 3D printed parts making for a
                    modular design and allowing easy testing of multiple
                    technologies. One of the key improvements is the landing
                    gear, which integrates sensors for height, landing and
                    physical contact with the ground robots.
                  </p>

                  <p>
                    The drone features two Jetson Nvidia TX2 computers running
                    systems communicating through ROS. Images from the
                    vibration-isolated cameras are fed into a neural network to
                    detect ground robots, and the AI systems determine the
                    strategy the drone should execute to solve the mission.
                  </p>
                </left>
              </div>
              <div class="col-sm-6">
                {/*Image of drone*/}
                <div class="mist">
                  <img src={ASSETS_URL + '/images/assets/mist_2.png'} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Droen: Valkyrie*/}
        <div class="padding_2">
          <div class="container">
            <div
              class="row"
              style={{ display: 'flex', flexWrap: 'wrap-reverse' }}
            >
              {/*Image of drone*/}
              <div class="col-sm-6">
                <br />
                <br />
                <img src={ASSETS_URL + '/images/assets/VALKYRIE (2).png'} />
              </div>
              <div class="col-sm-6 text-center">
                <br />
                <h1>Valkyrie</h1>
                <center>
                  {/*Icon*/}
                  <h2>&#9733; 2017 &#9733;</h2>
                </center>
                <hr />
                <p class="lead">
                  Our third quadcopter was designed as a physically robust
                  platform for testing new control software. The small size and
                  low weight means that we can test new control strategies,
                  including landing on ground robots, with less risk of damage
                  to the equipment.
                </p>

                <p class="lead">
                  It has a Pixhawk flight controller and an Intel NUC onboard
                  computer running Ubuntu Server with ROS. The custom made frame
                  consisting of carbon fiber and 3D-printed parts allows for
                  compact placement of the hardware and an even weight
                  distribution, and well balanced motors from T-Motor minimize
                  vibrations and yield high efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*Drone: Drone 2.0*/}
        <div class="padding">
          <div class="container">
            <div class="row">
              <div class="col-sm-6">
                <center>
                  <h1>Drone 2.0</h1>
                </center>
                <center>
                  {/*Icon*/}
                  <h2>&#9733; 2016 &#9733;</h2>
                </center>
                <hr />
                <p>
                  Our second aerial robot was custom designed and built using
                  carbon fiber and 3D-printed parts. It was built for the IARC
                  of 2016 and designed with Mission 7 in mind, and is able to
                  carry all the equipment needed to herd the target robots
                  across the green line. The sensors the drone uses for
                  navigation, ground robot detection and collision avoidance
                  includes five cameras, one laster rangefinder, a 2D laser
                  scanner and an inertial measurment unit.
                </p>

                <p>
                  The data processing is done using an on-board Intel NUC, in
                  addition to an external computer communicating using WiFi. The
                  flight controller is a Pixhawk connected to the NUC. Our
                  software can recognize the lines and corners of the grid,
                  detect target robots and decide when and how to interact with
                  them.
                </p>
              </div>
              <div class="col-sm-6">
                <br />
                <br />
                <br />
                {/*Image of drone*/}
                <img src={ASSETS_URL + '/images/assets/drone2_0.png'} />
              </div>
            </div>
          </div>
        </div>

        {/* Css-code to ONLY to this page */}
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
        
        .padding_2{
          padding: 0px 0;
      
        }
        .padding_2 img {
          width: 100%;
          padding-bottom: 70px;
          height: 590px;
          margin-top: 45px; 
        }


        .padding img {
          width: 100%;
          padding-bottom: 70px;
          height: 590px;
          margin-top: 45px; 
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
        
        h3, h4 {
          color: #FFF;
          text-align: center;
        }

        h2{
          text-align: center;
          color: #c49a6c;
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
