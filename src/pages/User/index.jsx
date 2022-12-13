
import ActiviteQuotidienne from '../../components/Activiter/index.js';
import Sessions from '../../components/Session/index.js';
import Performance from '../../components/Performance/index.js';
import Score from '../../components/Score/index.js';
import Nutriment from '../../components/Nutriment/index.js';

import React, { useState, useEffect } from "react"
import {getAverageSessions} from '../../components/fetch';
import { useParams } from 'react-router-dom';



function User() {
  const [sessions, setSessions] = useState([])
  const { id:userId } = useParams()

  useEffect(() => {
    getAverageSessions(userId).then((session) => {
      setSessions(session)
    })
  }, [])

  return (
    <div className="">
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

export default User;
