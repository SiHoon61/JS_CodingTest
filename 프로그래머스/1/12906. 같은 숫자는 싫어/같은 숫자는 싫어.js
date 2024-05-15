function solution(arr){
    let answer = [];
    let before = -1;
    for(i = 0 ; i < arr.length ; i++) {
        if(arr[i] != before) {
            answer.push(arr[i]);
        }
        before = arr[i];
    }
    return answer;
}