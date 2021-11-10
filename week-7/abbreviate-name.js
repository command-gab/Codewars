// Abbreviate a Two Word Name
function abbrevName(name){
    // PARAMETERS: takes in first name and last name. 
    // RETURN: return would be capital initials with a dot to separate.
    // EXAMPLE: Gabrielle Smallwood => G.S.
    /* PSUEDO: 
      1. create a function with a parameter (name)
      2. declare variable (firstLast) and assign it to an array.
      3. split method for the array.
      4. declare variable (firstInitial) and assign it to target the index and character
      5. use .toUpperCase() method 
    */
      
      let firstLast = name.split(' ')
      let firstInitial = (firstLast[0].charAt(0) + "." + firstLast[1].charAt(0)).toUpperCase()
     
      return firstInitial
    }