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
                onclick="if(event.target.nodeName.toLowerCase() != 'a') {window.open(this.querySelector('.circ_top_title').href);return 0;}"
              >
                <div class="circ_cont">
                  <div
                    class="circ_img"
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
                    class="circ_top_title"
                    rel="noopener noreferrer"
                  >
                    Restaurant Guru 2020
                  </a>
                  <span>Recommended</span>
                  <a
                    href="https://restaurantguru.com/Glenn-Miller-Cafe-Stockholm"
                    class="circ_bot_title"
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
            onclick="if(event.target.nodeName.toLowerCase() != 'a') {window.open(this.querySelector('.circ_top_title').href);return 0;}"
          >
            <div class="circ_cont">
              <div
                class="circ_img"
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
                class="circ_top_title"
                rel="noopener noreferrer"
              >
                Restaurant Guru 2020
              </a>
              <span>Recommended</span>
              <a
                href="https://restaurantguru.com/Glenn-Miller-Cafe-Stockholm"
                class="circ_bot_title"
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
              <b
                style={{
                  padding: '12px 0 24px',
                }}
              >
                <a
                  style={{
                    color: 'white',
                    borderBottom: '1px solid white',
                  }}
                  href="#nyhet"
                >
                  Avhämtning
                </a>
              </b>
            </p>
          </div>
          <div>
            <h3>Öppettider</h3>
            <b>Onsdag - Söndag</b>
            <p>18.00 - 01.00</p>
            <p className="small">Stängt måndag - tisdag</p>
          </div>
          <div>
            <h3>Adress</h3>
            <p>Brunnsgatan 21A 11138 Stockholm</p>
            <p>076-882 45 49</p>
            <p class="small">T-bana Hötorget eller Östermalmstorg</p>
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
            Restaurang och kulturlivet blöder. För <b>Glenn Miller Café</b> är
            det inget undantag. Vi håller öppet men intäkterna är mindre än 1/5
            än normalt. (Marginalerna var inte stora till att börja med) Har du
            möjlighet att stötta oss genom krisen med ett bidrag, stort som
            litet, kan det göra hela skillnaden, och vi klarar oss igenom. Om
            så, swisha till 1236356364 eller skicka via bg: 405-5158 (Jazzhunden
            AB) Skriv som meddelande: ”Rädda GMC”
          </p>
          <p>Tusen Tack!</p>
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
        <div className="gm-text" id="nyhet">
          <h2>Nyhet</h2>
          <p>
            Ät din GMC-middag hemma! För avhämtning på fredag och lördag kan du
            beställa mat på Glenn Miller Café. Skicka sms till 0768824549 och
            gör din beställning. Du kan komma in från kl 17.00, innan vi öppnar,
            och hämta upp din beställning. Ange om möjligt vilken tid du kommer.
            Du kan även få den utburen till bilen om du stannar utanför vår
            port. (ring samma nummer)
            <table>
              <thead>
                <tr>
                  <th>Meny</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Bœuf bourguignon, sallad och bröd</td>
                  <td>175kr</td>
                </tr>
                <tr>
                  <td>GMC’s Bouillabaisse, saffransaioli, sallad och bröd</td>
                  <td>175kr</td>
                </tr>
                <tr>
                  <td>Sallad Campagne, även vegetarisk eller vegansk</td>
                  <td>175kr</td>
                </tr>
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <th>Färdig blandning till Musslor (ej musslorna)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Moules Marinières</td>
                  <td>55 kr</td>
                </tr>
                <tr>
                  <td>Moules a la crème</td>
                  <td>55 kr</td>
                </tr>
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <th>Dessert</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Chokladmousse</td>
                  <td>65 kr</td>
                </tr>
              </tbody>
            </table>
          </p>
        </div>
        <div className="gm-text">
          <p>
            Glenn Miller Café är både den största och minsta jazzklubben. Vi är
            stolta och tacksamma att kunna erbjuda dig en hög kvalitet och stor
            variation jazz och jazzmusiker. Det är alltid en live jazz konsert
            när vi har öppet, Onsdag till söndag.
          </p>
          <p>
            Köket är franskt med rätter som Confit de Canard, Bouillabaisse, sju
            olika variationer of Moules Frites, Creme Brulée mm. Om du vill äta
            middag är det bra att boka bord. Annars är du välkommen förbi för
            att ta del av konserten och någonting gott från baren. Oavsett om du
            kommer för ett glas eller middag, notera att vi först och främst är
            en jazzklubb. För att respektera musiken och musikerna ber vi dig
            att spara dina konversationer till pauserna under spelningarna.
          </p>
        </div>
        <p
          style={{
            textAlign: 'center',
          }}
          class="gm-text"
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
                <p>
                  Konserter börjar kl. 20.00 onsdag, torsdag, söndag och klockan
                  20.30 på fredag och lördag.
                </p>
                <p>Bandet spelar tre set</p>
                <p>Konsertavgiften är minst 50kr per set och per person</p>
                <p>Konsertavgiften betalas kontant</p>
              </li>
              <li>
                <p>Bokningar är för middagsgäster</p>
                <p>Middagsgäster har bordet hela kvällen</p>
                <p>
                  För sällskap större än 10 personer, vänligen kontakta
                  restaurangen för att göra din bokning. 076-882 45 49
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
