  
/*************************
 * // Find the missing letter, else return undefined
 *************************/
 
function fearNotLetter(str) {
  let newStr = str.split('').map(el => el.charCodeAt(0));
  let iterator = newStr.keys()

  for(let key of iterator) {
    if (newStr[key + 1] - newStr[key] > 1) {
      console.log(String.fromCharCode(str.charCodeAt(key)+1))
      return String.fromCharCode(str.charCodeAt(key)+1)
    }
  }
  
}

/****
 * 
 * 
 
fearNotLetter("abce") // should return "d".

fearNotLetter("abcdefghjklmno") // should return "i".

fearNotLetter("stvwx") // should return "u".

fearNotLetter("bcdf") // should return "e".

fearNotLetter("abcdefghijklmnopqrstuvwxyz") // should return undefined.

 * 
 */

/*************************
 * // OTHER SOLUTIONS
 *************************/

/****************************
* // SOLUTION ONE
function fearNotLetter(str) {
  for (var i = 0; i < str.length; i++) {
    /* code of current character */
    var code = str.charCodeAt(i);

    /* if code of current character is not equal to first character + no of iteration
        hence character has been escaped */
    if (code !== str.charCodeAt(0) + i) {
      /* if current character has escaped one character find previous char and return */
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
}

* // SOLUTION TWO
function fearNotLetter(str) {
  var compare = str.charCodeAt(0),
    missing;

  str.split("").map(function(letter, index) {
    if (str.charCodeAt(index) == compare) {
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });

  return missing;
}

* // SOLUTION THREE
function fearNotLetter(str) {
  for (let i = 1; i < str.length; ++i) {
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
}
*****************************/
