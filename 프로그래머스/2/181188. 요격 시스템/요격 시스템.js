function solution(targets) {
    var answer = 0;
    let arr = [];
    let change;
    targets.sort((a, b) => a[0] - b[0]);
    while(1){
        for(p = 1; p < targets.length ; p++) {
            if(targets[0][1] > targets[p][0] ){
                arr.push(p);
                if(targets[0][1] > targets[p][1]){
                    change = targets[p];
                    targets[p] = targets[0];
                    targets[0] = change;
                }
            }
            else{
                targets.splice(0, arr.length + 1);
                answer++;
                arr = [];
                break;
            }
            if(p === targets.length - 1) {
                targets.splice(0, arr.length + 1);
                answer++;
                arr = [];
            }
        }
        if(targets.length === 0) {
            break;
        }
        else if(targets.length === 1){
            answer++;
            break;
        }
    }
   
    return answer;
}