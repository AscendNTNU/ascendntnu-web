import * as React from 'react'
import { Link, IndexLink } from 'react-router'
import { polyfill } from 'es6-promise'
polyfill()

import { Section, SubSection } from '../PageLayout'
import { Breadcrumb } from '../Common/breadcrumb'

export interface TeamPageProps {
  params?: any & {
    year?: number,
  }
}

export interface TeamPageState {
  year: number,
  grouping: RegExp,
  members: any[],
  groups: string[],
}

/**
 * This is the page for showing team members
 * 
 * @export
 * @class TeamPage
 * @extends {React.Component<TeamPageProps, TeamPageState>}
 */
export class TeamPage extends React.Component<TeamPageProps, TeamPageState> {
  private groupings: any
  private groupTexts: any

  constructor(props: any){
    super(props)

    let year = 2018
    this.groupings = {
      '2016': new RegExp('Admin|Control|Perception|AI', 'i'),
      '2017': new RegExp('Admin|Control|Perception|AI|Hardware', 'i'),
      '2018': new RegExp('', 'i'),
    }
    this.groupTexts = {
      'Admin': 'Admin is the group responsible for the whole team. We plan the future of Ascend and try to make the whole team visible on NTNU.',
      'Control': 'The control group takes care of all the physical aspects of the drone. Bridging the gap between commands and actions.',
      'Perception': 'State estimation of the drone and beyond. The perception group converts sensor input to meaningful information about the drone and its environment.',
      'Planning': 'Finding the optimal behaviour to solve the mission at hand. The Planning group takes the latest AI research from theory to practice.',
      'AI': 'Finding the optimal behaviour to solve the mission at hand. The AI group takes the latest AI research from theory to practice.',
      'Hardware': 'The hardware group is responsible for the design of the drone. Material choice, strength calculations, electrical, aerodynamics, propulsion and production.',
    }

    if (props.params && props.params.year)
      year = props.params.year

    this.state = {
      year: year,
      grouping: this.groupings[year],
      members: [],
      groups: [],
    }

    this.getMembers(year)
  }

  /**
   * Changing year if props.params has changed. This is to avoid a new route.
   * 
   * @param {*} nextProps
   * 
   * @memberOf TeamPage
   */
  componentWillReceiveProps (nextProps: any) {
    let nextYear: number = parseInt(nextProps.params.year) || 2018
    let year: number = parseInt(this.props.params.year) || this.state.year

    if (nextYear != year) {
      year = nextYear

      this.state = {
        year: year,
        grouping: this.groupings[year],
        members: this.state.members,
        groups: this.state.groups,
      }

      this.getMembers(year)
    }
  }

  /**
   * Change team based from a button with a year as a dataset.
   * 
   * @private
   * @param {*} evt The mouseevent from the button which executed the action.
   * 
   * @memberOf TeamPage
   */
  private changeTeam(evt: any) {
    this.getMembers(parseInt(evt.target.dataset.year))
  }

  /**
   * Fetch member data from the API based om a year.
   * 
   * @param {number} year The year to fetch from.
   * 
   * @memberOf TeamPage
   */
  public getMembers (year: number) {
      fetch("/api/v1/members/" + year).then(r => r.json()).then(r => {
          if (r !== null) {
              let groups: string[] = []
              r.forEach((m: any, i: number) => {
                  let g = m.group.split(/, ?/)
                  for (let i: number = 0; i < g.length; i++) {
                      if (groups.indexOf(g[i]) === -1)
                          groups.push(g[i])
                  }
              })


              this.setState({
                  year: year,
                  grouping: this.groupings[year],
                  members: r.sort((a: any, b: any) => {
                      return a.name > b.name ? 1 : -1
                  }),
                  groups: groups.sort((a: any, b: any) => {
                      return a.toLowerCase() > b.toLowerCase() ? 1 : -1
                  }),
              })
          }
          else {
              this.setState({
                  year: year,
                  grouping: this.groupings[year],
                  members: [],
                  groups: [],
              })
          }
      })

  }

