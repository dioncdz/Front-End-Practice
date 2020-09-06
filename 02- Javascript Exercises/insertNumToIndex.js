
/*********************************
 * // INSERT NUM TO INDEX ACC TO ITS VALUE
  *********************************/

  // MY SOLUTION
  function getIndexToIns(arr, num) {
   let index = arr.sort((a,b) => a -b).findIndex(el => num <= el);
   return index === -1 ?arr.length : index
 }
  
 /****************************

getIndexToIns([10, 20, 30, 40, 50], 35) // should return 3.

getIndexToIns([10, 20, 30, 40, 50], 30) // should return 2.

getIndexToIns([40, 60], 50) // should return 1.

getIndexToIns([3, 10, 5], 3) // should return 0.

getIndexToIns([5, 3, 20, 3], 5) // should return 2.

getIndexToIns([2, 20, 10], 19) // should return 2.

getIndexToIns([2, 5, 10], 15) // should return 3.

getIndexToIns([], 1) // should return 0.

 ***************************/


 // OTHER SOLUTIONS

 /****************************
  * 

* // SOLUTION ONE

function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort(function(a, b) {
    return a - b;
  });
  return arr.indexOf(num);
}

* // SOLUTION TWO

function getIndexToIns(arr, num) {
  return arr
    .concat(num)
    .sort((a, b) => a - b)
    .indexOf(num);
}

* // SOLUTION THREE

function getIndexToIns(arr, num) {
  return arr.filter(val => num > val).length;
}

  *****************************/




