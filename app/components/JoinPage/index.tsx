import * as React from 'react'

import { Section, SubSection } from '../PageLayout'
import { Breadcrumb } from '../Common/breadcrumb'

export interface JoinPageProps {}

export class JoinPage extends React.Component<JoinPageProps, {}> {
  render () {
    return (
      <div className="page page-join">
        <Breadcrumb routes={['join']} />
        <Section title="Nå nye høyder">

            <div className="row">
              
              <h2>Søk Ascend!</h2>
              <p>Opptaket er ikke før neste år.</p>
              <p>
                Ønsker du å være med på å drive med cutting-edge droneteknologi i en ambisiøs og teknologi-fokusert studentorganisasjon?
              </p>
              <p>
                Ascend NTNU har hoveropptak på høsten hvert år for å ta in nye medlemmer.
              </p>
              <p>
                Tidligere erfaring er ikke et krav for å bli med i Ascend. Det viktigste er å ha en interesse for det vi jobber med, og en interesse for å lære.
              </p>
              <p>
                <br />
                <strong>Ny mulighet vil annonseres senere. Hvis du vil bli oppdatert om denne - skriv deg opp på linken under!</strong>
              </p>
            </div>

            <div className="row">
              <h4>
                <a href="http://ascendntnu.us14.list-manage2.com/subscribe?u=dfce303a41ce42b342c75a3ef&amp;id=002e04db12" target="_blank">Interesseliste for opptak.</a>
              </h4>
            </div>

            <div className="row">
              <div className="row">				
                  <h3>Stillinger</h3>
                  <h4>Teknisk</h4>
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
              </div>

              
            
            
              
            <div className="row">
              <div className="col-md-12">
                <h2>Hvorfor søke</h2>
                <ul>
                  <li>
                    <strong>Bli en del av et miljø.</strong> I Ascend blir du en del av et målrettet teknologifokusert prosjekt der vi jobber sammen for å nå våre mål. 
                  </li>
                  <li>
                    <strong>Fra teori til praksis.</strong> I Ascend tar man noen av de mest avanserte konseptene man lærer på NTNU fra lærebøkene til virkeligheten.
                  </li>
                  <li>
                    <strong>Kombiner med graden din.</strong> Flere av medlemmene våre skriver prosjekt/master-oppgave relatert til Ascend. I tillegg finnes det en åpning for å drive med Ascend i Eksperter i Team.
                  </li>
                  <li>
                    <strong>Prosjekt/organisasjons-erfaring.</strong> I Ascend er du med på å føre et teknisk prosjekt fra start til slutt - dette gir mye verdifull erfaring og kompetanse på veien.
                  </li>
                  <li>
                    <strong>Cutting edge.</strong> Bli en del av en organisasjon som må ta i bruk og utvikle teknologi som er state of the art innenfor autonom robotikk. 
                  </li>
                </ul>
              </div>
            </div>	
            <div className="row">
              <div className="col-md-12">	
              <h2>Konkurransen</h2>
                <p>
                  International Aerial robotics competition (IARC) er en årlig konkurranse som avholdes i USA og Kina med mål om å presse grensene for hva man får til med autonome droner. Dette gjør de ved å presentere meningsfulle og nyttige oppdrag som er umulige å løse på det tidspunktet de lanseres. Ideen er at når den oppførselen som etterspørres til slutt demonstres i konkurransen, vil konkurransen ha bidratt til en meningsfull utvikling innenfor autonom robotikk. En utvikling som fortrinnsvis er til fordel for verden.
                </p>
                
                <p><a className="btn btn-primary btn-lg" href="http://www.ascendntnu.no/iarc/competition/2016/02/25/The-Competition.html" role="button">Les mer om konkurransen og om oppdraget vi skal løse her.</a></p> 
                
              </div>
            </div>		
            <div className="row">
              <div className="col-md-12">
                <h3>Forventet arbeidstid</h3>
                <p>
                  Vi estimerer at medlemmer av organisasjonen må påregne et sted mellom 10 og 15 arbeidstimer per uke. Behovet vil også variere gjennom semesteret. Det er stor frihet til å arbeide når det passer best for deg. Vi legger opp til at man skal kunne kombinere Ascend med studier på en balansert måte. I eksamenstiden vil vi ha lav aktivitet - slik at medlemmene kan fokusere på faglige resultater.
                </p>
              </div>
            </div>
            

            <div className="row">
              <div className="col-md-12">
                <h2>Om oss</h2>
                <p>
                  Ascend er en studentorganisasjon som skal representere NTNU i <a href="http://www.aerialroboticscompetition.org/">The International Aerial Robotics Competition</a>. Vi ønsker å skape et miljø hvor studenter kan drive med autonome droner, og ha den årlige konkurransen som et felles mål. Vi ser på Ascend som en arena for å videreutvikle tekniske ferdigheter så vel som ferdigheter innenfor prosjektstyring og andre administrative oppgaver.
                </p>

              

                <h2>Hvordan vi jobber</h2>

                <ul>
                  <li>
                    <strong>Flat og åpen struktur.</strong> Ascend NTNU har troen på at en flat og åpen struktur egner seg best for både trivsel og resultat. Vårt mål er å være en organisasjon der alle har anledning til å bli hørt og bidra på de områdene de ønsker.
                  </li>
                  <li>
                    <strong>Frihet og ansvar.</strong> Vi mener at motivasjon handler om å bli gitt både ansvar og tillit. Vi velger å stole på at medlemmene våre får jobben gjort, fremfor å bygge tidkrevende og demotiverende kontrollsystemer.
                  </li>
                  <li>
                    <strong>Learning by doing.</strong> Ingen i Ascend sitter på fullstendige løsninger til utfordringene vi møter. Vi er derimot åpne for å lære nye konsepter og teknologier. Vår idé er at veien til målet går gjennom prøving og feiling, nye kunnskaper og gode rådgivere.
                  </li>
                </ul>

                <h2>Våre samarbeidsplattformer</h2>
                
                <ul>
                  <li><strong>Slack: </strong> <a href="https://slack.com/">Slack</a> er en chatte-web-app for team. Med Slack får vi enkel, åpen og oversiktlig kommunikasjon - hvor alle får muligheten til å følge med og bidra på de områdene de ønsker. På grunn av Slack er det nesten ingen epost innad i teamet.</li>
                  <li><strong>Github: </strong>Vi har koden vår på <a href="https://github.com/">github</a>, og bruker git-arbeidsflyter når vi samarbeider.</li>
                  <li><strong>Jira: </strong><a href="https://www.atlassian.com/software/jira">Jira</a> er et prosjektstyringsverktøy fra Atlassian. Vi bruker Jira for å holde styr på hvilke oppgaver som jobbes med og hvilke som må fullføres for å ferdigstille de ulike delene av prosjektet.</li>
                  <li><strong>Confluence: </strong>Vi bruker <a href="https://www.atlassian.com/software/confluence">Confluence</a> for å ta vare på og dele kompetansen vi har i organisasjonen. Gjennom å legge ting inn i wikiene lærer organisasjonen stadig mer, til tross for at medlemmer kommer og går.</li>
                </ul>
                
                <h2>Vårt tilholdssted</h2>
                <p>
                  Til daglig holder vi til i Institutt for Teknisk Kybernetikk sin lab på taket av blokk A i El-bygget på Gløshaugen, kjent som taklabben. Vi har både arbeidsstasjoner og drone-nett på plass. På den måten blir veien fra utvikling til testing kort. 
                </p>

                <h2>Hvem vi jobber med</h2>
                <p>
                  Vi har god kontakt med Institutt for Teknisk Kybernetikk (ITK), Institutt for Datateknikk og Informasjonsvitenskap (IDI), Forsvarets Forskningsinstitutt (FFI), Kongsberg Gruppen og oppstartselskapet Staaker. Gjennom instituttene får vi tilgang til diverse labber, utstyr og kompetanse. I tillegg skriver flere av våre medlemmer prosjekt/master knyttet til Ascend for IDI og ITK. En oversikt over våre sponsorer finner du nederst på hovedsiden vår.
                </p>

                <h2>Spørsmål?</h2>
                <p>
                  Hvis det er noe du lurer på, send en mail til <a href="mailto:hi@ascendntnu.no">hi@ascendntnu.no</a>.
                </p>
              </div>
            </div>

            <p></p>
            
          </div>
        </Section>
      </div>
    )
  }
}

export default JoinPage
