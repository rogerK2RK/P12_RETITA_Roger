import React from 'react';
import styles from "./styles.module.css"
import Calories from '../../assets/icons/calories-icon.png';
import Proteines from '../../assets/icons/protein-icon.png';
import Glucides from '../../assets/icons/carbs-icon.png';
import Lipides from '../../assets/icons/fat-icon.png';

function Nutriment(props){
    return(
        <div className={styles["box-global"]}>
            <div className={styles["box-nutri"]}>
                <img className={styles["icone-nutri"]} src={Calories} alt={props.data.calorieCount}/>
                <div>
                    <h5>{props.data.calorieCount}kCal</h5>
                </div>
            </div>
            <div className={styles["box-nutri"]}>
                <img className={styles["icone-nutri"]} src={Proteines} alt={props.data.proteinCount}/>
                <div>
                    <h5>{props.data.proteinCount}kCal</h5>
                </div>
            </div>
            <div className={styles["box-nutri"]}>
                <img className={styles["icone-nutri"]} src={Glucides} alt={props.data.carbohydrateCount}/>
                <div>
                    <h5>{props.data.carbohydrateCount}kCal</h5>
                </div>
            </div>
            <div className={styles["box-nutri"]}>
                <img className={styles["icone-nutri"]} src={Lipides} alt={props.data.lipidCount}/>
                <div>
                    <h5>{props.data.lipidCount}kCal</h5>
                </div>
            </div>
        </div>
    );
}

export default Nutriment;