  /**
   * Transformes the mail address to avoid bots from reading the plain address.
   * Since the user allways is going to hover the mouse over the mail, we transform the
   * address according to that.
   * 
   * @private
   * @param {*} evt Should be a mouse over event.
   * @returns
   * 
   * @memberOf TeamPage
   */
  private transformMailAddress (evt: any): void {
    if (evt.target.href)
      evt.target.href = evt.target.href.replace(/\[at\]/g, '@')
  }

  render () {

      /**
       * Creating team photo on top
        */
      let team_photo: any = (
        <div className="section page-container">

          <img src={"/images/teams/" + this.state.year + "/ascend-group-" + this.state.year + ".jpg"} style={ { width: "inherit", maxWidth: "100%", height: "inherit !important", maxHeight: "100%" } } className="responsive-image" />
        </div>
      );

      /**
       * Creating the groups to an array of elements.
       */
      let groups: any = this.state.groups
          .filter((group: any) => this.state.grouping.test(group))
          .map((group: any, n: number) => {

              /**
               * Adding leader(s) to an own list on each group.
               */
              let leader: any = this.state.members
                  .filter((m: any) => {
                      return m.group.indexOf(group) !== -1 && m.group.indexOf('Leader') !== -1
                  })
                  .map((m: any, i: number) => {
                      let mail: any;

                      if (m.mail && m.mail.length) {
                          mail = (
                              <div className="team-member-mail">
                                  <a href={'mailto:' + m.mail} onMouseOver={this.transformMailAddress}>
                                      <i className="fa fa-envelope" aria-hidden="true"></i>
                                  </a>
                              </div>
                          )
                      }

                      return (
                          <div key={i} className="team-member team-leader">
                              <div className="team-member-image">
                                  <img src={m.image}/>
                                  {mail}
                              </div>
                              <div className="team-member-name">{m.name}</div>
                              <div className="team-member-role">{m.role}</div>
                          </div>
                      )
                  })

              /**
               * Adding the rest of the members which is not a leader.
               */
              let members: any = this.state.members
                  .filter((m: any) => {
                      return m.group.indexOf(group) !== -1 && m.group.indexOf('Leader') == -1
                  })
                  .map((m: any, i: number) => {
                      let mail: any;

                      if (m.mail && m.mail.length) {
                          mail = (
                              <div className="team-member-mail">
                                  <a href={'mailto:' + m.mail} onMouseOver={this.transformMailAddress}>
                                      <i className="fa fa-envelope" aria-hidden="true"></i>
                                  </a>
                              </div>
                          )
                      }

                      return (
                          <div key={i} className="team-member">
                              <div className="team-member-image">
                                  <img src={m.image}/>
                                  {mail}
                              </div>
                              <div className="team-member-name">{m.name}</div>
                              <div className="team-member-role">{m.role}</div>
                          </div>
                      )
                  })

              return (
                  <SubSection key={n} className="teampage-team centered page-container-big"
                              data-group={group.toLowerCase()}>
                      <div className="team-leaders">
                          {leader}
                          <div className="team-description">
                              <div className="team-title">{group}</div>
                              <div className="team-text">{this.groupTexts[group]}</div>
                          </div>
                      </div>
                      <div className="team-members">{members}</div>
                  </SubSection>
              )
          })

    return (
      <div className="page page-team">
        <Section className="page-container-big">
          <SubSection className="page-container-big">
              <div className="team-page-header">
                <div>
                  <h1>The Team</h1>
                </div>
                <div>
                  <Link to="/team/2016" activeClassName="active"><button>2016</button></Link>
                  <Link to="/team/2017" activeClassName="active"><button>2017</button></Link>
                  <IndexLink to="/team/2018" activeClassName="active"><button className={this.props.params.year ? '' : 'active'}>2018</button></IndexLink>
                </div>
              </div>
          </SubSection>
          <SubSection className="page-container-big">
            {team_photo}
          </SubSection>
          <SubSection titleText="Groups" className="page-container-big">
            We have five groups: Control, Perception, AI, Hardware and Admin. The board consists of the project manager, the deputy project manager, the technical leader and the group leaders. This means that we formally have a quite hierarchical stucture. However, in practice we have a very flat structure where everybody contributes within the areas they want and where attention is needed.
            {groups}
          </SubSection>
        </Section>
      </div>
    )
  }
}

export default TeamPage

