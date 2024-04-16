function solution(babbling) {
    var answer = 0;
    var str = [];
    var before = 0;
    for(i = 0 ; i < babbling.length ; i++) {
        var before = 0;
        while(babbling[i].length >= 2){
            if(babbling[i].slice(0, 3) === 'aya' && before !== 1){
                before = 1;
                babbling[i] = babbling[i].substr(3);
                console.log('1', babbling[i]);
            }
            else if(babbling[i].slice(0, 2) === 'ye' && before !== 2){
                before = 2;
                babbling[i] = babbling[i].substr(2);
                console.log('2', babbling[i]);
            }
            else if(babbling[i].slice(0, 3) === 'woo' && before !== 3){
                before = 3;
                babbling[i] = babbling[i].substr(3);
                console.log('3', babbling[i]);
            }
            else if(babbling[i].slice(0, 2) === 'ma' && before !== 4){
                before = 4;
                babbling[i] = babbling[i].substr(2);
                console.log('4', babbling[i]);
            }
            else{
                break;
            }
        }
        if(babbling[i].length === 0) {
            answer++;
        }
    }
    return answer;
}