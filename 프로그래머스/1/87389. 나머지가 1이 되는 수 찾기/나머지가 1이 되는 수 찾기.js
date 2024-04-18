function solution(n) {
    var answer = 0;
    let arr = [];
    for( i = 0 ; i <= n; i++) {
        if(n % i === 1) {
            arr.push(i);
        }
    }
    arr.sort((a, b) => a - b);
    console.log(arr);
    return arr[0];
}