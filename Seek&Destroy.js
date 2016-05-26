// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

//Use: Arguments object  Array.filter()

// Using arguments object, cycle through the 1st object(array) 

function destroyer(arr) {
  // Transform arguments into an array.
  var args = Array.prototype.slice.call(arguments);
  // Remove the 1st element (array) from args and place inside var argument0
  var argument0 = args.shift();
  // Iterate through argument0 and remove repetitive arguments 
  return argument0.filter(function(element){
    return args.indexOf(element) === -1;
  });
}

console.log (destroyer([1, 2, 3, 1, 2, 3], 2, 3));
