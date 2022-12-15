
function callApi(url){
   return fetch(url)
    .then((response) => response.json())

}

export function getAverageActiviter(userId){
    return callApi(`http://localhost:3000/user/${userId}/activity`).then((data)=>{
        return data.data.sessions;
    })
}

export function getAverageSessions(userId){
    return callApi(`http://localhost:3000/user/${userId}/average-sessions`).then((data)=>{
        return data.data.sessions;
    })
}

export function getAveragePerformance(userId){
    return callApi(`http://localhost:3000/user/${userId}/performance`).then((data)=>{
        return data.data;
    })
}

export function getAverageScore(userId){
    return callApi(`http://localhost:3000/user/${userId}`).then((data)=>{
        return data.data;
    })
}

export function getAverageNutriment(userId){
    return callApi(`http://localhost:3000/user/${userId}`).then((data)=>{
        return data.data.keyData;
    })
}

export function getAverageName(userId){
    return callApi(`http://localhost:3000/user/${userId}`).then((data)=>{
        return data.data.userInfos.firstName;
    })
}

export function getAverageUsers(){
    return callApi('http://localhost:3000/user').then((data)=>{
        return data.data.sessions;
    })
}

