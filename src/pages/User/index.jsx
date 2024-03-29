
import ActiviteQuotidienne from '../../components/Activiter/index.js';
import Sessions from '../../components/Session/index.js';
import Performance from '../../components/Performance/index.js';
import Score from '../../components/Score/index.js';
import Nutriment from '../../components/Nutriment/index.js';
import {Model} from "../../components/fetch/model"

import React, { useState, useEffect } from "react"
import {getAverageActiviter as getAverageActiviterFetch, getAverageSessions as getAverageSessionsFetch, getAveragePerformance as getAveragePerformanceFetch, getAverageScore, getAverageNutriment as getAverageNutrimentFetch, getAverageName as getAverageNameFetch} from '../../components/fetch';
import {getAverageName as getAverageNameMock, getAverageNutriment as getAverageNutrimentMock, getAveragePerformance as getAveragePerformanceMock, getAverageSessions as getAverageSessionsMock, getAverageActiviter as getAverageActiviterMock} from "../../components/fetch/mock.js"
import { useParams } from 'react-router-dom';

// const isMockActive = false;

const getAverageNutriment = process.env["REACT_APP_IS_MOCK_ACTIVE"] === "true" ? getAverageNutrimentMock : getAverageNutrimentFetch;
const getAverageName = process.env["REACT_APP_IS_MOCK_ACTIVE"] === "true" ? getAverageNameMock : getAverageNameFetch;
const getAveragePerformance = process.env["REACT_APP_IS_MOCK_ACTIVE"] === "true" ? getAveragePerformanceMock : getAveragePerformanceFetch;
const getAverageSessions = process.env["REACT_APP_IS_MOCK_ACTIVE"] === "true" ? getAverageSessionsMock : getAverageSessionsFetch;
const getAverageActiviter = process.env["REACT_APP_IS_MOCK_ACTIVE"] === "true" ? getAverageActiviterMock : getAverageActiviterFetch;

/**
 * Call the function for call the api for each graph
 * and give the data which matches for each graph 
 * @returns 
 */
function User() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [activiter, setActiviter] = useState([]);
  const [sessions, setSessions] = useState([])
  const [performance, setPerformance] = useState({kind:[], data:[]});
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
      setScore(Model.formatAverageScore(score))
    });

    const callNutriment = getAverageNutriment(userId).then((nutriment) => {
      setNutriment(nutriment)
    });

    const callName = getAverageName(userId).then((name) => {
      setName(name)
    });

    Promise.all([callActiviter, callSession, callPerformance, callScore, callNutriment, callName]).then(() => {
      setIsLoading(false);
    }).catch(()=>{setError("Opps! Impossible de charger les donnés")});

  }, [])
  if(error) return <div>{error}</div>
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
                <Score pourcentage={score.score * 100}/>
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
