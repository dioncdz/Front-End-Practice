/*********************************
 * // REVERSE STRING
  *********************************/

  // MY SOLUTION
function reverseString(str) {
   let newString = [];
   for(let i = 1; i <= str.length; i++) {
     newString.push(str[str.length - i]);
   }
   
   return newString.join('');
 }
 
 console.log(reverseString("hello"));


/****************************

console.log(reverseString("hello")) // should become "olleh"
console.log(reverseString("Howdy")) // should become "ydwoH"
console.log(reverseString("Greetings from Earth")) // should return "htraE morf sgniteerG"

 ***************************/


 // OTHER SOLUTIONS

 /****************************
  * 

* // SOLUTION ONE
function reverseString(str) {
  for (var reversedStr = "", i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

* // SOLUTION TWO
function reverseString(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

  *****************************/