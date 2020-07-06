let quest;
let title = document.getElementById("title");
let ans1 = document.getElementById("ans1");
let ans2 = document.getElementById("ans2");
let ans3 = document.getElementById("ans3");
let ans4 = document.getElementById("ans4");
let questions = document.getElementById("questions");
let answers = document.getElementsByClassName("answer");
let point = document.getElementById("point");
point.innerHTML = 0;

fetch(
  "https://opentdb.com/api.php?amount=10&category=19&difficulty=medium&type=multiple"
)
  .then((response) => response.json())
  .then((data) => {
    quest = data.results;
    console.log(quest);
    renderQuestion(quest[0])
});

function renderQuestion(question){
  questions.innerHTML = question.question;
  let arrans = question.incorrect_answers;
  arrans.push(question.correct_answer);
  arrans.sort(function(){
    return 0.5 - Math.random();
  })
  console.log(arrans);
  ans1.innerHTML = arrans[0];
  ans2.innerHTML = arrans[1];
  ans3.innerHTML = arrans[2];
  ans4.innerHTML = arrans[3];
}
function checkAns(question){
  for ()
}
document.getElementById("title").addEventListener("click", function () {

});

// 
// for (let i = 0; i < a.length; i++) {
//   answers[i].addEventListener("click", function () {

//   });
// }
