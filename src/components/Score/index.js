import styles from "./styles.module.css"
import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const tem1 = [{
  value:30
},{
  value:70
}];

const COLORS = ["#E60000", "#fff",];

export default function App() {
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