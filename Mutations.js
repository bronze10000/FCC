// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

// String.indexOf()

// 

function mutation(arr) {
  var element0 = arr[0].toLowerCase();
  var element1 = arr[1].toLowerCase();
  for (var i = 0; i < element1.length; i++) {
    var check = element0.indexOf(element1[i]);
    if (check < 0) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);
