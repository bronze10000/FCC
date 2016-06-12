// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

// The lowest number will not always come first.

// Here are some helpful links:
// Math.max()
// Math.min()
// Array.reduce()


function sumAll(arr) {
  var total = 0;
  var min = Math.min(arr[0], arr[1]);
  var max = Math.max(arr[0], arr[1]);
  for (i=min; i<=max; i++) {
    total += i;
      }
  return total;
}


console.log (sumAll([1, 4]));

