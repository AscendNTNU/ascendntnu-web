import React, { Component } from 'react'

import { Section } from '../PageLayout'
import { Breadcrumb } from '../Common/breadcrumb'
import { SponsorList } from '../Common/sponsorlist'

export class SponsorPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      year: props.params.year || 2018,
    }
  }

  changeYear (evt) {
    let year = evt.target.value
    //browserHistory.push('/sponsors/' + year)
    this.setState({
      year: year,
    })
  }

  componentWillReceiveProps (nextProps) {
    let nextYear = parseInt(nextProps.params.year, 10) || 2018
    let year = parseInt(this.props.params.year, 10) || this.state.year

    if (nextYear !== year) {
      year = nextYear

      this.setState({
        year: year,
      })
    }
  }

  render () {
    let title = (
      <span>Our sponsors <select className="select-sponsor select" onChange={this.changeYear.bind(this)} defaultValue={this.state.year + ''}>
        <option value="2016">2016</option>
        <option value="2017">2017</option>
        <option value="2018">2018</option>
      </select>
      </span>
    )

    return (
      <div className="page page-sponsors">
        <Breadcrumb routes={['sponsors']} />
        <Section titleText={title} className="centered page-container-big">
          <SponsorList year={this.state.year} />
        </Section>
      </div>
    )
  }
}

export default SponsorPage
