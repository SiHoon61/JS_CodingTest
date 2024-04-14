function solution(keymap, targets) {
    var answer = [];
    targets.forEach((list, index)=> {
        var sum = 0;
        for(k = 0 ; k < list.length ; k++) {
            var small = 101;
            var keymapSmall = 0;
            for(i = 0 ; i < keymap.length ; i++) {
                keymapSmall = keymap[i].indexOf(list[k]);
                if((keymapSmall !== -1) && (small > keymapSmall)){
                    small = keymapSmall + 1;
                }
            }
            if((small !== 101)) {
                sum += small;
            }else {
                sum = -1;
                break;
            }
        }
        answer[index] = sum;
    })
    return answer;
}