import React, { Component } from 'react'

import ReactDOM from 'react-dom'
import ReactModal from 'react-modal'

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
  constructor() {
    super()
    this.state = {
      /*To remove pop-up window, Change statement to false */
      showModal: false,
    }

    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  handleOpenModal() {
    this.setState({ showModal: true })
  }

  handleCloseModal() {
    this.setState({ showModal: false })
  }

  render() {
    return (
      <div className="page-front page">
        <Splash />
        {/* Pop-up window */}
        <div>
          <ReactModal
            isOpen={this.state.showModal}
            contentLabel="Minimal Modal Example"
            onRequestClose={this.handleCloseModal}
            className="Modal"
            overlayClassName="Overlay"
          >
            <button onClick={this.handleCloseModal}>Close</button>
            {/*Modal txt */}
            <p id="Modul_txt">Apply for Team 2021!</p>
            <div class="bilde">
              <img
                id="bilde"
                src={ASSETS_URL + '/images/assets/front_2020.jpg'}
              />
            </div>
            <div class="text">
              <p>
                We are recruiting new members for Team 2021. <br></br>
                <br></br> To apply or read more about these positions visit our{' '}
                <a id="apply" href="https://ascendntnu.no/join">
                  Join page
                </a>{' '}
              </p>
            </div>
          </ReactModal>
        </div>
        {/* Front-page intro */}
        <div>
          <div class="padding">
            <div class="container">
              <div class="row">
                <div class="col-sm-6">
                  <br />
                  <br />
                  <img
                    id="front"
                    src={
                      ASSETS_URL +
                      '/images/assets/ascend-logo-background.png.svg'
                    }
                  />
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
                    American Venue! Currently, we are preparing for mission 9 in
                    2021!
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Main sponsor Kongsberg */}
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
                  {/* Vertical line_1 */}
                  <div id="vertical_2"> </div>
                  <br />

                  <p>
                    Our main sponsor, Kongsberg, is an international,
                    knowledge-based group that supplies high-technology systems
                    and solutions to customers engaged in the oil and gas
                    industry, merchant marine, and defence and aerospace
                    industries.
                  </p>
                </div>
                {/* Main sponsor Equinor */}
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
                  {/* Vertical line_1 */}
                  <div id="vertical"> </div>
                  <br />
                  <p>
                    Equinor is an international, knowledge-based energy company
                    pushing the boundaries of imagination and technology,
                    solving challenges in the oil and gas industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* FIXED Background scroll-image */}
          <div
            id="fixed"
            style={{
              backgroundImage: `url('${ASSETS_URL}/images/assets/Ciruit_background.png')`,
            }}
          >
            <br />
            <br />
            <br />
            <br />
          </div>
          <div class="spons">
            {' '}
            <img src={ASSETS_URL + '/images/assets/Sponsor_collation.svg'} />
          </div>
          {/* AlphaPilot introduction */}
          <div class="padding">
            <div class="container">
              <div class="row">
                <div class="benefits">
                  <br />
                  <br />
                  <br />
                  <h2>Our sponsors enjoy the benefits of </h2>
                  <hr />

                  <ul class="spons_list">
                    <li id="spons_values">
                      Having their logo on our drone(s) and clothes
                    </li>
                    <li id="spons_values">
                      Being promoted through our social media presence
                    </li>
                    <li id="spons_values">
                      Having access to our members through Ascends CV-database
                    </li>
                    <li id="spons_values">
                      Visiting our office and presenting their open positions to
                      our members
                    </li>
                  </ul>
                </div>

                <div class="col-sm-6">
                  <br />
                  <br />
                  <br />

                  <img
                    id="spons_list_img"
                    src={ASSETS_URL + '/images/assets/Sponsor_collation.svg'}
                  />
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
