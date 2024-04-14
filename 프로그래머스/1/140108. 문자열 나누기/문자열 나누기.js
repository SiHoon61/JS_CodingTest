function solution(s) {
    var separate = [...s]
    var count = 0;
    while(1) {
        var same = 1;
        var wrong = 0;
        var x = separate[0];
        if(separate.length === 0) {
            return count;
        }
        else if(separate.length === 1) {
            count++;
            return count;
        }
        for(i = 1 ; i < separate.length ; i++) {
            if(separate[i] === x) {
                same++;
            }else {
                wrong++;
            }
            if(same === wrong) {
                separate.splice(0, i + 1);
                count++;
                break;
            }
            if(i === separate.length - 1) {
                count++;
                return count;
            }
        }
    }
}