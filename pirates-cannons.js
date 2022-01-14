// PIRATES! ARE THE CANNONS READY?
const cannonsReady = (gunners) => {
    let nayCounter = 0;
  Object.keys(gunners).forEach(function(key) {
    
    if (gunners[key] === 'nay') {
      nayCounter += 1;
    } 
  });
  
  if (nayCounter > 0) {
    return 'Shiver me timbers!';
    } else {
      return 'Fire!';
    }
};