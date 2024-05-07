function solution(arr) {
    let index = arr.indexOf(Math.min(...arr));
    arr.splice(index, 1);
    if(arr.length === 0) {
        return [-1];
    }
    return arr;
}