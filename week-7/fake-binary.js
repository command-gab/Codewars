// FAKE BINARY
function fakeBin(x){
    let strArray = x.split('')
    let numArray = strArray.map(item => Number(item))
    let binary = []
    
    for(let i = 0; i < numArray.length; i++) {
      if(numArray[i] < 5) {
        binary.push('0')
      }else if(numArray[i] >= 5) {
        binary.push('1')
      }
    }
    return binary.join('')
  }

// https://www.codewars.com/kata/57eae65a4321032ce000002d
