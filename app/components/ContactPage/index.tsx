import * as React from 'react'
import { Link } from 'react-router'

import { Section, SubSection } from '../PageLayout'
import { Breadcrumb } from '../Common/breadcrumb'
import { HistoryViewer } from '../Common/historyViewer'

export class ContactPage extends React.Component<{}, {}> {
  render () {
    return (
      <div className="page page-about">
        <Breadcrumb routes={['about']} />
        <ContactInfo />
      </div>
    )
  }
}

export default ContactPage


export class ContactInfo extends React.Component<{}, {}> {
  render () {
    return (
      <Section titleText="Contact Info">
        <ContactUs />
        <Addresses />
        <OrganisationalDocuments />
        <FormalInfo />
      </Section>
    )
  }
}

export class ContactUs extends React.Component<{}, {}> {
  render () {
    return (
      <SubSection titleText="Contact us">
        <p>Send an email to <a href="mailto:hi@ascendntnu.no">hi@ascendntnu.no</a>, and we’ll get back to you.</p>
      </SubSection>
    )
  }
}

export class Addresses extends React.Component<{}, {}> {
  render () {
    return (
      <SubSection titleText="Addresses">
        <p>
          <strong>Postal address</strong>, <a href="http://maps.google.com/?q=O.+S.+Bragstads+Plass+2,+7034+Trondheim,+Norway">click here to view in google maps</a>
        </p>
        <address>
          Ascend NTNU<br />
          Gløshaugen<br />
          O.S. Bragstads plass 2 A/B<br />
          7034 Trondheim<br />
          Norway
        </address>

        <p><strong>Physical address</strong></p>
        <address>
          Ascend NTNU<br />
          EL-bygget, NTNU Gløshaugen<br />
          7491 Trondheim<br />
          Norway
        </address>
      </SubSection>
    )
  }
}

export class OrganisationalDocuments extends React.Component<{}, {}> {
  render () {
    return (
      <SubSection titleText="Organisational documents">
        <p>We plan on publishing core organisational documents here as we finish them.</p>
        <ul>
          <li><strong>Our statutes (in norwegian: vedtekter):</strong> Our statutes are available on github in <a href="https://github.com/AscendNTNU/Vedtekter">this repo</a>. <a href="https://github.com/AscendNTNU/Vedtekter/raw/master/vedtekter.pdf">Click here to view the pdf</a>. The statutes are written in Norwegian.</li>
        </ul>
      </SubSection>
    )
  }
}

export class FormalInfo extends React.Component<{}, {}> {
  render () {
    return (
      <SubSection titleText="Formal information about Ascend NTNU">
        <p>We are registered in <a href="http://www.brreg.no/english/">The Brønnøysund Register Centre</a>. See <a href="http://w2.brreg.no/enhet/sok/detalj.jsp?orgnr=915737641">our listing here</a>.</p>
        <p><strong>Organisational number:</strong> <a href="tel:915737641">915 737 641</a></p>
      </SubSection>
    )
  }
}
