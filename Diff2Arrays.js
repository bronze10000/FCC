// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Here are some helpful links:

// Comparison Operators
// Array.slice()
// Array.filter()
// Array.indexOf()
// Array.concat()


// use 'arr2.indexOf(arr1[i])' 
// If return value == -1, newArr.push();

function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  for (i=0; i<arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
      newArr.push(arr2[i]);
    }
  }
    for (i=0; i<arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
      newArr.push(arr1[i]);
    }
  }
  return newArr;
}

console.log (diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));


