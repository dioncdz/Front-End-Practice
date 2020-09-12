/*************************
 * // Diff Two Arrays
 *************************/

function diffArray(arr1, arr2) {
   var newArr = [];

   arr1.toString().split(',').map(Number);
   arr2.toString().split(',').map(Number);

   for(let i in arr1) {
      if(arr2.indexOf(arr1[i]) === -1) {
      newArr.push(arr1[i])
      }
   }

   for(let i in arr2) {
      if(arr1.indexOf(arr2[i]) === -1) {
      newArr.push(arr2[i])
      }
   }

   return newArr;
   }

/****
 * 
 * 

["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] // should return ["pink wool"].

["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] // should return an array with one item.

["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] // should return ["diorite", "pink wool"].

["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] // should return an array with two items.

["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] // should return [].

["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] // should return an empty array.

[1, 2, 3, 5], [1, 2, 3, 4, 5] // should return [4].

[1, 2, 3, 5], [1, 2, 3, 4, 5] // should return an array with one item.

[1, "calf", 3, "piglet"], [1, "calf", 3, 4] // should return ["piglet", 4].

[1, "calf", 3, "piglet"], [1, "calf", 3, 4] // should return an array with two items.

[], ["snuffleupagus", "cookie monster", "elmo"] // should return ["snuffleupagus", "cookie monster", "elmo"].

[], ["snuffleupagus", "cookie monster", "elmo"] // should return an array with three items.

[1, "calf", 3, "piglet"], [7, "filly"] // should return [1, "calf", 3, "piglet", 7, "filly"].

[1, "calf", 3, "piglet"], [7, "filly"] // should return an array with six items.

 * 
 */

/*************************
 * // OTHER SOLUTIONS
 *************************/

/****************************

* // SOLUTION ONE

function diffArray(arr1, arr2) {
   return arr1
      .concat(arr2)
      .filter(item => !arr1.includes(item) || !arr2.includes(item));
   }

* // SOLUTION TWO

function diffArray(arr1, arr2) {
   return [...diff(arr1, arr2), ...diff(arr2, arr1)];

   function diff(a, b) {
      return a.filter(item => b.indexOf(item) === -1);
   }
   }
}
*****************************/