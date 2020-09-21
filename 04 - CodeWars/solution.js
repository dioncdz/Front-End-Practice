function solution(str){
  
  let arr = str.split('')    
  let newArr = []
  for (let i = 0; i < Math.ceil(str.length/2); i++) {
    let newStr = arr.splice(0,2);
    
    if(newStr.length === 2) {
      newArr.push(newStr.join(''))
    } else if (newStr.length < 2){
      newArr.push(newStr.concat('_').join(''))
    }
  }
  
  return newArr;
}

//OTHER SOLUTIONS

function solution(str){
  var i = 0;
  var result = new Array();
  if (str.length % 2 !== 0) {
    str = str + '_';
  }
  while (i < str.length) {
      result.push(str[i] + str[i+1]);
      i += 2;
    }
  return result;
}

function solution(s){
   return (s+"_").match(/.{2}/g)||[]
}
