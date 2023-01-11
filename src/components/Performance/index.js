import styles from "./styles.module.css"
import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer
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
    <ResponsiveContainer width={270}height={263} className={styles["radar-performance"]}>
      {/* <h3>Salut</h3> */}
      <RadarChart
          startAngle={-150}
          endAngle={210}
          margin={{ top: 5, right: 35, bottom: 5, left: 35 }}
          cx={129}
          cy={131}
          outerRadius={79}
          width={258}
          height={263}
          data={data02}
          className={styles["bkgrd"]}
      >
        <PolarGrid polarRadius={[10, 20, 40, 60, 80]} radialLines={false} />
        <PolarAngleAxis orient="inner" dataKey="categorie" tickLine={false} />
        <PolarRadiusAxis hide tick={{ fill: 'none' }} stroke="none" tickCount={5} tickLine={{ stroke: 'none' }} axisLine={false} />
        <Radar
          name="Mike"
          dataKey="value"
          stroke="#FF0000"
          fill="#FF0000"
          fillOpacity={0.7}
        />
      </RadarChart>
    </ResponsiveContainer>
    
  );
}
