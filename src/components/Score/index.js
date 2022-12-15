import styles from "./styles.module.css"
import React from "react";
import { PieChart, Pie, Cell } from "recharts";



export default function App(props) {
  let score;

  if(props.data.id === 12){
    score = props.data.todayScore;
  } else if(props.data.id === 18){
    score = props.data.score;
  }

  const tem1 = [{
    value:score*100
  },{
    value:100-(score*100)
  }];
  
  const COLORS = ["#E60000", "#fff",];
  return (
    <PieChart width={258} height={263} className={styles["bkgrnd"]}>
      
      <Pie
        cornerRadius={20}
        data={tem1}
        dataKey="value"
        cx={129}
        cy={131}
        startAngle={90}
        endAngle={450}
        innerRadius={70}
        outerRadius={90}
        fill="#82ca9d"
        label
      >
        {tem1.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
      </Pie>
      
    </PieChart>
  );
}