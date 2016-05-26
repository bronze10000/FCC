// FindTheLongestWordInAString.js

// Split the string by space.
// Place all words in an array.
// Compare index[0] with index[1].
// Store longer word in variable 'str'.
// Continue until end of array.

function findLongestWord(str) {
  var array = str.split(' ');
  var maxLength = 0;
  // console.log (array);
  for (var i=0; i < array.length; i++) {
  if (array[i].length > maxLength) {
    maxLength = array[i].length;
  }
}
  return maxLength;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
