function solution(n, m, section) {
    var max = 0;
    var answer = 0;
    section.forEach((list)=> {
        if(list > max){
            answer++;
            max = m + list - 1;
        }
    })
   
    return answer;
}
