function solution(a, b) {
    var answer = 0;
    for(i = 0 ; i <= Math.abs(a - b) ; i++) {
        answer += (a - b > 0 ? a - i : a + i);
    }
    return answer;
}