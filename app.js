'use strict';

// Global variables definitions
// function definitions
// function calls


/*
  basic function syntax
function functionNamePotato(){
  here is where code goes
}

// function call runs the code inside the curly braces
// call this - invoking the function
functionNamePotato();
functionNamePotato();
functionNamePotato();
functionNamePotato();
functionNamePotato();
functionNamePotato();
functionNamePotato();
// we just invoked the function 7 times
*/

// purpose of a function is to define a code block for LATER use, every once in a while immediate

function pickRandomNumber(){
  var aRandomNumber = Math.random() * 10;
  console.log('your number is!!!!..... ' + aRandomNumber);
}

pickRandomNumber();
pickRandomNumber();
pickRandomNumber();
pickRandomNumber();
pickRandomNumber();
pickRandomNumber();
pickRandomNumber();

var username = 'nicholas';

/*
 functions with parameters
 declare them, we put a parameter between the parentheses

  function someName(parameter1, potato, tomato, name, x, y, a, b){

  }

someName would basically be declaring
var parameter1;
var potato;
var tomato;
var name;
var x;
var y;
var a;
var b;
when we call it / invoke it

  someName('anything', 'russet', 'heirloom', 'nicholas', true, false, [1,2,3], 9);

which would cause those values to be assigned to the parameters
var parameter1 = 'anything';
var potato = 'russet';
var tomato = 'heirloom';
var name = 'nicholas';
var a = [1,2,3];
etc etc

var x = [1,2,3];

*/

function sayHello(name){
  console.log('hello there ' + name);
}

sayHello(username);
sayHello('nicholas');
sayHello('Tif');
sayHello(957);
sayHello('apples');

function cook(potato){
  console.log(potato + 'is cooked');
}

cook('russet'); // calling the function cook - and passing it the argument 'russet as potato
cook('pizza'); // invoking the function cook - and passing it the value of the string of pizza as the first parameter `potato`



for (var i = 0; i < 6; i++) {
  //7 begins
  var colorsILikeCorrectAnswers = ['seafoam green', 'green', 'navy blue', 'black purple', 'orange', 'purple', 'black'];

  var colorILikeResponse = prompt('Name a color I like, there are 4');

  for (var answerIndex = 0; answerIndex < colorsILikeCorrectAnswers.length; answerIndex++) {
    //Start checking
    if (colorILikeResponse === colorsILikeCorrectAnswers[answerIndex]) {
      console.log('it worked');
      i = 1000000;
      break;
    }
    // End Checking
  }
  // 7 ends


}

var favoriteDrink = 'coffee';

var favoriteDrinkGuess = prompt('what does nich like to drink?');

if(favoriteDrinkGuess === favoriteDrink){
  alert('yayyyy, coffee is yummy and makes nich wake up in the morning');
} else {
  alert('guess again');
}
