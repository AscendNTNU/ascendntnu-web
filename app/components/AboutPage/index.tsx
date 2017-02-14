import * as React from 'react'
import { Link } from 'react-router'

import { Section, SubSection } from '../PageLayout'
import { Breadcrumb } from '../Common/breadcrumb'
import { HistoryViewer } from '../Common/historyViewer'

export interface AboutPageProps {}

export class AboutPage extends React.Component<AboutPageProps, {}> {
  render () {
    return (
      <div className="page page-about">
        <Breadcrumb routes={['about']} />
        <Section title="About Us">
          <SubSection title="Ascend NTNU - one of  Norways most innovative student projects!">
            <p>Ascend NTNU is one of the few aerial robotics teams at <a href="http://www.ntnu.edu/">NTNU</a>. We are working towards becoming the best performing team at the <a href="http://www.aerialroboticscompetition.org/">International Aerial Robotics Competition</a>, American venue. We aim high, work hard and create new and innovative solutions to some of the most challenging problems in cybernetics and autonomy as of today.</p>

            <p>Our group was founded during the spring of 2015. In 2016 we competed and became third in IARC. We are now, again, preparing for a new competition in 2017.</p>
          </SubSection>

          {/*<HistoryViewer />*/}

          <SubSection title="Our team and mission">
            <p>We are currently <Link to="/team">28 students</Link> at NTNU studying electronics, computer science, IT, mechanics and cybernetics, working together to solve <a href="http://www.aerialroboticscompetition.org/rules.php">Mission 7a</a>. The mission consists of 3 new major challenges:</p>
            <ul>
              <li>Interaction between aerial robot and moving objects</li>
              <li>Navigation in a sterile environment with no external navigation aids such as GPS or SLAM.</li>
              <li>Interaction between competing autonomous air vehicles (mission 7b).</li>
            </ul>
            <iframe src="https://player.vimeo.com/video/103487384" className="about-mission-video" allowFullScreen></iframe>
            <p><i className="small">"The International Aerial Robotics Competition is the longest running collegiate aerial robotics challenge in the world. Entering the third decade of advancing the state of the art in autonomous aerial robotic behavior, the competition continues to tackle challenges that are currently impossible for any flying robots owned by government or industry."</i> - <a href="http://www.aerialroboticscompetition.org/">www.aerialroboticscompetition.org</a></p>
          </SubSection>

          <SubSection title="Contact us">
            <p>Send an email to <a href="mailto:hi@ascendntnu.no">hi@ascendntnu.no</a>, and we’ll get back to you.</p>
          </SubSection>

          <SubSection title="Addresses">
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
          </SubSection>

          <SubSection title="Organisational documents">
            <p>We plan on publishing core organisational documents here as we finish them.</p>
            <ul>
              <li><strong>Our statutes (in norwegian: vedtekter):</strong> Our statutes are available on github in <a href="https://github.com/AscendNTNU/Vedtekter">this repo</a>. <a href="https://github.com/AscendNTNU/Vedtekter/raw/master/vedtekter.pdf">Click here to view the pdf</a>. The statutes are written in Norwegian.</li>
            </ul>
          </SubSection>

          <SubSection title="Formal information about Ascend NTNU">
            <p>We are registered in <a href="http://www.brreg.no/english/">The Brønnøysund Register Centre</a>. See <a href="http://w2.brreg.no/enhet/sok/detalj.jsp?orgnr=915737641">our listing here</a>.</p>

            <p><strong>Organisational number:</strong> <a href="tel:915737641">915 737 641</a></p>
          </SubSection>
        </Section>
      </div>
    )
  }
}

export default AboutPage
