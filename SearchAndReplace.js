// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing (before).

// Third argument is what you will be replacing the second argument with (after).

// NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"


// Here are some helpful links:

// Array.splice()
// String.replace()
// Array.join()


function myReplace(str, before, after) {
  if (before[0].toUpperCase() === before[0]) {
    after = after[0].toUpperCase() + after.slice(1).toLowerCase();
  }
  str = str.replace( before, after);
  return str;
}

console.log (myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));


// Use 'white space' to separate words and place into array.  Array.splice()
// DON'T NEED TO CONVERT THIS STRING INTO AN ARRAY!

// Check of 'before' is capitalized.  If so, capitalize 'after'.

// Use String.replace() to change 2nd arg to 3rd arg!!!

