// COUNT THE DIGIT
function nbDig(n, d) {
    let nbMatches = 0;

  for(let i = 0; i <= n; i++) {
    var squared = i * i;
    var squaredString = squared.toString();
    
    for(let k = 0; k <= squaredString.length; k++) {
      if(squaredString[k] === d.toString()) {
      nbMatches += 1;
      }
    } 
    
  }
  return nbMatches;
}