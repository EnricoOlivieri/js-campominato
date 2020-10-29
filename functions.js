function isNumberInArray(num, numArray){
  for(var i = 0; i < numArr.length; i++){
    if(num === numArr[i]){
      return = true;
    }
  }
  return = false;
}

console.log(isNumberInArray(5, [1,2,3,4])); //false
console.log(isNumberInArray(5, [1,2,3,4,5])); //true
