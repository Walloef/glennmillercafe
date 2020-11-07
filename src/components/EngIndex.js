import React from 'react';
import { Fragment } from 'react';
import heroImage from './../../static/img/hero.jpg';
import klarinett from './../../static/img/klarinett.jpg';
import ingresstext from './../../static/img/ingresstext.jpg';
import './../scss/index.scss';
import './../scss/hero.scss';
import './../scss/quickInfo.scss';
import './../scss/index-text.scss';
import './../scss/link-block.scss';
class EngIndex extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="hero__wrapper">
          <div className="hero__image">
            <img src={heroImage} alt="Glenn Miller Café Resturang" />
            <div className="hero__text">
              <h2>Glenn Miller Café</h2>
              <p>Stockholms biggest and smallest jazz club</p>
            </div>
          </div>
        </div>
        <div className="quick-info">
          <div>
            <h3>Reservations</h3>
            <p>
              <b>
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
          </div>
          <div>
            <h3>Opening hours</h3>
            <b>Wednesday - Sunday</b>
            <p>6.30 pm - 1.00 am</p>
            <p className="small">Closed Monday - Tuesday</p>
          </div>
          <div>
            <h3>Address</h3>
            <p>Brunnsgatan 21A 11138 Stockholm</p>
            <p>076-882 45 49</p>
            <p className="small">Subway Hötorget or Östermalmstorg</p>
          </div>
        </div>
        <div className="gm-text">
          <h2>Info about table booking</h2>
          <p>
            If it’s not possible to make a reservation through our site, it is
            because we are fully booked. If you would like to be on the waiting
            list, please send a sms to +4676-882 45 49. We will contact you if
            we’ll have a table available.
          </p>
          <p>
            Please note that the consert fee is payable in cash only. (or swish
            if the musicians are swedish)
          </p>
        </div>
        <div className="iframe__wrapper" id="bookTable">
          <p className="iframe__title">
            Important! You need to recieve a confirmation of your dinner
            reservation before it is valid!
          </p>
          <p>If you haven't recieved one, please check your spam.</p>
          <div style={{ margin: '10px 0 25px' }}>
            <b>IMPORTANT</b>
            <ul style={{ listStyle: 'disc', padding: '0 23px' }}>
              <li>
                Table reservation means dinner for ALL guests. (Main course or
                more)
              </li>
              <li>
                If the number of guests in your reservation changes, please send
                a textmessage to +46768824549 to let us know.
              </li>
              <li>
                If it is fully booked, please come back later, since dinner
                guests often leave their table after a set or two.
              </li>
              <li>
                Because of Corona, all guests must be seated. We have taken away
                tables, and do not have as many seats as earlier, all to be able
                to keep the 1 meter distance between groups.
              </li>
            </ul>
          </div>
          <iframe
            title="book a table"
            src="./../../../iframe.html"
            style={{
              height: '369px',
              width: '320px',
            }}
          />
          <img src={ingresstext} alt="restaurant empty" />
        </div>
        <div className="gm-text">
          <p>
            Glenn Miller Café is both the biggest and the smallest jazz club. We
            take great pride and are very thankful to be able to offer you an
            inreasurable quality and variety of jazz and jazz musicians. There
            is always a live jazz concert when we are open, Wednesday through
            Sunday.
          </p>
          <p>
            The cuisine is French with dishes such as Confit de Canard,
            Bouillabaisse, seven different variations of Moules Frites, Creme
            Brulée, and more. If you want to have dinner, it is good to reserve
            a table. Please note that we are, first and mainly a jazz club. To
            respect the music and the musicians we ask you to save your
            conversations to the pauses in between the sets.
          </p>
        </div>
        <p
          style={{
            textAlign: 'center',
          }}
          className="gm-text"
        >
          Like us on{' '}
          <a
            style={{
              color: 'white',
              textDecoration: 'underline',
            }}
            href="https://facebook.com/glennmillercafe/"
          >
            Facebook
          </a>{' '}
          and{' '}
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

            <p className="list-info--heading">Good to know</p>

            <ul className="list-info">
              <li>
                <p>Concerts starts</p>
                <p>
                  Wednesday, Thursday, Sunday: <b>8:00 pm</b>
                </p>
                <p>
                  Friday, Saturday: <b>8:30 pm</b>
                </p>
                <hr style={{ borderColor: 'rgba(255, 255, 255, .4)' }} />
                <p>The band play three sets</p>
                <p>
                  The concert fee is a minimum of 50kr per set and per person
                </p>
                <p>The concert fee can be paid with cash or Swish</p>
                <p>
                  Some of the conserts are livestreamed on our{' '}
                  <a
                    style={{
                      color: 'white',
                      textDecoration: 'underline',
                    }}
                    href="https://facebook.com/glennmillercafe/"
                  >
                    Facebook
                  </a>{' '}
                  site.
                </p>
              </li>
              <li>
                <p>Reservations are for dining guests</p>
                <p>Dining guests may keep their table all night</p>
                <p>
                  For parties bigger than 8 persons, please contact the
                  restaurant to make your reservation. 0768824549
                </p>
              </li>
              <li>
                <p>Car park opposite the restaurent available</p>
              </li>
            </ul>
            <p>
              Most welcome to Glenn Miller Café, we look forward to seeing you!
            </p>
          </div>

          <img src={`${klarinett}`} alt="klarinett" />
        </div>
      </Fragment>
    );
  }
}

export default EngIndex;
