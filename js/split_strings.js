// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']
//
//
//

function solution(str){
    c = str.split("");
    d = c.map(function(item,i){if(i%2 === 0){return c.slice(i,i+2).join("")}}).compact();
    var last = d.last();
    if (last.length === 1){last += "_"};
    d.pop();
    d.push(last);
};
