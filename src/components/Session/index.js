
import styles from "./styles.module.css"
import React from "react";
import PropTypes from 'prop-types';
import {
  LineChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  Tooltip, 
  ResponsiveContainer
} from "recharts";
import styled from 'styled-components';

const Background = styled.div`
  background-color: var(--color-primary);
  border-radius: 5px;
  height: 263px;
  width: 100%;
  max-width: 258px;
  position: relative;
  grid-area: sessions;
  overflow: hidden;
  &::before,
  &::after {
    content: '';
    width: calc(10% - 5px);
    height: 100%;
    background-color: transparent;
    position: absolute;
    top: 0;
    z-index: 3;
  }
  &::before {
    left: 0;
  }
  &::after {
    right: 0;
  }
  h3 {
    color: #fff;
    opacity: 0.5;
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;
    position: absolute;
    left: 20px;
    top: 0px;
    max-width: 150px;
    z-index: 2;
  }
  .recharts-wrapper {
    width: 100%;
  }
  .recharts-line{
    color: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.106534) 100%);
    // opacity: 0.1;
  }
  .recharts-rectangle {
    transform: translateY(-5px);
    z-index: -1;
    opacity: 0.1;
  }
  .xAxis {
    transform: translateY(5px);
    opacity: 0.5;
  }
`;



function formatXAxis(value){
  switch (value) {
    case 1:
      return "L";
    case 2:
      return "M";
    case 3:
      return "M";
    case 4:
      return "J";
    case 5:
      return "V";
    case 6:
      return "S";
    case 7:
      return "D";
  }
}

function CustomizedDot(props){
  return <svg>
          <circle cx={props.cx} cy={props.cy} r={4} fill="white" opacity={1} />
          <circle cx={props.cx} cy={props.cy} r={8} fill="white" opacity={0.3} />
          <rect x={props.cx} y={0} width="100%" fill="#000000"  height="100%" tickLine={0} opacity={0.1}/>
        </svg>
} 

export default function Session(props) {

  return (
    <Background>
      <h3>Durée moyenne des sessions</h3>
          <ResponsiveContainer width={270}height={263}>
              <LineChart 
                    width={258}
                    height={253}
                    data={props.data}
                    className={styles["bkgrd-session"]}
                    isAnimationActive={true}
                  >
                    <CartesianGrid 
                      vertical={0} 
                      horizontal={0} 
                    />
                    <XAxis 
                      dataKey="day" 
                      tick={{ fill: '#fff' }} 
                      stroke="none" 
                      tickLine={{ stroke: 'none' }} 
                      tickFormatter={formatXAxis}
                      padding={{ left: 15, right: 30 }}
                      axisLine={false}
                      tickSize={0}
                      tickMargin={0}
                    />
                    <YAxis 
                      hide
                      type="number"
                      domain={[(dataMin) => dataMin - 10, (dataMax) => dataMax + 10]}
                    />
                    <Line 
                      type="natural"
                      stroke="#fbfbfb"
                      // dot={{ r: 0 }}
                      // type="monotone" 
                      dataKey="sessionLength" 
                      dot={false} 
                      activeDot={<CustomizedDot />} 
                      strokeWidth={2}
                      unit="min"
                      radius={[10, 10, 0, 0]}
                    />
                    <Tooltip 
                      offset={10}
                      contentStyle={{
                        backgroundColor: '#fff',
                        border: 'none',
                        textAlign: 'center',
                      }}
                      wrapperStyle={{
                        outline: 'none',
                      }}
                      itemStyle={{
                        fontSize: '12px',
                        fontWeight: '500',
                        color: '#000',
                        lineHeight: '0',
                      }}
                      labelFormatter={() => ''}
                      separator=""
                      formatter={(value) => ['', value]}
                    />
                    <Area
                      type="monotone"
                      dataKey="sessionLength"
                      stroke="#FFF"
                      fill="#fff"
                      tickLine="#fbfbfb"
                    />
            </LineChart >
          </ResponsiveContainer>
    </Background>
    
  );
}

Session.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    day:PropTypes.number,
    sessionLength:PropTypes.number
  }))
}
