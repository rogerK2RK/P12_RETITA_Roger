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
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" />
      <YAxis hide/>
      <Tooltip />
      <Area type="monotone" dataKey="sessionLength" stroke="#000" fill="#FF0000" />
    </AreaChart>
  );
}

Session.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    day:PropTypes.number,
    sessionLength:PropTypes.number
  }))
}
