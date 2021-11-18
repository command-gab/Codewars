// BREAK CAMELCASE
function solution(string) {
    let name = string.split('').map(letter => letter === letter.toUpperCase() ? ' '+letter : letter).join('')
    return name

}