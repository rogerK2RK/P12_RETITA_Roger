
function callApi(url){
   return fetch(url)
    .then((response) => response.json())
    // .then((data) => console.log(data));

}

export function getAverageSessions(userId){
    return callApi(`http://localhost:3000/user/${userId}/average-sessions`).then((data)=>{
        return data.data.sessions;
    })
}

export function getAverageUsers(){
    return callApi('http://localhost:3000/user').then((data)=>{
        return data.data.sessions;
    })
}

// export default getAverageSessions;
