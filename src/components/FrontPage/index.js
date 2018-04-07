import React, { Component } from 'react'

import Splash from './splash'
import Announcement from './announcement'
import SponsorList from '../Common/sponsorlist'
//import { HistoryViewer } from '../Common/historyViewer'
import { Section } from '../PageLayout'

import { Link } from 'react-router-dom'

export class FrontPage extends Component {
  render() {
    return (
      <div className="page page-front">
        {<Announcement titleText="Vi har nå opptak!">
          <p>Vil du være med på et omfattende droneprosjekt? Bli med i Ascend NTNU for å utvikle en dronen som skal løse en "umulig" oppgave i verdensklasse.</p>
          <Link to="join">Gå til join-siden vår for mer informasjon.</Link>
          <p style={ { color: 'red' } }><b>Frist 15. april kl. 23:59!</b></p>
          <p style={ { color: 'yellow' } }><b>Infomøte 11. april klokken 13.15 i S2</b></p>
        </Announcement>}
        <Splash />
        {/*<Section titleText="History of Ascend NTNU" className="centered" />
        <HistoryViewer />*/}
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
