function solution(new_id) {
    var answer = '';
    var eng = /[a-z]/;
    var num = /[0-9]/;
    //1단계
    new_id = new_id.toLowerCase();
    
    //2단계
    var arr = [];
    arr = new_id.split('');
    for(i = 0 ; i < arr.length ; i++) {
        if((arr[i] != '-') && (arr[i] != '_') && (arr[i] != '.') && !eng.test(arr[i]) && !num.test(arr[i])){
            new_id = new_id.replace(arr[i], '');
        }
    }
    
    //3단계
    var dot = 0;
    arr = [];
    for(i = 0 ; i < new_id.length ; i++) {
        if(new_id[i] === '.'){
            dot++;
        }
        else{
            dot = 0;
        }
        if(dot >= 2){
            dot--;
        }
        else{
            arr.push(new_id[i]);
        }
    }
    
    //4단계
    if(arr[0] === '.'){
        arr.shift();
    }
    if(arr[arr.length-1] === '.'){
        arr.pop();
    }
    
    //5단계
    if(arr.length === 0) {
        arr[0] = 'a';
    }
    
    //6단계
    if(arr.length >= 16) {
        arr.splice(15);
    }
    if(arr[14] === '.'){
        arr.pop();
    }
    
    //7단계
    if(arr.length === 2){
        arr[2] = arr[1];
    }
    else if(arr.length === 1){
        arr[1] = arr[0];
        arr[2] = arr[1];
    }
    
    return arr.join('');
}