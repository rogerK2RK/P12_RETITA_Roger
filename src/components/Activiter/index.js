import styles from "./styles.module.css"
import styled from 'styled-components';
import PropTypes from 'prop-types';
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";


const Background = styled.div`
  background-color: #fbfbfb;
  padding: 24px;
  border-radius: 5px;
  height: 320px;
  width: 100%;
  margin-bottom: 30px;
  // max-width: 835px;
  position: relative;
  grid-area: activity;
  h3 {
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;
    position: absolute;
    left: 34px;
    top: 0px;
    max-width: 150px;
    z-index: 2;
  }
  line {
    stroke: #dedede;
  }
  text {
    font-weight: 500;
    fill: #9b9eac;
  }
  .recharts-legend-wrapper{
    position: absolute;
    height: 50px;
    right: 10px;
    top: -8px !important;
  }
  .recharts-legend-wrapper ul {
    display: flex;
    justify-content: flex-end;
    color: #74798c;
    font-size: 14px;
    font-weight: 500;
    li {
      margin-right: 32px;
    }
  }
`;


 function Activiter(props) {
  return (
    <Background>
			<h3>Activité quotidienne</h3>
			<ResponsiveContainer width="100%" height={272}>
        <BarChart
          // width={1035}
          // height={320}
          data={props.data}
          margin={{
            top: 15,
            right: 10,
            left: 0,
            bottom: 5
          }}
          className={styles["bkgrd"]}
          // barGap={8}
        >
          <CartesianGrid vertical={0} strokeDasharray="3 3" />
          {/* <XAxis label={{fill:'#9B9EAC' }} tick={{ fill: '#9B9EAC' }} tickLine={{ stroke: 'none' }}/> */}
           <XAxis 
            label={{fill:'#9B9EAC' }} 
            tick={{ fill: '#9B9EAC' }} 
            type="category"  
            tickLine={false} 
            tickMargin={16}
            tickSize={0}
          />
          {/* <YAxis
              dataKey="kilogram"
              tickLine={false}
              tickMargin={40}
              tickSize={0}
              axisLine={false}
              tickCount={3}
              orientation="right"
              yAxisId="right"
              domain={['dataMin - 2', 'dataMax + 1']}
            /> */}
            <YAxis
              dataKey="calories"
              tickLine={false}
              tickSize={0}
              axisLine={false}
              tickCount={3}
              yAxisId="right"
              // hide
              orientation="right"
              domain={[0, 'dataMax + 100']}
            /> 
            <Tooltip
                cursor={{ fill: '#C4C4C4', fillOpacity: '50%' }}
                offset={20}
                contentStyle={{
                  backgroundColor: '#E60000',
                  border: 'none',
                  textAlign: 'center',
                }}
                wrapperStyle={{
                  outline: 'none',
                }}
                itemStyle={{
                  fontSize: '12px',
                  color: '#fff',
                  lineHeight: '24px',
                }}
                labelFormatter={() => ''}
                separator=""
                formatter={(value) => ['', value]}
                active="true"
              />
          <Legend
            margin= {{
              top: 0,
              left: 0,
              bottom: 10,
              right: 10
            }}
            align="right" 
            height={50}
            verticalAlign="top" 
            iconType="circle"
            />
          <Bar 
            barSize={7} 
            name="Poids (kg)" 
            unit="kg" 
            width="7px" 
            yAxisId="right" 
            dataKey="kilogram" 
            // fill="#000"
            fill="#282D30" 
            radius={[3, 3, 0, 0]} 
          />
          <Bar 
            barSize={7} 
            name="Calories brûlées (kCal)"
            unit="kCal"
            yAxisId="right" 
            dataKey="calories" 
            fill="#E60000" 
            radius={[3, 3, 0, 0]}/>
        </BarChart>
        </ResponsiveContainer>
		</Background>
  );
}

//PropTypes for ID
Activiter.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    day:PropTypes.date,
    kilogram:PropTypes.number,
    calories:PropTypes.number
  }))
}

export default Activiter;