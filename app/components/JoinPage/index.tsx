import * as React from 'react'

import { Section, SubSection, SubSubSection } from '../PageLayout'
import { Breadcrumb } from '../Common/breadcrumb'

export interface JoinPageProps {}

export class JoinPage extends React.Component<JoinPageProps, {}> {
  private emails: string[]

  constructor (props: any) {
    super(props)

    this.emails = [
      'brage.eikanger',
      'vebjorn.isaksen',
      'emilie.udnaes',
      'simon.blindheim',
    ].map((e: string) => `${e}@`)
  }

  render () {
    let positions: any[] = [
      (
      <SubSection title="Stillinger">
        <h3>Teknisk</h3>
        <ul>
          <li>
            <strong>Control gruppemedlem.</strong> Control gruppen lager systemene som tar seg av lavnivå styringen av dronen. Dette vil si å holde dronen stabil og kontrollerbar, og kunne styre dronen raskt og effektivt dit vi vil uten at den kolliderer med noe.<br />Som et gruppemedlem i denne gruppen vil du lage reguleringssystemene som styrer dronen.<br />
            <i>Nøkkelord: Reguleringsteknikk, Kalman-filter, Sensor fusion, Collision Avoidance</i>
          </li>
          <li>
            <strong>Perception gruppemedlem.</strong> Perception gruppen har som oppgave å la dronen kunne oppfatte sine omgivelser og forstå hva den ser. Vi samler inn data fra en rekke sensorer og kombinerer dette for å bygge et mest mulig riktig bilde av omverdenen.<br />Som gruppemedlem i denne gruppen vil du jobbe med å skrive programvare som klarer å tyde dataen vi får fra sensorikk på dronen.<br />
            <i>Nøkkelord: Sensorikk, Datasyn, LIDAR.</i>
          </li>
          <li>
            <strong>Hardware gruppemedlem.</strong> Det er Hardware gruppen som designer og bygger dronene til Ascend. Som medlem av denne gruppen kan du jobbe med å designe og produsere de mekaniske delene til dronen. Du kan også jobbe med å designe det elektriske systemet på dronen, ved å designe egne kretskort og samarbeide med de andre gruppene for å integrere sensorikk og datamaskinene vi har ombord.<br />
            <i>Nøkkelord: Mekanisk design, Styrkeberegning, Materialvalg, Elektrisk design, Kretskortdesign, Aerodynamikk.</i>
          </li>
          <li>
            <strong>Planning gruppemedlem og gruppeleder.</strong> Vi tar opp en ny gruppeleder for planning gruppen vår, i tillegg til gruppemedlemmer. Denne gruppen jobber med den overordnede intelligensen til dronen. Det er dette som tar avgjørelser om hvilke handlinger som skal gjøres.<br />Som medlem av denne gruppen vil du jobbe med å lage en intelligens som tar avgjørelser om hva dronen skal gjøre basert på informasjonen fra sensorikk.<br />
            <i>Nøkkelord: Kunstig Intelligens, Ruteplanlegging, Maskinlæring</i>
          </li>
        </ul>
        <h4>Admin</h4>
        <ul>
          <li>
            <strong>Web og grafikk.</strong> Som web og grafikk ansvarlig vil ha ansvar for å utvikle Ascends grafiske profil. Du vil jobbe sammen med markedsansvarlig med å videreutvikle Ascends markedsmateriale, og presentasjonen av Ascend eksternt. Jobben vil innebære ting som å produsere plakater, rollups og videoer til markedsføring. Du vil også være ansvarlig for å vedlikeholde og oppdatere Ascends nettsider. Erfaring med alt dette er ikke krav så lenge du er villig til å bruke tid til å lære deg det.<br />
            <i>Nøkkelord: Grafikk, Tekst og Layout, Videoredigering, Web Design</i>
          </li>
          <li>
            <strong>Sponsorkontakt.</strong> Vi i Ascend er helt avhengig av våre sponsorer for å kunne gjøre det arbeidet vi gjør. Som sponsorkontakt i Ascend har du som hovedoppgave å skape mest mulig verdiskapning for våre sponsorer. Du vil jobbe med å velge ut og kontakte potensielle nye sponsorer, og være med å forhandle kontrakter. Du vil også jobbe med å opprettholde god kommunikasjon til eksisterende sponsorer og være med å planlegge og organisere sponsoraktiviteter.<br />
            <i>Nøkkelord: Presentasjonteknikk, Gode Forhandlingsevner, Utadvent, Organisert</i>
          </li>
        </ul>
        <p></p>
      </SubSection>
    ),
    (
      <SubSection title="Stillinger">
        <SubSubSection title="Prosjektleder/Nestleder">
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
          <p>Har du spørsmål om denne stillingen kan du kontakte Brage Eikanger på <a href={ `mailto:${this.emails[0]}ascendntnu.no` }>{ this.emails[0] }ascendntnu.no</a>.</p>
        </SubSubSection>
        <SubSubSection title="Teknisk Leder">
          <p>Som teknisk leder har du det overordnede ansvaret for all teknisk arbeid i Ascend. Dette innebærer å planlegge, organisere og samkjøre det tekniske arbeidet sammen med gruppelederne. Som teknisk leder er det din oppgave å lede det tekniske arbeidet slik at alle de tekniske gruppene jobber mot samme mål. Du må ha en god innsikt i hele systemet som utvikler slik at arbeidet kan legges til rette for å unngå potensielle tekniske problemer og integreres på en best mulig måte. Teknisk leder jobber tett med alle de tekniske gruppelederene og gruppemedlemmene, og bistår med det tekniske der det til enhver tid er størt behov. Jobben vil gi deg en innsikt og erfaring i en rekke forskjellige ingeniørdisipliner, og gi deg et helhetsbilde som få andre har.</p>
          <p>Teknisk leder fungerer som representant for det tekniske inn mot styret og admin gruppen. Jobben innebærer derfor også å jobbe sammen med de administrative stillingene. Oppgaver som å planlegge innkjøp av teknisk utstyr sammen med økonomiansvarlig og bistå med formidlingen av det tekniske arbeidet sammen med kommunikasjonslederen.</p>
          <p><b>Vi ser etter</b></p>
          <ul>
            <li>Du som har gode lederegenskaper.</li>
            <li>Du som har stor teknisk interesse for robotikk.</li>
            <li>Du som liker å jobbe med store kompliserte systemer.</li>
            <li>Du som er strukturert, ryddig og organisert.</li>
          </ul>
          <p>Har du spørsmål om denne stillingen kan du kontakte Vebjørn Isaksen på <a href={ `mailto:${this.emails[1]}ascendntnu.no` }>{ this.emails[1] }ascendntnu.no</a>.</p>
        </SubSubSection>
        <SubSubSection title="Kommunikasjonsleder">
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
        <SubSubSection title="Økonomiansvarlig">
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
    )]

    return (
      <div className="page page-join">
        <Breadcrumb routes={['join']} />
        <Section title="Nå nye høyder - Søk til styret i Ascend!">
          <iframe style={{margin: '0 auto', border: 'none'}} width="560" height="315" src="https://www.youtube.com/embed/rWTa-20bNms" frameborder="0" allowfullscreen></iframe>

          <p><b>Søknadsfrist 11. mars 2017 kl. 23:59</b></p>
          <p>Ønsker du å være med på å drive med cutting-edge droneteknologi i en ambisiøs og teknologi-fokusert studentorganisasjon?</p>
          {/*<p>Ascend NTNU har hovedopptak på høsten hvert år for å ta in nye medlemmer.</p>*/}
          <p>Tidligere erfaring er ikke et krav for å bli med i Ascend. Det viktigste er å ha en interesse for det vi jobber med, og en interesse for å lære.</p>
          <a className="button active" style={ { alignSelf: 'flex-start' } } href="https://docs.google.com/forms/d/e/1FAIpQLSeio9VmSXvX41QT17WSloXhJzM5FF_MafCVs6P6TiP0iR6Gow/viewform?c=0&w=1">Søk her!</a>
          {/*<p><strong>Ny mulighet vil annonseres senere. Hvis du vil bli oppdatert om denne - skriv deg opp på linken under!</strong></p>
          <h4><a href="http://ascendntnu.us14.list-manage2.com/subscribe?u=dfce303a41ce42b342c75a3ef&amp;id=002e04db12" target="_blank">Interesseliste for opptak.</a></h4>*/}

          {positions[1]}

          <SubSection title="Hvorfor søke">
            <ul>
              <li><strong>Bli en del av et miljø.</strong> I Ascend blir du en del av et målrettet teknologifokusert prosjekt der vi jobber sammen for å nå våre mål. </li>
              <li><strong>Fra teori til praksis.</strong> I Ascend tar man noen av de mest avanserte konseptene man lærer på NTNU fra lærebøkene til virkeligheten.</li>
              <li><strong>Kombiner med graden din.</strong> Flere av medlemmene våre skriver prosjekt/master-oppgave relatert til Ascend. I tillegg finnes det en åpning for å drive med Ascend i Eksperter i Team.</li>
              <li><strong>Prosjekt/organisasjons-erfaring.</strong> I Ascend er du med på å føre et teknisk prosjekt fra start til slutt - dette gir mye verdifull erfaring og kompetanse på veien.</li>
              <li><strong>Cutting edge.</strong> Bli en del av en organisasjon som må ta i bruk og utvikle teknologi som er state of the art innenfor autonom robotikk. </li>
            </ul>
          </SubSection>

          <SubSection title="Konkurransen">
            <p>
              International Aerial robotics competition (IARC) er en årlig konkurranse som avholdes i USA og Kina med mål om å presse grensene for hva man får til med autonome droner. Dette gjør de ved å presentere meningsfulle og nyttige oppdrag som er umulige å løse på det tidspunktet de lanseres. Ideen er at når den oppførselen som etterspørres til slutt demonstres i konkurransen, vil konkurransen ha bidratt til en meningsfull utvikling innenfor autonom robotikk. En utvikling som fortrinnsvis er til fordel for verden.
            </p>

            <p><a href="http://www.ascendntnu.no/iarc/competition/2016/02/25/The-Competition.html" role="button">Les mer om konkurransen og om oppdraget vi skal løse her.</a></p> 
          </SubSection>
        </Section>

        <Section title="Om oss">
          <p>Ascend er en studentorganisasjon som skal representere NTNU i <a href="http://www.aerialroboticscompetition.org/">The International Aerial Robotics Competition</a>. Vi ønsker å skape et miljø hvor studenter kan drive med autonome droner, og ha den årlige konkurransen som et felles mål. Vi ser på Ascend som en arena for å videreutvikle tekniske ferdigheter så vel som ferdigheter innenfor prosjektstyring og andre administrative oppgaver.</p>

          <SubSection title="Hvordan vi jobber">
            <ul>
              <li><strong>Flat og åpen struktur.</strong> Ascend NTNU har troen på at en flat og åpen struktur egner seg best for både trivsel og resultat. Vårt mål er å være en organisasjon der alle har anledning til å bli hørt og bidra på de områdene de ønsker.</li>
              <li><strong>Frihet og ansvar.</strong> Vi mener at motivasjon handler om å bli gitt både ansvar og tillit. Vi velger å stole på at medlemmene våre får jobben gjort, fremfor å bygge tidkrevende og demotiverende kontrollsystemer.</li>
              <li><strong>Learning by doing.</strong> Ingen i Ascend sitter på fullstendige løsninger til utfordringene vi møter. Vi er derimot åpne for å lære nye konsepter og teknologier. Vår idé er at veien til målet går gjennom prøving og feiling, nye kunnskaper og gode rådgivere.</li>
            </ul>
          </SubSection>

          <SubSection title="Våre samarbeidsplattformer">
            <ul>
              <li><strong>Slack: </strong> <a href="https://slack.com/">Slack</a> er en chatte-web-app for team. Med Slack får vi enkel, åpen og oversiktlig kommunikasjon - hvor alle får muligheten til å følge med og bidra på de områdene de ønsker. På grunn av Slack er det nesten ingen epost innad i teamet.</li>
              <li><strong>Github: </strong>Vi har koden vår på <a href="https://github.com/">github</a>, og bruker git-arbeidsflyter når vi samarbeider.</li>
              <li><strong>Jira: </strong><a href="https://www.atlassian.com/software/jira">Jira</a> er et prosjektstyringsverktøy fra Atlassian. Vi bruker Jira for å holde styr på hvilke oppgaver som jobbes med og hvilke som må fullføres for å ferdigstille de ulike delene av prosjektet.</li>
              <li><strong>Confluence: </strong>Vi bruker <a href="https://www.atlassian.com/software/confluence">Confluence</a> for å ta vare på og dele kompetansen vi har i organisasjonen. Gjennom å legge ting inn i wikiene lærer organisasjonen stadig mer, til tross for at medlemmer kommer og går.</li>
            </ul>
          </SubSection>

          <SubSection title="Vårt tilholdssted">
            <p>Til daglig holder vi til i Institutt for Teknisk Kybernetikk sin lab på taket av blokk A i El-bygget på Gløshaugen, kjent som taklabben. Vi har både arbeidsstasjoner og drone-nett på plass. På den måten blir veien fra utvikling til testing kort. </p>
          </SubSection>

          <SubSection title="Hvem vi jobber med">
            <p>Vi har god kontakt med Institutt for Teknisk Kybernetikk (ITK), Institutt for Datateknikk og Informasjonsvitenskap (IDI), Forsvarets Forskningsinstitutt (FFI), Kongsberg Gruppen og oppstartselskapet Staaker. Gjennom instituttene får vi tilgang til diverse labber, utstyr og kompetanse. I tillegg skriver flere av våre medlemmer prosjekt/master knyttet til Ascend for IDI og ITK. En oversikt over våre sponsorer finner du nederst på hovedsiden vår.</p>
          </SubSection>

          <SubSection title="Spørsmål?">
            <p>Hvis det er noe du lurer på, send en mail til <a href="mailto:hi@ascendntnu.no">hi@ascendntnu.no</a>.</p>
          </SubSection>
        </Section>
      </div>
    )
  }
}

export default JoinPage
