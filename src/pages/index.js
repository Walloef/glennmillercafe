import React from 'react'
import Layout from '../components/Layout'
import { Fragment } from 'react';
import { GoogleApiWrapper, Marker } from 'google-maps-react';
import heroImage from './../../static/img/hero.jpg';
import parallax from './../../static/img/dsc_8420.jpg'
import sax from './../../static/img/sax.jpg';
import './../scss/index.scss';
import './../scss/hero.scss';
import './../scss/quickInfo.scss';
import './../scss/index-text.scss';
import CurrentLocation from '../components/Maps';
class IndexPage extends React.Component {

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  render() {

    return (
      <Fragment>
        <Layout>
          <div className="hero__wrapper">
            <div className="hero__image">
              <img src={heroImage} alt="Glenn Miller Café Resturang" />
              <div className="hero__text">
                <h2>Glenn Miller Café</h2>
                <p>Stockholms äldsta jazz resturang</p>
              </div>
            </div>
          </div>
          <div className="quick-info">
            <h3>Bordsbokning</h3>
            <b>Ring</b>
            <p>0768824549 eller 08-100322</p>
            <hr />
            <h3>Öppettider</h3>
            <b>onsdag-söndag</b>
            <p>18-01</p>
            <p className="small">Stängt måndag - tisdag</p>
            <hr />
            <h3>Address</h3>
            <p>Brunnsgatan 21A  11138 Stockholm</p>
            <hr />
            <h3>Lunchöppet</h3>
            <b>onsdag-fredag</b>
            <p>11–14</p>
          </div>
          <div className="index-text__wrapper">
            <p>Glenn Miller Café är en världskänd lite jazzclub och restaurant i hjärtat av Stockholm. Vi har livejazzkonserter alla kvällar vi har öppet, onsdag-söndag. Restauranten öppnar kl 18 och konserterna börjar kl 20/ kl 20.30 på fredag och lördag. Menyn är franskinspirerad med musslor som vår specialitet. Här spelar de stora musikerna på den lilla scenen - och du sitter alldeles där!</p>
            <img src={`${sax}`} alt="saxofon" />
          </div>
          {/* <section className="section section--gradient"
            style={{
              padding: '0 1.5rem'
            }}>

            <div className="container">
              <div className="full-width-image-container margin-top-0" style={{
                backgroundImage: `url(${heroImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                position: "relative",
                height: "80vh",
                top: "-52px",
                marginBottom: 0
              }}>




                <div
                  style={{
                    background: 'white',
                    padding: '12px',
                    textAlign: 'center',
                    position: 'absolute',
                    right: '12px',
                    bottom: '12px',
                    boxShadow: '2px 2px 5px black'
                  }}>
                  <h3 className="has-text-weight-semibold is-size-4">
                    Bordsbokning
                          </h3>
                  <b>Ring</b>
                  <p>0768824549 eller 08-100322</p>
                  <h3 className="has-text-weight-semibold is-size-4">
                    Öppettider
                        </h3>
                  <b>onsdag-söndag</b>
                  <p>18-01</p>
                  <p
                    style={{
                      fontSize: '13px',
                      color: '#4c4b4b'
                    }}
                  >Stängt måndag - tisdag</p>
                  <h3 className="has-text-weight-semibold is-size-4">
                    Address</h3>
                  <p>Brunnsgatan 21A  11138 Stockholm</p>

                  <h3 className="has-text-weight-semibold is-size-4">
                    Lunchöppet
                        </h3>
                  <b>onsdag-fredag</b>
                  <p>11–14</p>


                </div>
              </div>
            </div>
            <div className="section" style={{ paddingBottom: 0 }}>
              <div className="columns">
                <div className="column is-10 is-offset-1">
                  <div className="content">
                    <div className="columns"
                      style={{
                        padding: '80px 0',
                        display: 'flex',
                        alignItems: 'center'
                      }}>
                      <div className="column is-7">
                        <p>
                          Glenn Miller Café är en världskänd lite jazzclub och restaurant i hjärtat av Stockholm. Vi har livejazzkonserter alla kvällar vi har öppet, onsdag-söndag. Restauranten öppnar kl 18 och konserterna börjar kl 20/ kl 20.30 på fredag och lördag. Menyn är franskinspirerad med musslor som vår specialitet.
  Här spelar de stora musikerna på den lilla scenen - och du sitter alldeles där!
                        </p>
                      </div>

                      <div className="column is-7"
                        style={{
                          backgroundImage: `url(${sax})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          minHeight: '400px'
                        }}
                      >

                      </div>

                    </div>
                    
                    <div className="content">
                      <div className="full-width-image-container margin-top-0" style={{
                        backgroundImage: `url(${parallax})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        backgroundAttachment: 'fixed',
                        marginBottom: 0
                      }}></div>

                    </div>



                  </div>
                </div>
              </div>
            </div>
            <div> */}
          {/* 
              GOOGLE MAPS DONT REMOVE!!
              <CurrentLocation centerAroundCurrentLocation google={this.props.google}>
                <Marker name={'Kenyatta International Convention Centre'} />

              </CurrentLocation> */}
          {/* </div>
          </section> */}
        </Layout>
      </Fragment >
    )
  }
}

export default IndexPage;
// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyDqsni7qoN4OksOUGRW0eZtDgLx6qwOYKI'
// })(IndexPage);