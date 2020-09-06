
/*********************************
 * // SPLIT ARRAY ACCORDING TO VALUE AND GROUP
 * // Write a function that splits an array (first argument) into groups the length of size 
 * // ...(second argument) and returns them as a two-dimensional array.
  *********************************/

  // MY SOLUTION
function chunkArrayInGroups(arr, size) {

   let mainArr = []
 
   let counter =1;
 
   for(let i = 1; i <= arr.length; i++) {
 
     if(i % size === 0) {
       mainArr.push(arr.slice(i-size, size*counter));
       counter++;
     } 
 
     if (i === arr.length && arr.length % size !== 0) {
       mainArr.push(arr.slice(size*(counter-1) - arr.length))
     }
   }
      
   return mainArr;
 }
  
 /****************************

chunkArrayInGroups(["a", "b", "c", "d"], 2) // should return [["a", "b"], ["c", "d"]].

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) // should return [[0, 1, 2], [3, 4, 5]].

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) // should return [[0, 1], [2, 3], [4, 5]].

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) // should return [[0, 1, 2, 3], [4, 5]].

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) // should return [[0, 1, 2], [3, 4, 5], [6]].

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) // should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) // should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]]


 ***************************/


 // OTHER SOLUTIONS

 /****************************
  * 

* // SOLUTION ONE

function chunkArrayInGroups(arr, size) {
  var temp = [];
  var result = [];

  for (var a = 0; a < arr.length; a++) {
    if (a % size !== size - 1) temp.push(arr[a]);
    else {
      temp.push(arr[a]);
      result.push(temp);
      temp = [];
    }
  }

  if (temp.length !== 0) result.push(temp);
  return result;
}

* // SOLUTION TWO

function chunkArrayInGroups(arr, size) {
  var arr2 = [];
  for (var i = 0; i < arr.length; i += size) {
    arr2.push(arr.slice(i, i + size));
  }
  return arr2;
}

* // SOLUTION THREE

function chunkArrayInGroups(arr, size) {
  
  var newArr = [];
  var i = 0;

  while (i < arr.length) {
    newArr.push(arr.slice(i, i + size));
    i += size;
  }
  return newArr;
}

* // SOLUTION FOUR

function chunkArrayInGroups(arr, size) {
  var newArr = [];
  while (arr.length) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}

  *****************************/






 
 
 



 