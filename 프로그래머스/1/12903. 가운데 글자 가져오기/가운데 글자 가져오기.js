function solution(s) {
    var answer = '';
    let num = 0;
    if(s.length%2 === 0) {
        num = s.length/2;
        answer += s[num - 1] + s[num];
    }
    else {
        num = Math.floor(s.length/2);
        answer += s[num];
    }
    return answer;
}
