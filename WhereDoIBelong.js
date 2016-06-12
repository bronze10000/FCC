// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

// Array.sort()


function getIndexToIns(arr, num) {
  // Find my place in this sorted array.

  // 1st, create a var with arguments[0] NOT NECESSARY!!!
  // 2nd, sort array.
  // 3rd, using 'for loop', iterate through arguments[0] array to see if num is > i && < i+1.
  //    how to insert num into arr?  USE SPLICE()
  //      splice( insertIndex, 0, num);
  //    how to return index of arr?  ARR

  // After inserting num into arr, arr.indexOf(num) to get index!
  // arr = arr.sort();
  // for (i=0; i<arr.length; i++) {
  //   if (num > arr[i] && num < arr[i+1]) {
  //     arr.splice(arr[i], 0, num);
  //   };
  // arr = arr.push(num);
  // var arrSorted = Array.prototype.sort();
  // // return arrSorted;
  // arr.push(num).sort();
  // // arr.sort();
  // return arr;

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.push(num);
  arr.sort(function(a,b){
    return a - b;
  });
  return arr.indexOf(num);
}

getIndexToIns([40, 60], 50);

}

console.log (getIndexToIns([40, 60], 50));
