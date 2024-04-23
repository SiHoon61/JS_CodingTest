function solution(numbers) {
    var answer = [];
    let sum = 0;
    for(i = 0 ; i < numbers.length ; i++) {
        for(k = i + 1 ; k < numbers.length ; k++) {
            sum = numbers[i] + numbers[k];
            answer.push(sum);
        }
    }
    answer = [...new Set(answer)].sort((a, b) => a - b);
    return answer;
}