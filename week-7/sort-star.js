// SORT AND STAR
function twoSort(s) {
    return s.sort().shift().split('').join('***')
  }
  
  //PARAMETERS: start with string, sort alpha - Can this also include numbers? Can it be null or undefined?
  /* ASCII - all char, nums, letters
  need first value - has to be a string, and between each letter has "***" */
  // RETURN: a string, between each letter ***
  // EXAMPLE: ["orange", "apple", "banana"] - "apple" - "a***p***p***l***e"
  // PSEUDO:
  /* 1. sort so it can be alphabetical
    2. find first string
  3. return the string with *** in letter, split my string, then rejoin my string to include the *** */