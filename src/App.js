import logo from './assets/images/LOGO.png';
import yoga from './assets/icons/yoga.png';
import natation from './assets/icons/natation.png';
import velo from './assets/icons/velo.png';
import musculation from './assets/icons/musculation.png';

import './App.css';
import Home from "./pages/Home/index.jsx"
import User from "./pages/User/index.jsx"
import ErrorPage from "./pages/Erreur/index.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import React, { useState, useEffect } from "react"
import {getAverageSessions, getAverageUsers} from './components/fetch';



function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getAverageUsers().then((user) => {
      setUsers(user)
    })
  }, [])

  const [sessions, setSessions] = useState([])

  useEffect(() => {
    getAverageSessions().then((session) => {
      setSessions(session)
    })
  }, [])

  return (
    <React.StrictMode>
      <Router>
      <header className="App-header">
        
        <a href="/"><img className="App-logo" src={logo} alt="logo" /></a>
        <a className="link-header" href="/">Accueil</a>
        <a className="link-header" href="*">Profil</a>
        <a className="link-header" href="*">Réglage</a>
        <a className="link-header" href="*">Communauté</a>
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
      <Routes>
        <Route path="/" element={<Home userdata={users} />} />
        <Route
              path="/user/:id"
              element={<User userdata={sessions} />}
            />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
    </React.StrictMode>
  );
}

export default App;
