/*********************************
 * // SLICE AND SPLICE
 * 
 * // Insert arr1 inside arr2 from index n of arr2
 * 
 * // Condition, arr1 and arr2 will remain the same
 * 
  *********************************/

 function frankenSplice(arr1, arr2, n) {
   //  if slice has no argument, it will return a copy of the array

   let newArr = arr2.slice()
 
   newArr.splice(n,0,...arr1)
   
   return newArr;
 }
 
  /****************************
 
frankenSplice([1, 2, 3], [4, 5], 1) // should return [4, 1, 2, 3, 5].

frankenSplice([1, 2], ["a", "b"], 1) // should return ["a", 1, 2, "b"].

frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) // should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].

All elements from the first array should be added to the second array in their original order.

The first array should remain the same after the function runs.

The second array should remain the same after the function runs.
  ***************************/
 
  // OTHER SOLUTIONS
 
  /****************************
   * 
 
 * // SOLUTION ONE
 
function frankenSplice(arr1, arr2, n) {
  
  let localArray = arr2.slice();

  for (let i = 0; i < arr1.length; i++) {
    localArray.splice(n, 0, arr1[i]);
    n++;
  }
  return localArray;
}
  
  *****************************/