import React, {
  Component
} from 'react'

import {
  Section,
  SubSection,
} from '../PageLayout'
import { Breadcrumb } from '../Common/breadcrumb'

import YouTube from 'react-youtube'
export class JoinPage extends Component {
  constructor (props) {
    super(props)

    // This is for avoiding showing mails on GitHub in plaintext.
    this.emails = [
      'simen.sandbu',
      'erling.solberg',
      'kim.borgen',
      'truls.olsen',
      'kevin.kaldvansvik',
      'ulrich.isachsen',
      'havard.mellbye',
      'filip.lolland',
      'rasmus.munter'
    ].map((e) => `${e}@`)

    this.state = {
      language: props.match.params.language || 'no'
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState(Object.assign({}, this.state, {
      language: nextProps.match.params.language || 'no'
    }))
  }

  setAnchor (anchor) {
    let top = document.getElementById(anchor).offsetTop - 150
    if (document.querySelector('body').scrollTop > 0) {
      document.querySelector('body').scrollTop = top
    } else {
      document.querySelector('#app').scrollTop = top
    }
  }

  setLanguage () {
    let newLanguage = 'no'
    switch (this.state.language) {
      case 'no': newLanguage = 'en'; break
      default: newLanguage = 'no'; break
    }

    this.setState({
      language: newLanguage
    })
  }

  render () {
    const opts = {
      height: 150,
      width: 200,
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    }

    let positions = {
      'en': [

      <Section titleText='Positions'
        key='2' >
        
        <ul className='anchor-list' >
          <li onClick={
          () => this.setAnchor('hardware-groupmember')
        } > <a > Hardware groupmember </a></li >
          <li onClick={
          () => this.setAnchor('perception-groupmember')
        } > <a > Perception groupmember </a></li >
          <li onClick={
          () => this.setAnchor('control-groupmember')
        } > <a > Control groupmember </a></li >
          <li onClick={
          () => this.setAnchor('ai-groupmember')
        } > <a > AI groupleader </a></li >
          <li onClick={
          () => this.setAnchor('ai-groupmember')
        } > <a > AI groupmember </a></li >
          <li onClick={
          () => this.setAnchor('sponsocontact')
        } > <a > Sponsorcontact </a></li >
          <li onClick={
          () => this.setAnchor('graphical-designer')
        } > <a > Graphical designer </a></li >
          <li onClick={
          () => this.setAnchor('event-manager')
        } > <a > Event Manager </a></li >
          <li onClick={
          () => this.setAnchor('webdeveloper')
        } > <a > Webdeveloper </a></li >
        </ul> 
        <SubSection titleText="Sponsorcontact" id="sponsorcontact">
          <p>
          Do you want to be Ascend NTNU's representative in business? We in Ascend are entirely dependent on our sponsors in order to do the work we do. As a sponsor contact in Ascend, value creation for our sponsors will be your main task. You will work to find new sponsors, maintain communication with our existing sponsors, and in addition prepare contracts and sponsorship packages. This is a golden opportunity to make connections with contacts in the industy! In addition, you will work with the entire marketing team to further develop Ascend's image, and you will cooperate closely with our event manager to plan and organize sponsorship activities.          </p>
        </SubSection>
        <SubSection titleText="Graphical designer" if="graphical-designer">
          <p>
          Participate in shaping the entire Ascend NTNU's image outward! As a graphic designer, your work tasks will be very varied, including video production, design of promotional materials and profile items, and you will be responsible for Ascend's graphic design. You will also collaborate with the rest of the marketing team, including by contributing to the design of stand, blog posts and posts on social media. In addition, you will also have the opportunity to design Ascend's competition uniform that will be used during the competition in the United States! It's a plus if you also want to work with 3D visualization or motion design, but it's not a requirement.          </p>
        </SubSection>
        <SubSection titleText="Event manager" id="event-manager">
          <p>
          As Event Manager you will have the opportunity to arrange events that not only reach all NTNU students, but also to the press and business community throughout Norway. You will be responsible for arranging stands and performances at various events, both internally at NTNU and outside the business community. In addition, you will have the opportunity to arrange events organized by Ascend, such as our own Robotics Day, live demonstration of drone flight or unveiling of our new drones. The entire marketing team will collaborate on several different levels, and as Event Manager you will especially work closely with our sponsorship contact to promote Ascend's image to potential new members and sponsors. Besides, you help us plan our annual trip to the United States!          
          </p>
        </SubSection>
        <SubSection titleText="Webdeveloper" id="webdeveloper">
          <p>
          Do you want to develop a full-stack, scalable and graphically impressive web page? As a web developer you will be responsible for further developing and maintaining our website. It will also be your task to show who we are, our goals and the challenges we face in an interactive and exciting way - perhaps by creating an app or game? You will work closely with the rest of the marketing team to further develop Ascend's image. You will also have the opportunity to be in charge of system administration, that is, you can build and maintain our servers, and ensure that everything goes as automatically and smoothly as possible. You will be taught the necessary in web development (and some sysadmin) if you do not have experience with this from the beginning.
          </p>
        </SubSection>
        <SubSection titleText="Hardware groupmember" id="hardware-groupmember">
          <p>
          The hardware group is responsible for all the physical aspects of the drone. This involves designing the drone all the way from scratch. The drones are first drawn in CAD and the parts are manufactured in carbon fiber and 3d print. It is very important that the drone is light weight, but at the same time strong enough to withstand several collisions. Not least, the drones must look good.
          There is also a lot of electronics needed to make a drone that can sense the environment and react to them. There will be a need for development of everything from PDBs that will withstand over 100 amps to custom designed sensor systems as well as powerful computers.
          </p>
        </SubSection>
        <SubSection titleText="AI groupleader and groupmember" id="ai-groupmember">
          <p>
          The AI Group's task is to define how the drones should behave, both individually and together. In the AI group you work with the overall artificial intelligence (AI) for the drone. It is the group's responsibility to produce an AI that can analyze the information about its surroundings and through this make the best and smartest decisions on its own. Here you get the opportunity to work with a wide range of AI algorithms as well as gain experience in taking something very theoretically and transferring it to the real world. AI is a major and important field of study and you will be able to participate in the entire process of research in state of the art techniques for implementing and testing the algorithm in both self-written simulations and in practice. We need you who like to program, are creative, want to solve team problems, are motivated and want to learn a lot new!
          AI needs both a new group leader and new team members. As a group leader you will lead a technical group of 4-6 people, be responsible for planning work and making sure that the work is done. You will work closely with technical managers and other group leaders, and thus get a good insight into the overall work Ascend NTNU does. As a group leader, you get a lot of experience in collaboration and the challenges that come with co-ordination of code developed by several programmers.
          </p>
        </SubSection>
        <SubSection titleText="Control groupmember" id="control-groupmember">
          <p>
          As a member of the control group you will work closely with the other technical groups. Our task is to make sure the drones fly steadily, actively avoiding collisions, and find their way to their goal. This year we start work from scratch, which gives you as a control member a good opportunity to solve the challenges you want. This year we want to look into the possibility of using a mathematical model of the drones to improve performance, and it may be necessary to make changes to the flight controller. If you as an applicant have experience or interest in embedded and real time programming, this will be positive. We initially look for kyb students, but all students interested in the subject area are encouraged to apply. What we look for most of all is motivation and willingness to learn along the way.        
          </p>  
        </SubSection>
        <SubSection titleText="Perception groupmember" id="perception-groupmember">
          <p>
          The Perception team is the link between the drones and the world around them. That is acquiring input from different sensors and process the raw data into reliable information about the environment. To accomplish Mission 8 of IARC, the Perception team needs to deliver an accurate and reliable position and orientation of all four drones, build a system for effective and intuitive interaction with our drones, track the position of the hostile drones and a lot more. The members of the team need to be curious and willing to work on new and unsolved problems. Coding experience (Python / C++) is preferable.
          </p>
        </SubSection>
        </Section>
      ],
      'no': [ 
      
      <Section titleText='Stillinger'
        key='2' >
        
        <ul className='anchor-list' >
          <li onClick={
          () => this.setAnchor('hardware-gruppemedlem')
        } > <a > Hardware gruppemedlem </a></li >
          <li onClick={
          () => this.setAnchor('perception-gruppemedlem')
        } > <a > Perception gruppemedlem </a></li >
          <li onClick={
          () => this.setAnchor('control-gruppemedlem')
        } > <a > Control gruppemedlem </a></li >
          <li onClick={
          () => this.setAnchor('ai-gruppemedlem')
        } > <a > AI gruppeleder </a></li >
          <li onClick={
          () => this.setAnchor('ai-gruppemedlem')
        } > <a > AI gruppemedlem </a></li >
          <li onClick={
          () => this.setAnchor('sponsorkontakt')
        } > <a > Sponsorkontakt </a></li >
          <li onClick={
          () => this.setAnchor('grafisk-designer')
        } > <a > Grafisk ansvarlig </a></li >
          <li onClick={
          () => this.setAnchor('event-manager')
        } > <a > Event Manager </a></li >
          <li onClick={
          () => this.setAnchor('webutvikler')
        } > <a > Webutvikler </a></li >
        </ul> 
        <SubSection titleText="Sponsorkontakt" id="sponsorkontakt">
          <p>
          Har du lyst til å være Ascend NTNU sin representant i næringslivet? Vi i Ascend er helt avhengige av våre sponsorer for å kunne gjøre det arbeidet vi gjør. Som sponsorkontakt i Ascend vil verdiskapning for våre sponsorer være din hovedoppgave. Du vil jobbe med å finne nye sponsorer, opprettholde kommunikasjon med våre eksisterende sponsorer, og i tillegg utarbeide kontrakter og sponsorpakker. Dette er en gylden mulighet til å knytte kontakter i næringslivet! Dessuten kommer du til å jobbe sammen med hele markedsføringsgruppen for å videreutvikle Ascends "image", samt at du vil samarbeide tett med event manageren vår for å planlegge og organisere sponsoraktiviteter. 
          </p>
        </SubSection>
        <SubSection titleText="Grafisk ansvarlig" if="grafisk-designer">
          <p>
          Bli med på å forme hele Ascend NTNU sitt "image" utad! Som grafisk ansvarlig vil dine arbeidsoppgaver være svært varierte, og blant annet inkludere videoproduksjon, design av markedsmateriell og profileringsartikler, samt at du vil ha ansvaret for Ascends grafiske utforming. Du vil også samarbeide med resten av markedsføringsgruppen, blant annet ved å bidra til utforming av stand, blogginnlegg og innlegg på sosiale medier. I tillegg vil du også få muligheten til å designe Ascends konkurranseuniform som vil brukes under konkurransen i USA! Det er et pluss om du også vil arbeide med 3D visualisering eller motion design, men det er ikke et krav.
          </p>
        </SubSection>
        <SubSection titleText="Event manager" id="event-manager">
          <p>
          As Event Manager you will have the opportunity to arrange events that not only reach all NTNU students, but also to the press and business community throughout Norway. You will be responsible for arranging stands and performances at various events, both internally at NTNU and outside the business community. In addition, you will have the opportunity to arrange events organized by Ascend, such as our own Robotics Day, live demonstration of drone flight or unveiling of our new drones. The entire marketing team will collaborate on several different levels, and as Event Manager you will especially work closely with our sponsorship contact to promote Ascend's image to potential new members and sponsors. Besides, you help us plan our annual trip to the United States!
          </p>
        </SubSection>
        <SubSection titleText="Webutvikler" id="webutvikler">
          <p>
          Har du lyst å utvikle en full-stack, skalerbar og grafisk imponerende webside? Som webutvikler vil du ha ansvar for å videreutvikle og vedlikeholde hjemmesiden vår. Det blir også din oppgave å vise frem hvem vi er, våre mål og hvilke utfordringer vi møter på en interaktiv og spennende måte - kanskje ved å lage en app eller et spill? Du vil jobbe tett sammen med resten av markedsføringsgruppen for å videreutvikle Ascends "image" utad. Du vil også få muligheten til å ha ansvar for systemadministrasjon, det vil si at du blant annet får bygge og vedlikeholde våre byggservere og sørge for at alt går så automatisk og knirkefritt som mulig. Du vil bli kurset i webutvikling (og noe sysadmin) om du ikke har erfaring med dette fra før av.          </p>
        </SubSection>
        <SubSection titleText="Hardware gruppemedlem" id="hardware-gruppemedlem">
          <p>
            Hardwaregruppen er ansvarlig for alt det fysiske på dronen. Dette innebærer å designe dronen helt fra bunnen av. Dronen tegnes først opp i CAD og delene produseres i karbonfiber og 3d-print. Det er svært viktig at dronen er lett, men samtidig sterk nok til å tåle flere kollisjoner. Ikke minst må dronen se bra ut.
            Det er også mye elektronikk som må til for å lage en drone som kan sanse omgivelsene og reagere på dem. Det vil være behov for utvikling av alt fra PDB'er som skal tåle over 100 amper til spesialdesignede sensorsystemer samt kraftige datamaskiner.
          </p>
        </SubSection>
        <SubSection titleText="AI gruppemedlem og gruppeleder" id="ai-gruppemedlem">
          <p>
          AI gruppa sin oppgave er å definere hvordan dronene skal oppføre seg, både individuelt og sammen. I AI gruppen jobber du med den overordnede kunstige intelligensen (AI) til dronen. Det er gruppen sitt ansvar å produsere en AI som kan analysere informasjonen om verden rundt seg og gjennom dette ta de beste og smarteste avgjørelsene på egen hånd. Her får du muligheten til å jobbe med et bredt spekter av AI algoritmer samt få erfaring i å ta noe veldig teoretisk og overføre det til den virkelige verden. AI er et stort og viktig fagfelt og du vil få mulighet til å være med på hele prosessen fra research i "state of the art" teknikker til implementering og testing av algoritmen både i selvskrevne simuleringer og i praksis. Vi trenger deg som liker å programmere, er kreativ, vil løse problemer i team, er motivert og ønsker å lære masse nytt!
          AI trenger både gruppeleder og nye guppemedlemmer.  Som gruppeleder vil du lede en teknisk gruppe på 4-6 personer, ha ansvaret for å planlegge arbeid og sørge for at arbeidet blir utført. Du vil og jobbe tett sammen med tekniske ledere og andre gruppeledere, og slik få god innsikt i det helhetlige arbeidet Ascend NTNU gjør. Som gruppeleder får du mye erfaring i samarbeid og utfordringene som kommer med samkjøring av kode utviklet av flere programmere.
          </p>
        </SubSection>
        <SubSection titleText="Control gruppemedlem" id="control-gruppemedlem">
          <p>
          Som medlem av control-gruppa vil du jobbe tett med de øvrige tekniske gruppene. Vår oppgave er å sørge for at dronene flyr stabilt, aktivt unngår kollisjoner, og finner frem til målet sitt. I år starter vi arbeidet fra scratch, som gir deg som control-medlem god mulighet til å løse utfordringene som du selv ønsker. I år ønsker vi å se på muligheten til å bruke en matematisk modell av dronene for å forbedre ytelsen, og det vil da kunne være nødvendig å gjøre endringer i flight-controlleren. Dersom du som søker har erfaring eller interesse innenfor embedded og sanntidsprogrammering vil dette være positivt.  Vi ser i utgangspunktet etter kyb-studenter, men alle studenter med interesse for fagfeltet oppfordres til å søke. Det vi ser etter mest av alt er motivasjon og vilje til å lære underveis.          </p>
        </SubSection>
        <SubSection titleText="Perception gruppemedlem" id="perception-gruppemedlem">
          <p>
          Perception-teamet er koblingen mellom drone og verden rundt dem. Det handler om å skaffe informasjon fra forskjellige sensorer og bearbeide rådataene i pålitelig informasjon om miljøet. For å klare Mission 8 i IARC må Perception-teamet levere en nøyaktig og pålitelig posisjon og orientering av alle fire droner, bygge et system for effektiv og intuitiv samhandling med våre droner, spore stillingen til de fiendtlige dronene og mye mer. Medlemmene av teamet må være nysgjerrige og villige til å jobbe med nye og uløste problemer. Koding erfaring (Python / C ++) er å foretrekke.          </p>
        </SubSection>
        </Section>
      ]
    }

    let contents = {
      'en': [

      <Section titleText='Reach new heights - Join Ascend NTNU'
        key='1' >
        <img src='https://preview.ibb.co/kuE9OK/ascend111.jpg'
          alt='Group 2018'
          className='fullscale-image' />
        <p style={{
          fontSize: '1.4em'
        }} > <b > Application deadline sunday september 2nd, 2018</b></p >
        <p > 
        Ascend NTNU develops an autonomous drone and competes in the International Aerial Robotics Competition every year, the worlds largest and oldest engineering competition for autonomous aerial robotics. Ascend NTNU is searching for new members for team 2019, which will get the opportunity to develop, build and compete with a high tech drone. Underneath is a description of the different positions you can apply for. No previous knowledge is neccesary, the most important factor we are looking for are motivation and dedication<br/>
        </p>
          <YouTube 
            videoId="qr6UwZnJUYc"
            opts={opts}
            onReady={this._onReady}
          />
        <a className='button active'
          style={{
            alignSelf: 'flex-start',
            display: 'none'
          }}
          href='https://docs.google.com/forms/d/e/1FAIpQLSdgvQ1jVRs8iJmglmyGoaWiigi1E-Q8AdNjzrBWqwz0D9ukCA/viewform' > Søk her! </a>
        <h4><a href='https://docs.google.com/forms/d/e/1FAIpQLSdgvQ1jVRs8iJmglmyGoaWiigi1E-Q8AdNjzrBWqwz0D9ukCA/viewform' target='
          _blank ' rel='
          noopener noreferrer '>Click here to apply for a position at team 2019</a></h4> {
          positions[this.state.language][1]
        } <i > Its only students studying at NTNU at the school year 2018-2019 which is eligible to join, if you are wondering if you are eligible to join, dont hesitate to ask at: <a href='mailto:hi@ascendntnu.no' > hi @ascendntnu.no </a></i >
        <SubSection titleText='Why should you apply?' >
          <ul >
            <li > <strong > Be a part of an environment. </strong> In Ascend, you  </li >
            <li > <strong > From theory to real life. </strong> In Ascend, you take some of the toughest concepts from NTNU and use them in real life applications.</li >
            
            <li > <strong > Cutting edge. </strong> Be a part of an organization that develops state of the art robotics solutions. </li >
          </ul> </SubSection > <SubSection titleText='The competition' >
            <p > International Aerial robotics competition(IARC) is a yearly competition which is held in 
       USA and China with the objective to push the limits
      of what is possible with autonomous drones. This is being done with presenting tasks that are impossible 
      to accomplish when they are being released. The idea is that when the behaviour is shown in the competition,
      the competition will have presented technology which is useful for the world.</p>
          </SubSection> </Section >,
      ],
      'no': [ 
      <Section titleText='Nå nye høyder - Søk Ascend!'
        key='1' >
        <img src='https://preview.ibb.co/kuE9OK/ascend111.jpg'
          alt='Group 2018'
          className='fullscale-image' />
        <p style={{
          fontSize: '1.4em'
        }} > <b > Søknadsfrist søndag 2. september 2018</b></p >
        <p > 
        Hvert år utvikler og bygger Ascend NTNU en autonom drone fra bunnen av og deltar i The International Aerial Robtics Competition, verdens eldste og vanskeligste ingeniørkonkurranse for autonom luftrobotikk. Ascend NTNU tar nå opp nye medlemmer til Team 19, som i løpet av ett år får muligheten til å være med å utvikle, bygge og konkurrere med en høyteknologisk drone i USA. I år skrur vi også opp vanskelighetsgraden og skal bygge intet mindre enn 4 droner, med fokus på autonome svermer. Under kan du lese mer om de ulike undergruppene i Ascend NTNU som tar opp nye medlemmer. Husk at ingen forkunnskaper er påkrevd i noen av gruppene, det vi i første omgang ser etter er motivasjon og vilje til å lære. <br />        
        </p>
          <YouTube 
            videoId="qr6UwZnJUYc"
            opts={opts}
            onReady={this._onReady}
          />
        <a className='button active'
          style={{
            alignSelf: 'flex-start',
            display: 'none'
          }}
          href='https://docs.google.com/forms/d/e/1FAIpQLSdgvQ1jVRs8iJmglmyGoaWiigi1E-Q8AdNjzrBWqwz0D9ukCA/viewform' > Søk her! </a>
        <h4><a href='https://docs.google.com/forms/d/e/1FAIpQLSdgvQ1jVRs8iJmglmyGoaWiigi1E-Q8AdNjzrBWqwz0D9ukCA/viewform' target='
          _blank ' rel='
          noopener noreferrer '>Trykk her for å legge inn søknad som gruppemedlem</a></h4> {
          positions[this.state.language][1]
        } <i > Det er kun studenter som studerer på NTNU i året 2018/2019 som kan søke. Er du usikker på om dette gjelder
      for deg ? Spør oss på <a href='mailto:hi@ascendntnu.no' > hi @ascendntnu.no </a></i >
        <SubSection titleText='Hvorfor søke' >
          <ul >
            <li > <strong > Bli en del av et miljø. </strong> I Ascend blir du en del av et
      målrettet og teknologifokusert prosjekt der vi jobber sammen for å nå våre mål. </li >
            <li > <strong > Fra teori til praksis. </strong> I Ascend tar man noen av de mest
      avanserte konseptene man lærer på NTNU fra lærebøkene ut til virkeligheten. </li >
            <li > <strong > Kombiner med graden din. </strong> Flere av medlemmene våre skriver
      prosjekt/master - oppgave relatert til Ascend. I tillegg finnes det en åpning
      for å drive med Ascend i Eksperter i Team. </li> <li > <strong > Prosjekt / organisasjons - erfaring. </strong> I Ascend er du med på
      å føre et teknisk prosjekt fra start til slutt - dette gir mye verdifull erfaring
      og kompetanse på veien. </li >
            <li > <strong > Cutting edge. </strong> Bli en del av en organisasjon som må ta i bruk
      og utvikle teknologi som er state of the art innenfor autonom robotikk. </li >
            <li > <strong > Kreativ,
      fleksibel og innovativ kultur </strong> Vi ønsker å holde en flytende arbeidskultur
       i Ascend slik at ditt bidrag til organisasjonen kan også involvere oppgaver utenfor
        stillingsbeskrivelsen som vil bli inspirert av dine interesser og erfaringer! </li >
          </ul> </SubSection > <SubSection titleText='Konkurransen' >
            <p > International Aerial robotics competition(IARC) er en årlig konkurranse som avholdes i
       USA og Kina med mål om å presse grensene
      for hva man får til med autonome droner.Dette gjør de ved å presentere meningsfulle og
      nyttige oppdrag som er umulige å løse på det tidspunktet de lanseres. Ideen er at når
      den oppførselen som etterspørres til slutt demonstres i konkurransen,
      vil konkurransen ha bidratt til en meningsfull utvikling innenfor autonom robotikk.
      En utvikling som fortrinnsvis er til fordel
      for verden. </p> <p > <a href='https://ascendntnu.no/blog/2017-07-20-the-competition'
        role='button' > Les mer om konkurransen og om oppdraget vi skal løse her. </a></p >
          </SubSection> </Section >,

        <Section titleText='Nå nye høyder - Søk Ascend!'
          key='2' >
          <img src='https://preview.ibb.co/kuE9OK/ascend111.jpg'
            alt='Group 2018'
            className='fullscale-image' />
            <p> Hvert år utvikler og bygger Ascend NTNU en autonom drone fra bunnen av og deltar i The International 
            Aerial Robtics Competition, verdens eldste og vanskeligste ingeniørkonkurranse for autonom luftrobotikk. 
            Ascend NTNU tar nå opp nye medlemmer til Team 19, som i løpet av ett år får muligheten til å være med å 
            utvikle, bygge og konkurrere med en høyteknologisk drone i USA. I år skrur vi også opp vanskelighetsgraden 
            og skal bygge intet mindre enn 4 droner, med fokus på autonome svermer. Under kan du lese mer om de ulike 
            undergruppene i Ascend NTNU som tar opp nye medlemmer. Husk at ingen forkunnskaper er påkrevd i noen av gruppene, 
            det vi i første omgang ser etter er motivasjon og vilje til å lære.</p>
      <p > Ascend NTNU har hovedopptak på høsten hvert år
      for å ta inn nye medlemmer. </p> <p > <strong > Ny mulighet vil annonseres til våren og høsten neste år. Hvis du vil bli
      oppdatert om denne - skriv deg opp på linken under! </strong></p >
          <a className='button active'
            style={{
              alignSelf: 'flex-start'
            }}
            href='http://ascendntnu.us14.list-manage2.com/subscribe?u=dfce303a41ce42b342c75a3ef&amp;id=002e04db12'
            target='_blank'
            rel='noopener noreferrer' > Interesseliste
      for opptak </a> <SubSection titleText='Hvorfor søke' >
        <ul >
          <li > <strong > Bli en del av et miljø. </strong> I Ascend blir du en del av et
      målrettet teknologifokusert prosjekt der vi jobber sammen for å nå våre mål. </li >
          <li > <strong > Fra teori til praksis. </strong> I Ascend tar man noen av de mest
       avanserte konseptene man lærer på NTNU fra lærebøkene til virkeligheten. </li >
          <li > <strong > Kombiner med graden din. </strong> Flere av medlemmene våre skriver
      prosjekt/master - oppgave relatert til Ascend. I tillegg finnes det en åpning
      for å drive med Ascend i Eksperter i Team. </li> <li > <strong > Prosjekt / organisasjons - erfaring. </strong> I Ascend er
      du med på å føre et teknisk prosjekt fra start til slutt - dette gir mye verdifull
       erfaring og kompetanse på veien. </li >
          <li > <strong > Cutting edge. </strong> Bli en del av en organisasjon som
      må ta i bruk og utvikle teknologi som er state of the art innenfor autonom robotikk. </li >
        </ul> </SubSection > <SubSection titleText='Konkurransen' >
          <p > International Aerial robotics competition(IARC) er en årlig konkurranse som avholdes
      i USA og Kina med mål om å presse grensene
      for hva man får til med autonome droner. Dette gjør de ved å presentere meningsfulle og
      nyttige oppdrag som er umulige å løse på det tidspunktet de lanseres. Ideen er at når den
       oppførselen som etterspørres til slutt demonstres i konkurransen,
      vil konkurransen ha bidratt til en meningsfull utvikling innenfor autonom robotikk.
      En utvikling som fortrinnsvis er til fordel
      for verden. </p> <p > <a href='https://ascendntnu.no/blog/2017-07-20-the-competition'
        role='button' > Les mer om konkurransen og om oppdraget vi skal løse her. </a></p >
        </SubSection> </Section >
      ]
    }

