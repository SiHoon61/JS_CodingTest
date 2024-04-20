function solution(s) {
    let answer = [];
    let 영단어 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let index_숫자 = 0;
    let index_문자 = 0;
    let 배열s = s.split('');
    let 검사배열 = [];
    for(i = 0 ; i < s.length ; i++) {
        검사배열.push(s[i]);
        for(k = 0 ; k < 10 ; k++){
            index_문자 = 검사배열.join('').indexOf(영단어[k]);
            index_숫자 = 검사배열.join('').indexOf(k);
            if((index_문자 !== -1) || (index_숫자 !== -1)){
                answer.push(k);
                검사배열 = [];
                break;   
            }
        }
    }
    
    return +answer.join('');
}