function solution(number, limit, power) {
    var answer = 0;
    for(k = 1 ; k <= number ; k++) {
        var arr = [];
        for(i = 1 ; i <= Math.sqrt(k) ; i++) {
            if(k % i === 0){
                arr.push(i)
                if(k / i !== i) {
                    arr.push(k / i);
                }
            }
        }
        
        if(arr.length > limit) {
            answer += power;
        }
        else { 
            answer += arr.length;
        }
    }
    
    return answer;
}