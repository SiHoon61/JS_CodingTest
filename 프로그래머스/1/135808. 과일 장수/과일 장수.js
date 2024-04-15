function solution(k, m, score) {
    var answer = 0;
    score.sort((a, b)=> b - a);
    var count = 0;
    for(i = 0 ; i < score.length ; i++) {
        if((i + 1) % m === 0) {
            answer += m * score[i];
        }
    }
    return answer;
}