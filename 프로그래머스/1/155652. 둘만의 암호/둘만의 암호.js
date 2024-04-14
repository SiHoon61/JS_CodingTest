function solution(s, skip, index) {
    var alp = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k' ,'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    var answer = [];
    var del_index;
    var new_alp;
    var s_list = [];
    for( i = 0 ; i < skip.length ; i++) {
        del_index = alp.indexOf(skip[i]);
        alp.splice(del_index, 1);
    }
    
    for( i = 0 ; i < s.length ; i++) {
        s_list[i] = alp.indexOf(s[i]);
    }
    
    for( j = 0 ; j < index ; j++) {
        new_alp = alp.shift();
        alp.push(new_alp);
    }
    
    for(i = 0 ; i < s.length ; i++) {
        answer[i] = alp[s_list[i]];
    }
    return answer.join('');
}