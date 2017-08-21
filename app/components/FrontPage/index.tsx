import * as React from 'react'
import { Link } from 'react-router'

import Splash from './splash'
import Announcement from './announcement'
import SponsorList from '../Common/sponsorlist'
import { HistoryViewer } from '../Common/historyViewer'
import { Section, SubSection } from '../PageLayout'

export interface FrontPageState {
}

export class FrontPage extends React.Component<{}, FrontPageState> {

  render () {
    return (
      <div className="page page-front">
        <Announcement titleText="Vi har nå opptak!">
          <p>Vil du være med på et omfattende droneprosjekt? Bli med i Ascend NTNU for å utvikle en dronen som skal løse en "umulig" oppgave i verdensklasse.</p>
          <Link to="join">Gå til join-siden vår for mer informasjon.</Link>
          <p>Du kan også vinne en av to minidroner om du deltar i <a href="http://flappy.ascendntnu.no" target="_blank">konkurransen vår</a>. Desto flere poeng - jo større sjanse! 1. plassen vil såklart også få en minidrone.</p>
        </Announcement>
        <Splash />
        {/*<Section titleText="History of Ascend NTNU" className="centered" />
        <HistoryViewer />*/}
        <Section titleText="Our sponsors" className="centered">
          <SponsorList />
        </Section>
      </div>
    )
  }
}

export default FrontPage
