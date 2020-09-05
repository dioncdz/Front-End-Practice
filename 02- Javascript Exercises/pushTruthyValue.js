/*********************************
 * // FALSY BOUNCER
 * 
 * // Remove all falsy values in the array 
  *********************************/

 function bouncer(arr) {
   let newArr = []  
   
   arr.map(el => {
     if(Boolean(el)) {
       newArr.push(el)
     }
   })
   
     return newArr;
   }
 
  /****************************
 
console.log(bouncer([7, "ate", "", false, 9])) // should return [7, "ate", 9].

console.log(bouncer(["a", "b", "c"])) // should return ["a", "b", "c"].

console.log(bouncer([false, null, 0, NaN, undefined, ""])) // should return [].

console.log(bouncer([null, NaN, 1, 2, undefined])) // should return [1, 2]

  ***************************/
 
  // OTHER SOLUTIONS
 
  /****************************
   * 
 
 * // SOLUTION ONE
 
function bouncer(arr) {
  return arr.filter(Boolean);
}
  
  *****************************/