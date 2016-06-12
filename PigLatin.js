// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.

// Here are some helpful links:

// Array.indexOf()
// Array.push()
// Array.join()
// String.substr()
// String.split()


function translatePigLatin(str) {
  var str3 = str.split("");
  console.log (str3);
  var str2;
  var consonant = [];
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  for (var i=0; i<str3.length; i++) {
          console.log(i);
          console.log(str3[i]);
          var n = vowels.indexOf(str3[i]);
          console.log(n);
    if (n === -1) {
      console.log('q');
      console.log(str3[i]);
      consonant.push(str3[i]);
      console.log (consonant);
      str3.shift();
      str3.push(consonant[i]);
      console.log(str3);
      str3.push("ay");
      str2= str3.join("");
    }  
   else {
    str3.push("way");
    }
  }
      return str2;
}

console.log (translatePigLatin("cconsonant"));
 // to work w/ array instead of string
// if str starts with a vowel or consonant...
// 
// var consonant = []; for storing 1st consonants of word
// for (i=0; i<str.length; i++) {if str[i] != aeiou, then consonant.push(str[i]);
//    str.join(consonant);
//    str.push("ay");}
//    else {str.push("way")}
