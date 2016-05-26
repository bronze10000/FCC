// FindTheLongestWordInAString.js

// Split the string by space.
// Place all words in an array.
// Compare index[0] with index[1].
// Store longer word in variable 'str'.
// Continue until end of array.

function findLongestWord(str) {
  var array = str.split(' ');
  console.log (array);
  if (array[0].length >= array.[1].length) {
    str = array[0];
  }
  else {
    str = array[1];
  }
  return str.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
