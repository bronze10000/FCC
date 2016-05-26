function palindrome(str) {
 // Good luck!
 str=str.replace(/[\W_]/g);
 var rev = str.split('').reverse();
 for(var i=0; i < str.length; i++){
   for(var x=0; x < rev.length; x++){
     if (str[i]===rev[x]){
       return rev;
     }
   }
 }
}



console.log(palindrome("ahapapsdf;ljsdf"));
