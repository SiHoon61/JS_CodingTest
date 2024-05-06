function solution(arr) {
    var answer = 0;
    let sum = arr.reduce((acc, cur) => {
        return acc + cur;
    })
    
    return sum/arr.length;
}