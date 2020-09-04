/*********************************
 * // FIND ELEMENT THAT RETURNS TRUE TO THE FUNCTION CALL
  *********************************/

 function findElement(arr, func) {
  let num = [];
  
  for(let i = 0; i < arr.length;i++) {
    if (func(arr[i])) {
      num.push(arr[i]);
    }
  }

  return num[0];
}

 /****************************

console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })) // should return 8
console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })) // should return undefined

 ***************************/

 // OTHER SOLUTIONS

 /****************************
  * 

* // SOLUTION ONE

function findElement(arr, func) {
   return arr.find(func);
 }  
 
 * // SOLUTION TWI

  function findElement(arr, func) {
  return arr[arr.map(func).indexOf(true)];
}
 
 *****************************/