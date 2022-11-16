
async function callApi(){
    fetch('http://localhost:3000/user/18')
    .then((response) => response.json())
    .then((data) => console.log(data));

}

export default callApi;