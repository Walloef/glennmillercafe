import React from 'react'
import Layout from '../components/Layout'
import { Fragment } from 'react';
import EngIndex from './../components/EngIndex';
import SweIndex from './../components/SweIndex';
import './../scss/index.scss';
import './../scss/hero.scss';
import './../scss/quickInfo.scss';
import './../scss/index-text.scss';
import './../scss/link-block.scss';
class IndexPage extends React.Component {

  componentDidMount() {
    if (localStorage.getItem('gmLang') === 'en') {
      document.querySelector('html').classList.add('eng')
    }
  }

  render() {
    const currentLang = localStorage.getItem('gmLang') === 'en' ? <EngIndex /> : <SweIndex />;

    return (
      <Fragment>

        <Layout>

          {/* {currentLang}


          <a target="_blank" rel="noopener noreferrer" href="http://www.hitta.se/kartan/partner?mc=59.336751,18.070739">
            <img src="https://api.hitta.se/image/v2/0_2x/17?width=980&height=500&zoom.to=location&location=%7B%22id%22%3A%221010178402%22%7D?markers=%7B%22marker%22:1%7D" />
          </a> */}




          <div style={{
            textAlign: 'center',
            position: 'absolute',
            width: '100%',
            top: '0',
            zIndex: '999',
            background: '#171834',
            height: '70vh'
          }}>
            <h1 style={{
              fontSize: '2rem',
              maxWidth: '500px',
              margin: '0 auto'
            }}
            >Glenn Miller Cafés nya sida är under uppbyggnad</h1>
            <p>Besök
            <a href="http://www.glennmillerprogram.se/"
                style={{
                  color: '#fdea4e',
                  textDecoration: 'underline',
                  marginLeft: '5px'
                }}>
                glennmillerprogram
            </a> för information om Glenn Miller Café
          </p>
          </div>
        </Layout>
      </Fragment >
    )
  }
}

export default IndexPage;