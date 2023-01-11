import styles from "./styles.module.css"
import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";



export default function Performance(props) {
  let kinds = props.data.kind;
  let data01 = props.data.data;
  console.log(kinds)

  const data02 = data01.map((obj) => {
    return {
      ...obj, categorie:kinds[obj.kind]
    };
  });

  return (
    <RadarChart
        cx={129}
        cy={131}
        outerRadius={79}
        width={258}
        height={263}
        data={data02}
        className={styles["bkgrd"]}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="categorie"  />
      <PolarRadiusAxis hide tick={{ fill: 'none' }} stroke="none" tickCount={5} tickLine={{ stroke: 'none' }} />
      <Radar
        name="Mike"
        dataKey="value"
        stroke="##FF0000"
        fill="#FF0000"
        fillOpacity={0.6}
      />
    </RadarChart>
  );
}
