function solution(number) {
    var answer = 0;
    var sum = 0;
    for(i = 0 ; i < number.length; i++){
        for(k = i + 1 ; k < number.length; k++) {
            for(p = k + 1 ; p < number.length; p++) {
                sum = number[i] + number[k] + number[p]
                if(sum === 0) {
                    answer++;
                } 
            }
        }
    }
    return answer;
}