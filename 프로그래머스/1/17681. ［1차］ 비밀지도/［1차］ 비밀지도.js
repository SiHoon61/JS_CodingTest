function solution(n, arr1, arr2) {
    var answer = [];
    let str1 = [];
    let str2 = [];
    for(i = 0; i < n ; i++) {
        str1[i] = [...arr1[i].toString(2)];
        while(str1[i].length != n){
            str1[i].unshift('0');
        }
        str2[i] = [...arr2[i].toString(2)];
        while(str2[i].length != n){
            str2[i].unshift('0');
        }
        for(k = 0 ; k < n ; k++) {
            if(str1[i][k] === '1' || str2[i][k] === '1'){
                str1[i][k] = '#';
            }
            if(str1[i][k] === '0'){
                str1[i][k] = ' ';
            }
        }
        answer[i] = str1[i].join('');
    }
    return answer;
}