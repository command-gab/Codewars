// DOUBLE CHAR
function doubleChar(str) {
    return str.split('').map(newStr => newStr + newStr).join('');
}