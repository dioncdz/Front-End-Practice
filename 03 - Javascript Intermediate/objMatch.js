/*************************
 * // Match an Object in an array of Objects
 *************************/

function whatIsInAName(collection, source) {
   var srcKeys = Object.keys(source);

   // filter the collection
   return collection.filter(obj => {
      for (var i = 0; i < srcKeys.length; i++) {
         if ( obj[srcKeys[i]] !== source[srcKeys[i]]) {
            return false;
         }
      }

      return true;
   });
}
/**** CODE EXPLANATION
 *  We filter through the array using .filter()
 *  Use for loop to access the value of each obj property and compare that to the source value
 *  If  false, return it otherwise, we return that array index (containing that object)
 */

/*************************
 * // OTHER SOLUTIONS
 *************************/

/****************************

* // SOLUTION ONE

function whatIsInAName(collection, source) {
   var srcKeys = Object.keys(source);

   return collection.filter(obj => {
      return srcKeys.every(key => {
         return obj.hasOwnProperty(key) && obj[key] === source[key];
      });
   });
}

* // SOLUTION TWO

function whatIsInAName(collection, source) {
   var srcKeys = Object.keys(source);

   // filter the collection
   return collection.filter(obj => {
      return srcKeys
         .map(key => {
            return obj.hasOwnProperty(key) && obj[key] === source[key];
         })
         .reduce(function(a, b) {
            return a && b;
         });
   });
}

*****************************/