function solution(id_list, report, k) {
    let answer = [];
    let num_list = [];
    let 신고한id = [];
    //초기화
    for(i = 0 ; i < id_list.length ; i++) {
        num_list[i] = 0;
        신고한id[i] = [];
    }
    let index = -1;
    //정지 유저 찾기
    for(i = 0 ; i < report.length ; i++) {
        report[i] = report[i].split(' ');
        index = id_list.indexOf(report[i][1]);
        신고한id[index].push(report[i][0]);
    }
    let 중복제거id = [];
    //중복제거
    for(i = 0 ; i < id_list.length ; i++) {
        중복제거id[i] = [...new Set(신고한id[i])];
        if(중복제거id[i].length >= k){
            중복제거id[i].forEach((value, 인덱스)=> {
                index = id_list.indexOf(value);
                num_list[index]++;
            })
        }
    }
    
    
    return num_list;
}