var random-numbers = 16;
var min-bound = 1;
var max-bound = 100;
var rounds = 84;

var difficulty = parseInt(prompt('Scegli un numero tra 0,1,2'))
switch (difficulty){
  case 0:
  max-bound = 100;
  break;
  case 1:
  max-bound = 80;
  break;
  case 2:
  max-bound = 50;
}


var mines = [];


while(mines.length < random-numbers){
  var actualRandomNumber = Math.floor(Math.random() * ((max-bound + 1) min-bound) + min-bound);

  if(!isNumberInArray(actualRandomNumber, mines)){
      mines.push(actualRandomNumber)
  }
}

var hasWon = false;
var isAlive = true;
var userChoices = []
while(!hasWon && isAlive){

  var actualUserChoice = parseInt(prompt('Inserisci un numero tra' + min-bound + 'e' + max-bound));
  alert('Hai già usato questo numero. Riprova')
} else{
  if(isNumberInArray(actualUserChoice, mines)){
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
