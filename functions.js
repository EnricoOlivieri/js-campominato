function isNumberInArray(num, numArray){
  for(var i = 0; i < numArray.length; i++){
    if(num === numArray[i]){
      return true;
    }
  }
  return false;
}

function getRandomNumber(max, min){
  return Math.floor(Math.random() * ((max + 1) - min) + min);
}

console.log(isNumberInArray(5, [1,2,3,4])); //false
console.log(isNumberInArray(5, [1,2,3,4,5])); //true

console.log(getRandomNumber(1, 100));
