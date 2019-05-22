import React from 'react'
import { Link } from 'gatsby'
import { Fragment } from 'react';
import heroImage from './../../static/img/hero.jpg';
import klarinett from './../../static/img/klarinett.jpg';
import ingresstext from './../../static/img/ingresstext.jpg';
import lunch from './../../static/img/lunch.jpg';
import music from './../../static/img/konsert-button.jpg';
import dinner from './../../static/img/dinner-button.jpg';
import './../scss/index.scss';
import './../scss/hero.scss';
import './../scss/quickInfo.scss';
import './../scss/index-text.scss';
import './../scss/link-block.scss';
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
                    </div>
                </div>
                <div className="quick-info">
                    <div>
                        <h3>Bordsbokning</h3>
                        <b>Ring</b>
                        <p>0768824549</p>
                        <p>08-100322</p>
                    </div>
                    <div>
                        <h3>Öppettider</h3>
                        <b>onsdag-söndag</b>
                        <p>18:00 - 00:00 eller 01:00</p>
                        <p className="small">Stängt måndag - tisdag</p>
                    </div>
                    <div>
                        <h3>Adress</h3>
                        <p>Brunnsgatan 21A  11138 Stockholm</p>
                    </div>
                    <div>
                        <h3>Lunchöppet</h3>
                        <b>onsdag-fredag</b>
                        <p>11–14</p>
                        <p className="small">Lunchstängt 12/5 - 23/8</p>
                    </div>
                </div>
                <div class="iframe__wrapper">
                    <iframe src="./iframe.html"
                        title="book a table"
                        style={{
                            height: '369px',
                            width: '320px',
                        }}></iframe>
                    <img src={ingresstext} alt="restaurant empty" />
                </div>
                <div className="gm-text">
                    <p>Glenn Miller Café är både den största och minsta jazzklubben. Vi är stolta och tacksamma att kunna erbjuda dig en hög kvalitet och stor variation jazz och jazzmusiker. Det är alltid en live jazz konsert när vi har öppet, Onsdag till söndag.</p>
                    <p>Köket är franskt med rätter som Confit de Canard, Bouillabaisse, sju olika variationer of Moules Frites, Creme Brulée, and more. Om du vill äta middag är det bra att boka bord. Annars är du välkommen förbi för att ta del av konserten och någonting gott från baren. Oavsett om du kommer för ett glas eller middag, notera att vi först och främst är en jazzklubb. För att respektera musiken och musikerna ber vi dig att spara dina konversationer till pauserna under spelningarna.</p>
                </div>
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
                                <p>Konserter börjar kl. 20.00 onsdag, torsdag, söndag och klockan 20.30 på fredag och lördag.</p>
                                <p>Bandet spelar tre set</p>
                                <p>Konsertavgiften är minst 50kr per set och per person</p>
                                <p>Konsertavgiften betalas kontant</p>
                            </li>
                            <li>
                                <p>Bokningar är för middagsgäster</p>
                                <p>Middagsgäster har bordet hela kvällen</p>
                                <p>För sällskap större än 10 personer, vänligen kontakta restaurangen för att göra din bokning. Eller 08 10 03 22 / 076-882 45 49</p>
                            </li>
                        </ul>
                        <p>Välkommen till Glenn Miller Café, vi ser fram emot att träffa dig!</p>
                    </div>

                    <img src={`${klarinett}`} alt="klarinett" />
                </div>
                <div className="link-block__wrapper">
                    <Link to="/lunchmeny" className="link-block"
                        style={{ background: `url(${lunch})` }}>
                        <span
                            style={{
                                background: '#ffffffbd',
                                color: 'black',
                                padding: '3px 8px',
                                fontSize: '12px',
                                fontWeight: 'bold'
                            }}
                        >Lunchstängt 12/5 - 23/8</span>
                        <h2>Lunchmeny</h2>
                    </Link>
                    <Link to="/meny" className="link-block"
                        style={{ background: `url(${dinner})` }}>
                        <h2>Meny</h2>
                    </Link>
                    <Link to="/konsert" className="link-block"
                        style={{ background: `url(${music})` }}>
                        <h2>Konsert</h2>
                    </Link>
                </div>
                <div className='vertical-align-middle scroll link-block__mobile'>
                    <Link to="/lunchmeny" className='mobile-slide-item'
                        style={{ backgroundImage: `url(${lunch})` }}>
                        <h2>Lunchmeny</h2>
                    </Link>
                    <Link to="/meny" className='mobile-slide-item'
                        style={{ backgroundImage: `url(${dinner})` }}>
                        <h2>Meny</h2>
                    </Link>
                    <Link to="/konsert" className='mobile-slide-item'
                        style={{ backgroundImage: `url(${music})` }}>
                        <h2>Konsert</h2>
                    </Link>


                </div>
            </Fragment>)
    }
}

export default SweIndex;