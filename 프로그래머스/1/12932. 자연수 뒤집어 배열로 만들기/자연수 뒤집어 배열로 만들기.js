function solution(n) {
    var answer = [];
    let str = n.toString();
    for(i = str.length - 1; i >= 0 ; i--) {
        answer.push(+str[i]);
    }
    return answer;
}