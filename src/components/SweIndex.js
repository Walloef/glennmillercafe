import React from 'react';
import { Link } from 'gatsby';
import { Fragment } from 'react';
import heroImage from './../../static/img/hero.jpg';
import klarinett from './../../static/img/klarinett.jpg';
import ingresstext from './../../static/img/ingresstext.jpg';
import music from './../../static/img/konsert-button.jpg';
import dinner from './../../static/img/dinner-button.jpg';
import './../scss/index.scss';
import './../scss/hero.scss';
import './../scss/quickInfo.scss';
import './../scss/index-text.scss';
import './../scss/link-block.scss';
import './../scss/reward.scss';
class SweIndex extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="hero__wrapper">
          <div className="hero__image">
            <img src={heroImage} alt="Glenn Miller Café Resturang" />
            <div className="hero__text">
              <h2>Glenn Miller Café</h2>
              <p>Stockholms största och minsta jazzclub</p>
            </div>
            <div className="reward__desktop">
              <link
                href="https://awards.infcdn.net/circ5_n.css"
                rel="stylesheet"
              />
              <div
                id="rest_circ5"
                onClick={() =>
                  "if(event.target.nodeName.toLowerCase() != 'a') {window.open(this.querySelector('.circ_top_title').href);return 0;}"
                }
              >
                <div className="circ_cont">
                  <div
                    className="circ_img"
                    style={{
                      background:
                        "url('https://awards.infcdn.net/img/star_red.svg') no-repeat center",
                    }}
                  >
                    &nbsp;
                  </div>
                  <a
                    href="https://restaurantguru.com"
                    target="_blank"
                    className="circ_top_title"
                    rel="noopener noreferrer"
                  >
                    Restaurant Guru 2020
                  </a>
                  <span>Recommended</span>
                  <a
                    href="https://restaurantguru.com/Glenn-Miller-Cafe-Stockholm"
                    className="circ_bot_title"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Glenn Miller Café
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="reward__mobile">
          <link href="https://awards.infcdn.net/circ5_n.css" rel="stylesheet" />
          <div
            id="rest_circ5"
            onClick={() =>
              "if(event.target.nodeName.toLowerCase() != 'a') {window.open(this.querySelector('.circ_top_title').href);return 0;}"
            }
          >
            <div className="circ_cont">
              <div
                className="circ_img"
                style={{
                  background:
                    "url('https://awards.infcdn.net/img/star_red.svg') no-repeat center",
                }}
              >
                &nbsp;
              </div>
              <a
                href="https://restaurantguru.com"
                target="_blank"
                className="circ_top_title"
                rel="noopener noreferrer"
              >
                Restaurant Guru 2020
              </a>
              <span>Recommended</span>
              <a
                href="https://restaurantguru.com/Glenn-Miller-Cafe-Stockholm"
                className="circ_bot_title"
                target="_blank"
                rel="noopener noreferrer"
              >
                Glenn Miller Café
              </a>
            </div>
          </div>
        </div>
        <div className="quick-info">
          <div>
            <h3>Bordsbokning</h3>
            <p
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <b
                style={{
                  padding: '12px 0',
                }}
              >
                <a
                  style={{
                    color: 'white',
                    borderBottom: '1px solid white',
                  }}
                  href="#bookTable"
                >
                  Online
                </a>
              </b>
            </p>
            <h3>Adress</h3>
            <p>Brunnsgatan 21A 11138 Stockholm</p>
            <p>076-882 45 49</p>
            <p className="small">T-bana Hötorget eller Östermalmstorg</p>
          </div>
          <div>
            <h3>Tillfälliga Öppettider:</h3>
            <p>Onsdag - söndag kl 17.00- 20.00 med livejazzkonsert kl 18.00</p>
            <p>
              Konserterna livestreamas på vår{' '}
              <a
                style={{
                  color: 'white',
                  textDecoration: 'underline',
                }}
                href="https://facebook.com/glennmillercafe/"
              >
                Facebooksida
              </a>
              .
            </p>
            <p className="small">Stängt måndag - tisdag</p>
          </div>
        </div>
        <div
          className="gm-text"
          style={{
            maxWidth: '500px',
            width: '85vw',
          }}
        >
          <h2>Kära gäster och vänner av Glenn Miller Café!</h2>
          <p>
            <b>Tusen Tack</b> än en gång för allt ekonomiskt stöd ni gett oss.
            Just nu är det de pengarna vi klarar oss på, ett litet tag till. Så
            känn verkligen att ditt bidrag gör skillnad! Vi ställer om
            kontinuerligt allt efter som restriktionerna och rekommendationerna
            ändras. Från jul kommer vi att öppna kl 16.30 och konserten (2 set)
            börjar kl 18.00. Det är en väldigt exklusiv publik om max 8
            matgäster som bereds plats. Före kl 18 då konserten börjar kan vi ta
            in något fler. Vi tar även fortsättningsvis tacksamt emot ert stöd,
            stort som litet via swish: 1236356364 eller via bg: 405-5158
            (Jazzhunden AB) Skriv som meddelande ”Rädda GMC”. TACK!!! Vi önskar
            oss alla en fridfull helg och ett friskt och konsertfyllt år 2021!
          </p>
          <p>Kerstin & Ulf</p>
          {/* <h2>Info ang bordsbokning</h2>
          <p>
            Om det inte går att boka via länken är det fullbokat. Om du vill stå
            på väntelista, skicka ett sms till 076-882 45 49. Du blir kontaktad
            om vi får bord lediga.
          </p>
          <p>
            Om det är fullt går det ändå alltid bra att komma in och stå i baren
            och lyssna. Vänligen notera att pengarna till bandet betalas kontant
            eller då det är svenska musiker, även med swish.
          </p> */}
        </div>
        <div className="iframe__wrapper" id="bookTable">
          <p className="iframe__title">
            OBS! Först när du/ni fått en bekräftelse och en bokningsreferens
            gäller din/er bokning!
          </p>
          <p>
            Får du inte en bekräftelse, så titta i skräpposten. Den kan ha
            hamnat där.
          </p>
          <div style={{ margin: '10px 0 25px' }}>
            <b>VIKTIGT</b>
            <ul style={{ listStyle: 'disc', padding: '0 23px' }}>
              <li>
                Bokade platser = middagsbokning för SAMTLIGA bokade gäster.
                (Minst huvudrätt)
              </li>
              <li>
                Om antalet gäster i din bokning ändras: skicka sms till
                0768824549 och meddela.
              </li>
              <li>
                Enl Coronarestriktionerna måste alla gäster sitta. Vi har
                plockat bort bord och har färre platser än tidigare för att
                kunna hålla minst en meter mellan sällskapen. Vi ändrar
                kontinuerligt för att för att följa folkhälsomyndughetens
                restriktioner och rekommendationer för att stoppa
                smittspridningen.
              </li>
            </ul>
          </div>
          <iframe
            src="./iframe.html"
            title="book a table"
            style={{
              height: '369px',
              width: '320px',
            }}
          />
          <img src={ingresstext} alt="restaurant empty" />
        </div>

        <div className="gm-text">
          <p>
            Glenn Miller Café är både den största och minsta jazzklubben. Vi är
            stolta och tacksamma att kunna erbjuda dig en hög kvalitet och stor
            variation jazz och jazzmusiker.
          </p>
          <p>
            Köket är franskt med rätter som Confit de Canard, Bouillabaisse, sju
            olika variationer of Moules Frites, Creme Brulée mm. Om du vill äta
            middag är det bra att boka bord. Nu med Coronarestriktioner får vi
            inte ha gäster stående. Vänligen notera att vi först och främst är
            en jazzklubb. För att respektera musiken och musikerna ber vi dig
            att spara dina konversationer till pauserna under spelningarna.
          </p>
        </div>
        <p
          style={{
            textAlign: 'center',
          }}
          className="gm-text"
        >
          Gilla oss på{' '}
          <a
            style={{
              color: 'white',
              textDecoration: 'underline',
            }}
            href="https://sv-se.facebook.com/glennmillercafe/"
          >
            Facebook
          </a>{' '}
          och{' '}
          <a
            style={{
              color: 'white',
              textDecoration: 'underline',
            }}
            href="https://www.instagram.com/cafeglennmiller/"
          >
            Instagram
          </a>
        </p>
        <div className="index-text__wrapper">
          <div>
            {/* Written on Facebook about GMC:
  
  ”The jazziest, coziest, friendliest club I Stockholm…..”
  
  ”Always great music in a great atmosphere”
  
  ”Best place in Stockholm”
  
  ”Thank you for a wonderful evening at your place - look forward to the next visit!” */}

            <p className="list-info--heading">Bra att veta</p>

            <ul className="list-info">
              <li>
                <p>Konsertavgiften är minst 150 kr per person och kväll</p>
                <p>Konsertavgiften betalas kontant eller Swish</p>
                <p>
                  En del av konserterna livestreamas på vår{' '}
                  <a
                    style={{
                      color: 'white',
                      textDecoration: 'underline',
                    }}
                    href="https://sv-se.facebook.com/glennmillercafe/"
                  >
                    Facebook
                  </a>
                  .
                </p>
              </li>
              <li>
                <p>Bokningar är för middagsgäster</p>
                <p>Middagsgäster har bordet hela kvällen</p>
                <p>
                  För sällskap större än 8 personer, vänligen kontakta
                  restaurangen för att göra din bokning. 076-882 45 49
                </p>
                <p>
                  En del av konserterna livestreamas på vår{' '}
                  <a
                    style={{
                      color: 'white',
                      textDecoration: 'underline',
                    }}
                    href="https://sv-se.facebook.com/glennmillercafe/"
                  >
                    Facebook
                  </a>
                  .
                </p>
              </li>
              <li>
                <p>Parkeringshus finns mitt emot Glenn Miller Café</p>
              </li>
            </ul>
            <p>
              Välkommen till Glenn Miller Café, vi ser fram emot att träffa dig!
            </p>
          </div>

          <img src={`${klarinett}`} alt="klarinett" />
        </div>
        <div className="link-block__wrapper">
          <Link
            to="/meny"
            className="link-block"
            style={{ background: `url(${dinner})` }}
          >
            <h2>Meny</h2>
          </Link>
          <Link
            to="/konsert"
            className="link-block"
            style={{ background: `url(${music})` }}
          >
            <h2>Konsert</h2>
          </Link>
        </div>
        <div className="vertical-align-middle scroll link-block__mobile">
          <Link
            to="/meny"
            className="mobile-slide-item"
            style={{ backgroundImage: `url(${dinner})` }}
          >
            <h2>Meny</h2>
          </Link>
          <Link
            to="/konsert"
            className="mobile-slide-item"
            style={{ backgroundImage: `url(${music})` }}
          >
            <h2>Konsert</h2>
          </Link>
        </div>
      </Fragment>
    );
  }
}

export default SweIndex;
