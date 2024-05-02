function solution(dartResult) {
    var answer = [];
    let str = dartResult;
    let char = str.split(/[0-9]/gi).filter(a => a);
    let num = dartResult.split(/[A-Z*#]/gi).filter(a => a);

    for(i = 0 ; i < 3 ; i++) {
        let cal = 0;
        if(char[i][0] === 'D'){
            cal += (+num[i]) ** 2;
        }
        else if(char[i][0] === 'T'){
            cal += (+num[i]) ** 3;
        }
        else if(char[i][0] === 'S'){
            cal += (+num[i]) ** 1;
        }
        if(char[i][1] === '*'){
            cal *= 2;
            if(i - 1 >= 0){
                answer[i - 1] *= 2;
            }
        }
        else if(char[i][1] === '#'){
            cal *= -1;
        }
        answer[i] = cal;
    }
    return answer[0] + answer[1] + answer[2];
}



