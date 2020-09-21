// Write a function called zipList that accepts two lists of equal length and returns the result
// of alternatingly taking elements.
//     For example: given the two lists [‘a’, ‘b’, ‘c’] and [1, 2, 3],
//     the function should return [‘a’, 1, ‘b’, 2, ‘c’, 3]. zipList should not use Underscore.
//     Now write a function called zipListTheSimpleWay that does the same thing using Underscore.

function zipList(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length || i < arr2.length; i++) {
    if (i < arr1.length) {
      result.push(arr1[i]);
    }
    if (i < arr2.length) {
      result.push(arr2[i]);
    }
  }
  return result;
}
function zipListTheSimpleWay(arr1, arr2) {
  return _.flatten(_.zip(arr1, arr2));
}
const arr1 = [1, 2, 3];
const arr2 = ['a', 'b', 'c'];
console.log(zipList(arr1, arr2));
console.log(zipListTheSimpleWay(arr1, arr2));
