function solution(nums) {
    var answer = 0;
    let sum = 0;
    let arr = [];
    for(a = 0 ; a < nums.length - 2 ; a++) {
        for(b = a + 1 ; b < nums.length - 1 ; b++) {
            for(c = b + 1 ; c < nums.length ; c++) {
                sum = nums[a] + nums[b] + nums[c];
                for(i = 1 ; i <= Math.sqrt(sum) ; i++) {
                    if(sum % i === 0) {
                        arr.push(i);
                        if(sum / i != i) {
                            arr.push(sum / i);
                        }
                    }
                }
                if(arr.length === 2) {
                    answer++;
                }
                arr = [];
            }
        }
    }
    
    return answer;
}