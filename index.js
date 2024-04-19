function Quiz(listOfQuestions) {
    this.score = 0;
    this.questions = listOfQuestions;
    this.questionIndex = 0
}

function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
Quiz.prototype.isEnded = function() {
return this.questionIndex === this.questions.length
}

Quiz.prototype.checkOptionWithAnswer = function(answer) {
    if(this.getQuestionByIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
    this.questionIndex++;
}

Quiz.prototype.getQuestionByIndex = function() {
    return this.questions[this.questionIndex]
}
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
function showProgress() {
let elem = document.getElementById("progress")
let questionNum = quiz.questionIndex + 1;
elem.innerHTML = "Question " + questionNum + " of "+ quiz.questions.length
}

function showScores() {
    let heading = document.querySelector("h1")
    heading.innerHTML = "Result:"
    let quizElem = document.getElementById("quiz")
    quizElem.innerHTML = `<h2 id='score'>Your scores : ${quiz.score}. and percentage is ${quiz.score/quiz.questions.length*100}%</h2>`
}
function handleBtnClick(id, choice) {
let btn = document.getElementById(id)
btn.onclick = function() {
    quiz.checkOptionWithAnswer(choice);
    loadQuestions();
}
}
function loadQuestions() {
if(quiz.isEnded()) {
    showScores()
}else {
    let elem = document.getElementById("question")
    elem.innerHTML = quiz.getQuestionByIndex().text;

    let choices = quiz.getQuestionByIndex().choices;
    console.log(choices);
    for(let i = 0; i < choices.length; i++) {
        let elem = document.getElementById("btn" + i);
        elem.innerHTML =  choices[i];
        handleBtnClick("btn"+i, choices[i]);
    }
    showProgress();
}
}


let questionsList = [
new Question("What are the different ways to access a html element inside javascript code ", ["Using getElementById method", "Using document.documentElement.childNodes object of DOM", "Both a and b", "None of the above"], "Both a and b"),
new Question("The value return by the getElementByClassName is- ", ["An array of object of DOM nodes having the given class name", "The reference to single element with that className", "The reference to the head tag in the html file.", "None of the above."], "An array of object of DOM nodes having the given class name"),
new Question("To select all div elements of a html file inside a javascript code snippet,we can use ", ["getElementById method", "getElementsByClassName method", "getElementsByTagName method", "All of the above"], "getElementsByTagName method"),
new Question("We can call a function by a delay of some seconds in js using ", ["Tdelay() methodrue", "setTimeout() method", "Both A and B", "None of the above"], "setTimeout() method"),
new Question("Which object of a DOM node will be used to add or remove css classes on a html element using JS code", ["listClass", "changeCss", "classList", "None of the above"], "classList")
]

let quiz = new Quiz(questionsList)


loadQuestions();