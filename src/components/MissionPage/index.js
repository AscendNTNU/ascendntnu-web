import React, { Component } from 'react'

import { Section, SubSection, SubSubSection } from '../PageLayout'
import { Breadcrumb } from '../Common/breadcrumb'

export class MissionPage extends Component {
  constructor (props) {
    super(props)

    this.missions = [
      {
        titles: ['Mission 7', 'Why is this a challenge?'],
        contents: [
          (
          <div id="mission-7">
            <p>Mission 7 is split into two parts, a and b. Part b will begin when enough teams have completed part a. Here we will give a brief overview of the mission, for a complete version of the rules see <a href="http://www.aerialroboticscompetition.org/rules.php">the official rules</a>.</p>
            <div className="split-img-container">
              <figure className="split-img">
                <img className="img-responsive" alt="Mission start state" src="/public/assets/start-state.png" />
                <figcaption className="text-center">Fig1-a: Start state of the competition</figcaption>
              </figure>
              <figure className="split-img">
                <img className="img-responsive" alt="Desired end state" src="/public/assets/end-state.png" />
                <figcaption className="text-center">Fig1-b: End state of a successful run</figcaption>
              </figure>
            </div>
            <p>The mission takes place indoors on a 20x20 meter grid arena. The square arena has two white edges, one green edge and one red edge, as shown in figure 1. In the middle of the arena, 10 ground robots (Roomba vacuum cleaner robots) start driving from the middle at a speed of 1/3 m/s, outwards towards the edges. The ground robots move in a specific pattern:</p>
            <code>
              Every 20 seconds they rotate 180 degrees.{'\n'}
              Every 5 seconds they rotate a random amount of degrees on the interval [-20, 20].{'\n'}
              If they bump into anything, they rotate 180 degrees.
            </code>
            <span className="img-float-right"></span>
            <figure>
              <img className="img-responsive" alt="Assembled bot" src="/public/assets/assembled_bot_700px.png" />
              <figcaption className="text-center">Fig 2: Ground robot with tactile switch on top</figcaption>
            </figure>
            <p>In addition to the ground robots, there are four obstacle robots. The obstacle robots are Roombas as well, but have a 1-2 meter high pole on top. They are programmed to drive around in a circle, and are there to create havoc. If the drone touches the obstacle robots more than two times the run will be terminated.</p>
            <p>Our drone’s mission is to “herd” or guide these ground robots over the green edge, and to keep them from running over any of the other edges, as shown in figure 2. It has to do this autonomously; we are not allowed to control its movement in any way. To interact with the ground robots we have two possibilities.</p>
            <code>
              Tapping a tactile button on the top of the ground robots, turning them 45 degrees, clockwise.{'\n'}
              Bumping into the groud robots from the front, turning them 180 degrees.
            </code>
            <p></p>
            <div className="split-img-container">
              <figure className="split-img">
                <img className="img-responsive" alt="Test" src="/public/assets/test.png" />
                <figcaption className="text-center">Fig 3-a: Drone landing on the tactile switch</figcaption>
              </figure>
              <figure className="split-img">
                <img className="img-responsive" alt="Desired end state" src="/public/assets/180-degree-turn-cartoon.png" />
                <figcaption className="text-center">Fig 3-b: Drone landing in front of a ground robot</figcaption>
              </figure>
            </div>
            <p>All sensors we use, have to be onboard the drone. We are allowed to have an external machine for number crunching, but other than that the drone act alone. Each run is 10 min long, and each team has three rounds each to try to complete the mission.</p>
            <p>To complete part a of mission 7 we have to herd at least four ground robots to over the green line during one of our runs. Teams who complete part a will move over to part b. Part b is a competition between two teams, where each team have their own "goal side" and try to herd as many ground robots over their own side as possible.</p>
          </div>
        ),
        (
          <div>
            <p>The goal of IARC is to push the limits of autonomous flying vehicles, so what limits are they trying to push with mission 7? The organizers have set up three aspects which the participants will have to master to complete this challenge. Printed as is from the rules we have:</p>
            <code>
              First, interaction between aerial robots and moving objects (specifically, autonomous ground robots). Second, navigation in a sterile environment with no external navigation aids such as GPS or large stationary points of reference such as walls. Third, interaction between competing autonomous air vehicles.
            </code>
            <p></p>
            <SubSubSection titleText="Navigation">
              <p>Let's start with the second aspect: "navigation in a sterile environment with no external navigation aids such as GPS or large stationary points of reference such as walls". Navigation has always been a part of the IARC missions, and have been the main challenge in many of them. In mission 7 they have purposely made many of the existing navigational tools illegal or useless. As the competition is indoors we cannot use GPS, as GPS is highly unreliable indoors, and because it would break the rule of not using external navigation aids. A common technique for flying indoor which does not break this rule is SLAM. SLAM or Simultaneous Localisation And Mapping is a method using lidar or cameras where the drone continuously creates a map of its environment. SLAM works wonderfully when flying in corridors or smaller rooms, as it typically uses walls, columns and other stationary objects to localise itself. Mission 5 and 6 relied heavily on SLAM usage. Mission 7 on the other hand, is designed to render SLAM useless. As the arena is completely flat except the robots, and the robots continuously move in semi random motions, SLAM has no stationary objects navigate by. All in all, to navigate the arena new innovative tools needs to be developed.</p>
              <p>Every square of the grid making up the arena, looks equivalent; the only unique, and stationary features in the whole mission are the corners. As two sides are white, one is blue and another is red (see fig 1), every corner is unique, and if the drones position relative to the corners are known, the drone knows where it is. To fly safely, all the obstacle robots needs to be avoided. The obstacle robots are programmed to drive in a 5m radius circle in the middle of the arena, but from experience, they will stray from the circle every run. On top of everything else, there is a hidden challenge in all of this. As all the sensors are onboard the drone, what we can observe varies with the position and orientation of the drone. If the drone is a couple of meters up in the air, it can observe most of the arena, we can, however not be a couple of meters in the air at all times. Whenever we need to interact with the ground robots the drone has to land, and what we can observe from the cameras is highly reduced.</p>
              <p>To solve these challenges we have developed multiple systems to find global position and avoid collisions. To read about the systems we used in the 2016 competition, check out our summary of last years systems <a href="https://ascendntnu.no/publications/iarc16/">here</a>. More information about this years systems will be published in our <a href="https://ascendntnu.no/blog">blog</a>  after the competition.</p>
            </SubSubSection>
            <SubSubSection titleText="Interaction">
              <p>Moving on to the first aspect: "interaction between aerial robots and moving objects". The tactile switches on the ground robots are ~10cm X 10cm, the ground robots move at a speed of 0.33m/s, and their movement is only deterministic upto 5 seconds at the time. Landing on these robots and pressing the tactile switch is a challenge in its own right, but there are several other challenges to overcome before we can think about landing on the robots. First, the drone must be able to detect and track the ground robots. Then, as there is only 10 minutes to complete the mission, there is not enough time to guide the ground robots over the green line one by one. Therefore the drone needs to be able to plan the best course of action live in a highly dynamic environment. The problem can be modeled as a less known generalisation of the travelling salesman problem called Time-dependent Orienteering Problem with Time Windows (TDOPTW). Read more about TDOPTW in our previous members' <a href="https://brage.bibsys.no/xmlui/handle/11250/2407635">master thesis</a>.</p>
              <p>Another way of characterising the complexity of the task and environment for the classification system introduced in Russell and Norvig (2009) [1]. In the table below we can see the different aspects used to classify the different environments. The left column represents less complexity and the right column represents a higher degree of complexity. As one can see from the checkmarks, IARC scores high on complexity on all fronts. If the system is known or unknown at the moment is arguable, but come part b and the challenge is firmly in the right column.</p>
              <figure>
                <img className="img-responsive" alt="AI classification" src="/public/assets/AI_classification.png" />
                <figcaption className="text-center">Fig 4: AI-environment classification table</figcaption>
              </figure>
              <p>These challenges encompasses all of Ascend's technical groups. To read about how we detect the ground robots read our perception group's <a href="https://ascendntnu.no/blog/2017-03-10-perception-update">blog</a>. Our planning group have been working hard on the drones AI; to read about their approach you can check out <a href="https://ascendntnu.no/blog/2017-02-14-planning-update">part 1</a> and <a href="https://ascendntnu.no/blog/2017-02-20-planning-update">part 2</a>.</p>
            </SubSubSection>
            <SubSubSection titleText="Competing with other drones">
              <p>Moving from part a to part b introduces yet another challenge: interacting with another team's drone. Not only do we have to take into account the randomness presented in the mission itself, but also whatever the other team's drone might do. And their drone moves faster than the ground robots, with unknown behaviour, and in 3 dimensions. All in all the introduction of another drone takes all the challenges of part a and turns them up to 11. The complete set of rules for part b are yet to be published, but we might have some idea on how to confuse the competition.</p>
              <img className="img-responsive" alt="Ground robot drone" src="/public/assets/ground_robot_drone.jpg" />
            </SubSubSection>
          </div>
        )
        ]
      },
      {
        titles: ['Mission 6'],
        contents: [
          (
            <div id="mission-6">
              <p>Mission 6 continued where Mission 5 ended but increased the difficultly by requiring the autonomous robots to interact with their environment. The robots had to locate an opening in a building, enter when a surveillance camera was not looking, navigate crowded hallways, avoid or disable security systems, interpret signage in Arabic, and finally reach a particular room without bumping any walls or landing. From there, the robot had to locate a particular paper inbox containing a flash drive. It had to then retrieve that flash drive, replace it with an identical blank flash drive, and exit the building within a short time span. This mission saw the first dual-venue competition, with simultaneous events occurring in both the United States and China. After three years, a team from Tsinghua University repeatedly demonstrated the entirety of the mission.</p>
            </div>
          )
        ]
      },
      {
        titles: ['Mission 5'],
        contents: [
          (
            <div id="mission-5">
              <p>
                The fifth mission picked up where the fourth mission left off by demonstrating the fully autonomous aerial robotic behaviors necessary to rapidly negotiate the confined internal spaces of a structure. This was a logical next step since the previous mission required a vehicle to enter a building. The nuclear reactor complex explosion scenario of the fourth mission was used as the backdrop for the fifth mission. The fifth mission required a fully autonomous aerial vehicle (presupposed to have been launched from a "mothership" just outside the structure as demonstrated during the fourth mission) to penetrate a structure and negotiate a more complex interior space containing hallways, small rooms, obstacles, and dead ends, in order to search for a designated target without the aid of global-positioning navigational aids. Finally, the aerial robot had to relay pictures of the nuclear control panel to a monitoring station some distance from the structure.</p>
            </div>
          )
        ]
      },
      {
        titles: ['Mission 4'],
        contents: [
          (
            <div id="mission-4">
              <p>This mission involved flying to an abandoned village from a distance of 3 kilometers and identifying a particular structure based on a symbol on the building. Once the structure has been identified, a sensor probe had to be sent into the structure to perform reconnaissance and return video of a particular item of interest. Access to the structure was be through open portals (doors, windows, other openings) that had to be identified by the aerial robots. The total number of portals was not known beforehand. Operation within the structure was required in order to access the desired target. The robot had to relay clear images of the desired target back 3 kilometers to the judges. After seven years of steady progression, a team from the Georgia Institute of Technology completed the entire mission.</p>
            </div>
          )
        ]
      },
      {
        titles: ['Mission 3'],
        contents: [
          (
            <div id="mission-3">
              <p>The third mission began in 1998. It was a search and rescue mission requiring fully autonomous robots to take off, fly to a disaster area, search for survivors and the dead amid raging fires, broken water mains, clouds of toxic gas, and rubble from destroyed buildings. The scenario was recreated at the U.S. Department of Energy's Hazardous Material Management and Emergency Response (HAMMER) training facility where these hazards could be recreated. Because of the realism of the scenario, animatrons were used instead of human actors to simulate survivors that were incapable of extracting themselves from the disaster area. An aerial robot from Germany's Technische Universität Berlin was able to detect and avoid all of the obstacles (many of which could have destroyed the robot itself), identify all the dead on the ground and the survivors (distinguishing between the two based on movement), and relay pictures of the survivors along with their locations back to first responders who would attempt a rescue.</p>
            </div>
          )
        ]
      },
      {
        titles: ['Mission 2'],
        contents: [
          (
            <div id="mission-2">
              <p>The competition mission was then toughened and made a bit less abstract by requiring teams to search for a toxic waste dump, map the location of partially buried, randomly oriented, toxic waste drums, identify the contents of each drum from the hazard labels found somewhere on the outside of each drum, and bring a sample back from one of the drums; all without any human intervention whatsoever. In 1996, a team from the Massachusetts Institute of Technology and Boston University, with backing from Draper Labs, created a small fully autonomous flying robot that repeatedly and correctly mapped the location of all five of the toxic waste drums, and correctly identified the contents of two from the air, thereby completing approximately seventy five percent of the mission. The following year, an aerial robot developed by a team from Carnegie Mellon University completed the entire mission.</p>
            </div>
          )
        ]
      },
      {
        titles: ['Mission 1'],
        contents: [
          (
            <div id="mission-6">
              <p>The initial mission started in 1991 with the goal of moving a metallic disc from one side of an arena to another with a completely autonomous flying robot. This was seen by many as almost impossible for a fully autonomous flying robot. The college teams continued to improve their entries over the next two years. During that time, the competition saw its first autonomous takeoff, flight, and landing by a team from the Georgia Institute of Technology. Three years later, in 1995, a team from Stanford University was able to acquire a single disk and move it from one side of the arena to the other in a fully-autonomous flight half a decade earlier than some pundits had predicted.</p>
            </div>
          )
        ]
      }
    ]
  }

