import logo from './assets/images/LOGO.png';
import yoga from './assets/icons/yoga.png';
import natation from './assets/icons/natation.png';
import velo from './assets/icons/velo.png';
import musculation from './assets/icons/musculation.png';

import './App.css';
import ActiviteQuotidienne from './components/Activiter/index.js';
import Sessions from './components/Session/index.js';
import Performance from './components/Performance/index.js';
import Score from './components/Score/index.js';
import Nutriment from './components/Nutriment/index.js';

import React, { useState, useEffect } from "react"
import getAverageSessions from './components/fetch';

// const dataSession = [
//   {
//     "day":1,
//     "sessionLength":30
//   },
//   {
//     "day":2,
//     "sessionLength":40
//   },
//   {
//     "day":3,
//     "sessionLength":50},
//   {
//     "day":4,
//     "sessionLength":30},
//   {
//     "day":5,
//     "sessionLength":30},
//   {
//     "day":6,
//     "sessionLength":50
//   },
//   {
//     "day":7,
//     "sessionLength":50
//   }
// ];

function App() {
  // let url = 'http://localhost:3000/user/18/average-sessions';
  const [sessions, setSessions] = useState([])

  useEffect(() => {
    getAverageSessions().then((session) => {
      console.log(session)
      setSessions(session)
    })
  }, [])

  return (
    <div className="">
      <header className="App-header">
        <img className="App-logo" src={logo} alt="logo" /> 
        <a className="link-header" href="/">Accueil</a>
        <a className="link-header" href="/">Profil</a>
        <a className="link-header" href="/">Réglage</a>
        <a className="link-header" href="/">Communauté</a>
      </header>
      <nav className="App-nav">
        <div className="bonx-nav">
          <img className="icon-nav" src={yoga} alt="icon-yoga" /> 
          <img className="icon-nav" src={natation} alt="icon-natation" /> 
          <img className="icon-nav" src={velo} alt="icon-vélo" /> 
          <img className="icon-nav" src={musculation} alt="icon-musculation" />
          <p className="nav-link">Copiryght, SportSee 2020</p>
        </div>
        
      </nav>
      <div className="App-content">
        <div className='seconde-box'>
          <h1>Bonjour <span>Thomas</span></h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          <div className='dspl-flx'>
            <div className="box-lft">
              <ActiviteQuotidienne  className="wdth-act-box" />
              <div className='box-btm'>
                <Sessions data={sessions} />
                <Performance />
                <Score />
              </div>
            </div>
            <div className="box-rght">
              <Nutriment/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
