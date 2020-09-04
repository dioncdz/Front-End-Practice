/*********************************
 * // REPEAT STRING
  *********************************/

  // MY SOLUTION
  function repeatStringNumTimes(str, num) {
   if (num < 0) {
     return '';
   }
 
   let newStr = '';
 
   for (let i = 0; i < num; i++) {
     newStr += str;
   }
 
   return newStr;
 }
 
 
 
 /****************************

 repeatStringNumTimes("*", 3) // should return "***".

repeatStringNumTimes("abc", 3) // should return "abcabcabc".

repeatStringNumTimes("abc", 4) // should return "abcabcabcabc".

repeatStringNumTimes("abc", 1) // should return "abc".

repeatStringNumTimes("*", 8) // should return "********".

// repeatStringNumTimes("abc", -2) // should return "".

The built-in repeat() method should not be used.

repeatStringNumTimes("abc", 0) // should return ""

 ***************************/


 // OTHER SOLUTIONS

 /****************************
  * 

* // SOLUTION ONE
function repeatStringNumTimes(str, num) {
  return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
}

  *****************************/