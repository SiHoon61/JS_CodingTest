function solution(participant, completion) {
    var answer = '';
    let index = 0;
    let set = new Set();
    let 중복 = [];

    for(i = 0 ; i < participant.length ; i++) {
        if(set.has(participant[i])){
            중복.push(participant[i]);
        }
        set.add(participant[i]);
    }
    for( i = 0 ; i < completion.length ; i++) {
        if(!set.delete(completion[i])){
            index = 중복.indexOf(completion[i]);
            중복.splice(index, 1);
        }
    }
    if(중복.length === 1){
        return 중복[0];
    }
    else{
        return [...set][0]
    }
    return 1;
}
