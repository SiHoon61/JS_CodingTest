function solution(s) {
    var answer = 1;
    if(s[0] === '+'){
        [...s].shift();
    }
    else if(s[0] === '-'){
        [...s].shift();
    }
    console.log(s);
    
    return (+s);
}