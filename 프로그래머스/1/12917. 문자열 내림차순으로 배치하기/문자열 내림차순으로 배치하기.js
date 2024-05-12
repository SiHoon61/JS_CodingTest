function solution(s) {
    let arr = [...s].sort((a, b) => {
        return (b.charCodeAt() - a.charCodeAt())
    })
    return arr.join('');
}