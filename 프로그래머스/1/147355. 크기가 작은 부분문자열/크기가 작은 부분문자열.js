function solution(t, p) {
    var answer = 0;
    for(k = 0 ; k < (t.length-p.length + 1) ; k++){
        var a = t.slice(k, k + p.length);
        if(a <= p) {
            answer++;
        }
    }
    
    return answer;
}