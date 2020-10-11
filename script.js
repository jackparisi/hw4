var score = 0;
var start = document.querySelector(".btn");
var timeDisplay = document.querySelector("#time-left");
var scoreDisplay = document.querySelector("#score-count");
timeClock = 90;
var quiz = [
{
 title: "Commonly used data types DO NOT include",
 choices: ["Strings", "Numbers", "Booleans", "Alerts"],
 answer: "Alerts"
},
{
    title: "Arrays in Javascript can be used to store",
    choices: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the Above"],
    answer: "All of the Above"
},
{
   title: "String values must be enclosed in ____ to when being assigned to variables",
   choices: ["Commas", "Curly Brackets", "Quotes", "All of the Above"],
   answer: "Quotes"
},
{
    title: "The condition in an if else statement is enclosed in ___",
    choices: ["Quotes", "Parentheses", "Curly Brackets", "Square Brackets"], 
    answer: "Parentheses"
},
{
    title: "A very useful tool used for development and debugging for printing content to the debugger is",
    choices: ["Javascript", "Inspector", "Console Log", "Terminal"],
    answer: "Console Log"
}];
var question = document.querySelector(".quiz-area");
//var title1 = document.createTextNode(quiz[0].title);
var title2 = document.createTextNode(quiz[1].title);
var title3 = document.createTextNode(quiz[2].title);
var title4 = document.createTextNode(quiz[3].title); 
console.log(quiz[0].title)

start.addEventListener("click", function(){
    var title1 = document.createTextNode(quiz[0].title);
    question.appendChild(title1);
});  

for(i=0;i<quiz.length;i++){
 console.log(quiz.title)   
}