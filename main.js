//Start by declairig a name
const userName = 'Jane';

//Apply an if...else statement
userName ? console.log(`Hello, ${userName}!`) :        console.log('Hello!');

//The question the user wants to ask the Magic Eight Ball
const userQuestion = '';

//Apply a question
console.log(`Is ${userName} going to receive a phone call by now?`);

//We need to generate a random number between 0 and 7
const randomNumber = Math.floor(Math.random() * 8);

//We will save a value to this variable in the next steps, depending on the value of randomNumber
let eightBall = '';

//We created a control flow that takes in the randomNumber we made 
switch(randomNumber) {
  case 0:
  eightBall = 'It is certain';
  break;
  case 1:
  eightBall = 'It is decidedly so';
  break;
  case 2:
  eightBall = 'Reply hazy try again';
  break;
  case 3:
  eightBall = 'Cannot predict now';
  break;
  case 4:
  eightBall = 'Do not count on it';
  break;
  case 5:
  eightBall = 'My sources say no';
  break;
  case 6:
  eightBall = 'Outlook not so good';
  break;
  case 7:
  eightBall = 'Signs point to yes';
  break;
}

//Printing out the random value
console.log(`The eight ball says: ${eightBall}!`);






