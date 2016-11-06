import * as React from 'react'

import { Section, SubSection } from '../PageLayout'
import { Breadcrumb } from '../Common/breadcrumb'
import { SponsorList } from '../Common/sponsorlist'

export interface SponsorPageState {
  year: number,
}

export class SponsorPage extends React.Component<{}, SponsorPageState> {
  render () {
    let title: any = (
      <span>Our sponsors <select>
        <option value="2016">2016</option>
        <option value="2017">2017</option>
      </select>
      </span>
    )

    return (
      <div className="page page-sponsors">
        <Breadcrumb routes={['sponsors']} />
        <Section title={title} className="centered">
          <SponsorList year={2016} />
        </Section>
      </div>
    )
  }
}

export default SponsorPage
