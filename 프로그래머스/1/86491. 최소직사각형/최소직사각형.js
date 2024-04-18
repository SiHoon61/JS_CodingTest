function solution(sizes) {
    var answer = 0;
    var box = 0;
    var 가로 = [];
    var 세로 = [];
    sizes.forEach((value, index)=> {
        if(value[0] < value[1]){
            box = value[0];
            value[0] = value[1];
            value[1] = box;
        }
        가로[index] = value[0];
        세로[index] = value[1];
    })
    var x = Math.max(...가로);
    var y = Math.max(...세로);
    return x * y;
}