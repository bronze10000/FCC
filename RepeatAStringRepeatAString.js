// Repeat a given string (first argument) num times (second argument). Return an empty string if num is a negative number.

function repeatStringNumTimes(str, num) {
  // repeat after me
  var emptyString = '';
  while (num > 0) {
    emptyString += str;
    num --;
  }
    return emptyString;
};

repeatStringNumTimes("abc", 3);
