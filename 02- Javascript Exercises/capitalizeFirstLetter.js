

 /*********************************
 * // FIND ELEMENT THAT RETURNS TRUE TO THE FUNCTION CALL
  *********************************/

 function titleCase(str) {
   return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
 }
 
  /****************************
 
 console.log(titleCase("I'm a little tea pot")); // I'm A Little Tea Pot
 console.log(titleCase("sHoRt AnD sToUt")); // Short And Stout
 console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")); // Here Is My Handle Here Is My Spout
  ***************************/
 
  // OTHER SOLUTIONS
 
  /****************************
   * 
 
 * // SOLUTION ONE
 
function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
}

  
  *****************************/