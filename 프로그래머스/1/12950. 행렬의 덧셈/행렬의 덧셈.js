function solution(arr1, arr2) {
    var answer = [];
    let answer2 = [];
    for(let i = 0 ; i < arr1.length ; i++) {
        for(let p = 0 ; p < arr1[i].length ; p++) {
            answer.push(arr1[i][p] + arr2[i][p]);
        }
        answer2.push(answer);
        answer = [];
    }
    return answer2;
}