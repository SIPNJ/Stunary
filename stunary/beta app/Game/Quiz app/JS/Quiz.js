let quest;
let title = document.getElementById("title");
let ans1 = document.getElementById("ans1");
let ans2 = document.getElementById("ans2");
let ans3 = document.getElementById("ans3");
let ans4 = document.getElementById("ans4");
let questions = document.getElementById("questions");
let answers = document.getElementsByClassName("answer");
let point = document.getElementById("point");
let count = 0;
point.innerHTML = 0;

fetch(
  "https://opentdb.com/api.php?amount=10&category=19&difficulty=medium&type=multiple"
)
  .then((response) => response.json())
  .then((data) => {
    quest = data.results;
    console.log(quest);
    renderQuestion(quest[0]);
  });
function renderQuestion(question) {
  questions.innerHTML = question.question;
  let arrans = question.incorrect_answers;
  arrans.push(question.correct_answer);
  arrans.sort(function () {
    return 0.5 - Math.random();
  });
  ans1.innerHTML = arrans[0];
  ans2.innerHTML = arrans[1];
  ans3.innerHTML = arrans[2];
  ans4.innerHTML = arrans[3];
}
function checkAns(AnsBtn) {
  if (AnsBtn.innerHTML == quest[count].correct_answer && count < 9) {
    point.innerHTML = Number(point.innerHTML) + 5;
    renderQuestion(quest[count + 1]);
    count = count + 1;
  } else if (AnsBtn.innerHTML !== quest[count].correct_answer && count < 9) {
    renderQuestion(quest[count + 1]);
    count = count + 1;
  } else {
    console.log("Congratulations");
  }
}
ans1.addEventListener("click", function () {
  checkAns(ans1);
});
ans2.addEventListener("click", function () {
  checkAns(ans2);
});
ans3.addEventListener("click", function () {
  checkAns(ans3);
});
ans4.addEventListener("click", function () {
  checkAns(ans4);
});
// document.getElementById("title").addEventListener("click", function () {

// });
//
// for (let i = 0; i < a.length; i++) {
//   answers[i].addEventListener("click", function () {

//   });
// }
// function checkAns(question) {
//   if (ans1.click()) {
//     if (ans1.innerHTML == question.correct_answer) {
//       point.innerHTML = Number(point.innerHTML) + 5;
//     }
//   } else if (ans2.click()) {
//     if (ans2.innerHTML == question.correct_answer) {
//       point.innerHTML = Number(point.innerHTML) + 5;
//     }
//   } else if (ans3.click()) {
//     if (ans3.innerHTML == question.correct_answer) {
//       point.innerHTML = Number(point.innerHTML) + 5;
//     }
//   } else if (ans4.click()) {
//     if (ans4.innerHTML == question.correct_answer) {
//       point.innerHTML = Number(point.innerHTML) + 5;
//     }
//   }
// }
