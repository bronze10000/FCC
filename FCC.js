// Reverse a string by splitting it first into an array, reversing order of characters, and then joining the array back into a string.
var str = "";
function reverseString(str) {
  str = str.split("").reverse().join("");
  return str;
}

reverseString("hello");


// Use recursion function to return factorial.
function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}

factorialize(5);

// CHECK FOR PALINDROMES
// - need to remove all non-alphanumeric characters
// - need to lowercase all characters

function palindrome(str) {
  // Good luck!
  return true;
}



palindrome("eye");
