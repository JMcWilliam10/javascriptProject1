const box = document.querySelector('box');
// const hidden = document.querySelector('hidden');
let score = 0;
let html = 0,
    css = 0,
    js = 0,
    jquery = 0,
    react = 0;

function playAudio(placeholder) {
    placeholder.play();
}

let questionAttempts = 0;
// let randomNumber = Math.floor(Math.random() * 25 + 1);
// Pick a random number between 5 and 15 to cue the dailyDouble
let randomNumber = Math.floor(Math.random() * 6) + 5;
console.log(randomNumber)

const checkDailyDouble = function () {
    if (randomNumber === questionAttempts) {
        document.querySelector('body').style.background = '#86BBD8';
        playAudio(dailyDouble);
        // How to grab daily double from set timeout
        // let dailyDoubleAnswer;
        // setTimeout(function(){ dailyDoubleAnswer = prompt(`DAILY DOUBLE! What is the best college of technology?`);  }, 300);
        dailyDoubleAnswer = prompt(`DAILY DOUBLE! What is the best college of technology?`);
        if (dailyDoubleAnswer === 'hackeryou') {
            score += 5000
            document.getElementById("theScore").innerHTML = score;
            playAudio(eye);
        }
    }
}

const checkEndOfGame = function () {
    if (questionAttempts === 25 && score >= 1000) {
        const boardName = prompt('Welcome to the Leaderboard! Please enter your name: ')
        document.getElementById('leaderBoardName').innerHTML = boardName;
        document.getElementById('leaderBoardScore').innerHTML = `$ ${score}`;
    } else if (questionAttempts === 25 && score < 5000) {
        alert('Hopefully you came for the game, but stayed for the music. Thanks for playing!');
    }
}

const allQuestions = {
    htmlQuestions: ["What is the first name of the physicist who initially proposed HTML?", "HTML Question 2", "HTML Question 3", "HTML Question 4", "HTML Question 5"],
    cssQuestions: ["Is '::spelling-error' a valid CSS pseudo-element? yes or no", "Does CSS stand for Cascadable Style Shelves? yes or no", "Where in an HTML document should an external stylesheet be placed? head or body?", "Is this valid CSS Syntax? {body:color=black}", "Is the following how to declare a comment in CSS?: /* transform: rotate(270deg); */"],
    javaScriptQuestions: ["How many days did it take to write the initial JavaScript Prototype?", "Is the following the correct syntax for reffering to an external script called 'app.js'?   <script href=\"app.js\">", "javaScript question 3", "javaScript question 4", "javaScript question 5"],
    jQueryQuestions: ["jQuery Question 1", "jQuery Question 2", "jQuery Question 3", "jQuery Question 4", "jQuery Question 5"],
    reactQuestions: ["The creator(s) of React were working at which company when it was developed?", "JSX Stands for 'JavaScript XML", "Can if-else statements be used inside JSX?", "Can conditional expressions be used in JSX?", "React uses what is known as a V______ DOM"]
}
const allAnswers = {
    htmlAnswers: ['tim', 'second', 'third', 'fourth', 'fifth'],
    cssAnswers: ['yes', 'no', 'head', 'no', 'yes'],
    javaScriptAnswers: ['10', 'no', 'third', 'fourth', 'fifth'],
    jQueryAnswers: ['first', 'second', 'third', 'fourth', 'fifth'],
    reactAnswers: ['facebook', 'yes', 'no', 'yes', 'virtual']
}
// const cash = {
//     html: [100,200,300,400,500]
// }

// const correctAnswer = function (tech){
//     score = score + boxValue;
//     playAudio(correct);
// }

// const wrongAnswer = function (typeOfAnswer, tech) {

//     alert(`Sorry! The answer is: ${allAnswers[typeOfAnswer][tech]}`)
// }



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

///////// jQuery Notes ///////////
// let $form = $('form')

// $('box').on("click", function(){
//     document.body.style.background = 'black'
//     console.log(this)
// })
// $('box').mouseenter(function(){
//     document.body.style.background = black;
// });



// Show and then fade this
    // alert(`Correct! You just won $${boxValue}, your total funds are $${score}`)
    // Using template literals and the jquery dom method



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
            score += boxValue;
            playAudio(correct);
        } else {
            alert(`Sorry! The answer was ${allAnswers.htmlAnswers[html]}`)
        }
        
        // Master function has now included the incrementor
        masterFunction();
        html++, questionAttempts++;
    } else if (html === 1) {
        const answer = prompt(allQuestions.htmlQuestions[html])
        if (answer === 'yes') {
            score += boxValue;
            // alert(`Correct! You just won $${boxValue}, your total funds are $${score}`)
            playAudio(correct);
        } else {
            alert(`Sorry! The answer was ${allAnswers.htmlAnswers[html]}`)
        }
        masterFunction();
        html++, questionAttempts++;
    } else if (html === 2) {
        const answer = prompt(allQuestions.htmlQuestions[html])
        if (answer === 'yes') {
            score = score + boxValue;
            playAudio(correct);
        } else {
            alert(`Sorry! The answer was ${allAnswers.htmlAnswers[html]}`)
        }
        masterFunction();
        html++, questionAttempts++;
    } else if (html === 3) {
        const answer = prompt(allQuestions.htmlQuestions[html])
        if (answer === 'yes') {
            score = score + boxValue;
            playAudio(correct);
        } else {
            alert(`Sorry! The answer was ${allAnswers.htmlAnswers[html]}`)
        }
        masterFunction();
        html++, questionAttempts++;
    } else {
        const answer = prompt(allQuestions.htmlQuestions[html])
        if (answer === 'yes') {
            score = score + boxValue;
            playAudio(correct);
        } else {
            alert(`Sorry! The answer was ${allAnswers.htmlAnswers[html]}`)
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
        if (answer === allAnswers.reactAnswers[react]) {
            score = score + boxValue;
            playAudio(correct);
        } else {
            alert(`Sorry! The answer was ${allAnswers.reactAnswers[react]}`)
        }
        masterFunction();
        react++, questionAttempts++;
    } else if (css === 1) {
        const answer = prompt(allQuestions.reactQuestions[react])
        if (answer === 'yes') {
            score = score + boxValue;
            playAudio(correct);
        } else {
            alert(`Sorry! The answer was ${allAnswers.reactAnswers[react]}`)
        }
        masterFunction();
        react++, questionAttempts++;
    } else if (css === 2) {
        const answer = prompt(allQuestions.reactQuestions[react])
        if (answer === 'yes') {
            score = score + boxValue;
            playAudio(correct);
        } else {
            alert(`Sorry! The answer was ${allAnswers.reactAnswers[react]}`)
        }
        masterFunction();
        react++, questionAttempts++;
    } else if (css === 3) {
        const answer = prompt(allQuestions.reactQuestions[react])
        if (answer === 'yes') {
            score = score + boxValue;
            playAudio(correct);
        } else {
            alert(`Sorry! The answer was ${allAnswers.reactAnswers[react]}`)
        }
        masterFunction();
        react++, questionAttempts++;
    } else {
        const answer = prompt(allQuestions.reactQuestions[react])
        if (answer === allAnswers.reactAnswers[react]) {
            score = score + boxValue;
            playAudio(correct);
        } else {
            alert(`Sorry! The answer was ${allAnswers.reactAnswers[react]}`)
        }
        masterFunction();
        react++, questionAttempts++;
    }
    checkDailyDouble();
}

