import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import { Fragment } from "react";
import { GoogleApiWrapper, Marker } from "google-maps-react";
import heroImage from "./../../static/img/hero.jpg";
import parallax from "./../../static/img/dsc_8420.jpg";
import sax from "./../../static/img/sax.jpg";
import lunch from "./../../static/img/lunch.jpg";
import music from "./../../static/img/music.jpg";
import dinner from "./../../static/img/dinner.jpg";
import "./../scss/index.scss";
import "./../scss/hero.scss";
import "./../scss/quickInfo.scss";
import "./../scss/index-text.scss";
import "./../scss/link-block.scss";
import CurrentLocation from "../components/Maps";
class IndexPage extends React.Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  render() {
    return (
      <Fragment>
        <div
          style={{
            textAlign: "center",
            height: "100vh",
            border: "1px solid white"
          }}
        >
          <h1
            style={{
              fontSize: "2rem",
              maxWidth: "500px",
              margin: "0 auto"
            }}
          >
            Glenn Miller Cafés nya sida är under uppbyggnad
          </h1>
          <p>
            Besök
            <a
              href="http://www.glennmillerprogram.se/"
              style={{
                color: "#fdea4e",
                textDecoration: "underline",
                marginLeft: "5px"
              }}
            >
              glennmillerprogram
            </a>{" "}
            för information om Glenn Miller Café
          </p>
        </div>
        {/* <Layout> */}
        {/* <div className="hero__wrapper">
            <div className="hero__image">
              <img src={heroImage} alt="Glenn Miller Café Resturang" />
              <div className="hero__text">
                <h2>Glenn Miller Café</h2>
                <p>Stockholms äldsta jazz resturang</p>
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
              <p>18-01</p>
              <p className="small">Stängt måndag - tisdag</p>
            </div>
            <div>
              <h3>Address</h3>
              <p>Brunnsgatan 21A  11138 Stockholm</p>
            </div>
            <div>
              <h3>Lunchöppet</h3>
              <b>onsdag-fredag</b>
              <p>11–14</p>
            </div>
          </div>
          <div className="index-text__wrapper">
            <p>Glenn Miller Café är en världskänd lite jazzclub och restaurant i hjärtat av Stockholm. Vi har livejazzkonserter alla kvällar vi har öppet, onsdag-söndag. Restauranten öppnar kl 18 och konserterna börjar kl 20/ kl 20.30 på fredag och lördag. Menyn är franskinspirerad med musslor som vår specialitet. Här spelar de stora musikerna på den lilla scenen - och du sitter alldeles där!</p>
            <img src={`${sax}`} alt="saxofon" />
          </div>
          <div className="link-block__wrapper">
            <Link to="/lunchmeny" className="link-block"
              style={{ background: `url(${lunch})` }}>

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


          </div> */}
        {/* 
              GOOGLE MAPS DONT REMOVE!!
              <CurrentLocation centerAroundCurrentLocation google={this.props.google}>
                <Marker name={'Kenyatta International Convention Centre'} />

              </CurrentLocation> */}
        {/* </div>
          </section> */}
        {/* </Layout> */}
      </Fragment>
    );
  }
}

export default IndexPage;
// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyDqsni7qoN4OksOUGRW0eZtDgLx6qwOYKI'
// })(IndexPage);
