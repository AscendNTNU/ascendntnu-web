import React, { Component } from 'react'

import { Section } from '../PageLayout'
import { Breadcrumb } from '../Common/breadcrumb'
import { API_URL } from '../../constants'
import { SponsorList } from '../Common/sponsorlist'

export class QuotePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: 'Dette vil ergre de store, men enkelte små vil det more',
      author: 'Anders',
      date: '9th of may 1986',
    }
  }

  componentWillReceiveProps(nextProps) {
    fetch(`${API_URL}/quotes/`)
      .then(r => r.json())
      .then(r => {
        console.log(r)
      })
  }

  render() {
    return (
      <div className="page page-sponsors">
        <Section titleText="Quote of the day">
          <div className="center-quote">
            <h3 className="italic-quote">{this.state.quote}</h3>
          </div>
          <div className="quote-author-and-date">
            <p>
              {this.state.author}, {this.state.date}
            </p>
          </div>
        </Section>
        <Section titleText="Our sponsors" className="centered">
          <SponsorList />
        </Section>
      </div>
    )
  }
}

export default QuotePage
