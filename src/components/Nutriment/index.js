import React from 'react';

import Calorie from '../../assets/icons/calories-icon.png';

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
        <div>
            <div className='dspl-flx'>
                <img className='icone-nutri' src={Calorie} alt={data.keyData.calorieCount}/>
                <div>
                    <h5>{data.keyData.calorieCount}kCal</h5>
                </div>
            </div>
        </div>
    );
}

export default Nutriment;