function solution(lottos, win_nums) {
    var answer = [];
    let joker = 0;
    let count = 0;
    for(i = 0 ; i < 6 ; i++) {
        if(lottos[i] === 0){
            joker++;
        }
        if(win_nums.indexOf(lottos[i]) != -1){
            count++;
        }
    }
    let 최고 = 6 - count + 1 - joker;
    let 최저 = 6 - count + 1;
    if(최저 > 6){
        최저 = 6;
    }
    if(최고 > 6){
        최고 = 6;
    }
    return [최고, 최저];
}