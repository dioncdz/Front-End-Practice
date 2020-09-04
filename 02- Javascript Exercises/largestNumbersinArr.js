/*********************************
 * // FIND LARGEST NUMBER IN 2 DIMENSIONAL ARRAY
  *********************************/

 function largestOfFour(arr) {
   let result = [];
 
   for(let i  = 0; i < arr.length; i++) {
      result.push(Math.max(...arr[i]));
   }

   return result;
 }
 


 /****************************

console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])) // should return [27, 5, 39, 1001].

console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) // should return [9, 35, 97, 1000000]) 

console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])) // should return [25, 48, 21, -3].


 ***************************/

/**************
 * // OTHER SOLUTIONS
  

function largestOfFour(arr) {

let result = [];

   for(let i  = 0; i < arr.length; i++) {
      let newArr = [];

      for(let j = 0; j < arr[i].length; j++) {
         newArr.push(arr[i].sort((a,b) => b - a));
      }
      
      // result.push(newArr[i][0]);
      result.push(Math.max(...newArr[i]));
   }

   return result;
}

*/
