// WILL YOU MAKE IT?
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    //P: takes in distanceToPump, mpg and fuelLeft | 
    //R: return true if possible, false if not.
    //E:
    //P: if/else conditional, if distance (50) is less or equal to mpg (2) * fuelLeft (25)
      if(distanceToPump <= mpg * fuelLeft) {
        return true
      }else {
        return false
      }
    };