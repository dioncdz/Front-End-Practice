/*****************************
 * // CONVERT EACH LETTER OF THE STRING TO ITS ALPHABET POSITION
 * // 1) You are given a string
 * // 2) Replace each letter with its position in the alphabet
 * // 3) Return a string
 * // 4) Ignore numbers/integers
 *******************************/

function alphabetPosition(text) {
   let newString = [];
   
   let str = text.toUpperCase().match(/[A-Za-z]/g);

   if(str === null) {
   return '';
   }
   
   str.forEach(el => newString.push(el.charCodeAt(0) - 64))
   return newString.join(' ');
}

/******************
 * alphabetPosition("The sunset sets at twelve o' clock.") // should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (tsring)
 */