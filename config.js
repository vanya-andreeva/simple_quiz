
var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();


questions[0] = "1) Question 1 ...";
choices[0] = new Array();
choices[0][0] = "answer 1";
choices[0][1] = "answer 2";
choices[0][2] = "answer 3 (correct)";
choices[0][3] = "answer 4";
answers[0] = choices[0][2];

questions[1] = "2) Question 2 ...";
choices[1] = new Array();
choices[1][0] = "answer 1";
choices[1][1] = "answer 2";
choices[1][2] = "answer 3";
choices[1][3] = "answer 4 (correct)";
answers[1] = choices[1][3];

questions[2] = "3) Question 3 ...";
choices[2] = new Array();
choices[2][0] = "answer 1 (correct)";
choices[2][1] = "answer 2";
choices[2][2] = "answer 3";
choices[2][3] = "answer 4 ";
answers[2] = choices[2][0];



// response for getting 100%
response[0] = "Excellent, top marks!";
// response for getting 90% or more
response[1] = "Excellent, try again to get 100%!"
// response for getting 70% or more
response[2] = "Well done, that is a good score, can you do better?";
// response for getting over 50%
response[3] = "Nice one, you got more than half of the questions right, can you do better?";
// response for getting 40% or more
response[4] = "You got some questions right, you can do better!";
// response for getting 20% or more
response[5] = "You didn't do too well, why not try again!?";
// response for getting 10% or more
response[6] = "That was pretty poor!  Try again to improve!";
// response for getting 9% or less
response[7] = "Oh dear, I think you need to go back to school (or try again)!";


