// You're working in a number zoo, and it seems that one of the numbers has gone missing!

// Zoo workers have no idea what number is missing, and are too incompetent to figure it out, 
// so they're hiring you to do it for them.

// In case the zoo loses another number, they want your program to work regardless of how many
//     numbers the zoo has in total.

// Write the function findNumber(array) that takes an array of numbers. The numbers will be unsorted
// values between 1 and one more than the length of the array. No values will be repeated within the 
// array. Return the number that is missing.

// Examples:

// findNumber( [1,3] ) => 2

// findNumber( [2,3,4] ) => 1

// findNumber( [13,11,10,3,2,1,4,5,6,9,7,8] ) => 12
//
// return the missing number!
function findNumber(array) {
  array.sort(function(a,b){return a-b});
  for (var i=0; i < array.length; i++){if (array[i] !== i+1) return i+1}
}
