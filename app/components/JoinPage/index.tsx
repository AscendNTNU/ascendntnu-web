import * as React from 'react'
import { Link } from 'react-router'

import { Section, SubSection, SubSubSection } from '../PageLayout'
import { Breadcrumb } from '../Common/breadcrumb'

export interface JoinPageProps {
  params: {
    language?: string,
  }
}

export interface JoinPageState {
  language?: string,
}

export class JoinPage extends React.Component<JoinPageProps, JoinPageState> {
  private emails: string[]

  constructor (props: any) {
    super(props)

    this.emails = [
      'brage.eikanger',
      'vebjorn.isaksen',
      'emilie.udnaes',
      'simon.blindheim',
      'matias.christensen',
    ].map((e: string) => `${e}@`)

    this.state = {
      language: props.params.language || 'no'
    }
  }

  componentWillReceiveProps (nextProps: JoinPageProps) {
    this.setState(Object.assign({}, this.state, {
      language: nextProps.params.language || 'no'
    }))
  }

  setAnchor (anchor: string): void {
    let top: number = document.getElementById(anchor).offsetTop - 150
    if (document.querySelector('body').scrollTop > 0) {
      document.querySelector('body').scrollTop = top
    } else {
      document.querySelector('#app').scrollTop = top
    }
  }

