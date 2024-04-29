function solution(answers) {
    var answer = [[1, 0], [2, 0], [3, 0]];
    let first = [1, 2, 3, 4, 5];
    let second = [2, 1, 2, 3, 2, 4, 2, 5];
    let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let submit = [];

    for(i = 0 ; i < answers.length ; i++){
        if(first[i%5] === answers[i]){
            answer[0][1]++
        }
        if(second[i%8] === answers[i]){
           answer[1][1]++
        }
        if(third[i%10] === answers[i]){
            answer[2][1]++
        }
    }
    answer.sort((a, b)=> b[1] - a[1])
    submit.push(answer[0][0])
    if(answer[0][1] === answer[1][1]){
        submit.push(answer[1][0]);
        if(answer[1][1] === answer[2][1]){
            submit.push(answer[2][0]);
        }
    }
    return submit;
}