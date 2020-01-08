import React, { Component } from 'react'

import scrollToComponent from 'react-scroll-to-component'

import { Section, SubSection } from '../PageLayout'
import { Breadcrumb } from '../Common/breadcrumb'

import YouTube from 'react-youtube'
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
    let top = document.getElementById(anchor).offsetTop - 150
    document.querySelector('body').scrollTop = top
    document.querySelector('#app').scrollTop = top
    console.log(this.refs)
    if (anchor in this.refs) {
      scrollToComponent(this.refs[anchor], { offset: -70, align: 'top' })
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
          <hr />

          <center>
            <ul className="anchor-list">
              <li onClick={() => this.setAnchor('hardware-groupmember')}>
                {' '}
                <a> Hardware groupmember</a>
              </li>
              <li onClick={() => this.setAnchor('perception-groupmember')}>
                {' '}
                <a> Perception groupmember</a>
              </li>
              <li onClick={() => this.setAnchor('control-groupmember')}>
                {' '}
                <a> Control groupmember</a>
              </li>
              <li onClick={() => this.setAnchor('ai-groupmember')}>
                {' '}
                <a> Artificial Intelligence </a>
              </li>
              <li onClick={() => this.setAnchor('sponsorcontact')}>
                {' '}
                <a> Sponsor contacter </a>
              </li>
              <li onClick={() => this.setAnchor('graphical-designer')}>
                {' '}
                <a> Graphical designer </a>
              </li>
              <li onClick={() => this.setAnchor('event-manager')}>
                {' '}
                <a> Event Manager </a>
              </li>
              <li onClick={() => this.setAnchor('webdeveloper')}>
                {' '}
                <a> Web developer </a>
              </li>
            </ul>
          </center>
          <SubSection
            titleText="Sponsorcontact"
            id="sponsorcontact"
            ref={e => this.addRef(e, 'sponsorcontact')}
          >
            <hr />
            <p>
              Do you want to be Ascend NTNU's representative in business? We in
              Ascend are entirely dependent on our sponsors in order to do the
              work we do. As a sponsor contact in Ascend, value creation for our
              sponsors will be your main task. You will work to find new
              sponsors, maintain communication with our existing sponsors, and
              in addition prepare contracts and sponsorship packages. This is a
              golden opportunity to make connections with contacts in the
              industy! In addition, you will work with the entire marketing team
              to further develop Ascend's image, and you will cooperate closely
              with our event manager to plan and organize sponsorship
              activities.
              <i className="key-words">
                {' '}
                Keywords: Presentation Techniques, Negotiations, Extrovert,
                Organized, Networking
              </i>
            </p>
          </SubSection>
          <SubSection
            titleText="Graphical designer"
            id="graphical-designer"
            ref={e => this.addRef(e, 'graphical-designer')}
          >
            <hr />
            <p>
              Participate in shaping the entire Ascend NTNU's image outward! As
              a graphic designer, your work tasks will be very varied, including
              video production, design of promotional materials and profile
              items, and you will be responsible for Ascend's graphic design.
              You will also collaborate with the rest of the marketing team,
              including by contributing to the design of stand, blog posts and
              posts on social media. In addition, you will also have the
              opportunity to design Ascend's competition uniform that will be
              used during the competition in the United States! It's a plus if
              you also want to work with 3D visualization or motion design, but
              it's not a requirement.
              <i className="key-words">
                {' '}
                Keywords: Graphic Design, Video Production, Adobe, Motion
                Design, 3D Visualization.
              </i>
            </p>
          </SubSection>
          <SubSection
            titleText="Event manager"
            id="event-manager"
            ref={e => this.addRef(e, 'event-manager')}
          >
            <hr />
            <p>
              As Event Manager you will have the opportunity to arrange events
              that not only reach all NTNU students, but also to the press and
              business community throughout Norway. You will be responsible for
              arranging stands and performances at various events, both
              internally at NTNU and outside the business community. In
              addition, you will have the opportunity to arrange events
              organized by Ascend, such as our own Robotics Day, live
              demonstration of drone flight or unveiling of our new drones. The
              entire marketing team will collaborate on several different
              levels, and as Event Manager you will especially work closely with
              our sponsorship contact to promote Ascend's image to potential new
              members and sponsors. Besides, you help us plan our annual trip to
              the United States!
              <i className="key-words">
                {' '}
                Keywords: Presentation, Organizing, Outgoing, Standing and Event
                Planning.
              </i>
            </p>
          </SubSection>
          <SubSection
            titleText="Webdeveloper"
            id="webdeveloper"
            ref={e => this.addRef(e, 'webdeveloper')}
          >
            <hr />
            <p>
              Do you want to develop a full-stack, scalable and graphically
              impressive web page? As a web developer you will be responsible
              for further developing and maintaining our website. It will also
              be your task to show who we are, our goals and the challenges we
              face in an interactive and exciting way - perhaps by creating an
              app or game? You will work closely with the rest of the marketing
              team to further develop Ascend's image. You will also have the
              opportunity to be in charge of system administration, that is, you
              can build and maintain our servers, and ensure that everything
              goes as automatically and smoothly as possible. You will be taught
              the necessary in web development (and some sysadmin) if you do not
              have experience with this from the beginning.
              <i className="key-words">
                {' '}
                Keywords: Web Development, Full-stack (Backend and Frontend),
                Graphic Design, React, Typescript, App Development, Sysadmin,
                Continuous Integration, Github Hooks, Server Managment.
              </i>
            </p>
          </SubSection>
          <SubSection
            titleText="Hardware groupmember"
            id="hardware-groupmember"
            ref={e => this.addRef(e, 'hardware-groupmember')}
          >
            <hr />
            <p>
              The hardware group is responsible for all the physical aspects of
              the drone. This involves designing the drone all the way from
              scratch. The drones are first drawn in CAD and the parts are
              manufactured in carbon fiber and 3d print. It is very important
              that the drone is light weight, but at the same time strong enough
              to withstand several collisions. Not least, the drones must look
              good. There is also a lot of electronics needed to make a drone
              that can sense the environment and react to them. There will be a
              need for development of everything from PDBs that will withstand
              over 100 amps to custom designed sensor systems as well as
              powerful computers.
              <i className="key-words">
                {' '}
                Keywords: CAD Tools, Drones or RC Vehicles, Power Analysis and
                Fluid Dynamics, Carbon Fiber, 3D Printing, Design, PCB Design,
                Altium Designer, Signal Processing
              </i>
            </p>
          </SubSection>
          <SubSection
            titleText="AI groupleader and groupmember"
            id="ai-groupmember"
            ref={e => this.addRef(e, 'ai-groupmember')}
          >
            <hr />
            <p>
              The AI Group's task is to define how the drones should behave,
              both individually and together. In the AI group you work with the
              overall artificial intelligence (AI) for the drone. It is the
              group's responsibility to produce an AI that can analyze the
              information about its surroundings and through this make the best
              and smartest decisions on its own. Here you get the opportunity to
              work with a wide range of AI algorithms as well as gain experience
              in taking something very theoretically and transferring it to the
              real world. AI is a major and important field of study and you
              will be able to participate in the entire process of research in
              state of the art techniques for implementing and testing the
              algorithm in both self-written simulations and in practice. We
              need you who like to program, are creative, want to solve team
              problems, are motivated and want to learn a lot new! <br />
              AI needs both a new group leader and new team members.
              <br /> As a group leader you will lead a technical group of 4-6
              people, be responsible for planning work and making sure that the
              work is done. You will work closely with technical managers and
              other group leaders, and thus get a good insight into the overall
              work Ascend NTNU does. As a group leader, you get a lot of
              experience in collaboration and the challenges that come with
              co-ordination of code developed by several programmers.
              <i className="key-words">
                {' '}
                Keywords: Artificial intelligence, programming, machine
                learning, deep learning, reinforcement learning, algorithms and
                data structures, statistics.
              </i>
            </p>
          </SubSection>
          <SubSection
            titleText="Control groupmember"
            id="control-groupmember"
            ref={e => this.addRef(e, 'control-groupmember')}
          >
            <hr />
            <p>
              As a member of the control group you will work closely with the
              other technical groups. Our task is to make sure the drones fly
              steadily, actively avoiding collisions, and find their way to
              their goal. This year we start work from scratch, which gives you
              as a control member a good opportunity to solve the challenges you
              want. This year we want to look into the possibility of using a
              mathematical model of the drones to improve performance, and it
              may be necessary to make changes to the flight controller. If you
              as an applicant have experience or interest in embedded and real
              time programming, this will be positive. We initially look for kyb
              students, but all students interested in the subject area are
              encouraged to apply. What we look for most of all is motivation
              and willingness to learn along the way.
              <i className="key-words">
                {' '}
                Keywords: PID controller, MPC, Path-planning, state machine,
                obstacle avoidance, etc.
              </i>
            </p>
          </SubSection>
          <SubSection
            titleText="Perception groupmember"
            id="perception-groupmember"
            ref={e => this.addRef(e, 'perception-groupmember')}
          >
            <hr />
            <p>
              The Perception team is the link between the drones and the world
              around them. That is acquiring input from different sensors and
              process the raw data into reliable information about the
              environment. To accomplish Mission 8 of IARC, the Perception team
              needs to deliver an accurate and reliable position and orientation
              of all four drones, build a system for effective and intuitive
              interaction with our drones, track the position of the hostile
              drones and a lot more. The members of the team need to be curious
              and willing to work on new and unsolved problems. Coding
              experience (Python / C++) is preferable.
              <i className="key-words">
                {' '}
                Keywords: State Estimation, Visual SLAM, Computer Vision and
                Robot Localization.
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
            src="https://preview.ibb.co/kuE9OK/ascend111.jpg"
            alt="Group 2018"
            className="fullscale-image"
          />
          <p
            style={{
              fontSize: '1.4em',
            }}
          ></p>
          <SubSection titleText=" Application for team 2021 will start soon, stay tuned on our social media for more information">
            <hr />
            <p>
              Ascend NTNU develops an autonomous drone and competes in the
              International Aerial Robotics Competition every year, the worlds
              largest and oldest engineering competition for autonomous aerial
              robotics. Ascend NTNU is searching for new members for team 2019,
              which will get the opportunity to develop, build and compete with
              a high tech drone. Underneath is a description of the different
              positions you can apply for. No previous knowledge is neccesary,
              the most important factor we are looking for are motivation and
              dedication
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
            Søk her!{' '}
          </a>
          <h4>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdgvQ1jVRs8iJmglmyGoaWiigi1E-Q8AdNjzrBWqwz0D9ukCA/viewform"
              target="
          _blank "
              rel="
          noopener noreferrer "
            >
              Application survey for team 2021 will come soon
            </a>
          </h4>{' '}
          {positions[this.state.language][1]}
          <SubSection titleText="Why should you apply?">
            <hr />
            <ul>
              <li>
                {' '}
                <strong> Be a part of an environment. </strong>
                By being a part of Ascend you become a part of a goal oriented
                and technology focused project where we work together to reach
                our goals.
              </li>
              <li>
                {' '}
                <strong> From theory to the real world. </strong>
                In Ascend you take some of the most advanced topics you learn on
                NTNU from the courses out in real life.{' '}
              </li>
              <li>
                {' '}
                <strong> Combine it with your studies. </strong>
                Several of our members write project/maaster thesis in related
                to their work in Ascend. There is also an oppurtunity to do
                "Eksperter i Team" with Ascend.{' '}
              </li>
              <li>
                {' '}
                <strong> Project / Organization experience </strong>
                In Ascend you are being a part of leading a technical project
                from start to finish - This gives lots of valuable experience.{' '}
              </li>
              <li>
                {' '}
                <strong> Cutting edge. </strong>
                Be a part of an organization which needs to use and develop
                state of the art technology within the field of autonomous
                robotics.{' '}
              </li>
              <li>
                {' '}
                <strong> Creative, flexible and innovative culture </strong>
                We wish to have an everchanging work culture in Ascend so your
                contribution to the organization can also involve tasks outside
                your job description that will be inspired by your interests and
                experiences!{' '}
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
            We look as Ascend as an arena to develop both technical and
            administrative skills
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
                <strong> Learning by doing. </strong> Noone in Ascend knows the
                exact solution to the problems we are trying to solve. But we
                are open to learn new concepts and technologies . Our idea is
                that the way to accomplish our goals are through trying and
                failing, learning and getting help from good advisors.
              </li>
            </ul>{' '}
          </SubSection>{' '}
          <SubSection titleText="Our collaboration platforms">
            <ul>
              <li>
                {' '}
                <strong> Slack: </strong>{' '}
                <a href="https:/ / slack.com / ">Slack </a>
                is a web application for chatting with teams. Using slack we get
                easy, open and straightforward communication - where everybody
                gets the opportunity to get updated and contribute in the areas
                they want. Because of slack we do almost never use email for
                communication within the team.
              </li>
              <li>
                <strong> Github: </strong>We host our code on{' '}
                <a href="https:/ / github.com / ">github</a>, and use the git
                workflow while collaborating
              </li>
              <li>
                <strong> Jira: </strong>
                <a href="https:/ / www.atlassian.com / software / jira ">
                  Jira{' '}
                </a>
                is a project management tool from Atlassian. We use Jira to keep
                track of which tasks are being worked on, and which needs to be
                finished to complete the different parts of the projects.
              </li>
              <li>
                <strong> Confluence: </strong>We use{' '}
                <a href="https:/ / www.atlassian.com / software / confluence ">
                  Confluence{' '}
                </a>
                to keep and share the knowledge we have within the organization.
                By posting things in the wikis, the organization grows its
                knowledge base, even though new members come and go.
              </li>
            </ul>{' '}
          </SubSection>
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
              the bottom on our frontpage.
            </p>{' '}
          </SubSection>{' '}
          <SubSection titleText="Questions?">
            <p>
              {' '}
              If you have any questions, please reach out to us at:{' '}
              <a href="mailto:hi@ascendntnu.no"> hi @ascendntnu.no </a>
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
