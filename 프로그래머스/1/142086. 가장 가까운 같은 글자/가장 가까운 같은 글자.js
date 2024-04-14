function solution(s) {
    var answer = [];
    answer[0] = -1;
    var index;
    for(i = 1 ; i < s.length ; i++ ){
        index = s.lastIndexOf(s[i], i - 1);
        if(index >= 0){
            answer[i] =  i - index;
        }
        else {
            answer[i] = index;
        }
        
    }
    return answer;
}