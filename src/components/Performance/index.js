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

  const kindTitle = {
    cardio: "Cardio",
    energy: "Energie",
    endurance: "Endurance",
    strength: "Force",
    speed: "Vitesse",
    intensity: "Intensité",
  };
  const formatKind = (id) => kindTitle[kinds[id]];

  return (
      <ResponsiveContainer 
        width={270}height={263} 
        className={styles["radar-performance"]}
      >
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
          <PolarGrid 
            polarRadius={[10, 20, 40, 60, 80]} 
            radialLines={false} /** enlève les rayons du graph **/
          />
          <PolarAngleAxis 
            dataKey="kind"
            tickFormatter={formatKind}
            orient="inner" 
            tickLine={false} 
            tick={{ fill: "#FFF", /*fontFamily: "Roboto",*/ fontSize: "14px" }}
          />
          <Radar
            dataKey="value"
            stroke="#E6000"
            fill="#E60000"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
  );
}
