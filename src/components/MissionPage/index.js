import React, { Component } from 'react'

import { Section, SubSection, SubSubSection } from '../PageLayout'
import { Breadcrumb } from '../Common/breadcrumb'
import { ASSETS_URL } from '../../constants'

export class MissionPage extends Component {
  constructor(props) {
    super(props)

    this.missions = [
      {
        titles: ['Mission 7', 'Why is this a challenge?'],
        contents: [
          <div id="mission-7">
            <p>
              Mission 7 is split into two parts, a and b. Part b will begin when
              enough teams have completed part a. Here we will give a brief
              overview of the mission, for a complete version of the rules see{' '}
              <a href="http://www.aerialroboticscompetition.org/rules.php">
                the official rules
              </a>
              .
            </p>
            <div className="split-img-container">
              <figure className="split-img">
                <img
                  className="img-responsive"
                  alt="Mission start state"
                  src="/public/assets/start-state.png"
                />
                <figcaption className="text-center">
                  Fig1-a: Start state of the competition
                </figcaption>
              </figure>
              <figure className="split-img">
                <img
                  className="img-responsive"
                  alt="Desired end state"
                  src="/public/assets/end-state.png"
                />
                <figcaption className="text-center">
                  Fig1-b: End state of a successful run
                </figcaption>
              </figure>
            </div>
            <p>
              The mission takes place indoors on a 20x20 meter grid arena. The
              square arena has two white edges, one green edge and one red edge,
              as shown in figure 1. In the middle of the arena, 10 ground robots
              (Roomba vacuum cleaner robots) start driving from the middle at a
              speed of 1/3 m/s, outwards towards the edges. The ground robots
              move in a specific pattern:
            </p>
            <code>
              Every 20 seconds they rotate 180 degrees.{'\n'}
              Every 5 seconds they rotate a random amount of degrees on the
              interval [-20, 20].{'\n'}
              If they bump into anything, they rotate 180 degrees.
            </code>
            <span className="img-float-right" />
            <figure>
              <img
                className="img-responsive"
                alt="Assembled bot"
                src="/public/assets/assembled_bot_700px.png"
              />
              <figcaption className="text-center">
                Fig 2: Ground robot with tactile switch on top
              </figcaption>
            </figure>
            <p>
              In addition to the ground robots, there are four obstacle robots.
              The obstacle robots are Roombas as well, but have a 1-2 meter high
              pole on top. They are programmed to drive around in a circle, and
              are there to create havoc. If the drone touches the obstacle
              robots more than two times the run will be terminated.
            </p>
            <p>
              Our drone’s mission is to “herd” or guide these ground robots over
              the green edge, and to keep them from running over any of the
              other edges, as shown in figure 2. It has to do this autonomously;
              we are not allowed to control its movement in any way. To interact
              with the ground robots we have two possibilities.
            </p>
            <code>
              Tapping a tactile button on the top of the ground robots, turning
              them 45 degrees, clockwise.{'\n'}
              Bumping into the groud robots from the front, turning them 180
              degrees.
            </code>
            <p />
            <div className="split-img-container">
              <figure className="split-img">
                <img
                  className="img-responsive"
                  alt="Test"
                  src="/public/assets/test.png"
                />
                <figcaption className="text-center">
                  Fig 3-a: Drone landing on the tactile switch
                </figcaption>
              </figure>
              <figure className="split-img">
                <img
                  className="img-responsive"
                  alt="Desired end state"
                  src="/public/assets/180-degree-turn-cartoon.png"
                />
                <figcaption className="text-center">
                  Fig 3-b: Drone landing in front of a ground robot
                </figcaption>
              </figure>
            </div>
            <p>
              All sensors we use, have to be onboard the drone. We are allowed
              to have an external machine for number crunching, but other than
              that the drone act alone. Each run is 10 min long, and each team
              has three rounds each to try to complete the mission.
            </p>
            <p>
              To complete part a of mission 7 we have to herd at least four
              ground robots to over the green line during one of our runs. Teams
              who complete part a will move over to part b. Part b is a
              competition between two teams, where each team have their own
              "goal side" and try to herd as many ground robots over their own
              side as possible.
            </p>
          </div>,
          <div>
            <p>
              The goal of IARC is to push the limits of autonomous flying
              vehicles, so what limits are they trying to push with mission 7?
              The organizers have set up three aspects which the participants
              will have to master to complete this challenge. Printed as is from
              the rules we have:
            </p>
            <code>
              First, interaction between aerial robots and moving objects
              (specifically, autonomous ground robots). Second, navigation in a
              sterile environment with no external navigation aids such as GPS
              or large stationary points of reference such as walls. Third,
              interaction between competing autonomous air vehicles.
            </code>
            <p />
            <SubSubSection titleText="Navigation">
              <p>
                Let's start with the second aspect: "navigation in a sterile
                environment with no external navigation aids such as GPS or
                large stationary points of reference such as walls". Navigation
                has always been a part of the IARC missions, and have been the
                main challenge in many of them. In mission 7 they have purposely
                made many of the existing navigational tools illegal or useless.
                As the competition is indoors we cannot use GPS, as GPS is
                highly unreliable indoors, and because it would break the rule
                of not using external navigation aids. A common technique for
                flying indoor which does not break this rule is SLAM. SLAM or
                Simultaneous Localisation And Mapping is a method using lidar or
                cameras where the drone continuously creates a map of its
                environment. SLAM works wonderfully when flying in corridors or
                smaller rooms, as it typically uses walls, columns and other
                stationary objects to localise itself. Mission 5 and 6 relied
                heavily on SLAM usage. Mission 7 on the other hand, is designed
                to render SLAM useless. As the arena is completely flat except
                the robots, and the robots continuously move in semi random
                motions, SLAM has no stationary objects navigate by. All in all,
                to navigate the arena new innovative tools needs to be
                developed.
              </p>
              <p>
                Every square of the grid making up the arena, looks equivalent;
                the only unique, and stationary features in the whole mission
                are the corners. As two sides are white, one is blue and another
                is red (see fig 1), every corner is unique, and if the drones
                position relative to the corners are known, the drone knows
                where it is. To fly safely, all the obstacle robots needs to be
                avoided. The obstacle robots are programmed to drive in a 5m
                radius circle in the middle of the arena, but from experience,
                they will stray from the circle every run. On top of everything
                else, there is a hidden challenge in all of this. As all the
                sensors are onboard the drone, what we can observe varies with
                the position and orientation of the drone. If the drone is a
                couple of meters up in the air, it can observe most of the
                arena, we can, however not be a couple of meters in the air at
                all times. Whenever we need to interact with the ground robots
                the drone has to land, and what we can observe from the cameras
                is highly reduced.
              </p>
              <p>
                To solve these challenges we have developed multiple systems to
                find global position and avoid collisions. To read about the
                systems we used in the 2016 competition, check out our summary
                of last years systems{' '}
                <a href="https://ascendntnu.no/publications/iarc16/">here</a>.
                More information about this years systems will be published in
                our <a href="https://ascendntnu.no/blog">blog</a> after the
                competition.
              </p>
            </SubSubSection>
            <SubSubSection titleText="Interaction">
              <p>
                Moving on to the first aspect: "interaction between aerial
                robots and moving objects". The tactile switches on the ground
                robots are ~10cm X 10cm, the ground robots move at a speed of
                0.33m/s, and their movement is only deterministic upto 5 seconds
                at the time. Landing on these robots and pressing the tactile
                switch is a challenge in its own right, but there are several
                other challenges to overcome before we can think about landing
                on the robots. First, the drone must be able to detect and track
                the ground robots. Then, as there is only 10 minutes to complete
                the mission, there is not enough time to guide the ground robots
                over the green line one by one. Therefore the drone needs to be
                able to plan the best course of action live in a highly dynamic
                environment. The problem can be modeled as a less known
                generalisation of the travelling salesman problem called
                Time-dependent Orienteering Problem with Time Windows (TDOPTW).
                Read more about TDOPTW in our previous members'{' '}
                <a href="https://brage.bibsys.no/xmlui/handle/11250/2407635">
                  master thesis
                </a>
                .
              </p>
              <p>
                Another way of characterising the complexity of the task and
                environment for the classification system introduced in Russell
                and Norvig (2009) [1]. In the table below we can see the
                different aspects used to classify the different environments.
                The left column represents less complexity and the right column
                represents a higher degree of complexity. As one can see from
                the checkmarks, IARC scores high on complexity on all fronts. If
                the system is known or unknown at the moment is arguable, but
                come part b and the challenge is firmly in the right column.
              </p>
              <figure>
                <img
                  className="img-responsive"
                  alt="AI classification"
                  src="/public/assets/AI_classification.png"
                />
                <figcaption className="text-center">
                  Fig 4: AI-environment classification table
                </figcaption>
              </figure>
              <p>
                These challenges encompasses all of Ascend's technical groups.
                To read about how we detect the ground robots read our
                perception group's{' '}
                <a href="https://ascendntnu.no/blog/2017-03-10-perception-update">
                  blog
                </a>
                . Our planning group have been working hard on the drones AI; to
                read about their approach you can check out{' '}
                <a href="https://ascendntnu.no/blog/2017-02-14-planning-update">
                  part 1
                </a>{' '}
                and{' '}
                <a href="https://ascendntnu.no/blog/2017-02-20-planning-update">
                  part 2
                </a>
                .
              </p>
            </SubSubSection>
            <SubSubSection titleText="Competing with other drones">
              <p>
                Moving from part a to part b introduces yet another challenge:
                interacting with another team's drone. Not only do we have to
                take into account the randomness presented in the mission
                itself, but also whatever the other team's drone might do. And
                their drone moves faster than the ground robots, with unknown
                behaviour, and in 3 dimensions. All in all the introduction of
                another drone takes all the challenges of part a and turns them
                up to 11. The complete set of rules for part b are yet to be
                published, but we might have some idea on how to confuse the
                competition.
              </p>
              <img
                className="img-responsive"
                alt="Ground robot drone"
                src="/public/assets/ground_robot_drone.jpg"
              />
            </SubSubSection>
          </div>,
        ],
      },
      {
        titles: ['Mission 6'],
        contents: [
          <div id="mission-6">
            <p>
              Mission 6 continued where Mission 5 ended but increased the
              difficultly by requiring the autonomous robots to interact with
              their environment. The robots had to locate an opening in a
              building, enter when a surveillance camera was not looking,
              navigate crowded hallways, avoid or disable security systems,
              interpret signage in Arabic, and finally reach a particular room
              without bumping any walls or landing. From there, the robot had to
              locate a particular paper inbox containing a flash drive. It had
              to then retrieve that flash drive, replace it with an identical
              blank flash drive, and exit the building within a short time span.
              This mission saw the first dual-venue competition, with
              simultaneous events occurring in both the United States and China.
              After three years, a team from Tsinghua University repeatedly
              demonstrated the entirety of the mission.
            </p>
          </div>,
        ],
      },
      {
        titles: ['Mission 5'],
        contents: [
          <div id="mission-5">
            <p>
              The fifth mission picked up where the fourth mission left off by
              demonstrating the fully autonomous aerial robotic behaviors
              necessary to rapidly negotiate the confined internal spaces of a
              structure. This was a logical next step since the previous mission
              required a vehicle to enter a building. The nuclear reactor
              complex explosion scenario of the fourth mission was used as the
              backdrop for the fifth mission. The fifth mission required a fully
              autonomous aerial vehicle (presupposed to have been launched from
              a "mothership" just outside the structure as demonstrated during
              the fourth mission) to penetrate a structure and negotiate a more
              complex interior space containing hallways, small rooms,
              obstacles, and dead ends, in order to search for a designated
              target without the aid of global-positioning navigational aids.
              Finally, the aerial robot had to relay pictures of the nuclear
              control panel to a monitoring station some distance from the
              structure.
            </p>
          </div>,
        ],
      },
      {
        titles: ['Mission 4'],
        contents: [
          <div id="mission-4">
            <p>
              This mission involved flying to an abandoned village from a
              distance of 3 kilometers and identifying a particular structure
              based on a symbol on the building. Once the structure has been
              identified, a sensor probe had to be sent into the structure to
              perform reconnaissance and return video of a particular item of
              interest. Access to the structure was be through open portals
              (doors, windows, other openings) that had to be identified by the
              aerial robots. The total number of portals was not known
              beforehand. Operation within the structure was required in order
              to access the desired target. The robot had to relay clear images
              of the desired target back 3 kilometers to the judges. After seven
              years of steady progression, a team from the Georgia Institute of
              Technology completed the entire mission.
            </p>
          </div>,
        ],
      },
      {
        titles: ['Mission 3'],
        contents: [
          <div id="mission-3">
            <p>
              The third mission began in 1998. It was a search and rescue
              mission requiring fully autonomous robots to take off, fly to a
              disaster area, search for survivors and the dead amid raging
              fires, broken water mains, clouds of toxic gas, and rubble from
              destroyed buildings. The scenario was recreated at the U.S.
              Department of Energy's Hazardous Material Management and Emergency
              Response (HAMMER) training facility where these hazards could be
              recreated. Because of the realism of the scenario, animatrons were
              used instead of human actors to simulate survivors that were
              incapable of extracting themselves from the disaster area. An
              aerial robot from Germany's Technische Universität Berlin was able
              to detect and avoid all of the obstacles (many of which could have
              destroyed the robot itself), identify all the dead on the ground
              and the survivors (distinguishing between the two based on
              movement), and relay pictures of the survivors along with their
              locations back to first responders who would attempt a rescue.
            </p>
          </div>,
        ],
      },
      {
        titles: ['Mission 2'],
        contents: [
          <div id="mission-2">
            <p>
              The competition mission was then toughened and made a bit less
              abstract by requiring teams to search for a toxic waste dump, map
              the location of partially buried, randomly oriented, toxic waste
              drums, identify the contents of each drum from the hazard labels
              found somewhere on the outside of each drum, and bring a sample
              back from one of the drums; all without any human intervention
              whatsoever. In 1996, a team from the Massachusetts Institute of
              Technology and Boston University, with backing from Draper Labs,
              created a small fully autonomous flying robot that repeatedly and
              correctly mapped the location of all five of the toxic waste
              drums, and correctly identified the contents of two from the air,
              thereby completing approximately seventy five percent of the
              mission. The following year, an aerial robot developed by a team
              from Carnegie Mellon University completed the entire mission.
            </p>
          </div>,
        ],
      },
      {
        titles: ['Mission 1'],
        contents: [
          <div id="mission-6">
            <p>
              The initial mission started in 1991 with the goal of moving a
              metallic disc from one side of an arena to another with a
              completely autonomous flying robot. This was seen by many as
              almost impossible for a fully autonomous flying robot. The college
              teams continued to improve their entries over the next two years.
              During that time, the competition saw its first autonomous
              takeoff, flight, and landing by a team from the Georgia Institute
              of Technology. Three years later, in 1995, a team from Stanford
              University was able to acquire a single disk and move it from one
              side of the arena to the other in a fully-autonomous flight half a
              decade earlier than some pundits had predicted.
            </p>
          </div>,
        ],
      },
    ]

    const countDownDate = new Date('Jul 20, 2020 00:00:00').getTime()
    this.state = {
      countDownDate,
      ...this.getTimeLeft(countDownDate),
    }
  }

