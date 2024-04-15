function solution(k, score) {
    var answer = [];
    var arr = [];
    for(i = 0 ; i < score.length ; i++) {
        arr = score.slice(0, i + 1);
        arr.sort((a, b)=> {
            return b - a;
        })
        arr = arr.slice(0, k);
        answer[i] = arr[arr.length - 1];
    } 
    return answer;
}