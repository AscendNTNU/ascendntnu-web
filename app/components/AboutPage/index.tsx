import * as React from 'react'

export interface AboutPageProps {}

export class AboutPage extends React.Component<AboutPageProps, {}> {
  render () {
    return (
      <div className="page page-about">
        <h2>About page.</h2>
      </div>
    )
  }
}

export default AboutPage
