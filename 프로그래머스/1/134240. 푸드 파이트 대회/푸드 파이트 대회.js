function solution(food) {
    var count = [];
    var num = 0;
    for(i = 1 ; i < food.length ; i++) {
        num = food[i]/2;
        for( k = 1 ; k <= num ; k++) {
            count.push(i);
        }
    }
    count = [...count, 0 , ...count.reverse()];
    return count.join('');
}