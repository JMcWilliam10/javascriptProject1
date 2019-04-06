const box = document.querySelector('box');
const hidden = document.querySelector('hidden');
let score = 0;
let html = 0,
    css = 0,
    js = 0,
    jquery = 0,
    react = 0;

// function bounce() {
//     document.querySelector("h1").classList.toggle("bounce", "animated");
// }
// bounce();

function playAudio(placeholder) {
    placeholder.play();
}

let questionAttempts = 0;
let randomNumber = Math.floor(Math.random() * 25 + 1);
console.log("question attempts: ", questionAttempts, "random number: ", questionAttempts);

const checkDailyDouble = function () {
    if (randomNumber === questionAttempts) {
        // document.querySelector('body').style.background = 'white';
        playAudio(dailyDouble);

        dailyDoubleAnswer = prompt(`DAILY DOUBLE! What is the best college of technology?`);
        if (dailyDoubleAnswer === 'hackeryou') {
            score += 5000
            document.getElementById("theScore").innerHTML = score;
            playAudio(eye);
        }
    }
}

const checkEndOfGame = function(){
    if(questionAttempts === 5 && score >= 1000){
        prompt('Welcome to the Leaderboard!')

    } else if (score < 1000) {
        alert('You came for the game, but stayed for the music. Thanks for playing!');
    }

}

const allQuestions = {
    htmlQuestions: ["What is the first name of the physicist who initially proposed HTML?", "HTML Question 2", "HTML Question 3", "HTML Question 4", "HTML Question 5"],
    cssQuestions: ["Is '::spelling-error' a valid CSS pseudo-element? yes or no", "Does CSS stand for Cascadable Style Shelves? yes or no", "Where in an HTML document should an external stylesheet be placed? head or body?", "Is this valid CSS Syntax? {body:color=black}", "Is the following how to declare a comment in CSS?: /* transform: rotate(270deg); */"],
    javaScriptQuestions: ["How many days did it take to write the initial JavaScript Prototype?", "Is the following the correct syntax for reffering to an external script called 'app.js'?   <script href=\"app.js\">", "javaScript question 3", "javaScript question 4", "javaScript question 5"],
    jQueryQuestions: ["jQuery Question 1", "jQuery Question 2", "jQuery Question 3", "jQuery Question 4", "jQuery Question 5"],
    reactQuestions: ["React Question 1", "React Question 2", "React Question 3", "React Question 4", "React Question 5"]
}
const allAnswers = {
    htmlAnswers: ['tim', 'second', 'third', 'fourth', 'fifth'],
    cssAnswers: ['yes' || 'true', 'no', 'head', 'no', 'yes'],
    javaScriptAnswers: ['10', 'no || false', 'third', 'fourth', 'fifth'],
    jQueryAnswers: ['first', 'second', 'third', 'fourth', 'fifth'],
    reactAnswers: ['first', 'second', 'third', 'fourth', 'fifth']
}
const cash = {
    html: [100,200,300,400,500]

}

// const correctAnswer = function (tech){
//     score = score + boxValue;
//     playAudio(correct);
// }

const wrongAnswer = function (typeOfAnswer, tech) {
    playAudio(wrong);
    alert(`Sorry! The answer is: ${allAnswers[typeOfAnswer][tech]}`)
}



function questionComplete() {
    box.style.background = 'white';
    box.style.color = 'white';
}

function masterFunction() {
    animate();
    updateScore();
}

function animate() {
    document.querySelector('.rotate').classList.add('flip');
}

function updateScore() {
    document.querySelector("#theScore").innerHTML = score;
    document.querySelector("#theScore2").innerHTML = score;
}




// PSEUDOCODE FOR MAIN FUNCTION

// Initial alert to prompt user to use volume
// 1. See if I can abstract out the 'score = score +boxvalue' & playaudio into one function
// 2. If the user answer is wrong alert with what the answer is 
// abstract out function into classes
// Change alert boxes to become centered modal
// Consider inplementing a to lowercase method
// Make sure that answers correlate with functions 
// If questionAttempts is at the end alert(thanks for playing) and show highscore


// Highscores Drogon the Dragon HTML of 
// 
// Get a random number from 0 to array.length
// Ask question
// answer
// splice away that array object
// Array.length
// 
// Use JQuery to take box 'this' box then convert to that for nested function

// let $box1 = $('.box');
// console.log($box1)
// $box1.on('click', console.log('click'))


let $form = $('form')

