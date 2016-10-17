import * as React from 'react'

import Splash from './splash'
import { Section, SubSection } from '../PageLayout'

export interface FrontPageProps {}

export class FrontPage extends React.Component<FrontPageProps, {}> {
  render () {
    return (
      <div className="page page-front">
        <Splash />
        <Section title="Our sponsors">
          <p>Sponsor 1</p>
          <p>Sponsor 2</p>
        </Section>
      </div>
    )
  }
}

export default FrontPage
