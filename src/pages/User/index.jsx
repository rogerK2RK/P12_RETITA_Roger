
import ActiviteQuotidienne from '../../components/Activiter/index.js';
import Sessions from '../../components/Session/index.js';
import Performance from '../../components/Performance/index.js';
import Score from '../../components/Score/index.js';
import Nutriment from '../../components/Nutriment/index.js';

import React, { useState, useEffect } from "react"
import {getAverageActiviter, getAverageSessions, getAveragePerformance, getAverageScore, getAverageNutriment, getAverageName} from '../../components/fetch';
import { useParams } from 'react-router-dom';



function User() {
  const [isLoading, setIsLoading] = useState(false);
  const [activiter, setActiviter] = useState([]);
  const [sessions, setSessions] = useState([])
  const [performance, setPerformance] = useState([]);
  const [score, setScore] = useState([]);
  const [nutriment, setNutriment] = useState([]);
  const [name, setName] = useState([]);

  const { id:userId } = useParams()

  useEffect(() => {
    setIsLoading(true);

    const callActiviter = getAverageActiviter(userId).then((activiter) => {
      setActiviter(activiter)
    });

    const callSession = getAverageSessions(userId).then((session) => {
      setSessions(session)
    });

    const callPerformance = getAveragePerformance(userId).then((performance) => {
      setPerformance(performance)
    });

    const callScore = getAverageScore(userId).then((score) => {
      setScore(score)
    });

    const callNutriment = getAverageNutriment(userId).then((nutriment) => {
      setNutriment(nutriment)
    });

    const callName = getAverageName(userId).then((name) => {
      setName(name)
    });

    Promise.all([callActiviter, callSession, callPerformance, callScore, callNutriment, callName]).then(() => {
      setIsLoading(false);
    });

  }, [])

  return isLoading ? <div>Loading...</div> :
    <div className="">
      <div className="App-content">
        <div className='seconde-box'>
          <h1>Bonjour <span>{name}</span></h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          <div className='dspl-flx'>
            <div className="box-lft">
              <ActiviteQuotidienne data={activiter} className="wdth-act-box" />
              <div className='box-btm'>
                <Sessions data={sessions} />
                <Performance data={performance}/>
                <Score data={score}/>
              </div>
            </div>
            <div className="box-rght">
              <Nutriment data={nutriment}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  ;
}

export default User;
