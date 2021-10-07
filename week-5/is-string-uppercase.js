// IS THE STRING UPPERCASE?
String.prototype.isUpperCase = function() {
    // your code here
    return this.toUpperCase() === this.toString()
  }