function solution(survey, choices) {
    let answer = [];
    //R T C F J M A N
    let 모든유형 = ['R', 'T', 'C', 'F', 'J', 'M', 'A', 'N'];
    let 유형지수 = [0, 0, 0, 0, 0, 0, 0, 0];
    var num = 0;
    survey.forEach((유형, index)=> {
        if(choices[index] === 1) {
            num = 모든유형.indexOf(유형[0]); 
            유형지수[num] += 3;
        }
        else if(choices[index] === 2) {
            num = 모든유형.indexOf(유형[0]); 
            유형지수[num] += 2;
        }
        else if(choices[index] === 3) {
            num = 모든유형.indexOf(유형[0]); 
            유형지수[num] += 1;
        }
        
        else if(choices[index] === 5) {
            num = 모든유형.indexOf(유형[1]); 
            유형지수[num] += 1;
        }
        else if(choices[index] === 6) {
            num = 모든유형.indexOf(유형[1]); 
            유형지수[num] += 2;
        }
        else if(choices[index] === 7) {
            num = 모든유형.indexOf(유형[1]); 
            유형지수[num] += 3;
        }
    })
    for(i = 0 ; i < 8 ; i += 2) {
        if(유형지수[i] > 유형지수[i + 1]){
            answer.push(모든유형[i]);
        }
        else if(유형지수[i] < 유형지수[i + 1]){
            answer.push(모든유형[i + 1]);
        }
        else {
            answer.push(모든유형[i]);
        }
    }
    return answer.join('');
}