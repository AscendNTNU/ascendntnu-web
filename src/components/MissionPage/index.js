import React, { Component } from 'react'

import { Section, SubSection, SubSubSection } from '../PageLayout'
import { Breadcrumb } from '../Common/breadcrumb'
import { ASSETS_URL } from '../../constants'
;<link
  href="https://fonts.googleapis.com/css?family=Nova+Mono"
  rel="stylesheet"
></link>

export class MissionPage extends Component {
  constructor(props) {
    super(props)

    /* Set date and time for countdown timer */
    const countDownDate = new Date('Apr 9, 2020 00:12:00').getTime()
    this.state = {
      countDownDate,
      ...this.getTimeLeft(countDownDate),
    }
  }
  /* Countdown function to countdown timer */
  getTimeLeft(fromDate) {
    const now = new Date().getTime()
    const timeLeft = fromDate - now
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
    const hour = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
    const second = Math.floor((timeLeft % (1000 * 60)) / 1000)
    return { days, hour, minutes, second, timeLeft }
  }

  componentDidMount() {
    const countDownFunction = setInterval(() => {
      const { timeLeft, ...timeUnits } = this.getTimeLeft(
        this.state.countDownDate
      )
      this.setState({ timeLeft, ...timeUnits })
      if (timeLeft < 0) {
        clearInterval(countDownFunction)
      }
    }, 1000)
  }

