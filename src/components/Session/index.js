
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
  Tooltip
} from "recharts";

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
          <circle cx={props.cx} cy={props.cy} r={3} fill="white" opacity={1} />
          <circle cx={props.cx} cy={props.cy} r={6} fill="white" opacity={0.3} />
          <rect x={props.cx} y={0} width="100%" height="100%" opacity={0.1}/>
        </svg>
} 

export default function Session(props) {

  return (
      <LineChart 
            width={258}
            height={263}
            data={props.data}
            className={styles["bkgrd-session"]}
            isAnimationActive={true}
          >
            <CartesianGrid vertical={0} horizontal={0} />
            <XAxis dataKey="day" tick={{ fill: '#fff' }} stroke="none" tickLine={{ stroke: 'none' }} tickFormatter={formatXAxis}/>
            <YAxis hide/>
            <Line type="monotone" 
                  dataKey="sessionLength" 
                  dot={false} 
                  activeDot={<CustomizedDot />} 
                  strokeWidth={2}
                  unit="min"
                  radius={[10, 10, 0, 0]}/>
            <Tooltip offset={10}
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: 'none',
                    textAlign: 'center',
                  }}
                  wrapperStyle={{
                    outline: 'none',
                  }}
                  itemStyle={{
                    fontSize: '8px',
                    fontWeight: '500',
                    color: '#000',
                    lineHeight: '0',
                  }}
                  labelFormatter={() => ''}
                  separator=""
                  formatter={(value) => ['', value]}/>
            <Area
              type="monotone"
              dataKey="sessionLength"
              stroke="#FFF"
              fill="#fff"
              tickLine="#FFF"
            />
    </LineChart >
  );
}

Session.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    day:PropTypes.number,
    sessionLength:PropTypes.number
  }))
}