// $('box').on("click", function(){
//     document.body.style.background = 'black'
//     console.log(this)
// })

// 
$('box').mouseenter(function(){
    document.body.style.background = black;
});


// Im going to take a stab at this, i'm not sure if I will be able to describe it.


// Show and then fade this
            // alert(`Correct! You just won $${boxValue}, your total funds are $${score}`)
            // Using template literals and the jquery dom method

// function myFunction() {
//     var str = "Hello World!";
//     var res = str.toLowerCase();
//   }

// const lowercased = answer.toLowerCase();
// if (lowercased === 'yes' || 'true')
// Can an object hold a boolean
// if(lowercased ===  allAnswers.htmlAnswers[html])
// let answering = allAnswers.htmlAnswers[html]


function htmlQuestion(box, boxValue) {
    box.style.background = 'white';
    box.style.color = 'white';
    box.onclick = null;

    if (html === 0) {
        const answer = prompt(allQuestions.htmlQuestions[html])
    // Put lower case here
    const lowercased = answer.toLowerCase();
        if (lowercased === allAnswers.htmlAnswers[html]) {
            score = score + boxValue;
            playAudio(correct);
        } else {
            wrongAnswer('htmlAnswers',html);
        }
        
        // Master function has now included the incrementor
        masterFunction();
        html++, questionAttempts++;
    } else if (html === 1) {
        const answer = prompt(allQuestions.htmlQuestions[html])
        if (answer === 'yes') {
            score = score + boxValue;
            // alert(`Correct! You just won $${boxValue}, your total funds are $${score}`)
            playAudio(correct);
        } else {
            wrongAnswer(html);
        }
        masterFunction();
        html++, questionAttempts++;
    } else if (html === 2) {
        const answer = prompt(allQuestions.htmlQuestions[html])
        if (answer === 'yes') {
            score = score + boxValue;
            playAudio(correct);
        } else {
            wrongAnswer(html);
        }
        masterFunction();
        html++, questionAttempts++;
    } else if (html === 3) {
        const answer = prompt(allQuestions.htmlQuestions[html])
        if (answer === 'yes') {
            score = score + boxValue;
            playAudio(correct);
        } else {
            wrongAnswer(html);
        }
        masterFunction();
        html++, questionAttempts++;
    } else {
        const answer = prompt(allQuestions.htmlQuestions[html])
        if (answer === 'yes') {
            score = score + boxValue;
            playAudio(correct);
        } else {
            wrongAnswer(html);
        }
        masterFunction();
        html++, questionAttempts++;
    }
    checkDailyDouble();
    checkEndOfGame();
}

function cssQuestion(box, boxValue) {

    box.style.background = 'white';
    box.style.color = 'white';
    box.onclick = null;

    if (css === 0) {
        const answer = prompt(allQuestions.cssQuestions[css])
        if (answer === a) {
            score = score + boxValue;
            playAudio(correct);
        } else {
            wrongAnswer(css);
        }
        masterFunction();
        css++, questionAttempts++;
    } else if (css === 1) {
        const answer = prompt(allQuestions.cssQuestions[css])
        if (answer === 'yes' || 'or') {
            score = score + boxValue;
            playAudio(correct);
        } else {
            wrongAnswer(css);
        }
        masterFunction();
        css++, questionAttempts++;
    } else if (css === 2) {
        const answer = prompt(allQuestions.cssQuestions[css])
        if (answer === 'head') {
            score = score + boxValue;
            playAudio(correct);
        } else {
            wrongAnswer(css);
        }
        masterFunction();
        css++, questionAttempts++;
    } else if (css === 3) {
        const answer = prompt(allQuestions.cssQuestions[css])
        if (answer === 'yes') {
            score = score + boxValue;
            playAudio(correct);
        } else {
            wrongAnswer(css);
        }
        masterFunction();
        css++, questionAttempts++;
    } else {
        const answer = prompt(allQuestions.cssQuestions[css])
        if (answer === 'yes') {
            score = score + boxValue;
            playAudio(correct);
        } else {
            wrongAnswer(css);
        }
        masterFunction();
        css++, questionAttempts++;
    }
    checkDailyDouble();
}

