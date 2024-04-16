function solution(friends, gifts) {
    var answer = 0;
    var score = [];
    var index = 0;
    var gift_arr = [];
    var list = [];
    
    //gifts 배열로 만들기
    for(i = 0 ; i < gifts.length ; i++) {
        gift_arr[i] = gifts[i].split(' ');
    }
    
    //선물지수 초기화
    list = friends.map((value, index)=> {
        return [value, 0];
    })
    
    //선물지수
    for(i = 0 ; i < gift_arr.length ; i++) {
        index = friends.indexOf(gift_arr[i][0]);
        list[index][1]++;
        index = friends.indexOf(gift_arr[i][1]);
        list[index][1]--;
    }

    //선물지수대로 재정렬
    list.sort((a, b)=> b[1] - a[1]);
    console.log(list);
    
    //선물지수가 가장 높은애부터 몇개 받을지 검사.
    // 받아온 선물 개수가 달라지는 순간 return.
    //현재상태 [["ryan",2],["neo",1],["frodo",0],["muzi",-3]]
    
    //비교식
    var give = 0;
    var take = 0;
    for(k = 0 ; k < friends.length ; k++) {
        score[k] = 0;
        for(f = 1 ; f < list.length ; f++) {
            for(g = 0 ; g < gift_arr.length ; g++) {
                if((gift_arr[g][0] === list[0][0]) && (gift_arr[g][1] === list[f][0])){
                   //1등이 선물 준 횟수
                    give++;
                }
                else if((gift_arr[g][0] === list[f][0]) && (gift_arr[g][1] === list[0][0])){
                    //1등이 선물 받은 횟수
                    take++;
                }
            }
            if(give > take) {
                score[k]++;
            }
            else if(give === take){
                if(list[0][1] > list[f][1]){
                    score[k]++;
                }
            }
            give = 0;
            take = 0;
        }
        list.push(list.shift());
    }
    return Math.max(...score);
}

