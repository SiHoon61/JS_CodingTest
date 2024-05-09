function solution(n) {
    var answer = 0;
    let arr = [];
    for(i = 1 ; i <= Math.sqrt(n); i++) {
        if(n % i === 0) {
            answer += i;
            if(n / i != i) {
               answer += n/i;
            }
        }
    }

    return answer;
}