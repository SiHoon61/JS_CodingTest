function solution(players, callings) {
    var i;
    var callIndex, frontCallIndex;
    var item;
    var obj = {};;
    players.forEach((e, index)=> {
        obj[e] = (obj[e] |0) + index
    })
    
    for(i = 0; i < callings.length ; i++) {
        callIndex = obj[callings[i]];
        frontCallIndex = callIndex - 1;
        item = players[callIndex];
        players[callIndex] = players[frontCallIndex];
        players[frontCallIndex] = item;
        obj[players[callIndex]] = callIndex;
        obj[players[frontCallIndex]] = frontCallIndex;
    }
    var answer = players;
    return answer;
}