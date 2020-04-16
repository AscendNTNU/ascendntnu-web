import React, { Component } from 'react'

import scrollToComponent from 'react-scroll-to-component'
import { ASSETS_URL } from '../../constants'

import { Section, SubSection } from '../PageLayout'
import { Breadcrumb } from '../Common/breadcrumb'

import YouTube from 'react-youtube'
import { Color } from 'three'
export class JoinPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      language: props.match.params.language || 'en',
    }
    this.refs = {}
  }

  componentWillReceiveProps(nextProps) {
    this.setState(
      Object.assign({}, this.state, {
        language: nextProps.match.params.language || 'en',
      })
    )
  }

  setAnchor(anchor) {
    let top = document.getElementById(anchor).offsetTop - 70
    document.querySelector('body').scrollTop = top
    document.querySelector('#app').scrollTop = top
    console.log(this.refs)
    if (anchor in this.refs) {
      scrollToComponent(this.refs[anchor], {
        offset: -70,
        align: 'top',
        duration: 200,
      })
    }
  }

  addRef(e, anchor) {
    this.refs = { ...this.refs, [anchor]: e }
  }

  render() {
    const opts = {
      height: 150,
      width: 200,
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    }

    let positions = {
      en: [
        <Section titleText="Positions we offer" key="2">
          <a id="styled" type="button" href="forum.html">
            Application for team 2021 has ended
          </a>

          <hr />
          <p>
            <div class="paragraf_T"> The Board</div> Is responsible for the
            organizational and managerial tasks related to running Ascend NTNU.
            You will coordinate the high level work of the team, ensuring that
            plans and deadlines are kept, budgets are met, and that work is
            flowing smoothly. As a board member, your prime responsibility is to
            facilitate the work done by the student members and to represent
            Ascend NTNU externally. You will have the opportunity to shape
            Ascend NTNU as an organization through your decisions, such as
            through the recruitment of new members, cooperation with sponsors
            and external parties and creating the vision and goals for the years
            team. As a board member you will take part in leading a world class
            student organization and shaping the team and organization going
            forward. The board member positions offered for Team 2021 are the
            following:
          </p>

          <center>
            <ul className="anchor-list">
              <li
                onClick={() =>
                  this.setAnchor('Project-manager-Deputy-Project-Manager')
                }
              >
                {' '}
                <a> Project Manager & Deputy Project Manager </a>
              </li>
              <li
                onClick={() =>
                  this.setAnchor('Chief-Engineer-Deputy-Chief-Engineer')
                }
              >
                {' '}
                <a> Chief Engineer & Deputy Chief Engineer </a>
              </li>
              <li onClick={() => this.setAnchor('Head-of-Economics')}>
                {' '}
                <a> Head of Economics </a>
              </li>
              <li onClick={() => this.setAnchor('Head-of-Marketing')}>
                {' '}
                <a> Head of Marketing </a>
              </li>

              <p id="tittel">
                <div class="paragraf_T">The technical group leaders</div> Are
                responsible for leading one of the five technical groups in
                Ascend NTNU: AlphaPilot, AI, Control, Hardware or Perception. As
                a group leader, your main responsibility is to organize the
                internal group workflow and to coordinate with the other
                technical group leaders. You will get working knowledge and
                insights into the systems that your group members create, while
                also being able to contribute on a practical level and creating
                your own systems within the group. Group coordination will be
                done by organizing and holding group meetings and maintaining
                the group workflow on Confluence and Jira. You will also meet
                weekly with the other technical group leaders and the chief
                engineers to coordinate the overall technical progress of the
                team. The technical group leader positions offered for Team 2021
                are the following:
              </p>

              <li onClick={() => this.setAnchor('Hardware-Group-Leader')}>
                {' '}
                <a> Hardware Group Leader </a>
              </li>

              <li onClick={() => this.setAnchor('Perception-Group-Leader')}>
                {' '}
                <a> Perception Group Leader </a>
              </li>
              <li onClick={() => this.setAnchor('Control-Group-Leader')}>
                {' '}
                <a> Control Group Leader </a>
              </li>
              <li onClick={() => this.setAnchor('AI-Group-Leader')}>
                {' '}
                <a> AI Group Leader </a>
              </li>

              <li onClick={() => this.setAnchor('AlphaPilot-Group-Leader')}>
                {' '}
                <a> AlphaPilot Group Leader </a>
              </li>
            </ul>
          </center>
          <SubSection
            titleText="Project manager & Deputy Project Manager"
            id="Project-manager-Deputy-Project-Manager"
            ref={(e) =>
              this.addRef(e, 'Project-manager-Deputy-Project-Manager')
            }
          >
            <hr />
            <p>
              The Project Manager is the chair of the board and works to further
              Ascend NTNUs goals and vision. As a Project Manager, you create
              guidelines for how the entire organization should be run. The
              position requires that you are proactive, see improvement areas
              and facilitate a good work culture. The Project Manager works
              closely with the board to coordinate the groups organizational
              needs. Together with the marketing team, the Project Manager aims
              to promote Ascends reputation and communicate with sponsors. The
              tasks you will have, will vary from week to week and provide
              opportunities to work with most aspects of the project. Permanent
              tasks include leading board meetings and general meetings, and
              responsibility for cooperation with the main sponsors.
              <br></br>
              <br></br>
              The Deputy Project Manager has the main responsobility for human
              resources and HMS in Ascend. You become a trustee for the group
              members and is responsible for social cohesion. You will also
              assist the project manager with planning, follow-ups, and goal
              setting. Furthermore, you are responsible for recruiting new group
              members, new board members and group leaders. The Project Manager
              and the Deputy Project Manager work closely together and
              distribute tasks between them. This collaboration gives a great
              deal of flexibility when it comes to tasks and allows you to adapt
              responsibilities so that you can work with what interests you the
              most. We are looking for:
              <div class="paragraf">
                <br></br>-> someone who wants to work closely with the entire
                organization and enjoys varied work tasks
                <br></br>
                <br></br>-> someone who wants to work with external actors,
                sponsors and other partners.
                <br></br>
                <br></br>-> someone who wants to find good solutions in
                co-operation with others. - someone with good structure and
                overview.
                <br></br>
                <br></br>-> someone who works well with others.
                <br></br>
                <br></br>-> someone who wants to improve Ascend by making major
                organizational decisions.
                <br></br>
                <br></br>-> someone who is extroverted and comfortable with
                being a representative of Ascend, both in the team, and for the
                surrounding world.
                <br></br>
                <br></br>
              </div>
              <p>
                If you have any question about these positions, do not hesitate
                to contact: Jo Aleksander Johansen (Project Manager) at{' '}
                <a href=" mailto:jo.johansen@ascendntnu.no ">
                  jo.johansen@ascendntnu.no
                </a>
                , or Airin Thodesen (Deputy Project Manager) at{' '}
                <a href=" mailto:airin.thodesen@ascendntnu.no ">
                  airin.thodesen@ascendntnu.no
                </a>
                .
              </p>
              <br></br>
              <br></br>
            </p>
          </SubSection>
          <SubSection
            titleText="Chief Engineer & Deputy Chief Engineer"
            id="Chief-Engineer-Deputy-Chief-Engineer"
            ref={(e) => this.addRef(e, 'Chief-Engineer-Deputy-Chief-Engineer')}
          >
            <hr />
            <p>
              The Chief Engineer and Deputy Chief Engineer have managerial
              responsibility over the technical work in Ascend NTNU. It will be
              your task to lead the technical work, making sure that all the
              groups cooperate towards a common goal in the two competitions
              Ascend NTNU competes in. This includes planning, organizing and
              coordinating the work between the technical group leaders. It is
              critical to have an understanding of the systems being developed,
              how they fit together, how to adjust technical plans as the
              systems develop and finally how the systems should be integrated
              in the end. The insights and experience you gain as Chief Engineer
              or Deputy Chief Engineer will give you a comprehensive picture of
              multiple engineering disciplines that most others do not have.
              <br></br>
              <br></br>
              As a board member, it is your task to keep the board informed on
              the technical progress of the team. You will also be responsible
              for keeping the technical group leaders informed on decisions made
              by the board, ensuring a good flow of information between the
              administrative and technical members of the organization. There
              will also be opportunities for you to assist the team members with
              technical work where it is needed. The Chief Engineer and Deputy
              Chief Engineer will collaborate closely and share responsibility
              for many of the tasks related to administration of the technical
              work. You will have some freedom in defining and dividing the
              tasks between you. These tasks will include maintaining the
              technical components of the project management platforms (like
              Confluence and Jira), coordinating and documenting systems
              testing, formulating and maintaining the technical plans,
              arranging internal and external technical meetings, etc. We are
              looking for:
              <div class="paragraf">
                <br></br>-> someone who is extroverted and comfortable with
                being a representative of Ascend NTNU: both in the team, and for
                the surrounding world.
                <br></br>
                <br></br>-> someone with a big interest for robotics, and
                preferably experience with C++ or ROS.
                <br></br>
                <br></br>-> someone who likes to work with big, complex systems,
                preferably with experience from other projects.
                <br></br>
                <br></br>-> someone who is structured, tidy and organized. -
                someone who can keep the overview of what things that are
                important at what times.
                <br></br>
                <br></br>
                -someone who wants practical experience with running the economy
                in a student organization.
                <br></br>
                <br></br>-> someone who is good at cooperating and have a
                passion for leadership.
                <br></br>
                <br></br>
              </div>
              <p>
                If you have any questions about those positions, you can
                contact: Filip Grevle Lolland (Chief Engineer) at,{' '}
                <a href=" mailto:filip.lolland@ascendntnu.no ">
                  filip.lolland@ascendntnu.no
                </a>
                , or Kevin Dinulong Meyer (Deputy Chief Engineer) at{' '}
                <a href=" mailto:kevin.meyer@ascendntnu.no ">
                  kevin.meyer@ascendntnu.no
                </a>
                .<br></br>
                <br></br>
              </p>
            </p>
          </SubSection>

          <SubSection
            titleText="Head of Economics"
            id="Head-of-Economics"
            ref={(e) => this.addRef(e, 'Head-of-Economics')}
          >
            <hr />
            <p>
              The Head of Economics controls the use of resources in the
              organization. Ascend, like many other organizations, operates
              within economical limits, and thus a reliable and predictable flow
              of resources will help the rest of the team reach their full
              potential. Your job will mainly be to have control of consumption,
              budgets, our in-house kiosk, and report to both the board and the
              group leaders how much money that is spent by them at all times.
              An important task is to make sure the invoices are paid on time,
              and that the sponsored money arrives on time. As the Head of
              Economics, you will also cooperate a lot with the Marketing team,
              especially during event planning. Economic experience is positive,
              but not a requirement, as there will be full training anyways. We
              are looking for:
              <div class="paragraf">
                <br></br>-> someone who wishes to manage Ascend’s resources the
                best way possible.
                <br></br>
                <br></br>-> someone who is interested in economics, accounting
                and budget planning.
                <br></br>
                <br></br>-> someone with good and structured work methods.
                <br></br>
                <br></br>-> someone who is reliable.
                <br></br>
                <br></br>
                -someone who wants practical experience with running the economy
                in a student organization.
                <br></br>
                <br></br>-> someone who wants to learn more about economics.
                <br></br>
                <br></br>
              </div>
              If you have any questions about this position, you can contact:
              Airin Thodesen at,{' '}
              <a href=" mailto:airin.thodesen@ascendntnu.no ">
                airin.thodesen@ascendntnu.no
              </a>
              .<br></br>
              <br></br>
            </p>
          </SubSection>

          <SubSection
            titleText="Head of Marketing"
            id="Head-of-Marketing"
            ref={(e) => this.addRef(e, 'Head-of-Marketing')}
          >
            <hr />
            <p>
              The Head of Marketing is responsible for ensuring good
              communication and cooperation between Ascend NTNU and other
              organizations, companies and students. You will facilitate the
              making of these collaborations and bring Ascend NTNU closer to its
              goals. This also includes leading the marketing team, helping and
              assisting when needed. You will plan, test and perform different
              marketing strategies, both physically in Trondheim, on our social
              media and webpage. As the Head of Marketing, you have the freedom
              to find new and creative ways to reach out to the students with
              concrete and measurable results. Furthermore, you will have a
              significant impact on the development of Ascend’s brand. This
              includes creating a culture that inspires students to engage in
              research and innovation tied to autonomous drones. As Head of
              Marketing, you will also be responsible for coordinating events on
              behalf of the board. This gives you good opportunities to shape
              and change Ascend NTNU for the better. We are looking for:
              <div class="paragraf">
                <br></br>
                -> someone who is interested in marketing and willing to learn
                more about digital marketing.
                <br></br>
                <br></br>-> someone who wishes to create and nurture
                relationships with partners and press.
                <br></br>
                <br></br>-> someone who has good communication skills in both
                Norwegian and English.
                <br></br>
                <br></br>-> someone who wishes to motivate others to reach a
                shared goal.
                <br></br>
                <br></br>-> someone who is good at cooperating and have a
                passion for leadership.
                <br></br>
                <br></br>-> someone who is solution oriented, ambitious,
                focused, and driven by results.
                <br></br>
                <br></br>
              </div>
              <p>
                If you have any questions about this position, you can contact
                Inger-Lovise Fjellgaard at
              </p>
              <a href=" mailto:ingerlovise.fjellgaard@ascendntnu.no ">
                ingerlovise.fjellgaard@ascendntnu.no
              </a>
              .<br></br>
              <br></br>
              <i className="key-words">
                {' '}
                Keywords: Social Media, Photography, Videomaking, Graphic
                Design, Digital Marketing, Web Development.
              </i>
            </p>

            <br></br>
            <div
              id="fixed_gif"
              style={{
                backgroundImage: `url('${ASSETS_URL}/images/assets/drone_2.gif')`,
              }}
            ></div>
          </SubSection>

          <SubSection
            titleText="AlphaPilot Group Leader"
            id="AlphaPilot-Group-Leader"
            ref={(e) => this.addRef(e, 'AlphaPilot-Group-Leader')}
          >
            <hr />
            <p>
              The AlphaPilot group is dedicated to working on Ascend NTNUs
              contribution to the AlphaPilot Challenge. Leading the AlphaPilot
              group means coordinating members who are working on all the
              different aspects of the autonomous racing drone: from hardware
              and control systems to sensordata-processing and AI. As a group
              leader you will be cooperating with the other technical groups and
              sharing solutions for the different subsystems of the drone, while
              also being uniquely independent in focusing on the AlphaPilot
              competition. The systems used will encompass the state-of-the-art
              in multiple fields. As AlphaPilot group leader you will have a
              unique responsibility and opportunity in realizing all the systems
              necessary to create an autonomous racing drone.
              <br></br>
              <br></br>
              If you have any questions about this position, you can contact
              Paul Frivold at <br></br>
              <a href=" mailto:paul.frivold@ascendntnu.no ">
                paul.frivold@ascendntnu.no
              </a>
              .<br></br>
              <br></br>
              <i className="key-words">
                {' '}
                Keywords: Object Detection, Optimal Control, Localization
                (SLAM), Path Planning, Simulation and Sensor Fusion.
              </i>
            </p>
          </SubSection>

          <SubSection
            titleText="Hardware Group Leader"
            id="Hardware-Group-Leader"
            ref={(e) => this.addRef(e, 'Hardware-Group-Leader')}
          >
            <hr />
            <p>
              The Hardware group designs and builds Ascend’s drones. As the
              leader of this group, your main responsibility is the drones’
              mechanical and electrical systems. You will make the superior
              decisions about the drones’ design and functions, ensuring that
              the drone will work in the best possible way given the
              requirements and specifications. This means that you will get
              insight in everything from CFD and strength analysis to circuit
              board design and production, on top of designing the drone itself.
              You will naturally cooperate with all the other technical groups,
              deciding which sensors and computers will be placed on the drone.
              As the Hardware group leader you will have a central role in
              designing, making and testing the physical drone that Ascend NTNU
              will use.
              <br></br>
              <br></br>
              If you have any question about this position, you can contact
              Håvard Brenne at{' '}
              <a href=" mailto:haavard.brenne@ascendntnu.no ">
                haavard.brenne@ascendntnu.no
              </a>
              .<br></br>
              <br></br>
              <i className="key-words">
                {' '}
                Keywords: CAD, RC Vehicles, Power Analysis and Fluid Dynamics,
                Carbon Fiber Production, 3D Printing, PCB Design, Altium
                Designer and Signal Processing.
              </i>
            </p>
          </SubSection>
          <SubSection
            titleText="AI Group Leader"
            id="AI-Group-Leader"
            ref={(e) => this.addRef(e, 'AI-Group-Leader')}
          >
            <hr />
            <p>
              The AI group is responsible for the high-level planning and
              decision making done on-board our drone systems. As a group leader
              for the AI, you will be working with the high level information
              provided by the sensor processing systems in the Perception group.
              The systems your group designs will make informed decisions based
              on the current state of the drone and the world around the it.
              These decisions will then be transformed into commands sent to,
              and enacted by the Control group. The AI group has in the past
              made use of state-of-the-art technology within deep- and
              reinforcement learning, but traditional problems within path
              planning, higher level mission planning and information
              representation also fall under the umbrella of AI. As the AI group
              leader, you will coordinate your group in making high-level
              planning and decision making systems for the drone.
              <br></br>
              <br></br>
              If you have any questions about this position, you can contact
              Håkon Grov at{' '}
              <a href=" mailto:haakon.grov@ascendntnu.no ">
                haakon.grov@ascendntnu.no
              </a>
              .<br></br>
              <br></br>
              <i className="key-words">
                {' '}
                Keywords: Path- and Mission Planning, Reinforcement Learning,
                Data structures and Representation, Decision Making, Simulation
              </i>
            </p>
          </SubSection>
          <SubSection
            titleText="Control Group Leader"
            id="Control-Group-Leader"
            ref={(e) => this.addRef(e, 'Control-Group-Leader')}
          >
            <hr />
            <p>
              The Control group works with everything from the control systems
              that stabilize the drone to low level path planning and obstacle
              avoidance. The group leader for Control have to ensure that these
              systems are robust and reliable, and that any errors are handled
              in a safe and predictable way. You will plan which systems are
              necessary to ensure safe and stable flight, how these systems
              should be tested and how the systems interact with the other
              groups. Your group will be responsible for enacting the commands
              given by AI, transforming and communicating this to the flight
              controller on the drone. There will also be a natural cooperation
              with the Hardware group, as the flight controller will be
              communicating with the actuators on the drone. As the Control
              group leader, you will coordinate your group in making systems
              which ensure safe and robust flight and command execution for the
              drone.
              <br></br>
              <br></br>
              <p>
                If you have any questions about this position, you can contact
                Simen Gangstad at{' '}
              </p>{' '}
              <a href=" mailto:simen.gangstad@ascendntnu.no ">
                simen.gangstad@ascendntnu.no
              </a>
              .<br></br>
              <br></br>
              <i className="key-words">
                {' '}
                Key words: Control Systems, Navigation, Path Planning, Obstacle
                Avoidance, FSM and Simulation.
              </i>
            </p>
          </SubSection>
          <SubSection
            titleText="Perception Group Leader"
            id="Perception-Group-Leader"
            ref={(e) => this.addRef(e, 'Perception-Group-Leader')}
          >
            <hr />
            <p>
              The Perception group develops the systems which transform sensor
              data into meaningful information about the environment. Being a
              group leader for the Perception group means that you will select
              the sensor systems used on the drone, cooperating closely with the
              Hardware group on the placement of these components. Your group
              will mainly work with camera-based sensors, investigating the
              usage of depth cameras, deep learning and conventional computer
              vision to solve both mission specific and general tasks. The
              drones are also equipped with other sensors, such as IMUs, LIDARs,
              etc., which need to be utilized or fused in an efficient manner.
              The field of computer vision and sensor fusion is constantly
              evolving, and you will be working with cutting edge techniques in
              these fields. As the Perception group leader you will process and
              interpret sensor data and transform it into meaningful
              information.
              <br></br>
              <br></br>
              <p>
                Should you have any questions, you can reach Torjus Bakkene at
              </p>
              <a href=" mailto:torjus.bakkene@ascendntnu.no ">
                torjus.bakkene@ascendntnu.no
              </a>
              .<br></br>
              <br></br>
              <i className="key-words">
                {' '}
                Keywords: Deep Learning, Computer Vision, Pose Estimation, Image
                Processing, Sensor Fusion
              </i>
            </p>
          </SubSection>
        </Section>,
      ],
    }

    let contents = {
      en: [
        <Section titleText="Reach new heights - Join Ascend NTNU" key="1">
          <hr />
          <img
            src={ASSETS_URL + '/images/assets/join_front.jpg'}
            alt="Group 2018"
            className="fullscale-image"
          />
          <p
            style={{
              fontSize: '1.4em',
            }}
          ></p>
          <SubSection titleText=" Application for team 2021">
            <hr />
            <p>
              Ascend NTNU develops an autonomous drone and competes in the
              International Aerial Robotics Competition and the AlphaPilot
              challenge. IARC is the worlds largest and oldest engineering
              competition for autonomous aerial robotics. Ascend NTNU is
              searching for new members for team 2021, which will get the
              opportunity to develop, build and compete with a high tech drone.
              Underneath is a description of the different positions you can
              apply for. No previous knowledge is neccesary, the most important
              factor we are looking for are motivation and dedication.
              <br />
            </p>
          </SubSection>
          <br />
          <YouTube videoId="DLbBztP8Yi4" opts={opts} onReady={this._onReady} />
          <a
            className="button active"
            style={{
              alignSelf: 'flex-start',
              display: 'none',
            }}
            href="https://docs.google.com/forms/d/e/1FAIpQLSdgvQ1jVRs8iJmglmyGoaWiigi1E-Q8AdNjzrBWqwz0D9ukCA/viewform"
          >
            {' '}
            Application for team 2021 has ended{' '}
          </a>
          <h4>
            <a
              href="https://docs.google.com/forms/d/1kKJENDVeQ-Us7-hCmK3bh-BCrufqKowE07zHvejpUEM/viewform?edit_requested=true"
              target="
          _blank "
              rel="
          noopener noreferrer "
            >
              Application for team 2021 has ended
            </a>
          </h4>{' '}
          {positions[this.state.language][1]}
          <SubSection titleText="Why should you apply?">
            <hr />
            <ul className="intro_pakke">
              <li className="intro">
                {' '}
                <strong>Be a part of an environment </strong>
                By being a part of Ascend you become a part of a goal oriented
                and technology focused project where we work together to reach
                our goals.
              </li>
              <li className="intro2">
                <strong>Add theory to the real world </strong>
                In Ascend you take some of the most advanced topics you learn on
                NTNU from the courses out in real life.
              </li>
              <li className="intro">
                <strong> Combine it with your studies </strong>
                Several of our members write project/maaster thesis in related
                to their work in Ascend. There is also an oppurtunity to do
                "Eksperter i Team" with Ascend.
              </li>
              <li className="intro4">
                <strong>Organization experience </strong>
                In Ascend you are being a part of leading a technical project
                from start to finish - This gives lots of valuable experience.{' '}
              </li>
              <li className="intro5">
                <strong>Cutting edge technology</strong>
                Be a part of an organization which needs to use and develop
                state of the art technology within the field of autonomous
                robotics.
              </li>
              <li className="intro6">
                <strong>Innovative culture </strong>
                Our work culture is flexible, and your contribution can involve
                tasks outside your job description if they fit your interests
                and experience.
              </li>
            </ul>
          </SubSection>
        </Section>,
      ],
    }

    let about = {
      en: (
        <Section titleText="About us">
          <p>
            {' '}
            Ascend is a student team which is representing NTNU in{' '}
            <a href="http://www.aerialroboticscompetition.org/">
              {' '}
              The International Aerial Robotics Competition{' '}
            </a>
            . We wish to create an environment where students can learn about
            autonomous drones, and have the yearly competition as a joint goal.
            Ascend is an organization where you can develop both technical and
            administrative skills.
          </p>
          <SubSection titleText="How we work">
            <ul>
              <li>
                {' '}
                <strong> Flat and open organizational structure. </strong>{' '}
                Ascend NTNU believes a flat and open organizational model is
                best for both enjoyment and result. Our goal is to be an
                organization where everyone is heard and can contribute in the
                areas they want to.
              </li>
              <li>
                {' '}
                <strong> Freedom and responsibility. </strong> We think
                motivation is about being given responsibility and trust. We
                choose to believe that our members gets the job done, not
                building resource heavy and demotivating control systems.
              </li>
              <li>
                {' '}
                <strong> Learning by doing. </strong> None in Ascend knows the
                exact solution to the problems we are trying to solve. But we
                are open to learn new concepts and technologies . Our idea is
                that the way to accomplish our goals are through trying and
                failing, learning and getting help from good advisors.
              </li>
            </ul>{' '}
          </SubSection>{' '}
          <SubSection titleText="Our workspace">
            <p>
              {' '}
              We are located in the Institute of Technical Cybernetics lab at
              the roof of block A in the Electro building at Gløshaugen, knows
              as the roof lab. The roof lab is a workspace for everybody in
              Ascend, with multiple powerful computers, all the equipment you
              need and a kiosk for the members. By having a place like this, the
              road from devlopment to testing is kept short.
            </p>
          </SubSection>
          <SubSection titleText="Who we collaborate with">
            <p>
              We have good contact with Institute of Technical Cybernetics
              (ITK), Department of Computer Science (IDI) and all of our
              sponsors. From the Institutes we get access to different labs,
              equipment and competence. Several of our members are writing
              projects and master thesis connected with the work at Ascend for
              IDI and ITK. A collection of all of our sponsors can be found at
              the homepage.
            </p>{' '}
          </SubSection>{' '}
          <SubSection titleText="Questions?">
            <p>
              {' '}
              If you have any questions, please reach out to us at:{' '}
              <a href="mailto:hi@ascendntnu.no"> hi@ascendntnu.no </a>
            </p>
          </SubSection>
        </Section>
      ),
    }

    let nextLanguage = 'no'
    switch (this.state.language) {
      case 'no':
        nextLanguage = 'en'
        break
      default:
        nextLanguage = 'no'
        break
    }

    let languageNames = {
      en: 'English',
      no: 'Norsk',
    }

    return (
      <div className="page page-join">
        <Breadcrumb routes={['join']} /> {}
        {contents[this.state.language][0]}
        {positions[this.state.language][0]}
        {about[this.state.language]}{' '}
      </div>
    )
  }
}

export default JoinPage