    let about = {
      'en': (<div />
    ),
      'no': (<Section titleText='Om oss' >
        <p > Ascend er en studentorganisasjon som skal representere NTNU i <a href='http://www.aerialroboticscompetition.org/' > The International Aerial Robotics Competition </a>. Vi ønsker å skape et miljø hvor studenter kan drive med autonome droner, og ha den årlige konkurransen som et felles mål. Vi ser på Ascend som en arena for å videreutvikle tekniske ferdigheter så vel som ferdigheter innenfor prosjektstyring og andre administrative oppgaver.</p >
        <SubSection titleText='Hvordan vi jobber' >
          <ul >
            <li > <strong > Flat og åpen struktur. </strong> Ascend NTNU har troen på at
       en flat og åpen struktur egner seg best for både trivsel og resultat. Vårt mål er
        å være en organisasjon der alle har anledning til å bli hørt og bidra på de områdene de
         ønsker. </li >
            <li > <strong > Frihet og ansvar. </strong> Vi mener at motivasjon handler om å bli
      gitt både ansvar og tillit. Vi velger å stole på at medlemmene våre får jobben gjort,
      fremfor å bygge tidkrevende og demotiverende kontrollsystemer. </li >
            <li > <strong > Learning by doing. </strong> Ingen i Ascend sitter på fullstendige
       løsninger til utfordringene vi møter. Vi er derimot åpne for å lære nye konsepter
        og teknologier. Vår idé er at veien til målet går gjennom prøving og feiling,
        nye kunnskaper og gode rådgivere. </li >
          </ul> </SubSection > <SubSection titleText='Våre samarbeidsplattformer' >
          <ul >
            <li > <strong > Slack: </strong> <a href='https:/ / slack.com / '>Slack</a> er en chatte-web-app for team. Med Slack får vi enkel, åpen og oversiktlig kommunikasjon - hvor alle får muligheten til å følge med og bidra på de områdene de ønsker. På grunn av Slack er det nesten ingen epost innad i teamet.</li> <li > <strong > Github: </strong>Vi har koden vår på <a href='https:/ / github.com / '>github</a>, og bruker git-arbeidsflyter når vi samarbeider.</li> <li > <strong > Jira: </strong><a href='https:/ / www.atlassian.com / software / jira '>Jira</a> er et prosjektstyringsverktøy fra Atlassian. Vi bruker Jira for å holde styr på hvilke oppgaver som jobbes med og hvilke som må fullføres for å ferdigstille de ulike delene av prosjektet.</li> <li > <strong > Confluence: </strong>Vi bruker <a href='https:/ / www.atlassian.com / software / confluence '>Confluence</a> for å ta vare på og dele kompetansen vi har i organisasjonen. Gjennom å legge ting inn i wikiene lærer organisasjonen stadig mer, til tross for at medlemmer kommer og går.</li> </ul > </SubSection> <SubSection titleText='Vårt tilholdssted' >
              <p > Til daglig holder vi til i Institutt
      for Teknisk Kybernetikk sin lab på taket av blokk A i El - bygget på Gløshaugen,
      kjent som taklabben. Taklabben er et arbeidslokale
      for alle i Ascend som har flere kraftige datamaskiner, alt utstyr du måtte
      trenge og en egen intern kiosk. På den måten blir veien fra utvikling til testing kort. </p> </SubSection > <SubSection titleText='Hvem vi jobber med' >
        <p > Vi har god kontakt med Institutt
      for Teknisk Kybernetikk(ITK), Institutt
      for Datateknikk og Informasjonsvitenskap(IDI) og alle våre sponsorer. Gjennom
      instituttene får vi tilgang til diverse labber, utstyr og kompetanse. I tillegg
      skriver flere av våre medlemmer prosjekt / master knyttet til Ascend
      for IDI og ITK. En oversikt over våre sponsorer finner du nederst på hovedsiden vår. </p> </SubSection > <SubSection titleText='Spørsmål?' >
        <p > Hvis det er noe du lurer på, send en mail til <a href='mailto:hi@ascendntnu.no' > hi @ascendntnu.no </a></p >
      </SubSection> </Section >
    )
    }

    let nextLanguage = 'no'
    switch (this.state.language) {
      case 'no': nextLanguage = 'en'; break
      default: nextLanguage = 'no'; break
    }

    let languageNames = {
    'en': 'English',
    'no': 'Norsk'
    }

    return (<div className='page page-join' >
      <Breadcrumb routes={
        ['join']
      }
      /> {
      <div style={ { textAlign: 'right', marginTop: '-1.8em' } } className="page-container">
        <button className="button"  onClick={this.setLanguage.bind(this)}>{languageNames[nextLanguage]}</button>
      </div> 
    } {
      contents[this.state.language][0]
    } 
    {
      positions[this.state.language][0]
    }
    {
      about[this.state.language]
    } </div>
    )
  }
}

export default JoinPage
