function solution(X, Y) {
    let answer = [];
    let x숫자 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let y숫자 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let val = 0;
    for(i = 0 ; i < X.length ; i++) {
        val = +X[i];
        x숫자[val]++;
    }
    for(i = 0 ; i < Y.length ; i++) {
        val = +Y[i];
        y숫자[val]++;
    }
    for(i = 9 ; i >= 0 ; i--) {
        while((x숫자[i] !== 0) && (y숫자[i] !== 0)) {
            x숫자[i]--;
            y숫자[i]--;
            answer.push(i);
        }
    }
    if(answer.length === 0) {
        return '-1';
    }
    if(answer[0] === 0) {
        return '0';
    }
    return answer.join('');
}