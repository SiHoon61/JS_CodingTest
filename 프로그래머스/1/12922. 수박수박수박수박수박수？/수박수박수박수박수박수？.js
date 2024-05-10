function solution(n) {
    var answer = [];
    let num = Math.floor(n/2);
    for(i = 0 ; i < num ; i++) {
        answer.push('수박');
    }
    if(n%2 != 0) {
        answer.push('수');
    }
    return answer.join('');
}