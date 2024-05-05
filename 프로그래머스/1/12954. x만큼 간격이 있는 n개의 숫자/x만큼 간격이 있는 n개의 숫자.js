function solution(x, n) {
    var answer = [];
    answer.push(x);
    for(i = 0 ; i < n - 1 ; i++) {
        answer.push(x * (2 + i));
    }
    return answer;
}