// FAST FIBONACCI
function fib(num) {
    const arr = [0, 1];
    
    for (let i=0; i < num; i++) {
      arr.push(arr[i] + arr [i+1])
    }
    return arr[arr.length - 2]
  }