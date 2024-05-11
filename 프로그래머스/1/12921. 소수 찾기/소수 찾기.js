function solution(n) {
    var answer = 0;
    let arr = Array(n + 1).fill(true);
    arr[0] = false;
    arr[1] = false;
    for(let i = 2 ; i * i < n ; i++) {
        if(arr[i]){
            for(let k = i * i ; k <= n ; k += i){
                arr[k] = false;
            }
        }
    }
    
    return arr.filter(a => a).length;
}