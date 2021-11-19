// SUM MIXED ARRAY
function sumMix(x){
    return x.map(n => Number(n)).reduce((num,str) => num+str)     
  }