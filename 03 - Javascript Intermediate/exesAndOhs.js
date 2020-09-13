/*****************************
 * // Check to see if a string has the same amount of 'x's and 'o's
 * // 1) You are given a string
 * // 2) Check amount of 'x' and 'o' in the string (case Insensitive)
 * // 3) If amount is equal return true, otherwise false

 *******************************/

function XO(str) {
   //code here
   let x = 0;
   let o = 0;

   str
      .toUpperCase()
      .split("")
      .forEach((el) => {
         if (el === "X") {
         x++;
         } else if (el === "O") {
         o++;
         }
      });

   return x === o ? true : false;
}


/*
   console.log(XO("xo")); // true
   console.log(XO("xxOo")); // true
   console.log(XO("xxxm")); // false
   console.log(XO("Oo")); // false
   console.log(XO("ooom")); // false
*/ 

/*****************************
 * // OTHER SOLUTIONS
 ****************************/
/***
 * //SOLUTION ONE
 * 
function XO(str) {
   let x = str.match(/x/gi);
   let o = str.match(/o/gi);
   return (x && x.length) === (o && o.length);
}

 * //SOLUTION TWO
 * 
function XO(str) {
   var a = str.replace(/x/gi, ''),
      b = str.replace(/o/gi, '');
   return a.length === b.length;
}

 * //SOLUTION THREE
 * 
const XO = str => {
   str = str.toLowerCase().split('');
   return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}

 */

