import * as React from 'react'

import { Section, SubSection, SubSubSection } from '../PageLayout'
import { Breadcrumb } from '../Common/breadcrumb'

export interface MissionPageProps {}

export class MissionPage extends React.Component<MissionPageProps, {}> {
  private missions: any

  constructor (props: any) {
    super(props)
    this.missions = [
      {
        title: 'Mission 7',
        content: (
          <div>
            <p>Mission 7 is split into two parts, a and b. Part b will begin when enough teams have completed part a. Here we will give a brief overview of the mission, for a complete version of the rules see [the official rules](http://www.aerialroboticscompetition.org/rules.php).</p>
            <p>The mission takes place indoors on a 20x20 meter grid arena. The square arena has two white edges, one green edge and one red edge, as shown in figure 1. In the middle of the arena, 10 ground robots (Roomba vacuum cleaner robots) start driving from the middle at a speed of 1/3 m/s, outwards towards the edges. The ground robots move in a specific pattern:</p>
            <code>
              Every 20 seconds they rotate 180 degrees.{'\n'}
              Every 5 seconds they rotate a random amount of degrees on the interval [-20, 20].{'\n'}
              If they bump into anything, they rotate 180 degrees.
            </code>
            <p>In addition to the grond robots, there are four obstacle robots. The obstacle robots are Roombas as well, but have a 1-2 meter high pole on top. They are programmed to drive around in a circle, and are there to create havoc. If the drone touches the obstacle robots more than two times the run will be terminated.</p>
            <p>Our drone’s mission is to “herd” or guide these ground robots over the green edge, and to keep them from running over any of the other edges, as shown in figure 2. It has to do this autonomously; we are not allowed to control its movement in any way. To interact with the ground robots we have two possibilities.</p>
            <code>
              Tapping a tactile button on the top of the ground robots, turning them 45 degrees, clockwise.{'\n'}
              Bumping into the groud robots from the front, turning them 180 degrees.
            </code>
            <p>All sensors we use have to be onboard the drone. We are allowed to have an external machine for numbercrunching, but otherwise the drone act alone. Each run is 10min long, and each team has three rund each to try to complete the mission.</p>
            <p>To complete part a of mission 7 we have to herd atleast four ground robots to over the green line during one of our runs. Teams who complete part a will move over to part b. Part b is a competition between two teams, where each team have their own "goal side" and try to herd as many ground robots over their own side as possible.</p>
          </div>
        )
      }
    ]
  }

  render () {
    let missions: any = this.missions.map((e: any) => (
        <SubSubSection title={e.title}>{e.content}</SubSubSection>
    ))

    return (
      <div className="page page-mission">
        <Breadcrumb routes={['missions']} />
        <Section title="Who are we">
          <p>Ascend NTNU is a student organization at the Norwegian University of Science and Technology. Ascend NTNU was founded with the primary mission of participating in (and winning) the International Aerial Robotics Competition (IARC) in 2016 and onwards.</p>
          <SubSection title="The International Aerial Competition">
            <p>The International Aerial Competition (IARC) is the longest running collegiate aerial robotics challenge in the world, whose primary goal is to “move the state-of-the-art in aerial robotics forward”. In order to succeed with this ambitious goal, IARC poses challenges deemed “impossible” when introduced. The missions remains the same until one or more teams completes the challenges. The first IARC was held in 1991, and now, 26 years later, 6 missions have been completed; the longest mission running for 8 years before Georgia Institute of Technology solved the mission.</p>
          </SubSection>
          <SubSection title="The Missions">
            <p>The missions have evolved with the arrival of new technology to continously push the limits. Mission 1, issued in 1991, was to move a metallic disc from one side of an arena to another. Not a challenging misson by today's standard, but remove a quarter of a century's worth of technologic development and you have yourself a challenge. In the last mission to be completed, mission 6, it is however not hard to see the challenge. The descripion of the mission was:</p>
            <blockquote>The robots had to locate an opening in a building, enter when a surveillance camera was not looking, navigate crowded hallways, avoid or disable security systems, interpret signage in Arabic, and finally reach a particular room without bumping any walls or landing. From there, the robot had to locate a particular paper inbox containing a flash drive. It had to then retrieve that flash drive, replace it with an identical blank flash drive, and exit the building within a short time span.</blockquote>
            <p>After four years, Tsinghua University completed the mission and pushed the competition along. Which brings us to todays challenge, and the mission Ascend NTNU is trying to solve: mission 7.</p>
            <p>For more information and about the different missions see [past missions](http://www.aerialroboticscompetition.org/pastmissions.php).</p>
            {missions}
          </SubSection>
        </Section>
      </div>
    )
  }
}

export default MissionPage
