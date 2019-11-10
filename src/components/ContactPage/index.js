import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ASSETS_URL } from '../../constants'

import { Section, SubSection } from '../PageLayout'
import { Breadcrumb } from '../Common/breadcrumb'
//import { HistoryViewer } from '../Common/historyViewer'

export class ContactPage extends Component {
  render() {
    return (
      <div className="page page-about">
        <ContactInfo />
      </div>
    )
  }
}

export default ContactPage
//import { Link } from 'react-router-dom'

export class ContactInfo extends Component {
  render() {
    return (
      <div
        class="inner-width"
        style={{
          backgroundImage: `url('${ASSETS_URL}/images/assets/Ciruit.png')`,
        }}
      >
        <h1 class="section-title">More about us</h1>
        <div class="border"></div>
        <div class="services-container">
          <div class="service-box">
            <a href="mailto: jo.johansen@ascendntnu.no ">
              <div class="service-icon">
                <i class="fas fa-male"></i>
              </div>
            </a>
            <h2>
              <div class="service-title">Project Manager</div>
            </h2>
            <div class="service-desc">
              <h4>
                <center>Jo Aleksander</center>
              </h4>
              <br />
              The board is responsible for the whole team. They make sure
              organization is moving forward and plan the future of Ascend.
            </div>
          </div>

          <div class="service-box">
            <a href="mailto: Ingerlovise.fjellgaard@ascendntnu.no">
              <div class="service-icon">
                <i class="fas fa-female"></i>
              </div>
            </a>
            <h2>
              <div class="service-title">Head of Marketing</div>
            </h2>
            <div class="service-desc">
              <h4>
                <center>Inger-Lovise Pleym Fjellgaard </center>
              </h4>
              <br />
              Marketing is the group responsible for making Ascend visible on
              campus and spreading Ascends vision to the world.
            </div>
          </div>

          <div class="service-box">
            <a href="mailto: paul.frivold@ascendntnu.no ">
              <div class="service-icon">
                <i class="fas fa-male"></i>
              </div>
            </a>
            <h2>
              <div class="service-title">AlphaPilot Leader</div>
            </h2>
            <div class="service-desc">
              <h4>
                <center>Paul Erik Frivold</center>
              </h4>
              <br />
              The Alpha Pilot team aims to develop and create Scandinavia’s
              first ever autonomous racing drone!
            </div>
          </div>

          <div class="service-box">
            <a href="https://www.google.com/maps/place/Ascend+NTNU/@63.4186185,10.4009943,19z/data=!3m1!4b1!4m5!3m4!1s0x466d3195aefc6cbf:0x353c741de61a935b!8m2!3d63.4186179!4d10.4015415">
              <div class="service-icon">
                <i class="fas fa-map-pin"></i>
              </div>
            </a>
            <h2>
              <div class="service-title">You can find us here</div>
            </h2>
            <div class="service-desc">
              Ascend NTNU, Gløshaugen O.S. Bragstads plass 2 A/B, 7034 Trondheim
              Norway
            </div>
          </div>

          <div class="service-box">
            <a src="https://ascend-webassets.fra1.cdn.digitaloceanspaces.com/images/assets/Nyhetsbrev_finalfinal.pdf">
              <div class="service-icon">
                <i class="fas fa-newspaper"></i>
              </div>
            </a>
            <h2>
              <div class="service-title">Our newspaper</div>
            </h2>
            <div class="service-desc">
              Read our new newspaper and find out more about our team leaders
            </div>
          </div>

          <div class="service-box">
            <Link to="blog">
              <div class="service-icon">
                <i class="fas fa-blog"></i>
              </div>
            </Link>
            <h2>
              <div class="service-title">Follow our journey</div>
            </h2>
            <div class="service-desc">
              Follow our journey to the competition with our blog to keep you
              updated on everything that have happend with our drones
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    )
  }
}

export class ContactUs extends Component {
  render() {
    return (
      <SubSection titleText="Contact us">
        <p>
          Send an email to{' '}
          <a href="mailto:hi@ascendntnu.no">hi@ascendntnu.no</a>, and we’ll get
          back to you.
        </p>
      </SubSection>
    )
  }
}

export class Addresses extends Component {
  render() {
    return (
      <SubSection titleText="Addresses">
        <p>
          <strong>Postal address</strong>,{' '}
          <a href="http://maps.google.com/?q=O.+S.+Bragstads+Plass+2,+7034+Trondheim,+Norway">
            click here to view in google maps
          </a>
        </p>
        <address>
          Ascend NTNU
          <br />
          Gløshaugen
          <br />
          O.S. Bragstads plass 2 A/B
          <br />
          7034 Trondheim
          <br />
          Norway
        </address>

        <p>
          <strong>Physical address</strong>
        </p>
        <address>
          Ascend NTNU
          <br />
          EL-bygget, NTNU Gløshaugen
          <br />
          7491 Trondheim
          <br />
          Norway
        </address>
      </SubSection>
    )
  }
}

export class OrganisationalDocuments extends Component {
  render() {
    return (
      <SubSection titleText="Organisational documents">
        <p>
          We plan on publishing core organisational documents here as we finish
          them.
        </p>
        <ul>
          <li>
            <strong>Our statutes (in norwegian: vedtekter):</strong> Our
            statutes are available on github in{' '}
            <a href="https://github.com/AscendNTNU/Vedtekter">this repo</a>.{' '}
            <a href="https://github.com/AscendNTNU/Vedtekter/raw/master/vedtekter.pdf">
              Click here to view the pdf
            </a>
            . The statutes are written in Norwegian.
          </li>
        </ul>
      </SubSection>
    )
  }
}

export class FormalInfo extends Component {
  render() {
    return (
      <SubSection titleText="Formal information about Ascend NTNU">
        <p>
          We are registered in{' '}
          <a href="http://www.brreg.no/english/">
            The Brønnøysund Register Centre
          </a>
          . See{' '}
          <a href="http://w2.brreg.no/enhet/sok/detalj.jsp?orgnr=915737641">
            our listing here
          </a>
          .
        </p>
        <p>
          <strong>Organisational number:</strong>{' '}
          <a href="tel:99521772">995 21 772</a>
        </p>
      </SubSection>
    )
  }
}
