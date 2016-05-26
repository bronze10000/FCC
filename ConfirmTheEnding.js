
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  
  // 1st, convert str into an array so that it can be counted.  NO NEED!
  // 2nd, use substr() to cut out the target from str (using # of characters present).


  // Find length of 'target' w/ target.length
  var length = -(target.length);

  var str = str.substr(length);
  // How to return 'true' or 'false'?
  if (str == target) {
    return true;
  } else {
    return false;
  }
 

}

confirmEnding("Bastian", "n");
