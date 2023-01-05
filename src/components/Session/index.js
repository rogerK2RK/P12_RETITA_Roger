import styles from "./styles.module.css"
import React from "react";
import PropTypes from 'prop-types';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
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
  // return "n";
}

export default function Session(props) {
  return (
    <AreaChart
      width={258}
      height={263}
      data={props.data}
      className={styles["bkgrd-session"]}
    >
      <CartesianGrid vertical={0} horizontal={0} />
      <XAxis dataKey="day" tick={{ fill: '#fff' }} stroke="none" tickLine={{ stroke: 'none' }} tickFormatter={formatXAxis}/>
      <YAxis hide/>
      <Tooltip />
      {/* <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" /> */}
      <Area type="monotone" dataKey="sessionLength" stroke="#fff" fill="#FF0000" />
    </AreaChart>
  );
}

Session.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    day:PropTypes.number,
    sessionLength:PropTypes.number
  }))
}
