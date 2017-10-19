import * as React from 'react'

import { Section, SubSection, SubSubSection } from '../PageLayout'
import { Link, IndexLink } from 'react-router'
import { Breadcrumb } from '../Common/breadcrumb'

export interface MissionPageProps {}

export class MissionPage extends React.Component<MissionPageProps, {}> {
  private missions: any

  constructor (props: MissionPageProps) {
    super(props)

    this.missions = [
      {
        titles: ['Mission 7', 'Why is this a challenge?'],
        contents: [
          (
          <div>
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
      }
    ]
  }

  render () {
    let missions: any = this.missions.map((e: any, i: number) => {
      return e.contents.map((content: any, k: number) => (
        <SubSubSection titleText={e.titles[k]} key={k}>{content}</SubSubSection>
      ))
    })

    return (
      <div className="page page-mission">
        <Breadcrumb routes={['mission']} />
        {/*<SubSection className="page-container-big">
         <h1>Missions</h1>
         <Link to="/team/2016" activeClassName="active"><button>1</button></Link>
         <Link to="/team/2017" activeClassName="active"><button>2</button></Link>
         <Link to="/team/2016" activeClassName="active"><button>3</button></Link>
         <Link to="/team/2017" activeClassName="active"><button>4</button></Link>
         <Link to="/team/2016" activeClassName="active"><button>5</button></Link>
         <Link to="/team/2017" activeClassName="active"><button>6</button></Link>
         <Link to="/team/2018" activeClassName="active"><button className="active">7</button></Link>
         </SubSection>*/}
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
