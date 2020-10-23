// https://lichess.org/api

//const url = "https://lichess.org/api/user/kamuimaru";
//let data = fetch(url).then(function(response) {
//    return response.json();
//})
//console.log(data);
//how to get it to work

// const urlBomb = "https://lichess.org/api/user/bombeczka"

// async function numberOfGames(){
//     const result = await fetch(urlBomb);
//     const bData = await result.json();
//     let rapidGames = bData.perfs.rapid.games;
//     document.getElementById("lol").innerHTML = (JSON.stringify(bData));
//     document.getElementById("number").innerHTML = rapidGames;
// }

// numberOfGames();

async function evalPosition(){
    var url = new URL("https://lichess.org/api/cloud-eval"),
    params = {fen: "rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 1"}
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    const aresult = await fetch(url);
    const adata = await aresult.json();


    
        document.getElementById("lol").innerHTML = adata.pvs[0].cp;
}
evalPosition();