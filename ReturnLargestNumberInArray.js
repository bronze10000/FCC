// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i] .

// Use 2 for-loops to go through both arrays.
// 'if' stmt to select largest #
// 'push' largest_num into 'arr'.

function largestOfFour(arr) {
  // You can do this!
  var results = [];
  for (var j = 0; j < arr.length; j++) {
    var largest = 0;
    for (var i = 0; i < arr[j].length; i++) {
      if (arr[j][i] > largest) {
        largest = arr[j][i];
      }
    }
    results[j] = largest;
      // console.log((arr[j].length));
  }
  console.log(results);
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
