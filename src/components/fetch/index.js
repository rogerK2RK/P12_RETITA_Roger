/**
 * 
 * @param {string} url 
 * @returns {Object}
 */
function callApi(url){
   return fetch(url)
    .then((response) => response.json())

}

callApi()

/**
 * 
 * this function makes the call api by taking the user id as parameters for the activity graphe
 * @param {Number} userId 
 * @returns {Array} return a array which contains objects
 */
export function getAverageActiviter(userId){
    return callApi(`http://localhost:3000/user/${userId}/activity`).then((data)=>{
        return data.data.sessions;
    })
}

/**
 * 
 * this function makes the call api by taking the user id as parameters for the Sessions graphe
 * @param {Number} userId 
 * @returns {Array} return a array which contains objects
 */
export function getAverageSessions(userId){
    return callApi(`http://localhost:3000/user/${userId}/average-sessions`).then((data)=>{
        return data.data.sessions;
    })
}
/**
 * 
 * this function makes the call api by taking the user id as parameters for the Performance graphe
 * @param {Number} userId 
 * @returns {object} return an object which contains two objects
 */
export function getAveragePerformance(userId){
    return callApi(`http://localhost:3000/user/${userId}/performance`).then((data)=>{
        return data.data;
    })
}

/**
 * 
 * this function makes the call api by taking the user id as parameters for the Score graphe
 * @param {Number} userId 
 * @returns 
 */
export function getAverageScore(userId){
    return callApi(`http://localhost:3000/user/${userId}`).then((data)=>{
        return data.data;
    })
}

/**
 * 
 * this function makes the call api by taking the user id as parameters for the Nutriment graphe
 * @param {Number} userId 
 * @returns {object} return an object of nutriments the user
 */
export function getAverageNutriment(userId){
    return callApi(`http://localhost:3000/user/${userId}`).then((data)=>{
        return data.data.keyData;
    })
}

/**
 * 
 * this function makes the call api by taking the user id as parameters for the Name graphe
 * @param {Number} userId 
 * @returns {string} return the name of the user
 */
export function getAverageName(userId){
    return callApi(`http://localhost:3000/user/${userId}`).then((data)=>{
        return data.data.userInfos.firstName;
    })
}

/**
 * 
 * this function makes the call api by taking the user id as parameters for the Users graphe
 * @param {Number} userId 
 * @returns {string}
 */
export function getAverageUsers(){
    return callApi('http://localhost:3000/user').then((data)=>{
        return data.data.sessions;
    })
}

