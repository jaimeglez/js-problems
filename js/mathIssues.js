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
  if (parseInt(m[3]) > 0){
    return parseInt(m[1])+1;
  }else{
    return parseInt(m[1]);
  }
};

Math.floor = function(number) {
  var m = number.toString().match(/(\d+)([\.]*)([\d]|)/);
  return parseInt(m[1]);
};
