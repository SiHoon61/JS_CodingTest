function solution(name, yearning, photo) {
    var answer = [];
    for( var i = 0 ; i < photo.length ; i++) {
        answer[i] = 0;
        for( var j = 0 ; j < photo[i].length ; j++) {
            for(var p = 0 ; p < name.length ; p++) {
                if(photo[i][j] === name[p]){
                    answer[i] += yearning[p];
                }
            }
        }
    }
    
    return answer;
}