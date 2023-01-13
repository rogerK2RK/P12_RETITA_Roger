import styles from "./styles.module.css"
import PropTypes from 'prop-types';
import React from "react";
import { RadialBarChart , RadialBar, Legend } from "recharts";
import styled from 'styled-components';

const Background = styled.div`
  background-color: #fbfbfb;
  border-radius: 5px;
  height: 263px;
  width: 100%;
  max-width: 258px;
  position: relative;
  grid-area: score;
  overflow: hidden;
  z-index: 1;
  h3 {
    color: #20253a;
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;
    position: absolute;
    max-width: 150px;
    left: 34px;
    z-index:200;
  }
  .recharts-sector .recharts-radial-bar-sector{
    background-color: #FFF !important;
  }
  svg {
    position: absolute;
    top: 10%;
    left: 10%;
    width: 210px;
    height: 210px;
    // transform: rotate(-90deg) scale(0.73);
    background-color: #fff;
    border-radius: 50%;
    // overflow: visible;
    // margin-top: 2%;
  }
`;

export default function App(props) {
  let score;

  if(props.data.id === 12){
    score = props.data.todayScore;
  } else if(props.data.id === 18){
    score = props.data.score;
  }

  function CustomLegendScore(payload) {
    return (
      <div className={styles['legendScore']}>
        <p className={styles['legendScore__number']}>
          {payload.payload[1].payload.value}%
        </p>
        <p className={styles['legendScore__text']}>de votre</p>
        <p className={styles['legendScore__text']}>objectif</p>
      </div>
    )
  }

  let tem1 = [{
    value: 100,
    fill: '#FFFFFF'
  },
  {
    value: score*100,
    fill: '#E60000'
  }];
  
  
  return (
    <Background>
      <h3>Score</h3>
      <RadialBarChart 
        startAngle={90} 
        endAngle={470} 
        cx='50%' 
        cy='50%' 
        outerRadius={145}
        innerRadius={100} 
        data={tem1} 
        width={258} 
        height={263} 
        className={styles["bkgrnd"]}
      >
        
        <RadialBar 
          cornerRadius='100%' 
          dataKey='value'
        />
        <Legend 
          content={<CustomLegendScore />} 
          verticalAlign='middle' 
        />
      </RadialBarChart >
    </Background>
  );
}

//PropTypes for ID
App.propTypes = {
  id: PropTypes.number
}