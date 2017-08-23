
var useranswers = new Array();
var answered = 0;

function runQuiz() {
  for(i=0;i<questions.length;i++) {
    document.writeln('<p class="question">' + questions[i] + ' <span id="result_' + i + '"><img src="blank.gif" style="border:0" alt="" /></span></p>');
    for(j=0;j<choices[i].length;j++) {
      document.writeln('<input type="radio" name="answer_' + i + '" value="' + choices[i][j] + '" id="answer_' + i + '_' + j + '" class="question_' + i + '" onclick="submitQuiz(' + i + ', this, \'question_' + i + '\', \'label_' + i + '_' + j + '\')" /><label id="label_' + i + '_' + j + '" for="answer_' + i + '_' + j + '"> ' + choices[i][j] + '</label><br />');
    }
  }
  document.writeln('<p><input type="submit" value="Show Score" onclick="showScore()" /> <input type="submit" value="Reset Quiz" onclick="resetQuiz(true)" /></p><p style="display:none"><img src="correct.gif" style="border:0" alt="Correct!" /><img src="incorrect.gif" style="border:0" alt="Incorrect!" /></p>');
}
function resetQuiz(popUpConfirm) {
  if(popUpConfirm)
    if(!confirm("DO you want to start from the beginning?"))
      return false;
  document.location = document.location;
}
function submitQuiz(questionId, obj, classId, labelId) {
  useranswers[questionId] = obj.value;
  document.getElementById(labelId).style.fontWeight = "bold";
  disableQuestion(classId);
  showResult(questionId);
  answered++;
}
function showResult(questionId) {
  if(answers[questionId] == useranswers[questionId]) {
    document.getElementById('result_' + questionId).innerHTML = '<img src="correct.gif" style="border:0" alt="Correct!" />';
  } else {
    document.getElementById('result_' + questionId).innerHTML = '<img src="incorrect.gif" style="border:0" alt="Incorrect!" />';
  }
}
function showScore() {
  if(answered != answers.length) {
    alert("Answer all questions!");
    return false;
  }
  questionCount = answers.length;
  correct = 0;
  incorrect = 0;
  for(i=0;i<questionCount;i++) {
    if(useranswers[i] == answers[i])
      correct++;
    else
      incorrect++;
  }
  pc = Math.round((correct / questionCount) * 100);
  alertMessage = "You scored " + correct + " out of " + questionCount + "\n\n";
  alertMessage += "You gave correct answer to " + pc + "% of the questions! \n\n";
  if(pc == 100)
    alertMessage += response[0];
  else if(pc >= 90)
    alertMessage += response[1];
  else if(pc >= 70)
    alertMessage += response[2];
  else if(pc > 50)
    alertMessage += response[3];
  else if(pc >= 40)
    alertMessage += response[4];
  else if(pc >= 20)
    alertMessage += response[5];
  else if(pc >= 10)
    alertMessage += response[6];
  else
    alertMessage += response[7];
  if(pc < 100) {
    if(confirm(alertMessage))
      resetQuiz(false);
    else
      return false;
  } else {
    alert(alertMessage);
  }
}
function disableQuestion(classId) {
  var alltags=document.all? document.all : document.getElementsByTagName("*")
  for (i=0; i<alltags.length; i++) {
    if (alltags[i].className == classId) {
      alltags[i].disabled = true;
    }
  }
}


