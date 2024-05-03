process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    let arr = [];
    for(i = 0 ; i < b ; i++) {
        arr[i] = [];
        for(k = 0 ; k < a ; k++) {
            arr[i].push('*');
        }
        console.log(arr[i].join(''));
    }
});