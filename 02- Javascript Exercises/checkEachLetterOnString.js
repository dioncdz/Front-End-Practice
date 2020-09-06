
/*********************************
 * // INSERT NUM TO INDEX ACC TO ITS VALUE
 * // Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array
  *********************************/

  // MY SOLUTION
function mutation(arr) {
  
   let newArr = arr[1].toLowerCase().split('');
   
   let truthy = []
   
   for(let i = 0; i < newArr.length; i++) {
     truthy.push(arr[0].toLowerCase().includes(newArr[i]));
   }
 
   return truthy.every(el => el === true);
 }
  
 /****************************

mutation(["hello", "hey"]) // should return false.

mutation(["hello", "Hello"]) should return true.

mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) // should return true.

mutation(["Mary", "Army"]) // should return true.

mutation(["Mary", "Aarmy"]) // should return true.

mutation(["Alien", "line"]) // should return true.

mutation(["floor", "for"]) // should return true.

mutation(["hello", "neo"]) // should return false.

mutation(["voodoo", "no"]) // should return false.

mutation(["ate", "date"] // should return false.

mutation(["Tiger", "Zebra"]) // should return false.

mutation(["Noel", "Ole"]) // should return true.



 ***************************/


 // OTHER SOLUTIONS

 /****************************
  * 

* // SOLUTION ONE

function mutation(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  for (var i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}

* // SOLUTION TWO

function mutation(arr) {
  return arr[1]
    .toLowerCase()
    .split("")
    .every(function(letter) {
      return arr[0].toLowerCase().indexOf(letter) != -1;
    });
}

  *****************************/






 
 
 