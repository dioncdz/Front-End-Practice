/*************************
 * // Sum All Numbers in a Range
 *************************/

function sumAll(arr) {
   let a = arr[0];
   let b = arr[1];
   let sumTotal = 0;

   if(a < b) {
      for(let i = a; i <= b; i++) {
         sumTotal+=i;
      } 
   } else { 
      for (let i = b; i <= a; i++) {
         sumTotal+=i;
      }
   }
   return sumTotal;
}

/****
 * 
 * 
sumAll([1, 4]) // should return a number.

sumAll([1, 4]) // should return 10.

sumAll([4, 1]) // should return 10.

sumAll([5, 10]) // should return 45.

sumAll([10, 5]) // should return 45.

 * 
 */

/*************************
 * // OTHER SOLUTIONS
 *************************/

/****************************

* // SOLUTION ONE

function sumAll(arr) {
   var max = Math.max(arr[0], arr[1]);
   var min = Math.min(arr[0], arr[1]);
   var temp = 0;
   for (var i = min; i <= max; i++) {
      temp += i;
   }
   return temp;
}

* // SOLUTION TWO


*****************************/