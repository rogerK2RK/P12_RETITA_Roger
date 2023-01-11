import styles from "./styles.module.css"
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

 function Activiter(props) {
  return (
    <BarChart
      width={1035}
      height={320}
      data={props.data}
      margin={{
        top: 24,
        right: 10,
        left: 0,
        bottom: 5
      }}
      className={styles["bkgrd"]}
      barGap={8}
    >
      <CartesianGrid vertical={0} strokeDasharray="3 3" />
      {/* <XAxis label={{fill:'#9B9EAC' }} tick={{ fill: '#9B9EAC' }} tickLine={{ stroke: 'none' }}/> */}
      <XAxis label={{fill:'#9B9EAC' }} tick={{ fill: '#9B9EAC' }} type="category"  tickLine={false} />
      <YAxis
          dataKey="kilogram"
          tickLine={false}
          tickCount={3}
          orientation="right"
          yAxisId="right"
          domain={['dataMin - 2', 'dataMax + 5']}
          // tick={{ stroke: 'none' }}
        />
        <YAxis
          dataKey="calories"
          tickLine={false}
          tickCount={3}
          orientation="left"
          yAxisId="left"
          domain={['dataMin - 100', 'dataMax + 20']}
          hide
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
        fill="#000"
        // fill="#282D30" 
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
  );
}


export default Activiter;