  render() {
    return (
      <div className="page page-mission">
        {/* Introduction */}
        <div
          class="padding_3"
          style={{
            backgroundImage: `url('${ASSETS_URL}/images/assets/Ciruit.png')`,
          }}
        >
          <div class="container">
            <div class="row">
              <div class="col-sm-6">
                <center>
                  <h1>IARC</h1>
                </center>
                <img src={ASSETS_URL + '/images/assets/iarc.png'} />
                <center>
                  <a href="#section1">
                    <button>Read more about IARC</button>
                  </a>
                </center>
              </div>
              <div class="col-sm-6">
                <center>
                  <h1>AlphaPilot</h1>
                </center>
                <br />
                <img
                  id="AP_comp"
                  src={ASSETS_URL + '/images/assets/AlphaPilot.jpg'}
                />
                <center>
                  <a href="#section2">
                    <button>Read more about The AlphaPilot Challenge</button>
                  </a>
                </center>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>

        {/*IARC Intro */}
        <div class="padding" id="section1">
          <div class="container">
            <div
              class="row"
              style={{ display: 'flex', flexWrap: 'wrap-reverse' }}
            >
              <div class="col-sm-6">
                {/* Photo  */}
                <img src={ASSETS_URL + '/images/assets/iarc.png'} />
              </div>
              <div class="col-sm-6 text-center">
                {/* Introduction to IARC */}
                <h1>THE INTERNATIONAL AERIAL COMPETITION</h1>
                <center>
                  <h2>IARC</h2>
                </center>
                <hr />
                <p class="lead">
                  The International Aerial Competition (IARC) is the longest
                  running collegiate aerial robotics challenge in the world,
                  whose primary goal is to “move the state-of-the-art in aerial
                  robotics forward”. In order to succeed with this ambitious
                  goal, IARC poses challenges deemed “impossible” when
                  introduced. The longest mission running was mission 6, and was
                  running for 8 years before Georgia Institute of Technology
                  solved the mission. The misson was as followed:
                </p>

                <div class="para">
                  {/* Colored text */}
                  <p class="lead">
                    <i>
                      "The robots had to locate an opening in a building, enter
                      when a surveillance camera was not looking, navigate
                      crowded hallways, avoid or disable security systems,
                      interpret signage in Arabic, and finally reach a
                      particular room without bumping any walls or landing. From
                      there, the robot had to locate a particular paper inbox
                      containing a flash drive. It had to then retrieve that
                      flash drive, replace it with an identical blank flash
                      drive, and exit the building within a short time span."
                    </i>
                  </p>
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission 9 */}
        <div class="padding_2">
          <div class="container">
            <div class="row">
              <div class="col-sm-6">
                <br />
                <br />
                <br />
                <center>
                  <h1>Misson 9</h1>
                </center>
                <center>
                  <h3>2019</h3>
                </center>
                <hr />
                <p>
                  Following the resolution of Mission 8 in the summer of 2019,
                  IARC released the Mission 9 details the following October. The
                  narrative revolves around a dystopian future, where an AI
                  overlord dominates the earth and patrols the seas using
                  autonomous Hunter-Killer vessels. The team is part of a
                  resistance group based on a remote island. The mission is to
                  take control of one of these vessels using an autonomous drone
                  to replace the communications module on the ships mast with
                  one of our own modules.
                </p>
                <br />
                <p>
                  Mission 9 presents a vastly different set of challenges when
                  compared to previous missions. The mission will take place
                  outdoors and over long distances, with the first and last
                  parts of the mission involving flying the drone 3 km to and
                  from the vessel. During the competition, the vessel will only
                  be represented by a periodically moving mast, onto which the
                  communications module is attached. The drone must synchronize
                  with the mast movements, detach and drop the original module
                  and finally attach the replacement module.{' '}
                  <a
                    href={ASSETS_URL + '/images/assets/mission9rules_1.03.pdf'}
                  >
                    {' '}
                    Here are the rules of Mission 9
                  </a>
                </p>
                <br />
                <br />
                <br />
                <br />
              </div>
              <div class="col-sm-6">
                <center>
                  {/* Countdown */}
                  <div class="countdown">
                    <h1>COUNTDOWN TO MISSION 9</h1>
                  </div>
                  {this.state.timeLeft > 0 ? (
                    <p id="show">
                      {this.state.days} Days <br />
                      {this.state.hour} Hours
                      <br />
                      {this.state.minutes} Minute
                      {this.state.minutes === 1 ? '' : 's'}
                      <br />
                      {this.state.second} Second
                      {this.state.second === 1 ? '' : 's'}
                    </p>
                  ) : (
                    /* Text that is shown on website when the countdown is done */
                    <p id="show">
                      The IARC Mission 9 competition has been cancelled
                    </p>
                  )}
                </center>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>

        {/* Mission 8 */}
        <div class="padding">
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
                <br />
                <br />
                <div class="m8_IMG">
                  {/* Photo  */}
                  <img src={ASSETS_URL + '/images/assets/mission_8.png'} />
                </div>
              </div>
              <div class="col-sm-6">
                <br />
                <br />
                <br />
                <center>
                  <h1>Misson 8</h1>
                </center>
                <center>
                  <h3>2018-2019</h3>
                </center>
                <hr />
                <p>
                  This summer will be the last year that the International
                  Aerial Robotic Competition (IARC) will run mission 7. This is
                  because several competitors are expected to solve mission 7
                  this summer. Last summer a team in the Asian venue managed to
                  get three ground robots out of the course. To win the
                  competition you have to get at least four ground robots out of
                  the course.
                </p>
                <br />
                <p>
                  IARC has therefore released Mission 8. The mission is for a
                  human person to retrieve objects from bins that are located on
                  the course. While the person is trying to do this, they will
                  be attacked by flying enemy drones. If they are hit ten times,
                  they will lose. The person will have help from up to four
                  helper drones. These drones will be able to scout the course,
                  so the person knows where both the object, and the enemy
                  drones are located. The helper drones are also able to heal
                  the person.{' '}
                  <a href={ASSETS_URL + '/images/assets/mission8rules_1.0.pdf'}>
                    Here are the rules of Mission 8
                  </a>
                </p>
                <br />
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>

        {/* Mission 7 */}
        <div class="padding_2">
          <div class="container">
            <div class="row">
              <br />
              <br />
              <br />
              <div class="col-sm-6">
                <center>
                  <h1>Misson 7</h1>
                </center>
                <center>
                  <h3>2014-2017</h3>
                </center>
                <hr />
                <p>
                  Mission 7 ended in 2018 and took place indoors on a 20x20
                  meter grid arena. The mission was the following: The square
                  arena has two white edges, one green edge and one red edge, as
                  shown in top figure. In the middle of the arena 10 ground
                  robots starts driving outwards towards the edges. The ground
                  robots moves in a specific pattern:
                  {/* Box_1 with rules */}
                  <ul>
                    <li>Every 20 seconds they rotate 180 degrees.</li>
                    <li>
                      Every 5 seconds they rotate a random amount of degrees on
                      the interval [-20, 20].
                    </li>
                    <li>
                      If they bump into anything, they rotate 180 degrees.
                    </li>
                  </ul>
                  <p>
                    In addition to these ground robots, there are four obstacle
                    robots. These have an 1-2 meter pole on the top and moves
                    around in a circular pattern. They are there to create havoc
                    and must be avoided. If the drone hits them twice, the run
                    is terminated. The mission is to herd at least four of the
                    ground robots over the green line in order to complete the
                    mission. To interact with the ground robots, there are two
                    different options:
                  </p>
                  {/* Box_2 with rules*/}
                  <ul>
                    <li>
                      Tapping a tactile button on the top of the ground robots,
                      turning them 45 degrees, clockwise.
                    </li>
                    <li>
                      Bumping into the ground robots from the front, turning
                      them 180 degrees.
                    </li>
                    <li>
                      The mission must be solved in a maximum of 10 minutes, all
                      the sensors must be onboard the drone and it has to be
                      fully autonomous.
                    </li>
                  </ul>
                </p>
                <p>
                  {' '}
                  <a href="https://www.youtube.com/watch?v=LOU6-r7TRAA">
                    Here is video of the competing drones executing the tasks of
                    Mission 7
                  </a>{' '}
                  and{' '}
                  <a
                    href={
                      ASSETS_URL + '/images/assets/mission7rules_legacy.pdf'
                    }
                  >
                    here are the complete ruleset of Mission 7
                  </a>
                </p>
                <br />
                <br />
                <br />
                <br />
              </div>
              <div class="col-sm-6">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <img src={ASSETS_URL + '/images/assets/start-state.png'} />

                <div class="drone_IMG">
                  <br></br>
                  <br></br>
                  <br></br>
                  <img
                    src={
                      ASSETS_URL + '/images/assets/180-degree-turn-cartoon.png'
                    }
                  />
                </div>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>

        <div class="padding" id="section2">
          <div class="container">
            <div class="row">
              <div class="col-sm-6">
                <br />
                <br />
                <br />
                <h2>The AlphaPilot Challenge</h2>
                <hr />
                <p>
                  The Autonomous Drone Racing (ADR) group was started in
                  February 2019 as Ascend's first foray into the world of
                  autonomous drone racing. Formed to compete in Lockheed Martin
                  and DRL’s brand new ADR competition - AlphaPilot - we placed
                  10th of 425 teams in the virtual qualifier. Unfortunately only
                  the top 9 teams qualified for the four race long 2019 season.
                </p>

                <p>
                  Although no ADR competitions were held this year, the group
                  has been hard at work building and testing systems both in
                  simulation and on the group's test drone. In the future the
                  ADR group aims to represent Ascend NTNU in AlphaPilot or in
                  other autonomous drone racing competitions.This year we are
                  out for revenge. Our team, which previously consisted of three
                  members, has expanded to include seven talented members with
                  backgrounds in autonomous racing, competitive programming and
                  previous experience in Ascend. Our goals for the next month
                  are to physically test our control systems and visual odometry
                  on our test drone, and to have our whole pipeline, from
                  detection to control, running together in the simulator.
                </p>
              </div>
              <div class="col-sm-6">
                <br />
                <br />
                <br />

                <img
                  src={
                    ASSETS_URL + '/images/teams/logoes/2020/Alphapilot-logo.svg'
                  }
                />
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

            .drone_IMG {
              padding-top: 20px;
              height: 400px;
            }

            .m8_IMG {
              height: 500px;
            }
    
            .navbar {
              background-color: #252222;
              padding: 1% 0;
              font-size: 1.6em;
              height: 120px;
            }
            .navbar-brand {
              min-height: 63px;
              padding: 0 15px 5px;
            }
            .navbar-default .navbar-nav li a {
              color: #F3BA37;
            }
            .navbar-default .navbar-nav li a:hover, .navbar-default .navbar-nav li a.active {
              color: #FFF;
            } 
            
            #home{
              background: url(images/Ciruit.png) no-repeat center center fixed;
              display: table;
              height: 100%;
              position: relative;
              width: 100%;
              background-size: cover;
            }
            
