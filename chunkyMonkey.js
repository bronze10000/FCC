// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  // Break it up.
  var temp = [], i = 0;
  while (i < arr.length) {
  // to slice them into arrays
  temp.push(arr.slice(i, i+= size));
  }
  return temp;
}

console.log (chunkArrayInGroups(["a", "b", "c", "d"], 2));
