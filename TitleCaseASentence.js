// Capitalize each word in a sentence.

// Split the string into words and put into an array.
// Use 'charAt'[0] to 'uppercase'.
// Rest of the word can be 'lowercase'.

function titleCase(str) {
  str = str.toLowerCase();
  str = str.split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  return str.join(' ');
}

console.log(titleCase("I'm a little tea pot"));