            .countdown {
              margin-top: 250px;
            }
            
            .landing-text{
              display: table-cell;
              text-align: center;
              vertical-align: middle;
            }
      
            .padding img {
              width: 100%;
              margin-bottom: 100px;
              height: 580px;
            }
            
            .col-sm-6 {
              margin-top: 20px; 
            }
            
            #fixed {
              background: url(images/Ciruit.png) no-repeat center center fixed;
              display: table;
              height: 60%;
              position: relative;
              width: 100%;
              background-size: cover;
            }
                    
            @media (max-width: 768px) {
              .landing-text h1 {
                font-size: 300%;
              }
              .fa {
                font-size: 20px;
                padding: 10px;
              }
              .icon{
                padding-top: 5%;
                max-width: 100px;
              }
                video {
              height: 30%;
              width: 100%;
                }
                #home {
                  width: 100%;
                  height: 100%;
                }
                .countdown {
                  margin-top: 7px;
                }
            }
            
            
            h3, h4 {
              color: #FFF;
              text-align: center;
            }

            h2 {
              text-align:center;
              color: #c49a6c;
            }
            
            h1 {
              color: #D7572D;
            }
            
            
            p {
              color: #FFF;
              font-size: 20px;
            }
            
            #home h1 {
              color: orange;
              font-family: "Times New Roman", Times, serif;
            }
   
            
            #show {
              padding-top: 40px;
              color: #DE5021;
              font-weight: lighter;
              text-align: center;
              font-family: 'Orbitron', monospace;
              word-spacing: 5px;
              font-size: 60px;
            }
            
            .para p {
              color: #c49a6c;
              font-style: sans-serif;
            }
            
            ul {
              color:  #DE5021;
              border: solid #DE5021 2px;
              margin: 20px;
              padding: 38px;
            }
            
            li {
              color:  #DE5021;
              list-style-type: upper-roman;
              text-align: center;
            }
          }
          `,
          }}
        />
      </div>
    )
  }
}

export default MissionPage
