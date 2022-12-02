
function callApi(url){
   return fetch(url)
    .then((response) => response.json())
    // .then((data) => console.log(data));

}

function getAverageSessions(){
    return callApi('http://localhost:3000/user/18/average-sessions').then((data)=>{
        return data.data.sessions;
    })
}

export default getAverageSessions;
