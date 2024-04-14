function solution(today, terms, privacies) {
    var answer = [];
    var arr_today = today.split('.');
    var num_todoy = (arr_today[0] * 12 * 28) + (arr_today[1] * 28) + (arr_today[2] * 1);
    var d_day = terms.map((list)=> {
        var split_terms = list.split(' ');
        return [split_terms[0], (num_todoy - (split_terms[1] * 28))];
    })
    var num_pri = [];
    for(i = 0 ; i < privacies.length ; i++) {
        var space_pri = privacies[i].split(' ');
        var dot_pri = space_pri[0].split('.');
        num_pri = [space_pri[1], (dot_pri[0] * 12 * 28) + (dot_pri[1] * 28) + (dot_pri[2] * 1)];
        for(j = 0 ; j < d_day.length ; j++) {
            if(num_pri[0] === d_day[j][0]){
                if(num_pri[1] <= d_day[j][1]){
                    answer.push(i+1);
                }
            }
        }
    }
    return answer;
}