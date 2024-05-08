function solution(s) {
    var answer = [];
    let arr = s.split(' ');
    for(i = 0 ; i < arr.length ; i++) {
        for(k = 0 ; k < arr[i].length ; k++) {
            if(k % 2 === 0 ) {
                answer.push(arr[i][k].toUpperCase());
            }
            else{
                answer.push(arr[i][k].toLowerCase());
            }
        }
        if(i != arr.length-1){
            answer.push(' ');
        }
        
    }
    return answer.join('');
}