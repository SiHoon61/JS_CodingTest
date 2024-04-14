function solution(wallpaper) {
    var sx = 50;
    var bx = 0;
    var sy = 50;
    var by = 0;
    for(i = 0 ; i < wallpaper.length ; i++) {
        for( j = 0 ; j < wallpaper[i].length ; j++) {
            if((wallpaper[i][j] === '#') && (j < sx)) {
                sx = j;
            }
            if((wallpaper[i][j] === '#') && (j >= bx)) {
                bx = j + 1;
            }
            if((wallpaper[i][j] === '#') && (i < sy)) {
                sy = i;
            }
            if((wallpaper[i][j] === '#') && (i >= by)) {
                by = i + 1;
            }
        }
    }
    var answer = [sy, sx, by, bx];
    return answer;
}

