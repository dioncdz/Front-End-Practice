/*********************************
 * // CONFIRM ENDING CHARACTER MATCHES
  *********************************/

  // MY SOLUTION
function confirmEnding(str, target) {
   let newStr = []
 
   for(let i = 1; i <= target.length; i++) {
     newStr.push(str[str.length - i])
   }
 
   return (newStr.reverse().join('') === target);
 }
 
 
 
 
 /****************************

 console.log(confirmEnding("Bastian", "n")); // true
 console.log(confirmEnding("Congratulation", "on")); // true
 console.log(confirmEnding("Connor", "n")); // fase
 console.log(confirmEnding("He has to give me a new name", "name")); // true
 console.log(confirmEnding("Open sesame", "same")); // true

 ***************************/


 // OTHER SOLUTIONS

 /****************************
  * 

* // SOLUTION ONE
function confirmEnding(str, target) {

  return str.slice(str.length - target.length) === target;
}

* // SOLUTION TWO
function confirmEnding(str, target) {
  return str.slice(-target.length) === target
}


  *****************************/