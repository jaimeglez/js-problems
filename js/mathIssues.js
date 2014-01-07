// Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, 
// that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, 
// null, NaN, negative numbers, strings and so on.

// Here is a list of functions, we need:

// Math.round()
// Math.ceil()
// Math.floor()


Math.round = function(number) {
  var m = number.toString().match(/(\d+)([\.]*)([\d]|)/);
  if (parseInt(m[3]) && (parseInt(m[3])> 4)){
    return (parseInt(m[1])+1);}
  else{
    return parseInt(m[1]);
  }
};

Math.ceil = function(number) {
  var m = number.toString().match(/(\d+)([\.]*)([\d]*|)/);
  if (parseInt(m[3])){
    return parseInt(m[1])+1;
  }else{
    return parseInt(m[1]);
  }
};

Math.floor = function(number) {
  var m = number.toString().match(/(\d+)([\.]*)([\d]|)/);
  return parseInt(m[1]);
};

//best solution
Math.round = function(number) {
  return (number+0.5|0)
};

Math.ceil = function(number) {
  return ((number|0) < number) ? (number|0)+1 : number|0
};

Math.floor = function(number) {
  return number|0; // This line do a comparison(addition on binary) which truncate the result by adding 0
};
