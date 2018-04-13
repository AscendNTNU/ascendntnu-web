import React, { Component } from 'react'

import Splash from './splash'
import Announcement from './announcement'
import SponsorList from '../Common/sponsorlist'
//import { HistoryViewer } from '../Common/historyViewer'
import { Section } from '../PageLayout'

import { Link } from 'react-router-dom'
import YouTube from 'react-youtube'
export class FrontPage extends Component {
  render() {
    const opts = {
      height: 150,
      width: 200,
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    }

    const youtubeStyle = {
      width: '100%',
      height: 800
    }

    return (
      <div className="page-front page">
        {<Announcement titleText="Vi har nå opptak!">
          <p>Vil du være med på et omfattende droneprosjekt? Bli med i Ascend NTNU for å utvikle en dronen som skal løse en "umulig" oppgave i verdensklasse.</p>
          <Link to="join">Gå til join-siden vår for mer informasjon.</Link>
          <p style={ { color: 'red' } }><b>Frist 15. april kl. 23:59!</b></p>
          <p style={ { color: 'yellow' } }><b>Infomøte 11. april klokken 14:30 i S2</b></p>
        </Announcement>}
        {/*<Splash />*/}
        
        {/*<Section titleText="History of Ascend NTNU" className="centered" />
        <HistoryViewer />*/}
        <YouTube style={youtubeStyle}
          videoId="qr6UwZnJUYc"
          opts={opts}
          onReady={this._onReady}
        />
        <Link to="/join">
          <div className="yellow-background">
            <h1>We are currently recruiting new board members and team leaders, apply by April 15th!</h1>
          </div>
        </Link>
        <Section titleText="Our sponsors" className="centered">
          <SponsorList />
        </Section>
      </div>
    )
  }
}

export default FrontPage
