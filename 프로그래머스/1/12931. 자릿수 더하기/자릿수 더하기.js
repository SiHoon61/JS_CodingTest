function solution(n) {
    var answer = 0;
    let arr = n.toString();
    for(i = 0 ; i < arr.length ; i++) {
        answer += +arr[i];
    }
    return answer;
}