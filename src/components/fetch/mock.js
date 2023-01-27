
/**
 * 
 * @param {number} userId 
 * @returns {string}
 */
export function getAverageName(userId){
    return new Promise((resolve) => {
        resolve("User Mock")
    })
}

/**
 * 
 * @param {Number} userId 
 * @returns {Object}
 */
export function getAverageNutriment(userId){
    return new Promise((resolve) => {
        resolve({"calorieCount":22,"proteinCount":2486,"carbohydrateCount":10,"lipidCount":1960})
    })
}

/**
 * 
 * @param {Number} userId 
 * @returns {object}
 */
export function getAveragePerformance(userId){
    return new Promise((resolve) => {
        resolve({"userId":12,"kind":{"1":"cardio","2":"energy","3":"endurance","4":"strength","5":"speed","6":"intensity"},"data":[{"value":800,"kind":1},{"value":10,"kind":2},{"value":49,"kind":3},{"value":75,"kind":4},{"value":380,"kind":5},{"value":91,"kind":6}]})
    })
}

/**
 * 
 * @param {Number} userId 
 * @returns {Array}
 */
export function getAverageSessions(userId){
    return new Promise((resolve) => {
        resolve([{"day":1,"sessionLength":40},{"day":2,"sessionLength":243},{"day":3,"sessionLength":55},{"day":4,"sessionLength":10},{"day":5,"sessionLength":4},{"day":6,"sessionLength":0},{"day":7,"sessionLength":80}])
    })
}

/**
 * 
 * @param {Number} userId 
 * @returns {Array}
 */
export function getAverageActiviter(userId){
    return new Promise((resolve) => {
        resolve([{"day":"2020-07-01","kilogram":40,"calories":240},{"day":"2020-07-02","kilogram":39,"calories":270},{"day":"2020-07-03","kilogram":57,"calories":420},{"day":"2020-07-04","kilogram":71,"calories":5070},{"day":"2020-07-05","kilogram":6,"calories":16},{"day":"2020-07-06","kilogram":9,"calories":12},{"day":"2020-07-07","kilogram":169,"calories":90}])
    })
}