function solution(s) {
    let num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    if(s.length === 4 || s.length === 6){
        for(i = 0 ; i < s.length ; i++) {
            if(num.indexOf(s[i]) === -1) {
            return false
            }
        }
        return true;
    }
    else {
        return false;
    }
}