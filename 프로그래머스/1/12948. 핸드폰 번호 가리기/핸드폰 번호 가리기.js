function solution(phone_number) {
    var answer = [];
    for(let i = 0 ; i < phone_number.length - 4 ; i++) {
        answer.push('*');
    }
    for(let k = phone_number.length - 4 ; k < phone_number.length ; k++) {
        answer.push(phone_number[k]);
    }
    return answer.join('');
}