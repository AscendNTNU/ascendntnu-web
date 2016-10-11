import * as React from 'react'

import Splash from './splash'
import { Section } from '../PageLayout'

export interface FrontPageProps {}

export class FrontPage extends React.Component<FrontPageProps, {}> {
  render () {
    return (
      <div className="page page-front">
        <Splash />
        <Section title="Our sponsors" theme="dark">
          <p>Sponsor</p>
        </Section>
      </div>
    )
  }
}

export default FrontPage
