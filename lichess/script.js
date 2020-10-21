// https://lichess.org/api

//const url = "https://lichess.org/api/user/kamuimaru";
//let data = fetch(url).then(function(response) {
//    return response.json();
//})
//console.log(data);
//how to get it to work

const urlBomb = "https://lichess.org/api/user/bombeczka"

async function numberOfGames(){
    const result = await fetch(urlBomb);
    const bData = await result.json();
    let rapidGames = bData.perfs.rapid.games
    document.getElementById("number").innerHTML = rapidGames;
}

numberOfGames();