  render () {
    let missions = this.missions.map((e, i) => {
      return e.contents.map((content, k) => (
        <SubSubSection titleText={e.titles[k]} key={k}>{content}</SubSubSection>
      ))
    })

    return (
      <div className="page page-mission">
        <Breadcrumb routes={['mission']} />
        <SubSection className="page-container-big">
         <h1>Missions</h1>

         </SubSection>
        <Section titleText="Who are we">
          <p>Ascend NTNU is a student organization at the Norwegian University of Science and Technology. Ascend NTNU was founded with the primary mission of participating in (and winning) the International Aerial Robotics Competition in 2016 and onwards.</p>
          <SubSection titleText="The International Aerial Competition">
            <p>The International Aerial Competition (IARC) is the longest running collegiate aerial robotics challenge in the world, whose primary goal is to “move the state-of-the-art in aerial robotics forward”. In order to succeed with this ambitious goal, IARC poses challenges deemed “impossible” when introduced. The missions remains the same until one or more teams completes the challenges. The first IARC was held in 1991, and now, 26 years later, 6 missions have been completed; the longest mission running for 8 years before Georgia Institute of Technology solved the mission.</p>
          </SubSection>
          <SubSection titleText="The Missions">
            <p>The missions have evolved with the arrival of new technology to continuously push the limits. Mission 1, issued in 1991, was to move a metallic disc from one side of an arena to another. Not a challenging mission by today's standard, but remove a quarter of a century's worth of technologic development and you have yourself a challenge. In the last mission to be completed, mission 6, it is however, not hard to see the challenge. The description of the mission was:</p>
            <blockquote>The robots had to locate an opening in a building, enter when a surveillance camera was not looking, navigate crowded hallways, avoid or disable security systems, interpret signage in Arabic, and finally reach a particular room without bumping any walls or landing. From there, the robot had to locate a particular paper inbox containing a flash drive. It had to then retrieve that flash drive, replace it with an identical blank flash drive, and exit the building within a short time span.</blockquote>
            <p>After four years, Tsinghua University completed the mission and pushed the competition along. Which brings us to today's challenge, and the mission Ascend NTNU is trying to solve: mission 7.</p>
            <p>For more information and about the different missions read about <a href="http://www.aerialroboticscompetition.org/pastmissions.php">past missions</a> on IARC's webpage.</p>
            {missions}
          </SubSection>
        </Section>
      </div>
    )
  }
}

export default MissionPage
