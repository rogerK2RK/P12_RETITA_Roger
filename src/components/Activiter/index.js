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

const data = [
  {
    "day":"2020-07-01",
    "kilogram":70,
    "calories":240
  },
  {
    "day":"2020-07-02",
    "kilogram":69,
    "calories":220
  },
  {
    "day":"2020-07-03",
    "kilogram":70,
    "calories":280
  },
  {
    "day":"2020-07-04",
    "kilogram":70,
    "calories":500
  },
  {
    "day":"2020-07-05",
    "kilogram":69,
    "calories":160
  },
  {
    "day":"2020-07-06",
    "kilogram":69,
    "calories":162
  },
  {
    "day":"2020-07-07",
    "kilogram":69,
    "calories":390
  }
];

 function Activiter() {
  return (
    <BarChart
      width={835}
      height={320}
      data={data}
      margin={{
        top: 5,
        right: 10,
        left: 0,
        bottom: 5
      }}
      className={styles["bkgrd"]}
    >
      <CartesianGrid strokeDasharray="3 0" />
      <XAxis />
      <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
      <YAxis yAxisId="right" orientation="right" stroke="#8884d8" />
      <Tooltip />
      <Legend verticalAlign="top"/>
      <Bar yAxisId="right" dataKey="kilogram" fill="#282D30" />
      <Bar yAxisId="right" dataKey="calories" fill="#E60000" />
    </BarChart>
  );
}


export default Activiter;