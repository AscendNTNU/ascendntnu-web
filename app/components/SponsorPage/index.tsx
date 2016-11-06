import * as React from 'react'

import { Section, SubSection } from '../PageLayout'
import { Breadcrumb } from '../Common/breadcrumb'

export interface SponsorPageProps {}

export class SponsorPage extends React.Component<SponsorPageProps, {}> {
  render () {
    return (
      <div className="page page-sponsors">
        <Breadcrumb routes={['sponsors']} />
        <Section title="Our sponsors" className="centered">
        </Section>
      </div>
    )
  }
}

export default SponsorPage
