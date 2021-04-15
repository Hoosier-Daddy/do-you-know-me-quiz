let readlineSync = require('readline-sync');

let userName='';
function welcome() {
 userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + ", DO YOU KNOW Uttkarsh ?");
}

welcome();


let score = 0;
function play(question,answer){
  let userAnswer = readlineSync.question(question);

  if(userAnswer === answer){
    score = score +1;
    console.log("Right");
  }else{
    console.log("Wrong");
  }

  console.log("current score: ",score);
  console.log("------------------------");

}

let questions = [{
  question:"Where does he live?",
  answer:"lucknow"
},
{
  question:"His favourite superhero would be?",
  answer:"superman"
}];

for(let i =0; i<=questions.length-1;i++){
  let currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}

console.log(userName + " total score =" + score);