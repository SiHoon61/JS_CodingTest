function solution(n, lost, reserve) {
    var answer = 0;
    let index = 0;
    for(i = 0 ; i < lost.length ; i++) {
        index = reserve.indexOf(lost[i]);
        if(index != -1){
            reserve.splice(index, 1);
            lost[i] = -10;
        }
    }
    let next_index = 0;
    for(i = 0 ; i < reserve.length ; i++) {
        index = lost.indexOf(reserve[i] - 1);
        next_index = lost.indexOf(reserve[i] + 1)
        if((lost[next_index] - 2) != lost[index]){
            if(index != -1){
                lost.splice(index, 1);
                reserve[i] = NaN;
            }
        }
    }

    for(i = (reserve.length - 1) ; i >= 0 ; i--) {
        index = lost.indexOf(reserve[i] + 1);
        next_index = lost.indexOf(reserve[i] - 1)
        if((lost[next_index] + 2) != lost[index]){
            if(index != -1){
                lost.splice(index, 1);
                reserve[i] = NaN;
            }
        }
    }

    for(i = 0 ; i < reserve.length ; i++) {
        index = lost.indexOf(reserve[i] - 1);
        if(index != -1){
            lost.splice(index, 1);
            reserve[i] = NaN;
        }
    }

    for(i = (reserve.length - 1) ; i >= 0 ; i--) {
        index = lost.indexOf(reserve[i] + 1);
        if(index != -1){
            lost.splice(index, 1);
             reserve[i] = NaN;
        }
    }
    for(i = 0 ; i < lost.length ; i++) {
        if(lost[i] != -10){
            n--;
        }
    }
    return n;
}