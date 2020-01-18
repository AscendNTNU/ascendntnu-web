import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { polyfill } from 'es6-promise'
import { Section, SubSection } from '../PageLayout'
import { API_URL, ASSETS_URL } from '../../constants'

polyfill()

/**
 * This is the page for showing team members
 *
 * @export
 * @class TeamPage
 * @extends {Component}
 */
export class TeamPage extends Component {
  constructor(props) {
    super(props)

    let year = 2020
    if (props.match.params && props.match.params.year) {
      year = props.match.params.year
    }

    this.state = {
      year,
      memberCount: 0,
      groups: [],
      memberTitles: {},
    }

    this.getMembers(year)
  }

  /**
   * Changing year if props.match.params has changed. This is to avoid a new route.
   *
   * @param {*} nextProps
   *
   * @memberOf TeamPage
   */
  componentWillReceiveProps(nextProps) {
    let nextYear = parseInt(nextProps.match.params.year, 10) || 2020
    let year = parseInt(this.props.match.params.year, 10) || this.state.year

    if (nextYear !== year) {
      year = nextYear
      this.setState({ year })
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
  changeTeam(evt) {
    this.getMembers(parseInt(evt.target.dataset.year, 10))
  }

  /**
   * Fetch member data from the API based om a year.
   *
   * @param {number} year The year to fetch from.
   *
   * @memberOf TeamPage
   */
  getMembers(year) {
    let setup = process.env.NODE_ENV === 'production' ? {} : { mode: 'cors' }

    fetch(`${API_URL}/titles?title-year_contains=${year}`, setup)
      .then(r => r.json())
      .then(titles => {
        const memberTitles = {}
        for (let title of titles) {
          for (let member of title.members) {
            memberTitles[member.id] = title['title-year'].split('-')[0]
          }
        }
        this.setState({ memberTitles })
      })
    fetch(`${API_URL}/teams?name-year_contains=${year}`, setup)
      .then(r => r.json())
      .then(r => {
        const uniqueMembers = new Set()
        const groups = r
          .map(group => {
            const groupName = group['name-year'].split('-')[0]
            const leader = !!group.leader
              ? {
                  id: group.leader.id,
                  name: group.leader.name,
                  image: group.leader.image,
                  mail: group.leader.mail || '',
                  background: group.leader.background,
                }
              : null
            if (groupName.toLowerCase() !== 'coach' && leader)
              uniqueMembers.add(leader.id)
            const members = group.members
              .filter(member => (leader ? member.id !== leader.id : true))
              .map(({ id, name, image, mail = '', background }) => {
                if (groupName.toLowerCase() !== 'coach') uniqueMembers.add(id)
                return {
                  id,
                  name,
                  image,
                  mail,
                  background,
                }
              })
              .sort((a, b) => (a.name > b.name ? 1 : -1))
            return {
              name: groupName,
              logo: API_URL + (group.logo || { url: '' }).url,
              description: group.description,
              members,
              leader,
            }
          })
          .sort((a, b) => {
            if (a.name.toLowerCase() === 'board') {
              return -1
            }
            if (a.name.toLowerCase() === 'coach') {
              return 1
            }
            if (b.name.toLowerCase() === 'board') {
              return 1
            }
            if (b.name.toLowerCase() === 'coach') {
              return -1
            }

            return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
          })
        this.setState({
          year,
          groups,
          memberCount: uniqueMembers.size,
        })
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
  transformMailAddress(evt) {
    if (evt.target.href)
      evt.target.href = evt.target.href.replace(/\[at\]/g, '@')
  }

  getRole = (group, member, isLeader = false) => {
    if (member.id in this.state.memberTitles) {
      return this.state.memberTitles[member.id]
    }
    if (isLeader) {
      return `${group.name} Leader`
    }
    return `${group.name} Member`
  }

  render() {
    /**
     * Creating team photo on top
     */
    let teamPhoto = (
      <div className="section page-container">
        <img
          src={
            ASSETS_URL +
            '/images/teams/' +
            this.state.year +
            '/ascend-group-' +
            this.state.year +
            '.jpg'
          }
          alt="Team"
          className="responsive-image fullscale-image"
        />
      </div>
    )

    /**
     * Creating the groups to an array of elements.
     */
    let groups = this.state.groups.map((group, n) => {
      const hasLeader = !!group.leader
      let leader = hasLeader ? group.leader : {}
      let mail = ''

      if (hasLeader && leader.mail && leader.mail.length) {
        mail = (
          <div className="team-member-mail">
            <a
              href={'mailto:' + leader.mail}
              onMouseOver={this.transformMailAddress}
            >
              <i className="fa fa-envelope" aria-hidden="true" />
            </a>
          </div>
        )
      }

      const leaderElement = hasLeader ? (
        <div className="team-member team-leader">
          <div className="team-member-image">
            <img src={ASSETS_URL + leader.image} alt={leader.name} />
            {mail}
          </div>
          <div className="team-member-name">{leader.name}</div>
          <div className="team-member-role">
            {this.getRole(group, leader, true)}
          </div>
        </div>
      ) : null

      const memberElementList = group.members.map((member, i) => {
        let mail = ''

        if (member.mail && member.mail.length) {
          mail = (
            <div className="team-member-mail">
              <a
                href={'mailto:' + member.mail}
                onMouseOver={this.transformMailAddress}
              >
                <i className="fa fa-envelope" aria-hidden="true" />
              </a>
            </div>
          )
        }

        return (
          <div key={i} className="team-member">
            <div className="team-member-image">
              <img src={ASSETS_URL + member.image} alt={member.name} />
              {mail}
            </div>
            <div className="team-member-name">{member.name}</div>
            <div className="team-member-role">
              {this.getRole(group, member)}
            </div>
          </div>
        )
      })

      return (
        <SubSection
          key={n}
          className={`teampage-team centered page-container-big${
            hasLeader ? ' has-leader' : ' no-leader'
          }`}
          style={{ backgroundImage: `url(${group.logo})` }}
          data-group={group.name.toLowerCase()}
        >
          <div className="team-leaders">
            {leaderElement}
            <div className="team-description">
              <div className="team-title">{group.name}</div>
              <hr></hr>
              <div className="team-text">{group.description}</div>
            </div>
          </div>
          <div className="team-members">{memberElementList}</div>
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
                <NavLink to="/team/2016" activeClassName="active">
                  <button>2016</button>
                </NavLink>
                <NavLink to="/team/2017" activeClassName="active">
                  <button>2017</button>
                </NavLink>
                <NavLink to="/team/2018" activeClassName="active">
                  <button>2018</button>
                </NavLink>
                <NavLink to="/team/2019" activeClassName="active">
                  <button>2019</button>
                </NavLink>
                <NavLink to="/team/2020" activeClassName="active">
                  <button
                    className={!this.props.match.params.year ? 'active' : ''}
                  >
                    2020
                  </button>
                </NavLink>
              </div>
            </div>
          </SubSection>
          <SubSection className="page-container-big">{teamPhoto}</SubSection>
          <SubSection titleText="Groups" className="page-container-big">
            {this.state.year == 2020
              ? `We currently consist of ${this.state.memberCount} students at NTNU working together to solve IARC´s mission 9 and the AlphaPilot challenge. Our team consists of seven groups: The board, AI, Control, Hardware, Marketing, Perception and AlphaPilot.`
              : ''}
            {groups}
          </SubSection>
        </Section>
      </div>
    )
  }
}

export default TeamPage