  render () {
    let positions: any = {
      'en': [
        <div></div>
      ],
      'no': [
        <SubSection titleText="Stillinger" key="1">
          <ul className="anchor-list">
            <li onClick={() => this.setAnchor("hardware-gruppemedlem")}><a>Hardware gruppemedlem</a></li>
            <li onClick={() => this.setAnchor("teknisk-gruppeleder-hardware")}><a>Teknisk gruppeleder - Hardware</a></li>
            <li onClick={() => this.setAnchor("perception-gruppemedlem")}><a>Perception gruppemedlem</a></li>
            <li onClick={() => this.setAnchor("teknisk-gruppeleder-perception")}><a>Teknisk gruppeleder - Perception</a></li>
            <li onClick={() => this.setAnchor("control-gruppemedlem")}><a>Control gruppemedlem</a></li>
            <li onClick={() => this.setAnchor("ai-gruppemedlem")}><a>AI gruppemedlem</a></li>
            <li onClick={() => this.setAnchor("sponsorkontakt")}><a>Sponsorkontakt</a></li>
            <li onClick={() => this.setAnchor("grafisk-designer")}><a>Grafisk designer</a></li>
            <li onClick={() => this.setAnchor("event-manager")}><a>Event Manager</a></li>
            <li onClick={() => this.setAnchor("webutvikler")}><a>Webutvikler</a></li>
          </ul>
          <h3>Hardware gruppemedlem</h3>
          <p id="hardware-gruppemedlem">
            Det er Hardware gruppen som designer og bygger selve dronene til Ascend, og her kan du jobbe med litt av hvert. Gruppen er en krysning mellom mekanisk ingeniørvitenskap, produktdesign og elektronikk. Dette involverer å kunne designe og produsere delene til dronen, designe det elektriske systemet ombord på dronen og samarbeide med de andre gruppene for å integrere sensorikk og datamaskinene vi har ombord! Her trenger vi mange forskjellige talenter. Du vil bli kurset i slik teknologi om du ikke har erfaring med det fra før. <br />
            <i className="key-words">Nøkkelord: Mekanisk design, Produktdesign, Elektrisk design, Kretskortdesign, Styrkeberegning, Materialvalg, Aerodynamikk</i>
          </p>
          <h3>Teknisk gruppeleder - Hardware</h3>
          <p id="teknisk-gruppeleder-hardware">
            Som teknisk gruppeleder er det ditt ansvar å holde oversikt over det tekniske arbeidet som må gjøres på gruppen din, sørge for at alle har det de trenger, sørge for at gruppen kommuniserer med de andre tekniske gruppene og at alle i Ascend er oppdatert. Du vil fordele arbeidsoppgaver samtidig som du selv blir å gjøre like mye hands-on teknisk arbeid som gruppen din. Du vil også bli kurset i ledelse om du ikke har erfaring med det fra før. <br />
            <i className="key-words">Nøkkelord: Ledelse, Mekanisk design, Produktdesign, Elektrisk design, Kretskortdesign, Styrkeberegning, Materialvalg, Aerodynamikk.</i>
          </p>
          <h3>Perception gruppemedlem</h3>
          <p id="perception-gruppemedlem">
            Perception gruppen jobber med å få dronen til å oppfatte sine omgivelser, forstå hva den ser og hvor den er til en hver tid. Dette er en av de store utfordringene når man driver med robotikk, og hele Ascend er avhengig av at Perception leverer smarte løsninger. Dronen vår skal samle inn video fra kamera og en rekke sensorer og kombinerer dette på en smart måte for å bygge et bilde av omverdenen som dronen mener er forståelig. Som gruppemedlem i denne gruppen vil du jobbe med å skrive kunstig intelligent programvare og smarte algoritmer som klarer å ta slik kompleks rå data og transformere det til noe enkelt. En kombinasjon av deep learning, transformasjoner og statistikk er sentralt. Vi trenger også en lur måte å fjerne signalstøy fra systemene våre slik at de andre gruppene i Ascend kan få servert datasyn av høy kvalitet. Du vil bli kurset i slik teknologi om du ikke har erfaring med det fra før. <br />
            <i className="key-words">Nøkkelord: Datasyn, Visuell databehandling, Deep Learning, Kunstig Intelligens programmering, filtrering, Kalmanfilter, Sensorikk.</i>
          </p>
          <h3>Teknisk gruppeleder - Perception</h3>
          <p id="teknisk-gruppeleder-perception">
            Som teknisk gruppeleder er det ditt ansvar å holde oversikt over det tekniske arbeidet som må gjøres på gruppen din, sørge for at alle har det de trenger, sørge for at gruppen kommuniserer med de andre tekniske gruppene og at alle i Ascend er oppdatert. Du vil fordele arbeidsoppgaver samtidig som du selv blir å gjøre like mye hands-on teknisk arbeid som gruppen din. Du vil også bli kurset i ledelse om du ikke har erfaring med dette fra før. <br />
            <i className="key-words">Nøkkelord: Ledelse, Datasyn, Visuell databehandling, Deep Learning, Kunstig Intelligens programmering, Sensorikk. </i>
          </p>
          <h3>Control gruppemedlem</h3>
          <p id="control-gruppemedlem">
            Control har ansvaret for å få dronen til å utføre kommandoer autonomt og på en pålitelig og robust måte. I control vil du jobbe med systemene som skal få dronen til å fly presist og stabilt rundt i rommet uten å kollidere i hindringene på veien, gjerne raskt og effektivt! Alt skal foregå autonomt så dronen må selv finne ut hvilke handlinger den må gjøre for å klare å utføre kommandoen den får tilsendt! Som gruppemedlem får du mulighet til å jobbe på alt fra lavnivå flykontrollere som sørger for å holde dronen stabil, til høynivå ruteplanlegging og kollisjonsunngåelse som sørger for at dronen kan styre rundt i rommet og gjennomføre prestisjefulle manøvre. <br />
            <i className="key-words">Nøkkelord: Reguleringsteknikk, C/C++, ROS,  tilstandsmaskin, embedded, ruteplanlegging</i>
          </p>
          <p id="ai-gruppemedlem">
            <h3>AI gruppemedlem</h3><i> "Hva skal dronen gjøre, og hvorfor er det lurt?" </i>Som medlem av AI gruppen jobber du med den overordnede kunstige intelligensen (AI) til dronen. Det er gruppen sitt ansvar å  produsere en AI som kan analysere informasjonen om verden rundt seg og gjennom dette skal den kunne ta beslutninger på egen hånd og gjerne det smarteste valget. Som medlem av denne gruppen vil du være med på å tenke nyskapende mens du trener droner i simulatorer, i virkeligheten og skriver avansert programvare. Du vil bli kurset i kunstig intelligens om du ikke har erfaring med det fra før. <br />
            <i className="key-words">Nøkkelord: Kunstig Intelligens Programmering, Maskinlæring, Deep Learning, Reinforcement Learning, Algoritmer og Datastrukturer, Statistikk. </i>
          </p>
          <h3>Sponsorkontakt</h3>
          <p id="sponsorkontakt">
            Har du lyst til å være Ascend NTNU sin representant i næringslivet? Vi i Ascend er helt avhengig av våre sponsorer for å kunne gjøre det arbeidet vi gjør. Som sponsorkontakt i Ascend har du som hovedoppgave å skape mest mulig verdiskapning for våre sponsorer. Du vil jobbe med å finne nye sponsorer, forhandle kontrakter og oppretholde god kommunikasjon med våre eksisternede sponsorer. Du vil også jobbe tett sammen med hele kommunikasjonsgruppen for å videreutvikle Ascends "image" utad og spesielt event manageren vår for å planlegge og organisere sponsoraktiviteter.<br />
            <i className="key-words">Nøkkelord: Presentasjonteknikk, Gode Forhandlingsevner, Utadvent, Organisert</i>
          </p>
          <h3>Grafisk designer</h3>
          <p id="grafisk-designer">
            Bli med på å forme hele Ascend NTNU sitt "image" utad. Som grafisk designer vil du lage alt fra markedsmateriell til profileringartikler og du vil skape en ordentlig grafisk utforming i alt vi gjør. Du vil jobbe tett sammen med hele kommunikasjons gruppen, blant annet ved å bidra til vår blog, lage vårt aller første magasin og bidra til utformingen av stand. Det er et pluss om du vil hjelpe til med videoer, 3D visualisering eller motion design, men det er ikke et krav. <br />
            <i className="key-words">Nøkkelord: Design, t-skjorter, genser, jakker, visittkort, medaljer, roll-ups, flyers, postere, webdesign, magasin design, redaktør, video, motion design, 3D visualisering. </i>
          </p>
          <h3>Event Manager</h3>
          <p id="event-manager">
            Som Event Manager får du muligheten til å arrangere events som ikke bare når ut til alle studentene på NTNU, men i tillegg både til presse og næringsliv i hele Norge. Du får ansvaret for å arrangere ulike stands og fremføringer på ulike arrangementer, både internt på NTNU og utad mot næringslivet. Du vil også få ansvaret for organiseringen av våre opptaksperioder i tillegg til å arrangere egne arrangementer som for eksempel robotikk dag og live-demo/unveiling. Som Event Manager vil du jobbe tett sammen med hele kommunikasjons gruppen, spesielt vår sponsorkontakt for å fremme Ascend til potensielle nye medlemmer og sponsorer. Du vil også være med på å planlegge den årlige turen vår til USA. <br />
            <i className="key-words">Nøkkelord: Presentasjonteknikk, Organisert, Standutforming, Arrangementplanlegging, Organisering av stands.</i>
          </p>
          <h3>Webutvikler</h3>
          <p id="webutvikler">
            Har du lyst å utvikle en full-stack, skalerbar og grafisk imponerende webside? Som webutvikler vil du ha ansvar for å videreutvikle vår hjemmeside ascendntnu.no. Det blir også din oppgave å vise frem hvem vi er, våre mål og hvilke utfordringer vi møter på en interaktiv og spennende måte, kanskje ved å lage en liten spill app? Du vil jobbe tett sammen med hele kommunikasjons gruppen for å videreutvikle Ascends "image" utad. Du kan også ta på deg ansvaret med system administrasjon, det vil si at du blant annet får bygge og vedlikeholde våre byggservere og sørge for at alt går så automatisk og knirkefritt som mulig. Du vil bli kurset i webutvikling (og noe sysadmin) om du ikke har erfaring med det fra før. <br />
            <i className="key-words">Nøkkelord: Webutvikling, full-stack (backend og frontend), grafisk design, react, typescript, app utvikling. Sysadmin, continous integration, github hooks, server managment</i>
          </p>
        </SubSection>,

        <SubSection titleText="Stillinger" key="2">
          <SubSubSection titleText="Prosjektleder/Nestleder">
            <p>Prosjektleder er styrets leder og jobber med å videreutvikle Ascend i ønsket retning basert på Ascends visjoner og mål. Prosjektleder jobber tett opp mot alle Ascends undergrupper og koordinerer mye av arbeidet som skjer mellom gruppene. Sammen med kommunikasjonsgruppen jobber prosjektleder for å fremme Ascends omdømme, planlegge opptak, og jobbe med sponsorer. Arbeidsoppgavene man har vil variere fra uke til uke og gir muligheter til å jobbe med de fleste aspekter i prosjektet. Faste oppgaver inkluderer å lede styremøter og allmøter, og ansvar for samarbeid med hovedsponsor.</p>
            <p>Som nestleder har man mange spennende oppgaver. Først og fremst er man hovedansvarlig for rekruttering av nytt styre, nye gruppemedlemmer, gruppeledere og arbeid med masteroppgaver. Man skal også bistå prosjektleder med planlegging, oppfølging og målsetting. Videre holder man medarbeidersamtaler for å sikre at alle gruppemedlemmene blir hørt, samt at man er en tillitsperson for gruppemedlemmene.</p>
            <p>Prosjektleder og nestleder jobber tett sammen og fordeler arbeidsoppgaver mellom seg. Dette samarbeidet gir en stor fleksibilitet når det kommer til arbeidsoppgaver, og lar begge to tilpasse ansvarsområder slik at man kan jobbe med det man har størst interesse for.</p>
            <p><b>Vi ser etter</b></p>
            <ul>
              <li>Deg som ønsker å jobbe tett med hele organisasjonen og liker varierte arbeidsoppgaver</li>
              <li>Deg som vil jobbe med eksterne aktører, sponsorer og andre samarbeidspartnere.</li>
              <li>Deg som vil finne gode løsninger i samarbeid med andre og tar utfordringer på strak arm. </li>
              <li>Deg som har god struktur og oversikt, og liker å jobbe med organisasjonen som en helhet.</li>
            </ul>
            <p>Har du spørsmål om denne stillingen kan du kontakte Brage Eikanger (Prosjektleder) på <a href={ `mailto:${this.emails[0]}ascendntnu.no` }>{ this.emails[0] }ascendntnu.no</a>, eller Vebjørn Isaksen (Nestleder) på <a href={ `mailto:${this.emails[1]}ascendntnu.no` }>{ this.emails[1] }ascendntnu.no</a>.</p>
          </SubSubSection>
          <SubSubSection titleText="Teknisk Leder">
            <p>Som teknisk leder har du det overordnede ansvaret for all teknisk arbeid i Ascend. Dette innebærer å planlegge, organisere og samkjøre det tekniske arbeidet sammen med gruppelederne. Som teknisk leder er det din oppgave å lede det tekniske arbeidet slik at alle de tekniske gruppene jobber mot samme mål. Du må ha en god innsikt i hele systemet som utvikler slik at arbeidet kan legges til rette for å unngå potensielle tekniske problemer og integreres på en best mulig måte. Teknisk leder jobber tett med alle de tekniske gruppelederene og gruppemedlemmene, og bistår med det tekniske der det til enhver tid er størt behov. Jobben vil gi deg en innsikt og erfaring i en rekke forskjellige ingeniørdisipliner, og gi deg et helhetsbilde som få andre har.</p>
            <p>Teknisk leder fungerer som representant for det tekniske inn mot styret og admin gruppen. Jobben innebærer derfor også å jobbe sammen med de administrative stillingene. Oppgaver som å planlegge innkjøp av teknisk utstyr sammen med økonomiansvarlig og bistå med formidlingen av det tekniske arbeidet sammen med kommunikasjonslederen.</p>
            <p><b>Vi ser etter</b></p>
            <ul>
              <li>Du som har gode lederegenskaper.</li>
              <li>Du som har stor teknisk interesse for robotikk.</li>
              <li>Du som liker å jobbe med store kompliserte systemer.</li>
              <li>Du som er strukturert, ryddig og organisert.</li>
            </ul>
            <p>Har du spørsmål om denne stillingen kan du kontakte Matias Christensen på <a href={ `mailto:${this.emails[4]}ascendntnu.no` }>{ this.emails[4] }ascendntnu.no</a>.</p>
          </SubSubSection>
          <SubSubSection titleText="Kommunikasjonsleder">
            <p>For å lykkes med dette ambisiøse prosjektet er Ascend avhengig av gode samarbeid, både med industri og utdanningsinstitusjoner. Som markedsansvarlig vil du sørge for finansieringen og samarbeidene som bringer Ascend nærmere sine mål. Dette innebærer å oppnå avtaler med nye spennende sponsorer, samt å pleie relasjonene til våre eksisterende samarbeidspartnere. Det innebærer også håndtering av presse og skriving av pressemeldinger. Dette vil du bli kurset i hvis du ikke har erfaring med det fra før. Kommunikasjonsleder har ansvaret for at facebooksiden og internettsiden er vedlikeholdt og oppdatert jevnlig. Dette innebærer å være kreativ og ha gode kommunikasjonsevner.</p>
            <p>Enda viktigere enn sponsorer og industrisamarbeid, er dyktige og engasjerte studenter. Ascend har som mål å bli en vedvarende studentorganisajon som er godt kjent på NTNU Gløshaugen. Som kommunikasjonsleder har du all friheten til å finne måter å nå ut til studentene på, med konkrete og målbare resultater. Som en relativt nyoppstarta organisasjon (2015) vil du ha betydelig innvirkning på merkevarebyggingen til Ascend. Dette innebærer å skape en kultur utad som inspirer studenter til å drive med forskning og innovasjon på autonome droner.</p>
            <p><b>Vi ser etter</b></p>
            <ul>
              <li>Du som har interesse for markedsføring både i sosiale og fysiske medier.</li>
              <li>Du som er interessert i å skape og pleie relasjoner til samarbeidspartnere og presse.</li>
              <li>Du som har erfaring med grafikk og/eller web-utvikling (et stort pluss - men ikke et krav).</li>
              <li>Du som er løsningsorientert, kreativ, ambisiøs, samarbeidsvillig, målrettet og resultatdrevet</li>
            </ul>
            <p>Har du spørsmål om denne stillingen kan du kontakte Emilie Udnæs på <a href={ `mailto:${this.emails[2]}ascendntnu.no` }>{ this.emails[2] }ascendntnu.no</a>.</p>
          </SubSubSection>
          <SubSubSection titleText="Økonomiansvarlig">
            <p>Som økonomiansvarlig har du kontroll på organisasjonens ressursbruk. Ascend opererer som I likhet med andre organisasjoner innenfor visse økonomiske rammer, og en pålitelig samt forutsigbar flyt av ressurser kan dermed hjelpe resten av teamet å oppnå sitt fulle potensial.</p>
            <p>Din oppgave vil hovedsaklig være å forsikre at styret har oversiktlig regnskap, kontobalanse og budsjetter tilgjengelig i forbindelse med avgjørelser for både teknisk og organisatorisk drift. I tillegg vil du ha ansvar for å holde oversikt over interne utlegg, inventar og likviditet, og selvfølgelig sørge for at innkommende fakturaer blir betalt til rett tid.</p>
            <p><b>Vi ser etter</b></p>
            <ul>
              <li>Du som har interesse for økonomi, regnskapsføring og budsjettplanlegging.</li>
              <li>Du som har kunnskap om, eller interesse for å lære om føring av økonomi i organisasjoner.</li>
              <li>Du som har ryddige og oversiktlige arbeidsmetoder.</li>
            </ul>
            <p>Har du spørsmål om denne stillingen kan du kontakte Simon Blindheim på <a href={ `mailto:${this.emails[3]}ascendntnu.no` }>{ this.emails[3] }ascendntnu.no</a>.</p>
          </SubSubSection>
        </SubSection>
      ]
    }

    let contents: any = {
      'en': [
        <div></div>
      ],
      'no': [
        <Section titleText="Nå nye høyder - Søk Ascend!" key="1">
          <img src="/images/teams/2017/ascend-group-2017.jpg" style={ { width: "100%", height: "auto", maxHeight: "100%" } } />
          <p style={{fontSize: '1.4em'}}><b>Søknadsfrist 1. september kl. 23:59</b></p>
          <p style={{fontSize: '1.4em', marginTop:"0px"}}><a href="https://www.facebook.com/events/675218906021421">Bli med på infomøte 31. August 16:15 i <del>EL3</del>S4</a></p>
          <p>Ønsker du å være med på å drive med cutting-edge droneteknologi i en ambisiøs og teknologi-fokusert studentorganisasjon?</p>
          <p>Tidligere erfaring er ikke et krav for å bli med i Ascend. Det viktigste er å ha en interesse for det vi jobber med, og en interesse for å lære.</p>
          <a className="button active" style={ { alignSelf: 'flex-start' } } href="https://docs.google.com/forms/d/e/1FAIpQLSe2ieI86nG7RXWN12PTOT08pbPO9zJoaO2Xmq0IjTLKsdGuAA/viewform">Søk her!</a>
          {/*}<h4><a href="http://ascendntnu.us14.list-manage2.com/subscribe?u=dfce303a41ce42b342c75a3ef&amp;id=002e04db12" target="_blank">Interesseliste for opptak. Søknadskjema kommer veldig snart!</a></h4>*/}
          {positions[this.state.language][0]}
          <i>Det er kun studenter som studerer på NTNU i året 2017/2018 som kan søke. Er du usikker på om dette gjelder for deg? Spør oss på <a href="mailto:hi@ascendntnu.no">hi@ascendntnu.no</a></i>
          <SubSection titleText="Hvorfor søke">
            <ul>
              <li><strong>Bli en del av et miljø.</strong> I Ascend blir du en del av et målrettet og teknologifokusert prosjekt der vi jobber sammen for å nå våre mål. </li>
              <li><strong>Fra teori til praksis.</strong> I Ascend tar man noen av de mest avanserte konseptene man lærer på NTNU fra lærebøkene til virkeligheten.</li>
              <li><strong>Kombiner med graden din.</strong> Flere av medlemmene våre skriver prosjekt/master-oppgave relatert til Ascend. I tillegg finnes det en åpning for å drive med Ascend i Eksperter i Team.</li>
              <li><strong>Prosjekt/organisasjons-erfaring.</strong> I Ascend er du med på å føre et teknisk prosjekt fra start til slutt - dette gir mye verdifull erfaring og kompetanse på veien.</li>
              <li><strong>Cutting edge.</strong> Bli en del av en organisasjon som må ta i bruk og utvikle teknologi som er state of the art innenfor autonom robotikk. </li>
              <li><strong>Kreativ, fleksibel og innovativ kultur</strong> Vi ønsker å holde en flytende arbeidskultur i Ascend slik at ditt bidrag til organisasjonen kan også involvere oppgaver utenfor stillingsbeskrivelsen som vil bli inspirert av dine interesser og erfaringer!</li>
            </ul>
          </SubSection>
          <SubSection titleText="Konkurransen">
            <p>International Aerial robotics competition (IARC) er en årlig konkurranse som avholdes i USA og Kina med mål om å presse grensene for hva man får til med autonome droner. Dette gjør de ved å presentere meningsfulle og nyttige oppdrag som er umulige å løse på det tidspunktet de lanseres. Ideen er at når den oppførselen som etterspørres til slutt demonstres i konkurransen, vil konkurransen ha bidratt til en meningsfull utvikling innenfor autonom robotikk. En utvikling som fortrinnsvis er til fordel for verden.</p>
            <p><a href="https://ascendntnu.no/blog/2017-07-20-the-competition" role="button">Les mer om konkurransen og om oppdraget vi skal løse her.</a></p>
          </SubSection>
        </Section>,

        <Section titleText="Nå nye høyder - Søk Ascend!" key="2">
          <img src="/images/teams/2017/ascend-group-2017.jpg" style={ { width: "100%", height: "auto", maxHeight: "100%" } } />
          <p>Ønsker du å være med på å drive med cutting-edge droneteknologi i en ambisiøs og teknologi-fokusert studentorganisasjon?</p>
          <p>Tidligere erfaring er ikke et krav for å bli med i Ascend. Det viktigste er å ha en interesse for det vi jobber med, og en interesse for å lære.</p>
          <p>Ascend NTNU har hovedopptak på høsten hvert år for å ta inn nye medlemmer.</p>
          <p><strong>Ny mulighet vil annonseres til våren og høsten neste år. Hvis du vil bli oppdatert om denne - skriv deg opp på linken under!</strong></p>
          <a className="button active" style={ { alignSelf: 'flex-start' } } href="http://ascendntnu.us14.list-manage2.com/subscribe?u=dfce303a41ce42b342c75a3ef&amp;id=002e04db12" target="_blank">Interesseliste for opptak</a>
          <SubSection titleText="Hvorfor søke">
            <ul>
              <li><strong>Bli en del av et miljø.</strong> I Ascend blir du en del av et målrettet teknologifokusert prosjekt der vi jobber sammen for å nå våre mål. </li>
              <li><strong>Fra teori til praksis.</strong> I Ascend tar man noen av de mest avanserte konseptene man lærer på NTNU fra lærebøkene til virkeligheten.</li>
              <li><strong>Kombiner med graden din.</strong> Flere av medlemmene våre skriver prosjekt/master-oppgave relatert til Ascend. I tillegg finnes det en åpning for å drive med Ascend i Eksperter i Team.</li>
              <li><strong>Prosjekt/organisasjons-erfaring.</strong> I Ascend er du med på å føre et teknisk prosjekt fra start til slutt - dette gir mye verdifull erfaring og kompetanse på veien.</li>
              <li><strong>Cutting edge.</strong> Bli en del av en organisasjon som må ta i bruk og utvikle teknologi som er state of the art innenfor autonom robotikk. </li>
            </ul>
          </SubSection>
          <SubSection titleText="Konkurransen">
            <p>International Aerial robotics competition (IARC) er en årlig konkurranse som avholdes i USA og Kina med mål om å presse grensene for hva man får til med autonome droner. Dette gjør de ved å presentere meningsfulle og nyttige oppdrag som er umulige å løse på det tidspunktet de lanseres. Ideen er at når den oppførselen som etterspørres til slutt demonstres i konkurransen, vil konkurransen ha bidratt til en meningsfull utvikling innenfor autonom robotikk. En utvikling som fortrinnsvis er til fordel for verden.</p>
            <p><a href="https://ascendntnu.no/blog/2017-07-20-the-competition" role="button">Les mer om konkurransen og om oppdraget vi skal løse her.</a></p>
          </SubSection>
        </Section>
      ]
    }

    let about: any = {
      'en': (
        <div></div>
      ),
      'no': (
        <Section titleText="Om oss">
          <p>Ascend er en studentorganisasjon som skal representere NTNU i <a href="http://www.aerialroboticscompetition.org/">The International Aerial Robotics Competition</a>. Vi ønsker å skape et miljø hvor studenter kan drive med autonome droner, og ha den årlige konkurransen som et felles mål. Vi ser på Ascend som en arena for å videreutvikle tekniske ferdigheter så vel som ferdigheter innenfor prosjektstyring og andre administrative oppgaver.</p>
          <SubSection titleText="Hvordan vi jobber">
            <ul>
              <li><strong>Flat og åpen struktur.</strong> Ascend NTNU har troen på at en flat og åpen struktur egner seg best for både trivsel og resultat. Vårt mål er å være en organisasjon der alle har anledning til å bli hørt og bidra på de områdene de ønsker.</li>
              <li><strong>Frihet og ansvar.</strong> Vi mener at motivasjon handler om å bli gitt både ansvar og tillit. Vi velger å stole på at medlemmene våre får jobben gjort, fremfor å bygge tidkrevende og demotiverende kontrollsystemer.</li>
              <li><strong>Learning by doing.</strong> Ingen i Ascend sitter på fullstendige løsninger til utfordringene vi møter. Vi er derimot åpne for å lære nye konsepter og teknologier. Vår idé er at veien til målet går gjennom prøving og feiling, nye kunnskaper og gode rådgivere.</li>
            </ul>
          </SubSection>
          <SubSection titleText="Våre samarbeidsplattformer">
            <ul>
              <li><strong>Slack: </strong> <a href="https://slack.com/">Slack</a> er en chatte-web-app for team. Med Slack får vi enkel, åpen og oversiktlig kommunikasjon - hvor alle får muligheten til å følge med og bidra på de områdene de ønsker. På grunn av Slack er det nesten ingen epost innad i teamet.</li>
              <li><strong>Github: </strong>Vi har koden vår på <a href="https://github.com/">github</a>, og bruker git-arbeidsflyter når vi samarbeider.</li>
              <li><strong>Jira: </strong><a href="https://www.atlassian.com/software/jira">Jira</a> er et prosjektstyringsverktøy fra Atlassian. Vi bruker Jira for å holde styr på hvilke oppgaver som jobbes med og hvilke som må fullføres for å ferdigstille de ulike delene av prosjektet.</li>
              <li><strong>Confluence: </strong>Vi bruker <a href="https://www.atlassian.com/software/confluence">Confluence</a> for å ta vare på og dele kompetansen vi har i organisasjonen. Gjennom å legge ting inn i wikiene lærer organisasjonen stadig mer, til tross for at medlemmer kommer og går.</li>
            </ul>
          </SubSection>
          <SubSection titleText="Vårt tilholdssted">
            <p>Til daglig holder vi til i Institutt for Teknisk Kybernetikk sin lab på taket av blokk A i El-bygget på Gløshaugen, kjent som taklabben. Vi har både arbeidsstasjoner og drone-nett på plass. På den måten blir veien fra utvikling til testing kort. </p>
          </SubSection>
          <SubSection titleText="Hvem vi jobber med">
            <p>Vi har god kontakt med Institutt for Teknisk Kybernetikk (ITK), Institutt for Datateknikk og Informasjonsvitenskap (IDI), Forsvarets Forskningsinstitutt (FFI), Kongsberg Gruppen og oppstartselskapet Staaker. Gjennom instituttene får vi tilgang til diverse labber, utstyr og kompetanse. I tillegg skriver flere av våre medlemmer prosjekt/master knyttet til Ascend for IDI og ITK. En oversikt over våre sponsorer finner du nederst på hovedsiden vår.</p>
          </SubSection>
          <SubSection titleText="Spørsmål?">
            <p>Hvis det er noe du lurer på, send en mail til <a href="mailto:hi@ascendntnu.no">hi@ascendntnu.no</a>.</p>
          </SubSection>
        </Section>
      )
    }

    let nextLanguage: string = 'no'
    switch (this.state.language) {
      case 'no': nextLanguage = 'en'; break
      case 'en': nextLanguage = 'no'; break
    }

    let languageURL: any = '/' + nextLanguage
    if (nextLanguage === 'no') languageURL = ''

    let languageNames: any = {
      'en': 'English',
      'no': 'Norsk'
    }

    return (
      <div className="page page-join">
        <Breadcrumb routes={['join']} />
        {/*<div style={ { textAlign: 'right', marginTop: '-1.8em' } } className="page-container">
          <Link className="button" to={`/join${languageURL}`}>{languageNames[nextLanguage]}</Link>
        </div>*/}
        {contents[this.state.language][1]}
        {about[this.state.language]}
      </div>
    )
  }
}

export default JoinPage
