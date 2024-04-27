function solution(N, stages) {
    var answer = [];
    var 실패율 = [];
    var 실패유저 = [];
    for(k = 0 ; k <=N ; k++) {
        실패유저[k] = 0;
    }
    stages.sort((a, b)=> b - a);
    //[6,4,3,3,2,2,2,1]
    for(i =  0 ; i < stages.length ; i++) {
        실패유저[stages[i] - 1]++;
    }
    let sum = 0;
    for( i = 0 ; i < 실패유저.length - 1; i++) {
        실패율[i] = [실패유저[i]/(stages.length - sum), i + 1];
        sum += 실패유저[i];
    }
    실패율.sort((a, b) => b[0] - a[0]); 
    for(i = 0 ; i < 실패유저.length - 1; i++) {
        answer.push(실패율[i][1]);
    }

    return answer;
}