var readlineSync= require("readline-sync");
var chalk= require("chalk");
var userName= readlineSync.question(chalk.yellowBright.bgGray("Please enter your name:" ));
console.log("");
console.log(chalk.italic.underline.magenta("Welcome " +userName));

console.log("");
console.log("---------------")

var score=0;

var questionOne={
  question: "Which city do I live in? " ,
  answer: "Mumbai"
}

var questionTwo={
  question: "Who is my favourite Inidan actor? ",
  answer: "Shah Rukh Khan"
}

var questionThree={
  question: "What do I like more? 1.Marvel 2.DC ",
  answer: "Marvel"
}

var questionFour={
  question: "Which organization currently I am working with? ",
  answer: "TCS"
}

var questionFive={
  question: "What is my favourite hobby? ",
  answer: "Photography"
}

var questionList= [questionOne,questionTwo,questionThree,questionFour,questionFive];

for(i=0;i<questionList.length;i++)
{
  var quest=questionList[i].question;
  var ans=questionList[i].answer;
  play(quest,ans);
}

function play(question, answer)
{
  var userAnswer=readlineSync.question(chalk.blue(question));
  console.log(chalk.white.bgGray("Your answer is " +userAnswer));
  if(userAnswer===answer)
  {
    console.log(chalk.green("Correct Answer"));
    score++;
    console.log(chalk.yellowBright("Score is " +chalk.black.bgWhite("0"+score)));
  }
  else
  {
    console.log(chalk.red("Uh oh!! Wrong Answer"));
  }
  console.log("---------------");
}

console.log(chalk.white.bgGray("Final score: " + chalk.black.bgYellow("0"+score)));