// https://lichess.org/api

const url = "https://lichess.org/api/user/kamuimaru";
let data = fetch(url).then(function(response) {
    return response.json();
})
console.log(data);
//how to get it to work