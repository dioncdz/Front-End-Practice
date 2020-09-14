/*****************************
 * // RETURN THE MULTIPLICATIVE PERSISTENCE
 * // 1) You are given a number
 * // 2) Return its multiplicative persistence
 *******************************/

function persistence(num) {
  if(num >= 0 && num < 10) {
    return 0;
  }
  
  let finalNumber = num;
  let count = 0;
  while(finalNumber > 9) {
    finalNumber = finalNumber.toString().split('').map(el => Number(el)).reduce((a,b) => a *b)
    count++
  }
  return count;;
}

/******************
 * persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit

 persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2

 persistence(4) === 0 // because 4 is already a one-digit number
 */
