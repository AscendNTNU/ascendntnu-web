import React, { Component } from 'react'

import Splash from './splash'
//import Announcement from './announcement'
import SponsorList from '../Common/sponsorlist'
//import { HistoryViewer } from '../Common/historyViewer'
import { Section } from '../PageLayout'
import YouTube from 'react-youtube' 
//import { Link } from 'react-router-dom'


//import { Link } from 'react-router-dom'
export class FrontPage extends Component {
  render() {
    //Used for youtube player
    const opts = {
      height: 150,
      width: 200,
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    }
    

    return (
      <div className="page-front page">
        <Splash />
        <Section titleText="Promotional video" className="centered">
          <YouTube
            videoId="qr6UwZnJUYc"
            opts={opts}
            onReady={this._onReady}
          />
        </Section> 
        <Section titleText="Our sponsors" className="centered">
          <SponsorList />
        </Section>
      </div>
    )
  }
}

export default FrontPage
