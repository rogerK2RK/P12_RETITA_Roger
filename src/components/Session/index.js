import styles from "./styles.module.css"
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

const data = [
  {
    "day":1,
    "sessionLength":30
  },
  {
    "day":2,
    "sessionLength":40
  },
  {
    "day":3,
    "sessionLength":50},
  {
    "day":4,
    "sessionLength":30},
  {
    "day":5,
    "sessionLength":30},
  {
    "day":6,
    "sessionLength":50
  },
  {
    "day":7,
    "sessionLength":50
  }
];

export default function Session() {
  return (
    <AreaChart
      width={258}
      height={263}
      data={data}
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
