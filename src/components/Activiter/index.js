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
      width={835}
      height={320}
      data={props.data}
      margin={{
        top: 24,
        right: 10,
        left: 0,
        bottom: 5
      }}
      className={styles["bkgrd"]}
    >
      {/* <CartesianGrid strokeDasharray="3 0" /> */}
      <XAxis label={{fill:'#9B9EAC' }} tick={{ fill: '#9B9EAC' }} tickLine={{ stroke: 'none' }}/>
      {/* <YAxis yAxisId="left" orientation="left" stroke="#8884d8" /> */}
      <YAxis tick={{ fill: '#9B9EAC' }} stroke="none" tickLine={{ stroke: 'none' }} yAxisId="right" orientation="right" />
      {/* <Tooltip /> */}
      <Legend
        margin= {{
          top: 0,
          left: 0,
          bottom: 10,
          right: 10
        }}
        align="right" verticalAlign="top" iconType="circle" />
      <CartesianGrid vertical={0} strokeDasharray="2 " />
      <Bar barSize={7} width="7px" yAxisId="right" dataKey="kilogram" fill="#282D30" radius={[3, 3, 0, 0]} />
      <Bar barSize={7} yAxisId="right" dataKey="calories" fill="#E60000" radius={[3, 3, 0, 0]}/>
    </BarChart>
  );
}


export default Activiter;