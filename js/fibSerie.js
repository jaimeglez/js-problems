// The function 'fibonacci' should return an array of fibonacci numbers. The function takes a number as an 
// argument to decide how many no. of elements to produce. If the argument is less than or equal to 0 then
// return empty array

// Example:

// fibonacci(4); // should return [0,1,1,2]
// fibonacci(-1); // should return []
//

function fibonacci(n) {
  //return fibonacci array of n elements
  var fib  = function(m){
    return m<2 ? m : fib(m-1) + fib(m-2)
  };
  var serie = [];
  for (var i = 0; i < n; i += 1) {
      serie.push(fib(i));
  }
  return serie;
}
