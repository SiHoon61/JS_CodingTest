function solution(left, right) {
    let answer = 0;
    let arr = [];
    for(i = left ; i <= right ; i++) {
        for(k = 1 ; k <= Math.sqrt(i) ; k++) {
            if(i % k === 0){
                arr.push(k);
                if(i / k != k) {
                    arr.push(i / k);
                }
            }
        }
        arr.sort((a, b)=> a - b);
        if(arr.length % 2 ===0){
            answer += i;
        }
        else {
            answer -= i;
        }
        arr = [];
    }
    return answer;
}