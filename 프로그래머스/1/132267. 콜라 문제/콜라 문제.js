function solution(a, b, n) {
    var answer = 0;
    var num = 0;
    var remain = 0
    while(n >= a){
        num = Math.floor(n / a);
        remain = n % a;
        n = num * b + remain;  
        answer += num * b;
    }
    return answer;
}