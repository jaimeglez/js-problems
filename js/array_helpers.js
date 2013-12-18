// In this kata we want to test, if you are able to extend the functionality of standard prototypes. Extend the Array prototype in order to support the methods square(), cube(), average(), sum(), even() and odd().

// Explanation:

// square() must return a copy of the array, containing all values squared, the original array must not be changed
// cube() must return a copy of the array, containing all values cubed, the original array must not be changed
// average() must return the average of all array values, average() on an empty array must return NaN
// sum() must return the sum of all array values
// even() must return an array of all even numbers, the original array must not be changed
// odd() must return an array of all odd numbers, the original array must not be changed


// Examples:

// var numbers = [1, 2, 3, 4, 5];

// numbers.square(); // must return [1, 4, 9, 16, 25]
// numbers.cube(); // must return [1, 8, 27, 64, 125]
// numbers.average(); // must return 3
// numbers.sum(); // must return 15
// numbers.even(); // must return [2, 4]
// numbers.odd(); // must return [1, 3, 5]


// SOLUTION:

// TODO
Array.prototype.square = function(){return this.map(function(item){return item*item;})};
Array.prototype.cube   = function(){return this.map(function(item){return item*item*item;})};
Array.prototype.sum = function(){
  var sum = 0;
  this.filter(function(item){sum+=item;})
  return sum;
};
Array.prototype.average = function(){return this.sum() / this.length;};
Array.prototype.even = function(){return this.filter(function(item){if (item%2 === 0){return item;}});};
Array.prototype.odd  = function(){return this.filter(function(item){if (item%2 !== 0){return item;}});};
