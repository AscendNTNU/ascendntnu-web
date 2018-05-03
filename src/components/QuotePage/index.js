import React, { Component } from 'react'

import { Section } from '../PageLayout'
import { Breadcrumb } from '../Common/breadcrumb'
import { API_URL } from '../../constants'

export class QuotePage extends Component {
  constructor(props) {
    this.state = {
      quote: "No pain, no gain",
      author: "Anders",
    }
    super(props)
  }

  componentWillReceiveProps(nextProps) {
    fetch(`${API_URL}/members/`)
      .then(r => r.json())
        .then(r => {
          console.log(r)
      })
    
  }

  render() {
    return (
      <div className="page page-sponsors">
        <Breadcrumb routes={['quotes']} />
      </div>
    )
  }
}

export default QuotePage
