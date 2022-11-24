import React from 'react';
import styles from "./styles.module.css"
import Calories from '../../assets/icons/calories-icon.png';
import Proteines from '../../assets/icons/protein-icon.png';
import Glucides from '../../assets/icons/carbs-icon.png';
import Lipides from '../../assets/icons/fat-icon.png';

const data = {
    "id":18,
    "userInfos":{
        "firstName":"Cecilia",
        "lastName":"Ratorez",
        "age":34},
        "score":0.3,
        "keyData":{
            "calorieCount":2500,
            "proteinCount":90,
            "carbohydrateCount":150,
            "lipidCount":120
        }
    };

function Nutriment(){
    return(
        <div className={styles["box-global"]}>
            <div className={styles["box-nutri"]}>
                <img className={styles["icone-nutri"]} src={Calories} alt={data.keyData.calorieCount}/>
                <div>
                    <h5>{data.keyData.calorieCount}kCal</h5>
                </div>
            </div>
            <div className={styles["box-nutri"]}>
                <img className={styles["icone-nutri"]} src={Proteines} alt={data.keyData.proteinCount}/>
                <div>
                    <h5>{data.keyData.calorieCount}kCal</h5>
                </div>
            </div>
            <div className={styles["box-nutri"]}>
                <img className={styles["icone-nutri"]} src={Glucides} alt={data.keyData.carbohydrateCount}/>
                <div>
                    <h5>{data.keyData.calorieCount}kCal</h5>
                </div>
            </div>
            <div className={styles["box-nutri"]}>
                <img className={styles["icone-nutri"]} src={Lipides} alt={data.keyData.lipidCount}/>
                <div>
                    <h5>{data.keyData.calorieCount}kCal</h5>
                </div>
            </div>
        </div>
    );
}

export default Nutriment;