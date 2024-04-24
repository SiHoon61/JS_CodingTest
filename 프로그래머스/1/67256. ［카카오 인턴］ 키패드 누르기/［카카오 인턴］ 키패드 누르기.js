function solution(numbers, hand) {
    var answer = [];
    let left = '147';
    let right = '369';
    let new_hand;
    if(hand === 'right'){
        new_hand = 'R';
    }
    else if(hand === 'left'){
        new_hand = 'L';
    }
    let 배열 = [[1, 3], [0, 0], [1, 0], [2, 0], [0, 1], [1, 1], [2, 1], [0, 2], [1, 2], [2, 2], [0, 3], [2, 3]];
    let 왼손위치 = 배열[10];
    let 오른손위치 = 배열[11];
    let 현재위치;
    let length_L;
    let length_R;
    for(i = 0 ; i < numbers.length ; i++) {
        현재위치 = 배열[numbers[i]];
        if(left.indexOf(numbers[i]) != -1){
            answer.push('L');
            왼손위치 = 현재위치;
        }
        else if(right.indexOf(numbers[i]) != -1){
            answer.push('R');
            오른손위치 = 현재위치;
        }
        else{
            console.log(numbers[i], 왼손위치, 오른손위치, 현재위치);
            length_L = Math.abs(왼손위치[0] - 현재위치[0]) + Math.abs(왼손위치[1] - 현재위치[1]);
            length_R = Math.abs(오른손위치[0] - 현재위치[0]) + Math.abs(오른손위치[1] - 현재위치[1]);
            if(length_L > length_R){
                answer.push('R');
                오른손위치 = 현재위치;
            }
            else if(length_L < length_R){
                answer.push('L');
                왼손위치 = 현재위치;
            }
            else {
                if(hand === 'right'){
                    answer.push('R');
                    오른손위치 = 현재위치;
                }
                else if(hand === 'left'){
                    answer.push('L');
                    왼손위치 = 현재위치;
                }
            }
        }
    }
    
    return answer.join('');
}