function jsQuestion(box, boxValue) {

    box.style.background = 'white';
    box.style.color = 'white';
    box.onclick = null;

    if (js === 0) {
        const answer = prompt(allQuestions.javaScriptQuestions[js])
        if (answer === '10') {
            score = score + boxValue;
            playAudio(correct);
        } else {
            wrongAnswer(js);
        }
        masterFunction();
        js++, questionAttempts++;
    } else if (css === 1) {
        const answer = prompt(allQuestions.javaScriptQuestions[js])
        if (answer === 'yes') {
            score = score + boxValue;
            playAudio(correct);
        } else {
            wrongAnswer(js);
        }
        masterFunction();
        js++, questionAttempts++;
    } else if (css === 2) {
        const answer = prompt(allQuestions.javaScriptQuestions[js])
        if (answer === 'yes') {
            score = score + boxValue;
            playAudio(correct);
        } else {
            wrongAnswer(js);
        }
        masterFunction();
        js++, questionAttempts++;
    } else if (css === 3) {
        const answer = prompt(allQuestions.javaScriptQuestions[js])
        if (answer === 'yes') {
            score = score + boxValue;
            playAudio(correct);
        } else {
            wrongAnswer(js);
        }
        masterFunction();
        js++, questionAttempts++;
    } else {
        const answer = prompt(allQuestions.javaScriptQuestions[js])
        if (answer === 'yes') {
            playAudio(correct);
            score = score + boxValue;
        } else {
            wrongAnswer(js);
        }
        masterFunction();
        js++, questionAttempts++;
    }
    checkDailyDouble();
}

function jqueryQuestion(box, boxValue) {

    box.style.background = 'white';
    box.style.color = 'white';
    box.onclick = null;

    if (jquery === 0) {
        const answer = prompt(allQuestions.jQueryQuestions[jquery])
        if (answer === 'yes') {
            score = score + boxValue;
            playAudio(correct);
        } else {
            wrongAnswer(jquery);
        }
        masterFunction();
        jquery++, questionAttempts++;
    } else if (css === 1) {
        const answer = prompt(allQuestions.jQueryQuestions[jquery])
        if (answer === 'yes') {
            score = score + boxValue;
            playAudio(correct);
        } else {
            wrongAnswer(jquery);
        }
        masterFunction();
        jquery++, questionAttempts++;
    } else if (css === 2) {
        const answer = prompt(allQuestions.jQueryQuestions[jquery])
        if (answer === 'yes') {
            score = score + boxValue;
            playAudio(correct);
        } else {
            wrongAnswer(jquery);
        }
        masterFunction();
        jquery++, questionAttempts++;
    } else if (css === 3) {
        const answer = prompt(allQuestions.jQueryQuestions[jquery])
        if (answer === 'yes') {
            score = score + boxValue;
            playAudio(correct);
        } else {
            wrongAnswer(jquery);
        }
        masterFunction();
        jquery++, questionAttempts++;
    } else {
        const answer = prompt(allQuestions.jQueryQuestions[jquery])
        if (answer === 'yes') {
            score = score + boxValue;
            playAudio(correct);
        } else {
            wrongAnswer(jquery);
        }
        masterFunction();
        jquery++, questionAttempts++;
    }
    checkDailyDouble();
}

function reactQuestion(box, boxValue) {

    box.style.background = 'white';
    box.style.color = 'white';
    box.onclick = null;


    if (react === 0) {
        const answer = prompt(allQuestions.reactQuestions[react])
        if (answer === 'yes') {
            score = score + boxValue;
            playAudio(correct);
        } else {
            wrongAnswer();
        }
        masterFunction();
        react++, questionAttempts++;
    } else if (css === 1) {
        const answer = prompt(allQuestions.reactQuestions[react])
        if (answer === 'yes') {
            score = score + boxValue;
            playAudio(correct);
        } else {
            wrongAnswer();
        }
        masterFunction();
        react++, questionAttempts++;
    } else if (css === 2) {
        const answer = prompt(allQuestions.reactQuestions[react])
        if (answer === 'yes') {
            score = score + boxValue;
            playAudio(correct);
        } else {
            wrongAnswer();
        }
        masterFunction();
        react++, questionAttempts++;
    } else if (css === 3) {
        const answer = prompt(allQuestions.reactQuestions[react])
        if (answer === 'yes') {
            score = score + boxValue;
            playAudio(correct);
        } else {
            wrongAnswer();
        }
        masterFunction();
        react++, questionAttempts++;
    } else {
        const answer = prompt(allQuestions.reactQuestions[react])
        if (answer === 'yes') {
            score = score + boxValue;
            playAudio(correct);
        } else {
            wrongAnswer();
        }
        masterFunction();
        react++, questionAttempts++;
    }
    checkDailyDouble();
}

