function solution(d, budget) {
    var answer = 0;
    d.sort((a, b) => a - b)
    let sum = 0;
    for(i = 0 ; i < d.length ; i++) {
        answer += d[i];
        if(answer > budget){
            answer -= d[i];
            break;
        }
        else if(answer === budget){
            sum++;
            break;
        } 
        sum++;
    }
    return sum;
}