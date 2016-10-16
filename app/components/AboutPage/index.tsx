import * as React from 'react'

import { Section, SubSection } from '../PageLayout'

export interface AboutPageProps {}

export class AboutPage extends React.Component<AboutPageProps, {}> {
  render () {
    return (
      <div className="page page-about">
        <Section title="About Us">
          <p>Ascend NTNU is a non-profit student organization created to represent the <a href="http://www.ntnu.edu/">Norwegian University Of Science and Technology</a> (NTNU) in the <a href="http://www.aerialroboticscompetition.org/">International Aerial Robotics Competition</a>.</p>
          <p>Ascend was founded during the spring of 2015. In 2016 we competed and became third in IARC. We are now, again, preparing for a new competition in 2017.</p>
          <h3 id="contact-us">Contact us</h3>
          <p>Send an email to <a href="mailto:hi@ascendntnu.no">hi@ascendntnu.no</a>, and we’ll get back to you.</p>
          <h3 id="addresses">Addresses</h3>
          <p>
            <strong>Physical address</strong>, <a href="http://maps.google.com/?q=O.+S.+Bragstads+Plass+2,+7034+Trondheim,+Norway">click here to view in google maps</a>
          </p>
          <address>
            Ascend NTNU<br />
            Gløshaugen<br />
            O.S. Bragstads plass 2 A/B<br />
            7034 Trondheim<br />
            Norway
          </address>

          <p><strong>Postal address</strong></p>
          <address>
            Ascend NTNU<br />
            NTNU Gløshaugen<br />
            7491 Trondheim<br />
            Norway  
          </address>

          <h3 id="organisational-documents">Organisational documents</h3>
          <p>We plan on publishing core organisational documents here as we finish them.</p>

          <ul>
            <li><strong>Our statutes (in norwegian: vedtekter):</strong> Our statutes are available on github in <a href="https://github.com/AscendNTNU/Vedtekter">this repo</a>. <a href="https://github.com/AscendNTNU/Vedtekter/raw/master/vedtekter.pdf">Click here to view the pdf</a>. The statutes are written in Norwegian.</li>
          </ul>

          <h3 id="formal-information-about-ascend-ntnu">Formal information about Ascend NTNU</h3>
          <p>We are registered in <a href="http://www.brreg.no/english/">The Brønnøysund Register Centre</a>. See <a href="http://w2.brreg.no/enhet/sok/detalj.jsp?orgnr=915737641">our listing here</a>.</p>

          <p><strong>Organisational number:</strong> <a href="tel:915737641">915 737 641</a></p>
        </Section>
      </div>
    )
  }
}

export default AboutPage

/*
<div class="col-md-12">
				<header>
					<h1 class="post-title">About</h1>
				</header>
				<article>
				    <p>Ascend NTNU is a non-profit student organization created to represent the <a href="http://www.ntnu.edu/">Norwegian University Of Science and Technology</a> (NTNU) in the <a href="http://www.aerialroboticscompetition.org/">International Aerial Robotics Competition</a>.</p>

<p>Ascend was founded during the spring of 2015. In 2016 we competed and became third in IARC. We are now, again, preparing for a new competition in 2017.</p>

<h3 id="contact-us">Contact us</h3>
<p>Send an email to <a href="mailto:hi@ascendntnu.no">hi@ascendntnu.no</a>, and we’ll get back to you.</p>

<h3 id="addresses">Addresses</h3>
<p><strong>Physical address</strong>, <a href="http://maps.google.com/?q=O.+S.+Bragstads+Plass+2,+7034+Trondheim,+Norway">click here to view in google maps</a>
<!--Bruker HTML-kode i markdown for å kunne address-elementer --></p>
<address>
	Ascend NTNU<br />
	Gløshaugen<br />
	O.S. Bragstads plass 2 A/B<br />
	7034 Trondheim<br />
	Norway
</address>

<p><strong>Postal address</strong></p>
<address>
	Ascend NTNU<br />
	NTNU Gløshaugen<br />
	7491 Trondheim<br />
	Norway  
</address>

<h3 id="organisational-documents">Organisational documents</h3>
<p>We plan on publishing core organisational documents here as we finish them.</p>

<ul>
  <li><strong>Our statutes (in norwegian: vedtekter):</strong> Our statutes are available on github in <a href="https://github.com/AscendNTNU/Vedtekter">this repo</a>. <a href="https://github.com/AscendNTNU/Vedtekter/raw/master/vedtekter.pdf">Click here to view the pdf</a>. The statutes are written in Norwegian.</li>
</ul>

<h3 id="formal-information-about-ascend-ntnu">Formal information about Ascend NTNU</h3>
<p>We are registered in <a href="http://www.brreg.no/english/">The Brønnøysund Register Centre</a>. See <a href="http://w2.brreg.no/enhet/sok/detalj.jsp?orgnr=915737641">our listing here</a>.</p>

<p><strong>Organisational number:</strong> 915 737 641</p>


				</article>			
			</div>*/