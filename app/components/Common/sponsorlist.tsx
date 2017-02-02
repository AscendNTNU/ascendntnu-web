import * as React from 'react'
import { polyfill } from 'es6-promise';
polyfill();

export interface SponsorListProps {
  year?: number,
}

export interface SponsorListState {
  year?: number,
  sponsors: any[],
}

export class SponsorList extends React.Component<SponsorListProps, SponsorListState> {
  constructor (props: any) {
    super(props)

    this.state = {
      year: props.year || 2016,
      sponsors: []
    }

    this.getSponsors(this.state.year)
  }

  componentWillReceiveProps (nextProps: any) {
    let nextYear: number = nextProps.year || 2016
    let year: number = this.props.year || this.state.year

    if (nextYear != year) {
      year = nextYear
      this.getSponsors(year)
    }
  }

  public getSponsors (year: number) {
    fetch("/api/v1/sponsors/" + year).then(r => r.json()).then(r => {
      this.setState({
        year: year,
        sponsors: r
      })
    })
  }

  render() {
    let sponsors = this.state.sponsors.map((sponsor: any, i: number) => {
      return (
        <div key={i} className="sponsor">
          <a href={sponsor.link} className="sponsor-adblock-link">
            <img src={sponsor.logo} title={sponsor.name} />
          </a>
          <div className="sponsor-adblock-text">
            {sponsor.short_text}
          </div>
        </div>
      )
    })

    return (
      <div className="sponsors">
        {sponsors}
      </div>
    )
  }
}

export default SponsorList
