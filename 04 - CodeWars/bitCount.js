/*****************************
 * // RETURN THE NUMBER OF ONES (1) IN A BINARY CONVERTED INTEGER
 * // 1) You are given a number
 * // 2) Convert it to binary format and return the number of ones
 *******************************/

var countBits = function(n) {
  return (n >>> 0).toString(2)
    .split('')
    .map(el => Number(el))
    .reduce((acc, cur) => acc + cur)
};

/******************
 * countBits(1234) === 5 // because 1234 === 10011010010
  countBits(0) === 0;
  countBits(4) === 1;
  countBits(7) === 3;
  countBits(9) === 2;
  countBits(10) === 2;
 */

/************
* // OTHER SOLUTIONS
***********/
/******
* // SOLUTION 1

countBits = n => n.toString(2).split('0').join('').length

* // SOLUTION 2

var countBits = function(n) {
  return n.toString(2).replace(/0/g,'').length;
};

* // SOLUTION 3

var countBits = function(n) {
  // Program Me
  return n.toString(2).split("").reduce((a,b) => parseInt(a)+parseInt(b),0);
};
*****/
