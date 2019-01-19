import React from 'react'
import Layout from '../components/Layout'
import { Fragment } from 'react';
import { GoogleApiWrapper, Marker } from 'google-maps-react';
import heroImage from './../../static/img/gmc-hero.jpg';
import parallax from './../../static/img/dsc_8420.jpg'
import sax from './../../static/img/sax.jpg';
import './../scss/index.scss'
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
          <section className="section section--gradient"
            style={{
              padding: '0 1.5rem'
            }}>

            <div className="container">

              <div className="section" style={{ paddingBottom: 0 }}>
                <div className="columns">
                  <div className="column is-10 is-offset-1">
                    <div className="content">
                      <div className="full-width-image-container margin-top-0" style={{
                        backgroundImage: `url(${heroImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center'
                      }}>
                        <h2 className="has-text-weight-bold is-size-1 hero-text"

                        >Glenn Miller Café</h2></div>
                    </div>
                    <div className="columns" style={{ padding: '0 0 30px 0' }}>
                      <div className="message"
                        style={{
                          width: '500px',
                          margin: '0 auto',
                          textAlign: 'center'
                        }}
                      >
                        <div className="message-body"
                          style={{
                            border: 'none',
                            boxShadow: '0 0 10px rgba(0,0,0,.2)'
                          }}>
                          <h3 className="has-text-weight-semibold is-size-3">
                            Bordsbokning
                        </h3>
                          <b>Ring</b>
                          <p>0768824549 eller 08-100322</p>
                          <h3 className="has-text-weight-semibold is-size-3">
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
                          <h3 className="has-text-weight-semibold is-size-3">
                            Address</h3>
                          <p>Brunnsgatan 21A  11138 Stockholm</p>

                          <h3 className="has-text-weight-semibold is-size-3">
                            Lunchöppet
                        </h3>
                          <b>onsdag-fredag</b>
                          <p>11–14</p>


                        </div>
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


                  </div>
                </div>
              </div>
            </div>
            <div>
              <CurrentLocation centerAroundCurrentLocation google={this.props.google}>
                <Marker name={'Kenyatta International Convention Centre'} />

              </CurrentLocation>
            </div>
          </section>
        </Layout>
      </Fragment>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDqsni7qoN4OksOUGRW0eZtDgLx6qwOYKI'
})(IndexPage);