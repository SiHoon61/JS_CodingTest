function solution(x) {
    let str = x.toString();
    let sum = 0;
    for(let i = 0 ; i < str.length ; i++) {
        sum += +str[i]
    }
    if(x%sum === 0){
        return true;
    }
    return false;
}