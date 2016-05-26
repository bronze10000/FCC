// Returns largest number in arrays
// var array = [1,2,3,4,5,6];

// console.log(Math.max.apply(Math, array));
// console.log(Math.max(1,2,3,4,5));

// Cycle through each of the sub-arrays to determine the largest value.
//    Use Math.max.apply(Math, array)
//    Push largest value in each array into 'arr'
function largestOfFour(arr) {
  // You can do this!
  var largest = 0;
  for (var i = 0; i < arr.length; i++) {
    largest = Math.max.apply(Math, arr);
    arr.push(largest);
  }
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
