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



export default function Session(props) {
  return (
    <AreaChart
      width={258}
      height={263}
      data={props.data}
      className={styles["bkgrd-session"]}
    >
      <CartesianGrid vertical={0} horizontal={0} />
      <XAxis dataKey="day" tick={{ fill: '#fff' }} stroke="none" tickLine={{ stroke: 'none' }}/>
      <YAxis hide/>
      <Tooltip />
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
