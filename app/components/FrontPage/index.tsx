import * as React from 'react'

import Splash from './splash'
import SponsorList from '../Common/sponsorlist'
import { HistoryViewer } from '../Common/historyViewer'
import { Section, SubSection } from '../PageLayout'

export interface FrontPageState {
}

export class FrontPage extends React.Component<{}, FrontPageState> {

  render () {
    return (
      <div className="page page-front">
        <Splash />
        {/*<Section title="History of Ascend NTNU" className="centered" />
        <HistoryViewer />*/}
        <Section title="Our sponsors" className="centered">
          <SponsorList />
        </Section>
      </div>
    )
  }
}

export default FrontPage
