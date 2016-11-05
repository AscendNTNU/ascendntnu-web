import * as React from 'react'

import Splash from './splash'
import { Section, SubSection } from '../PageLayout'

export interface FrontPageState {
  year: number,
  sponsors: any[],
}

export class FrontPage extends React.Component<{}, FrontPageState> {
  constructor (props: any) {
    super(props)

    this.state = {
      year: 2016,
      sponsors: []
    }

    this.getSponsors(2016)
  }

  public getSponsors (year: number) {
    fetch("/api/v1/sponsors/" + year).then(r => r.json()).then(r => {
      this.setState({
        year: year,
        sponsors: r
      })
    })
  }

  render () {
    let sponsors = this.state.sponsors.map((sponsor: any, i: number) => {
      console.log(sponsor)
      return (
        <div key={i} className="sponsor">
          <a href={sponsor.link} className="sponsor-link">
            <img src={sponsor.logo} title={sponsor.name} />
          </a>
          <div className="sponsor-text">
            {sponsor.short_text}
          </div>
        </div>
      )
    })

    return (
      <div className="page page-front">
        <Splash />
        <Section title="Our sponsors" className="centered">
          <div className="sponsors">
            {sponsors}
          </div>
        </Section>
      </div>
    )
  }
}

export default FrontPage
