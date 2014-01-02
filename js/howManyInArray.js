// The numberOfOccurrences function must return the number of occurrences of an element in an array.

// var arr = [0,1,2,2,3];
// arr.numberOfOccurrences(0) === 1;
// arr.numberOfOccurrences(4) === 0;
// arr.numberOfOccurrences(2) === 2;
// arr.numberOfOccurrences("a") === 0;


Array.prototype.numberOfOccurrences = function(num) {
  var oc = 0;
  this.map(function(item){if(item===num){oc+=1;}});
  return oc;
}
