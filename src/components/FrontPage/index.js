import React, { Component } from 'react'

import Splash from './splash'
//import Announcement from './announcement'
import SponsorList from '../Common/sponsorlist'
//import { HistoryViewer } from '../Common/historyViewer'
import { Section } from '../PageLayout'
import YouTube from 'react-youtube'
//import { Link } from 'react-router-dom'
import { ASSETS_URL } from '../../constants'

//import { Link } from 'react-router-dom'
export class FrontPage extends Component {
  render() {
    //Used for youtube player
    const opts = {
      height: 150,
      width: 200,
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    }

    return (
      <div className="page-front page">
        <Splash />

        <div style={{ backgroundColor: 'var(--primary-dark)' }}>
          <div class="padding">
            <div class="container">
              <div class="row">
                <div class="col-sm-6">
                  <a href="Index.html">
                    <br />
                    <br />
                    <img
                      src={
                        ASSETS_URL + '/images/assets/ascend-no-background.png'
                      }
                    />
                  </a>
                </div>
                <div class="col-sm-6">
                  <br />
                  <br />
                  <br />
                  <h1>Who are we?</h1>
                  <hr />
                  <p class="lead">
                    Ascend NTNU is an aerial robotics team consisting of
                    students from the Norwegian University of Science and
                    Technology. Our goal is to become the best performing team
                    at the International Aerial Robotics Competition, American
                    Venue, and the AlphaPilot competition. We aim high, work
                    hard, and create new and innovative solutions to some of the
                    most challenging problems in cybernetics and autonomy as of
                    today. Ascend NTNU was founded in spring 2015. In 2016, we
                    competed and came third in IARC. We won the price for the
                    most innovative drone in 2017.
                  </p>

                  <p class="lead">
                    In 2018, mission 7 was completed, where we
                    finished at third, and we won the prize for the most
                    innovative drone, again! In 2019 At mission 8, we won the
                    awards for Best Technical Demonstration and Best System
                    Design, and with that we also came in 1st overall in the
                    American Venue! Currently, we are preparing for mission 9 in
                    2020! We are also attempting to qualify for the competition
                    AlphaPilot.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="padding">
            <div class="container">
              <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <br />
                  <br />
                  <a href="https://www.kongsberg.com/who-we-are">
                    <img
                      src={
                        ASSETS_URL + '/images/assets/kongsberg-white-text.png'
                      }
                      class="img-responsive"
                    />
                  </a>
                </div>

                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <h2>Kongsberg</h2>
                  <hr />

                  <p>
                    Our main sponsor, Kongsberg, is an international,
                    knowledge-based group that supplies high-technology systems
                    and solutions to customers engaged in the oil and gas
                    industry, merchant marine, and defence and aerospace
                    industries.
                  </p>
                </div>

                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <a href="https://www.equinor.com/en.html">
                    <img
                      src={
                        ASSETS_URL +
                        '/images/assets/Equinor_PRIMARY_logo_RGB_RED.png'
                      }
                      class="img-responsive"
                    />
                  </a>
                </div>

                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <h2>Equinor</h2>
                  <hr />
                  <p>
                    Equinor is an international, knowledge-based energy company
                    pushing the boundaries of imagination and technology,
                    solving challenges in the oil and gas industry.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            id="fixed"
            style={{
              background: `url('${ASSETS_URL}/images/assets/Ciruit_background.png') no-repeat center
    center fixed`,
            }}
          >
            <br />
            <br />
            <br />
            <br />
          </div>

          <div class="padding">
            <div class="container">
              <div class="row">
                <div class="col-sm-6">
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <h2>Alpha Pilot</h2>
                  <hr />
                  <p>
                    The AlphaPilot group was started in February 2019 as Ascends
                    first foray into the world of autonomous drone racing.
                    Formed to compete in Lockheed Martin and DRL’s brand new
                    AlphaPilot competition we placed 10th of 425 teams in the
                    virtual qualifier. Unfortunately only the top 9 teams
                    qualified for the four race long 2019 season.
                  </p>

                  <p>
                    This year we are out for revenge. Our 3 person team has
                    expanded to 7 talented members with previous experience in
                    Ascend, autonomous race cars and competitive programming.Our
                    goals for the next month are to physically test our control
                    systems and visual odometry on our test drone, and to have
                    our whole pipeline, from detection to control, running
                    together in the simulator.
                  </p>
                </div>
                <div class="col-sm-6">
                  <br />
                  <br />
                  <br />
                  <a href="">
                    <img
                      src={
                        ASSETS_URL +
                        '/images/teams/current-logoes/2020/Alphapilot_logo.svg'
                      }
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FrontPage
