function solution(nums) {
    var answer = 0;
    let set = nums.length/2;
    let arr = [...new Set(nums)];
    if(set >= arr.length){
        return arr.length;
    }
    else {
        return set;
    }
}