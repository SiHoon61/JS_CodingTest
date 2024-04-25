function solution(board, moves) {
    var answer = 0;
    let 바구니 = [];
    for(i = 0 ; i < moves.length ; i++) {
        for(k = 0 ; k < board.length ; k++) {
            if(board[k][moves[i] - 1] != 0) {
                바구니.push(board[k][moves[i] - 1]);
                board[k][moves[i] - 1] = 0;
                break;
            }  
        }
    }
    let j = 0
    while(바구니.length > j) {
        if(바구니[j] === 바구니[j + 1]){
            answer += 2;
            바구니.splice(j, 2)
            j = 0;
        }
        else {
            j++;
        }
    }
   
    return answer;
}


