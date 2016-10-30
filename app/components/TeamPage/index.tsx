import * as React from 'react'
import { Link } from 'react-router'

import { Section, SubSection } from '../PageLayout'
import { Breadcrumb } from '../Common/breadcrumb'

export interface TeamPageProps {
  params?: any & {
    year?: number
  }
}

export interface TeamPageState {
  year: number,
  members: any[],
}

export class TeamPage extends React.Component<TeamPageProps, TeamPageState> {
  constructor(props: any){
    super(props)

    let year = 2017

    if (props.params && props.params.year)
      year = props.params.year

    this.state = {
      year: year,
      members: []
    }

    this.getMembers(year)
  }

  componentWillReceiveProps (nextProps: any) {
    let nextYear: number = parseInt(nextProps.params.year) || 2017
    let year: number = parseInt(this.props.params.year) || this.state.year

    if (nextYear != year) {
      year = nextYear

      this.state = {
        year: year,
        members: this.state.members
      }

      this.getMembers(year)
    }
  }

  private changeTeam(evt: any) {
    this.getMembers(parseInt(evt.target.dataset.year))
  }

  public getMembers (year: number) {
    fetch("/api/v1/members/" + year).then(r => r.json()).then(r => {
      this.setState({
        year: year,
        members: r
      })
    })
  }

  render () {
    let members = this.state.members.map((m: any, i: number) => {
      return (
        <div key={i}><b>{m.name}</b> - {m.role}</div>
      )
    })

    return (
      <div className="page page-team">
        <Breadcrumb routes={['team']} />
        <Section title="The team">
          We have five groups: Control, Perception, Planning, Hardware and Admin. The board consists of the project manager, the deputy project manager, the technical leader and the group leaders. This means that we formally have a quite hierarchical stucture. However, in practice we have a very flat structure where everybody contributes within the areas they want and where attention is needed.
          <SubSection title="Members">
            <Link to="team/2016"><button>2016</button></Link>
            <Link to="team/2017"><button>2017</button></Link>
            {members}
          </SubSection>
        </Section>
      </div>
    )
  }
}

export default TeamPage
