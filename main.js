var randomNumbers = 16;
var minBound = 1;
var maxBound = 100;
var rounds = 84;

var difficulty = parseInt(prompt('Scegli un numero tra 0,1,2'))
switch (difficulty){
  case 0:
  maxBound = 100;
  break;
  case 1:
  maxBound = 80;
  break;
  case 2:
  maxBound = 50;
}


var mines = [];


while(mines.length < randomNumbers){
  var actualRandomNumber = getRandomNumber(maxBound, minBound);

  if(!isNumberInArray(actualRandomNumber, mines)){
      mines.push(actualRandomNumber);
  }
}

var hasWon = false;
var isAlive = true;
var userChoices = [];
while(!hasWon && isAlive){

  var actualUserChoice = parseInt(prompt('Inserisci un numero tra' + minBound + 'e' + maxBound));

  if (isNumberInArray(actualUserChoice, userChoices)){
    alert('Hai già usato questo numero. Riprova');
  } else {
    if (isNumberInArray(actualUserChoice, mines)){
      isAlive = false;
    }

    if(userChoices.length == rounds){
      hasWon = true;
    }
  }
}

console.log('hasWon:' hasWon);
console.log('isAlive:' isAlive);

var messageEl
