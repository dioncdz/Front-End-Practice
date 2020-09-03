/*********************************
 * // CONVERT F - C
 * // CONVERT C - F
  *********************************/

const ftoc = function(fahrenheit) {
   let cel = (fahrenheit - 32) * (5/9);
   return Math.round(cel *10)/10;
 }
 
 const ctof = function(celcius) {
   let fah = (celcius * (9/5)) + 32;
   return Math.round(fah *10)/10;
 }

 /****************************

ftoc(32) // should return 0
ftoc(100) // should return 37.8
ftoc(-100) // should return -73.3

ctof(0) // should return 32
ctof(73.2) // should return 163.8
ctof(-10) // should return 14
 
 ***************************/