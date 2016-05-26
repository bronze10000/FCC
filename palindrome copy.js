// palindrome.js
// \w is shorthand for the character class [A-Za-z0-9_] and \W is the inverse of that set, i.e. [^\w].

function palindrome(str) {
  // Good luck!
  return str.replace(/[\W_]/g, '').toLowerCase() === str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
}

console.log(palindrome("eye"));
