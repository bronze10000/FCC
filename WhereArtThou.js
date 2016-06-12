// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the property and its value, that was passed on as the second argument.

// Here are some helpful links:

//     Global Object

//     Object.hasOwnProperty()

//     Object.keys()


function whereAreYou(collection, source) {
var arr = [];
var add = false;
for (var name in collection) {
for (var key in source) {
if (collection[name][key] === source[key]) {
add = true;
}
else {
add = false;
}
}
if (add)
arr.push(collection[name]);
} 
// Only change code above this line
return arr;
}

whereAreYou([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });


// DON'T GET IT...
