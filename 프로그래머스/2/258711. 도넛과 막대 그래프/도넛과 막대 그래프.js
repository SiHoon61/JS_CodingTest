function solution(edges) { 
    let 받음 = [];
    let 보냄 = [];
    let arr = [];
    for(i = 0 ; i < edges.length ; i++){
        if(보냄[edges[i][0]] === undefined){
            보냄[edges[i][0]] = [edges[i][1]];
        }
        else {
            보냄[edges[i][0]].push(edges[i][1]);
        }
        if(받음[edges[i][1]] === undefined){
            받음[edges[i][1]] = [edges[i][0]];
        }
        else {
            받음[edges[i][1]].push(edges[i][0]);
        }
    }
    console.log('받음', 받음);
    console.log('보냄', 보냄);

    let max = 0;
    let 정점 = -1;
    let 도넛 = 0;
    let 막대 = 0;
    let 팔자 = 0;
    for(i = 1 ; i < 받음.length ; i++) {
        if(받음[i] === undefined && 보냄[i] != undefined) {
            if(max < 보냄[i].length){
                max = 보냄[i].length;
                정점 = i;
            }
        }
        
        //도넛1개짜리 개수
        if(보냄[i] != undefined){
            if(보냄[i][0] === i){
                도넛++;
            }   
        }
        
        //막대그래프 개수
        if(보냄[i] === undefined){
            if(받음[i] != undefined){
                막대++;
            }
        }
    }
    let count = 0;
    for(i = 1 ; i < 받음.length ; i++){
        //8자
        if(받음[i] != undefined){
            count = 받음[i].length;
            if(받음[i].indexOf(정점) != -1){
                count--;
            }
            if(count === 2){
                팔자++;
            }
        }
    }
    if(보냄[정점] != undefined){
        console.log(보냄[정점].length);
         if(보냄[정점].length != (도넛 + 막대 + 팔자)){
            도넛 += 보냄[정점].length - (도넛 + 막대 + 팔자);
        }
    }
   
    
    return [정점, 도넛, 막대, 팔자];
}
