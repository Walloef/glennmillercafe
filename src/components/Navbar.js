import React from 'react'
import { Link } from 'gatsby'
import { Fragment } from 'react';
import './../scss/menu.scss'
import IssueReport from './IssueReport';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.setLang = this.setLang.bind(this);

  }
  componentDidMount() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {

          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');

        });
      });
    }
    const body = document.querySelector('body');

    function removeClass() {
      body.classList.forEach(activeClass => {
        body.classList.remove(activeClass);
      })
    }
    removeClass();
    if (typeof window !== `undefined`) {
      switch (window.location.pathname) {
        case '/konsert':
          removeClass()
          body.classList.add('sv-konsert');
          break;
        case '/lunchmeny':
          removeClass()
          body.classList.add('sv-lunch');
          break;
        case '/meny':
          removeClass()
          body.classList.add('sv-meny');
          break;
        default:
          removeClass();
          break;

      }
    }
  }

  setLang(lang) {
    if (typeof window !== `undefined`) {
      window.localStorage.setItem('gmLang', lang);
      window.location.replace('/')
    }
  }

  render() {
    let menu;
    if (typeof window !== `undefined`) {
      menu = window.localStorage.getItem('gmLang') === 'en' ? <Fragment>
        <Link activeStyle={{ fontWeight: 'bold' }}
          className="navbar-item navbar-item--last" to="/meny">
          Information </Link>

        <div className="lang-link" onClick={() => { this.setLang('sv') }}>Svenska</div>
      </Fragment> : <Fragment>
          <Link activeStyle={{ fontWeight: 'bold' }}
            className="navbar-item" to="/meny">
            Meny </Link>
          <Link activeStyle={{ fontWeight: 'bold' }}
            className="navbar-item" to="/lunchmeny">
            Lunchmeny </Link>
          <Link activeStyle={{ fontWeight: 'bold' }}

            className="navbar-item navbar-item--last" to="/konsert">
            Konserter </Link>
          <div className="lang-link" onClick={() => { this.setLang('en') }}>English</div>
        </Fragment>;
    } else {
      menu = null
    }
    return (
      <Fragment>
        <IssueReport enIssue="A issue in english" svIssue="någonting har hänt" />
        <nav className="navbar is-transparent" role="navigation" aria-label="main-navigation">
          <div className="container">
            <div className="navbar-brand">
              <Link to="/" className="navbar-item" title="Logo">
                <p className="menu-title">Glenn Miller Café</p>
              </Link>
              <div className="navbar-burger burger" data-target="navMenu">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div id="navMenu" className="navbar-menu">
              <div className="navbar-start has-text-centered">
                {menu}
              </div>
            </div>
          </div>
        </nav>
      </Fragment>
    )
  }
}

export default Navbar
