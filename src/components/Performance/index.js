import styles from "./styles.module.css"
import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";

// var kinds = {
//   "1": "cardio",
//   "2": "energy",
//   "3": "endurance",
//   "4": "strength",
//   "5": "speed",
//   "6": "intensity"
// };

// const data = [
//   {
//     value: 200,
//     kind: 1
//   },
//   {
//     value: 240,
//     kind: 2
//   },
//   {
//     value: 80,
//     kind: 3
//   },
//   {
//     value: 80,
//     kind: 4
//   },
//   {
//     value: 220,
//     kind: 5
//   },
//   {
//     value: 110,
//     kind: 6
//   }
// ];

// const data02 = data.map((obj) => {
//   return {
//     ...obj, categorie:kinds[obj.kind]
//   };
// });

export default function App(props) {

  // console.log(props.data.kind)
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
      <PolarAngleAxis dataKey="categorie" />
      <PolarRadiusAxis />
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
