function solution(s, n) {
    var answer = [];
    let code;
    for(i = 0 ; i < s.length ; i++) {
        code = s[i].charCodeAt();
        if(code === 32){
            answer.push(' ');
        }
        else {
            if(((code <= 90) && (code + n > 90)) || ((code + n > 122))){
                code = code - 26
            }
            answer.push(String.fromCharCode(code + n));
        }
    }
    return answer.join('');
}

