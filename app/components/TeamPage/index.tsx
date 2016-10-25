import * as React from 'react'

import { Section, SubSection } from '../PageLayout'
import { Breadcrumb } from '../Common/breadcrumb'

export interface TeamPageProps {}

export class TeamPage extends React.Component<TeamPageProps, {}> {
  render () {
    return (
      <div className="page page-team">
        <Breadcrumb routes={['team']} />
        <Section title="Team page">
        </Section>
      </div>
    )
  }
}

export default TeamPage
