// Convert the given number into a roman numeral.

// All roman numerals answers should be provided in upper-case.

// Here are some helpful links:

// Roman Numerals
// Array.splice()
// Array.indexOf()
// Array.join()

// 
function convertToRoman(num) {
  var converted = '',
    romanNumeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"],
    numberEquivalent = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  for (i=0; i<numberEquivalent.length; i++) {
    while (num >= numberEquivalent[i]) {
      converted += romanNumeral[i];
      num -= numberEquivalent[i];
    }
  }
 return converted;
}

console.log (convertToRoman(36));
