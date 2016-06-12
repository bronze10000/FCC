// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

// Here are some helpful links:

    // String.prototype.charCodeAt()
        // charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
    // String.fromCharCode()
        // The static String.fromCharCode() method returns a string created by using the specified sequence of Unicode values.

function rot13(str) { // LBH QVQ VG!
  // Use for loop to iterate through 'str'. 
  var strArray = [];
  for (i=0; i < str.length; i++) {
  // Use 'str.charCodeAt()' to find character-code for i and then add 13 to it.
  // console.log (str.charAt(i));
    if (str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90) {
      strArray.push(str.charAt(i));
    } else if (str.charCodeAt(i) > 77) {
      strArray.push(String.fromCharCode(str.charCodeAt(i)-13));
    } else {
      strArray.push(String.fromCharCode(str.charCodeAt(i) + 13));
    }
    // str[i].charCodeAt(+13);
    // String.fromCharCode(i);
  }
  return strArray.join("");
}

// Change the inputs below to test
console.log (rot13("SERR PBQR PNZC"));
