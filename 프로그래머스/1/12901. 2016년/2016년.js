function solution(a, b) {
    let month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let week = ['FRI','SAT','SUN','MON','TUE','WED','THU']
    let sum = b - 1;
    for(i = 0 ; i < a - 1; i++) {
        sum += month[i] ;
    }
    return week[sum%7];
}