// WILL YOU MAKE IT?
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
      if(distanceToPump <= mpg * fuelLeft) {
        return true
      }else {
        return false
      }
    };