  getTimeLeft(fromDate) {
    const now = new Date().getTime()
    const timeLeft = fromDate - now
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
    const hour = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
    const second = Math.floor((timeLeft % (1000 * 60)) / 1000)
    return { days, hour, minutes, second, timeLeft }
  }

  componentDidMount() {
    const countDownFunction = setInterval(() => {
      const { timeLeft, ...timeUnits } = this.getTimeLeft(
        this.state.countDownDate
      )
      this.setState({ timeLeft, ...timeUnits })
      if (timeLeft < 0) {
        clearInterval(countDownFunction)
      }
    }, 1000)
  }

  render() {
    let missions = this.missions.map((e, i) => {
      return e.contents.map((content, k) => (
        <SubSubSection titleText={e.titles[k]} key={k}>
          {content}
        </SubSubSection>
      ))
    })

    return (
      <div className="page page-mission">
        <div class="padding">
          <div id="nxt">
            <div class="container">
              <div class="row">
                <div class="col-sm-6">
                  <img src={ASSETS_URL + '/images/assets/iarc.png'} />
                </div>
                <div class="col-sm-6 text-center">
                  <h1>THE INTERNATIONAL AERIAL COMPETITION</h1>
                  <center>
                    <h2>IARC</h2>
                  </center>
                  <hr />
                  <p class="lead">
                    The International Aerial Competition (IARC) is the longest
                    running collegiate aerial robotics challenge in the world,
                    whose primary goal is to “move the state-of-the-art in
                    aerial robotics forward”. In order to succeed with this
                    ambitious goal, IARC poses challenges deemed “impossible”
                    when introduced. The longest mission running was mission 6,
                    and was running for 8 years before Georgia Institute of
                    Technology solved the mission. The misson was as followed:
                  </p>

                  <div class="para">
                    <p class="lead">
                      <i>
                        "The robots had to locate an opening in a building,
                        enter when a surveillance camera was not looking,
                        navigate crowded hallways, avoid or disable security
                        systems, interpret signage in Arabic, and finally reach
                        a particular room without bumping any walls or landing.
                        From there, the robot had to locate a particular paper
                        inbox containing a flash drive. It had to then retrieve
                        that flash drive, replace it with an identical blank
                        flash drive, and exit the building within a short time
                        span."
                      </i>
                    </p>
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="inner">
          <div class="padding">
            <div class="container">
              <div class="row">
                <div class="col-sm-6">
                  <br />
                  <br />
                  <br />
                  <center>
                    <h1>Misson 9</h1>
                  </center>
                  <center>
                    <h3>2019</h3>
                  </center>
                  <hr />
                  <p>
                    Following the resolution of Mission 8 in the summer of 2019,
                    IARC released the Mission 9 details the following October.
                    The narrative revolves around a dystopian future, where an
                    AI overlord dominates the earth and patrols the seas using
                    autonomous Hunter-Killer vessels. The team is part of a
                    resistance group based on a remote island. The mission is to
                    take control of one of these vessels using an autonomous
                    drone to replace the communications module on the ships mast
                    with one of our own modules.
                  </p>
                  <br />
                  <p>
                    Mission 9 presents a vastly different set of challenges when
                    compared to previous missions. The mission will take place
                    outdoors and over long distances, with the first and last
                    parts of the mission involving flying the drone 3 km to and
                    from the vessel. During the competition, the vessel will
                    only be represented by a periodically moving mast, onto
                    which the communications module is attached. The drone must
                    synchronize with the mast movements, detach and drop the
                    original module and finally attach the replacement module.{' '}
                    <a href="/images/assets/mission9rules_1.03.pdf">
                      {' '}
                      Here are the rules of Mission 9
                    </a>
                  </p>
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
                <div class="col-sm-6">
                  <center>
                    <div class="countdown">
                      <h1>COUNTDOWN TO MISSION 9</h1>
                    </div>
                    {this.state.timeLeft > 0 ? (
                      <p id="show">
                        {this.state.days} Days <br />
                        {this.state.hour} Hours
                        <br />
                        {this.state.minutes} Minute
                        {this.state.minutes === 1 ? '' : 's'}
                        <br />
                        {this.state.second} Second
                        {this.state.second === 1 ? '' : 's'}
                      </p>
                    ) : (
                      <p id="show">
                        It's on. The IARC Mission 9 competition has launched
                      </p>
                    )}
                  </center>
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="padding">
          <div id="nxt">
            <div class="container">
              <div
                class="row"
                style={{ display: 'flex', flexWrap: 'wrap-reverse' }}
              >
                <div class="col-sm-6">
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <div class="m8_IMG">
                    <img src={ASSETS_URL + '/images/assets/mission_8.png'} />
                  </div>
                </div>
                <div class="col-sm-6">
                  <br />
                  <br />
                  <br />
                  <center>
                    <h1>Misson 8</h1>
                  </center>
                  <center>
                    <h3>2018-2019</h3>
                  </center>
                  <hr />
                  <p>
                    This summer will be the last year that the International
                    Aerial Robotic Competition (IARC) will run mission 7. This
                    is because several competitors are expected to solve mission
                    7 this summer. Last summer a team in the Asian venue managed
                    to get three ground robots out of the course. To win the
                    competition you have to get at least four ground robots out
                    of the course.
                  </p>
                  <br />
                  <p>
                    IARC has therefore released Mission 8. The mission is for a
                    human person to retrieve objects from bins that are located
                    on the course. While the person is trying to do this, they
                    will be attacked by flying enemy drones. If they are hit ten
                    times, they will lose. The person will have help from up to
                    four helper drones. These drones will be able to scout the
                    course, so the person knows where both the object, and the
                    enemy drones are located. The helper drones are also able to
                    heal the person.{' '}
                    <a href="/images/assets/mission8rules_1.0.pdf">
                      Here are the rules of Mission 8
                    </a>
                  </p>
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="inner">
          <div class="padding">
            <div class="container">
              <div class="row">
                <br />
                <br />
                <br />
                <div class="col-sm-6">
                  <center>
                    <h1>Misson 7</h1>
                  </center>
                  <center>
                    <h3>2014-2017</h3>
                  </center>
                  <hr />
                  <p>
                    Mission 7 ended in 2018 and took place indoors on a 20x20
                    meter grid arena. The mission was the following: The square
                    arena has two white edges, one green edge and one red edge,
                    as shown in figure 1. In the middle of the arena 10 ground
                    robots starts driving outwards towards the edges. The ground
                    robots moves in a specific pattern:
                    <ul>
                      <li>Every 20 seconds they rotate 180 degrees.</li>
                      <li>
                        Every 5 seconds they rotate a random amount of degrees
                        on the interval [-20, 20].
                      </li>
                      <li>
                        If they bump into anything, they rotate 180 degrees.
                      </li>
                    </ul>
                    <p>
                      In addition to these ground robots, there are four
                      obstacle robots. These have an 1-2 meter pole on the top
                      and moves around in a circular pattern. They are there to
                      create havoc and must be avoided. If the drone hits them
                      twice, the run is terminated. The mission is to herd at
                      least four of the ground robots over the green line in
                      order to complete the mission.To interact with the ground
                      robots, there are two different options:
                    </p>
                    <ul>
                      <li>
                        Tapping a tactile button on the top of the ground
                        robots, turning them 45 degrees, clockwise.
                      </li>
                      <li>
                        Bumping into the ground robots from the front, turning
                        them 180 degrees.
                      </li>
                      <li>
                        The mission must be solved in a maximum of 10 minutes,
                        all the sensors must be onboard the drone and it has to
                        be fully autonomous.
                      </li>
                    </ul>
                  </p>
                  <p>
                    The mission must be solved in a maximum of 10 minutes, all
                    the sensors must be onboard the drone and it has to be fully
                    autonomous.{' '}
                    <a href="https://www.youtube.com/watch?v=LOU6-r7TRAA">
                      Here is video of the competing drones executing the tasks
                      of Mission 7
                    </a>{' '}
                    and{' '}
                    <a href="/images/assets/mission7rules_legacy.pdf">
                      Here are the complete ruleset of Mission 7
                    </a>
                  </p>
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
                <div class="col-sm-6">
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <img src={ASSETS_URL + '/images/assets/start-state.png'} />
                  <div class="drone_IMG">
                    <img
                      src={
                        ASSETS_URL +
                        '/images/assets/180-degree-turn-cartoon.png'
                      }
                    />
                  </div>
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html: `
            html,body {
              height: 100%;
              width: 100%;
              background-color: #333333;
            }

            .drone_IMG {
              height: 400px;
            }

            .m8_IMG {
              height: 500px;
            }
    
            .navbar {
              background-color: #252222;
              padding: 1% 0;
              font-size: 1.6em;
              height: 120px;
            }
            .navbar-brand {
              min-height: 63px;
              padding: 0 15px 5px;
            }
            .navbar-default .navbar-nav li a {
              color: #F3BA37;
            }
            .navbar-default .navbar-nav li a:hover, .navbar-default .navbar-nav li a.active {
              color: #FFF;
            } 
            
            #home{
              background: url(images/Ciruit.png) no-repeat center center fixed;
              display: table;
              height: 100%;
              position: relative;
              width: 100%;
              background-size: cover;
            }
            
            .countdown {
              margin-top: 250px;
            }
            
            .landing-text{
              display: table-cell;
              text-align: center;
              vertical-align: middle;
            }
      
            .padding img {
              width: 100%;
              margin-bottom: 100px;
              height: 580px;
            }
            
            .col-sm-6 {
              margin-top: 20px; 
            }
            
            #fixed {
              background: url(images/Ciruit.png) no-repeat center center fixed;
              display: table;
              height: 60%;
              position: relative;
              width: 100%;
              background-size: cover;
            }
                    
            @media (max-width: 768px) {
              .landing-text h1 {
                font-size: 300%;
              }
              .fa {
                font-size: 20px;
                padding: 10px;
              }
              .icon{
                padding-top: 5%;
                max-width: 100px;
              }
                video {
              height: 30%;
              width: 100%;
                }
                #home {
                  width: 100%;
                  height: 100%;
                }
                .countdown {
                  margin-top: 7px;
                }
            }
            
            .inner{
              background-color: #37373b;
            }
            
            h2, h3, h4 {
              color: #FFF;
              text-align: center;
            }
            
            h1 {
              color: #D7572D;
            }
            
            
            p {
              color: #FFF;
              font-size: 20px;
            }
            
            #home h1 {
              color: orange;
              font-family: "Times New Roman", Times, serif;
            }

            @font-face {
              font-family: digital;
              src: url(digital.ttf);
            }            
            
            #show {
              padding-top: 40px;
              color: #DE5021;
              font-weight: lighter;
              font-family: digital, serif;
              text-align: center;
              word-spacing: 15px;
              font-size: 60px;
            }
            
            .para p {
              color: orange;
              font-style: sans-serif;
            }
            
            ul {
              color:  #DE5021;
              border: solid #DE5021 2px;
              margin: 20px;
              padding: 38px;
            }
            
            li {
              color:  #DE5021;
              list-style-type: upper-roman;
              text-align: center;
            }
          }
          `,
          }}
        />
      </div>
    )
  }
}

export default MissionPage
