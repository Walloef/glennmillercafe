import React from 'react'
import Layout from '../components/Layout'
import { Fragment } from 'react';
import { GoogleApiWrapper, Marker } from 'google-maps-react';

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
        <p>hejsan</p>
        <Layout>
          <section className="section section--gradient">

            <div className="container">

              <div className="section">
                <div className="columns">
                  <div className="column is-10 is-offset-1">
                    <div className="content">
                      <div className="full-width-image-container margin-top-0" style={{
                        backgroundImage: 'url(https://via.placeholder.com/450)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center'
                      }}>
                        <h2 className="has-text-weight-bold is-size-1" >Glenn Miller Café</h2></div>
                    </div>
                    <div className="columns">
                      <div className="column is-7">
                        <h3 className="has-text-weight-semibold is-size-2">Hejsan</h3>
                        <p>lorem sadlasdöasdlök asöldk saöldk aöllorem sadlasdöasdlök asöldk saöldk aöl
                        lorem sadlasdöasdlök asöldk saöldk aöl
                        lorem sadlasdöasdlök asöldk saöldk aöl
                        lorem sadlasdöasdlök asöldk saöldk aöl
                        lorem sadlasdöasdlök asöldk saöldk aöl
                        lorem sadlasdöasdlök asöldk saöldk aöl
                        lorem sadlasdöasdlök asöldk saöldk aöl
                        lorem sadlasdöasdlök asöldk saöldk aöl
                        lorem sadlasdöasdlök asöldk saöldk aöl
                        lorem sadlasdöasdlök asöldk saöldk aöl
                        lorem sadlasdöasdlök asöldk saöldk aöl
                        lorem sadlasdöasdlök asöldk saöldk aöl
                        lorem sadlasdöasdlök asöldk saöldk aöl
                        lorem sadlasdöasdlök asöldk saöldk aöl
                      </p>
                      </div>

                      <div className="column is-7"
                        style={{
                          backgroundImage: 'url(https://via.placeholder.com/450)',
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      >

                      </div>

                    </div>
                    <div className="columns" style={{ padding: '60px 0 30px 0' }}>
                      <div className="message"
                        style={{
                          width: '500px',
                          margin: '0 auto',
                          textAlign: 'center'
                        }}
                      >
                        <div className="message-body"
                          style={{
                            borderWidth: '4px'
                          }}>
                          <h3 className="has-text-weight-semibold is-size-2">
                            Info i korthet
                        </h3>
                          <b>
                            Fredagar
                          </b>
                          <p>16.30-18.00</p>
                          <b>Onsdag-söndag</b>
                          <p>18.00-01.00</p>
                          <b>Bordsbokning</b>
                          <p>0768824549/08-100322</p>
                        </div>
                      </div>
                    </div>
                    <div className="content">
                      <div className="full-width-image-container margin-top-0" style={{
                        backgroundImage: 'url(https://via.placeholder.com/450)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        backgroundAttachment: 'fixed'
                      }}>
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