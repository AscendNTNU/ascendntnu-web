import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Section, SubSection } from '../PageLayout'
import { Breadcrumb } from '../Common/breadcrumb'
import { HistoryViewer } from '../Common/historyViewer'
import { ContactInfo } from '../ContactPage'

export class AboutPage extends Component {
  render () {
    return (
      <div className="page page-about">
        <Breadcrumb routes={['about']} />
        <Section titleText="About Us">
          <SubSection titleText="Ascend NTNU - one of Norways most innovative student projects!">
            <p>Ascend NTNU is one of the few aerial robotics teams at <a href="http://www.ntnu.edu/">NTNU</a>. We are working towards becoming the best performing team at the <a href="http://www.aerialroboticscompetition.org/">International Aerial Robotics Competition</a>, American venue. We aim high, work hard and create new and innovative solutions to some of the most challenging problems in cybernetics and autonomy as of today.</p>
            <p>Our group was founded during the spring of 2015. In 2016 we competed and became third in IARC. We are now, again, preparing for a new competition in 2017.</p>
          </SubSection>
          <HistoryViewer />
          <SubSection titleText="Our team and mission">
            <p>We are currently <Link to="/team">28 students</Link> at NTNU studying electronics, computer science, IT, mechanics and cybernetics, working together to solve <a href="http://www.aerialroboticscompetition.org/rules.php">Mission 7a</a>. The mission consists of 3 new major challenges:</p>
            <ul>
              <li>Interaction between aerial robot and moving objects</li>
              <li>Navigation in a sterile environment with no external navigation aids such as GPS or SLAM.</li>
              <li>Interaction between competing autonomous air vehicles (mission 7b).</li>
            </ul>
            <iframe src="https://player.vimeo.com/video/103487384" className="about-mission-video" allowFullScreen></iframe>
            <p><i className="small">"The International Aerial Robotics Competition is the longest running collegiate aerial robotics challenge in the world. Entering the third decade of advancing the state of the art in autonomous aerial robotic behavior, the competition continues to tackle challenges that are currently impossible for any flying robots owned by government or industry."</i> - <a href="http://www.aerialroboticscompetition.org/">www.aerialroboticscompetition.org</a></p>
          </SubSection>
        </Section>
        <ContactInfo />
      </div>
    )
  }
}

export default AboutPage
