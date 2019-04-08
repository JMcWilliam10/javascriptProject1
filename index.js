const box = document.querySelector('box');

let score = 0;
let html = 0,
    css = 0,
    js = 0,
    jquery = 0,
    react = 0;
let boxValue;

function playAudio(placeholder) {
    placeholder.play();
}

let questionAttempts = 0;
// let randomNumber = Math.floor(Math.random() * 25 + 1);
// Pick a random number between 5 and 15 to cue the dailyDouble and not randomly between 1 and 25 for daily double easter egg to cue
let randomNumber = Math.floor(Math.random() * 6) + 5;
console.log('The random number is: ', randomNumber)

const checkDailyDouble = function () {      
    if (randomNumber === questionAttempts) {
        document.querySelector('body').style.background = '#86BBD8';
        playAudio(dailyDouble);
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

// const checkEndOfGame = function () {
//     if (questionAttempts === 25) {
//         const boardName = prompt('Welcome to the Leaderboard! Please enter your name: ')
//         document.getElementById('bottomScoreName').innerHTML = boardName;
//         document.getElementById('bottomScore').innerHTML = `$ ${score}`;
//     } 
// }
const checkEndOfGame = function () {
    if (questionAttempts === 25 && score > 10900) {
        const boardName = prompt('Welcome to the Leaderboard! Please enter your name: ')
        document.getElementById('topScoreName').innerHTML = boardName;
        document.getElementById('topScore').innerHTML = `$ ${score}`;
    } else if (questionAttempts === 25 && score > 8000) {
        const boardName = prompt('Welcome to the Leaderboard! Please enter your name: ')
        document.getElementById('middleScoreName').innerHTML = boardName;
        document.getElementById('middleScore').innerHTML = `$ ${score}`;
    } else if (questionAttempts === 25 && score < 8000){
        const boardName = prompt('Welcome to the Leaderboard! Please enter your name: ')
        document.getElementById('bottomScoreName').innerHTML = boardName;
        document.getElementById('bottomScore').innerHTML = `$ ${score}`;
    }
}


const allQuestions = {

    htmlQuestions: ["What is the first name of the physicist who initially proposed HTML?", 
                    "Does HTML stand for: Hyperlinks Tooling Markup Language? Yes or No?", 
                    "Does a h6 heading tag display a larger header than a h1 heading tag by default? Yes or No?",
                    "Are inline elements displayed without starting a new line? Yes or No", 
                    "Is the <ul> the tag used to make a numbered list? Yes or No?"],
    cssQuestions: [ "Is <style src='mystyle.css'>  this the correct way to refer to an external style sheet? Yes or No?", 
                    "Does CSS stand for Cascadable Style Shelves? Yes or No?", 
                    "Where in an HTML document should an external stylesheet be placed? head or body?", 
                    "Is this valid CSS Syntax? {body:color=black} Yes or No?", 
                    "Is the following how to declare a comment in CSS? /* transform: rotate(270deg); */ Yes or No?"],
    javaScriptQuestions: [  "How many days did it take to write the initial JavaScript Prototype?", 
                            "Is the following the correct syntax for reffering to an external script called 'app.js'?   <script href='app.js'> Yes or No?",
                            "Is <scripting></scripting> the HTML element we put javascript inside? Yes or No?", 
                            "Does the external javascript file need to contain the script tag? Yes or No?", 
                            "is alert('Hello World'); how you write 'Hello World' in an alert box? Yes or No?"],
    jQueryQuestions: [  "is switchClass() the method use to switch between adding/removing one or more classes from selected elements? Yes or No?", 
                        "Is jQuery is a JSON library? Yes or No?", 
                        "Is the jquery selector css() the method used to set one or more style properties for selected elements? Yes or No?", 
                        "Is the $ sign the shortcut for jQuery? Yes or No?", 
                        "Is it true you must pay for jQuery to be implemented into production applications? Yes or No?"],
    reactQuestions: [   "The creator(s) of React were working at which company when it was developed?", 
                        "Does JSX Stands for 'JavaScript XML? Yes or No?", 
                        "Can if-else statements be used inside JSX? Yes or No?", 
                        "Can conditional expressions be used in JSX? Yes or No?", 
                        "React uses what is known as a ______ Document Object Model"]
}

const allAnswers = {
    htmlAnswers: ['tim', 'no', 'no', 'yes', 'no'],
    cssAnswers: ['no', 'no', 'head', 'no', 'yes'],
    javaScriptAnswers: ['10', 'no', 'no', 'no', 'yes'],
    jQueryAnswers: ['no', 'no', 'yes', 'yes', 'no'],
    reactAnswers: ['facebook', 'yes', 'no', 'yes', 'virtual']
}
// const scoreValue = [100,200,300,400,500];

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

function encouragement(){
    setTimeout(function(){ document.getElementById("keep").innerHTML = 'KEEP '; }, 500);
    setTimeout(function(){ document.getElementById("it").innerHTML = 'IT '; }, 1000);
    setTimeout(function(){ document.getElementById("up").innerHTML = 'UP !'; }, 1500);
}

function htmlQuestion(box, boxValue) {
    box.style.background = 'white';
    box.style.color = 'white';
    box.onclick = null;

    if (html === 0) {
        const answer = prompt(allQuestions.htmlQuestions[html]);
        const lowercased = answer.toLowerCase();
        if (lowercased === allAnswers.htmlAnswers[html]) {
            score += boxValue;
            correct.play();
            document.getElementById("answering").innerHTML = `Correct! The answer is ${allAnswers.htmlAnswers[html]}! You just added $${boxValue} to your funds!`;
            encouragement();
        } else {
            alert(`Sorry! The answer was ${allAnswers.htmlAnswers[html]}`)
            playAudio(wrong);
        }
        // Master function has now included the incrementor
        masterFunction();
        html++, questionAttempts++;
    } else if (html === 1) {
        const answer = prompt(allQuestions.htmlQuestions[html])
        const lowercased = answer.toLowerCase();
        if (lowercased === allAnswers.htmlAnswers[html]) {
            score += boxValue;
            playAudio(correct);
            document.getElementById("answering").innerHTML = `Correct! The answer is ${allAnswers.htmlAnswers[html]}! You just added $${boxValue} to your funds!`;
            encouragement();
        } else {
            alert(`Sorry! The answer was ${allAnswers.htmlAnswers[html]}`)
            playAudio(wrong);
        }
        masterFunction();
        html++, questionAttempts++;
    } else if (html === 2) {
        const answer = prompt(allQuestions.htmlQuestions[html])
        const lowercased = answer.toLowerCase();
        if (lowercased === allAnswers.htmlAnswers[html]) {
            score = score + boxValue;
            playAudio(correct);
            document.getElementById("answering").innerHTML = `Correct! The answer is ${allAnswers.htmlAnswers[html]}! You just added $${boxValue} to your funds!`;
            encouragement();
        } else {
            alert(`Sorry! The answer was ${allAnswers.htmlAnswers[html]}`);
            playAudio(wrong);
        }
        masterFunction();
        html++, questionAttempts++;
    } else if (html === 3) {
        const answer = prompt(allQuestions.htmlQuestions[html])
        const lowercased = answer.toLowerCase();
        if (lowercased === allAnswers.htmlAnswers[html]) {
            score = score + boxValue;
            playAudio(correct);
            document.getElementById("answering").innerHTML = `Correct! The answer is ${allAnswers.htmlAnswers[html]}! You just added $${boxValue} to your funds!`;
            encouragement();
        } else {
            alert(`Sorry! The answer was ${allAnswers.htmlAnswers[html]}`);
            playAudio(wrong);
        }
        masterFunction();
        html++, questionAttempts++;
    } else {
        const answer = prompt(allQuestions.htmlQuestions[html])
        const lowercased = answer.toLowerCase();
        if (lowercased === allAnswers.htmlAnswers[html]) {
            score = score + boxValue;
            playAudio(correct);
            document.getElementById("answering").innerHTML = `Correct! The answer is ${allAnswers.htmlAnswers[html]}! You just added $${boxValue} to your funds!`;
            encouragement();
        } else {
            alert(`Sorry! The answer was ${allAnswers.htmlAnswers[html]}`);
            playAudio(wrong);
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
        const lowercased = answer.toLowerCase();
        if (lowercased === allAnswers.cssAnswers[css]) {
            score = score + boxValue;
            playAudio(correct);
            document.getElementById("answering").innerHTML = `Correct! The answer is ${allAnswers.cssAnswers[css]}! You just added $${boxValue} to your funds!`;
            encouragement();
        } else {  
            alert(`Sorry! The answer was ${allAnswers.cssAnswers[css]}`);
            playAudio(wrong);
        }
        masterFunction();
        css++; 
        console.log(css)
        questionAttempts++;
    } else if (css === 1) {
        const answer = prompt(allQuestions.cssQuestions[css])
        const lowercased = answer.toLowerCase();
        if (lowercased === allAnswers.cssAnswers[css]) {
            score = score + boxValue;
            playAudio(correct);
            document.getElementById("answering").innerHTML = `Correct! The answer is ${allAnswers.cssAnswers[css]}! You just added $${boxValue} to your funds!`;
            encouragement();
        } else {
            alert(`Sorry! The answer was ${allAnswers.cssAnswers[css]}`);
            playAudio(wrong);
        }
        masterFunction();
        css++, questionAttempts++;
    } else if (css === 2) {
        const answer = prompt(allQuestions.cssQuestions[css])
        const lowercased = answer.toLowerCase();
        if (lowercased === allAnswers.cssAnswers[css]) {
            score = score + boxValue;
            playAudio(correct);
            document.getElementById("answering").innerHTML = `Correct! The answer is ${allAnswers.cssAnswers[css]}! You just added $${boxValue} to your funds!`;
            encouragement();
        } else {
            alert(`Sorry! The answer was ${allAnswers.cssAnswers[css]}`);
            playAudio(wrong);
        }
        masterFunction();
        css++, questionAttempts++;
    } else if (css === 3) {
        const answer = prompt(allQuestions.cssQuestions[css])
        const lowercased = answer.toLowerCase();
        if (lowercased === allAnswers.cssAnswers[css]) {
            score = score + boxValue;
            playAudio(correct);
            document.getElementById("answering").innerHTML = `Correct! The answer is ${allAnswers.cssAnswers[css]}! You just added $${boxValue} to your funds!`;
            encouragement();
        } else {
            alert(`Sorry! The answer was ${allAnswers.cssAnswers[css]}`);
            playAudio(wrong);
        }
        masterFunction();
        css++, questionAttempts++;
    } else {
        const answer = prompt(allQuestions.cssQuestions[css])
        const lowercased = answer.toLowerCase();
        if (lowercased === allAnswers.cssAnswers[css]) {
            score = score + boxValue;
            playAudio(correct);
            document.getElementById("answering").innerHTML = `Correct! The answer is ${allAnswers.cssAnswers[css]}! You just added $${boxValue} to your funds!`;
            encouragement();
        } else {
            alert(`Sorry! The answer was ${allAnswers.cssAnswers[css]}`);
            playAudio(wrong);
        }
        masterFunction();
        css++, questionAttempts++;
    }
    checkDailyDouble();
    checkEndOfGame();
}

function jsQuestion(box, boxValue) {

    box.style.background = 'white';
    box.style.color = 'white';
    box.onclick = null;

    if (js === 0) {
        const answer = prompt(allQuestions.javaScriptQuestions[js]);
        const lowercased = answer.toLowerCase();
        if (lowercased === allAnswers.javaScriptAnswers[js]) {
            score = score + boxValue;
            playAudio(correct);
            document.getElementById("answering").innerHTML = `Correct! The answer is ${allAnswers.javaScriptAnswers[js]}! You just added $${boxValue} to your funds!`;
            encouragement();
        } else {
            alert(`Sorry! The answer was ${allAnswers.javaScriptAnswers[js]}`);
            playAudio(wrong);
        }
        masterFunction();
        js++, questionAttempts++;
    } else if (js === 1) {
        const answer = prompt(allQuestions.javaScriptQuestions[js]);
        const lowercased = answer.toLowerCase();
        if (lowercased === allAnswers.javaScriptAnswers[js]) {
            score = score + boxValue;
            playAudio(correct);
            document.getElementById("answering").innerHTML = `Correct! The answer is ${allAnswers.javaScriptAnswers[js]}! You just added $${boxValue} to your funds!`;
            encouragement();
        } else {
            alert(`Sorry! The answer was ${allAnswers.javaScriptAnswers[js]}`);
            playAudio(wrong);
        }
        masterFunction();
        js++, questionAttempts++;
    } else if (js === 2) {
        const answer = prompt(allQuestions.javaScriptQuestions[js])
        const lowercased = answer.toLowerCase();
        if (lowercased === allAnswers.javaScriptAnswers[js]) {
            score = score + boxValue;
            playAudio(correct);
            document.getElementById("answering").innerHTML = `Correct! The answer is ${allAnswers.javaScriptAnswers[js]}! You just added $${boxValue} to your funds!`;
            encouragement();
        } else {
            alert(`Sorry! The answer was ${allAnswers.javaScriptAnswers[js]}`);
            playAudio(wrong);
        }
        masterFunction();
        js++, questionAttempts++;
    } else if (js === 3) {
        const answer = prompt(allQuestions.javaScriptQuestions[js])
        const lowercased = answer.toLowerCase();
        if (lowercased === allAnswers.javaScriptAnswers[js]) {
            score = score + boxValue;
            playAudio(correct);
            document.getElementById("answering").innerHTML = `Correct! The answer is ${allAnswers.javaScriptAnswers[js]}! You just added $${boxValue} to your funds!`;
            encouragement();
        } else {
            alert(`Sorry! The answer was ${allAnswers.javaScriptAnswers[js]}`);
            playAudio(wrong);
        }
        masterFunction();
        js++, questionAttempts++;
    } else {
        const answer = prompt(allQuestions.javaScriptQuestions[js]);
        const lowercased = answer.toLowerCase();
        if (lowercased === allAnswers.javaScriptAnswers[js]) {
            score = score + boxValue;
            playAudio(correct);
            document.getElementById("answering").innerHTML = `Correct! The answer is ${allAnswers.javaScriptAnswers[js]}! You just added $${boxValue} to your funds!`;
            encouragement();
        } else {
            alert(`Sorry! The answer was ${allAnswers.javaScriptAnswers[js]}`);
            playAudio(wrong);
        }
        masterFunction();
        js++, questionAttempts++;
    }
    checkDailyDouble();
    checkEndOfGame();
}

function jqueryQuestion(box, boxValue) {

    box.style.background = 'white';
    box.style.color = 'white';
    box.onclick = null;

    if (jquery === 0) {
        const answer = prompt(allQuestions.jQueryQuestions[jquery]);
        const lowercased = answer.toLowerCase();
        if (lowercased === allAnswers.jQueryAnswers[jquery]) {
            score = score + boxValue;
            playAudio(correct);
            document.getElementById("answering").innerHTML = `Correct! The answer is ${allAnswers.jQueryAnswers[jquery]}! You just added $${boxValue} to your funds!`;
            encouragement();
        } else {
            alert(`Sorry! The answer was ${allAnswers.jQueryAnswers[jquery]}`);
            playAudio(wrong);
        }
        masterFunction();
        jquery++, questionAttempts++;
    } else if (jquery === 1) {
        const answer = prompt(allQuestions.jQueryQuestions[jquery]);
        const lowercased = answer.toLowerCase();
        if (lowercased === allAnswers.jQueryAnswers[jquery]) {
            score = score + boxValue;
            playAudio(correct);
            document.getElementById("answering").innerHTML = `Correct! The answer is ${allAnswers.jQueryAnswers[jquery]}! You just added $${boxValue} to your funds!`;
            encouragement();
        } else {
            alert(`Sorry! The answer was ${allAnswers.jQueryAnswers[jquery]}`);
            playAudio(wrong);
        }
        masterFunction();
        jquery++, questionAttempts++;
    } else if (jquery === 2) {
        const answer = prompt(allQuestions.jQueryQuestions[jquery]);
        const lowercased = answer.toLowerCase();
        if (lowercased === allAnswers.jQueryAnswers[jquery]) {
            score = score + boxValue;
            playAudio(correct);
            document.getElementById("answering").innerHTML = `Correct! The answer is ${allAnswers.jQueryAnswers[jquery]}! You just added $${boxValue} to your funds!`;
            encouragement();
        } else {
            alert(`Sorry! The answer was ${allAnswers.jQueryAnswers[jquery]}`);
            playAudio(wrong);
        }
        masterFunction();
        jquery++, questionAttempts++;
    } else if (jquery === 3) {
        const answer = prompt(allQuestions.jQueryQuestions[jquery]);
        const lowercased = answer.toLowerCase();
        if (lowercased === allAnswers.jQueryAnswers[jquery]) {
            score = score + boxValue;
            playAudio(correct);
            document.getElementById("answering").innerHTML = `Correct! The answer is ${allAnswers.jQueryAnswers[jquery]}! You just added $${boxValue} to your funds!`;
            encouragement();
        } else {
            alert(`Sorry! The answer was ${allAnswers.jQueryAnswers[jquery]}`);
            playAudio(wrong);
        }
        masterFunction();
        jquery++, questionAttempts++;
    } else {
        const answer = prompt(allQuestions.jQueryQuestions[jquery]);
        const lowercased = answer.toLowerCase();
        if (lowercased === allAnswers.jQueryAnswers[jquery]) {
            score = score + boxValue;
            playAudio(correct);
            document.getElementById("answering").innerHTML = `Correct! The answer is ${allAnswers.jQueryAnswers[jquery]}! You just added $${boxValue} to your funds!`;
            encouragement();
        } else {
            alert(`Sorry! The answer was ${allAnswers.jQueryAnswers[jquery]}`);
            playAudio(wrong);
        }
        masterFunction();
        jquery++, questionAttempts++;
    }
    checkDailyDouble();
    checkEndOfGame();
}

function reactQuestion(box, boxValue) {

    box.style.background = 'white';
    box.style.color = 'white';
    box.onclick = null;


    if (react === 0) {
        const answer = prompt(allQuestions.reactQuestions[react]);
        const lowercased = answer.toLowerCase();
        if (lowercased === allAnswers.reactAnswers[react]) {
            score = score + boxValue;
            playAudio(correct);
            document.getElementById("answering").innerHTML = `Correct! The answer is ${allAnswers.reactAnswers[react]}! You just added $${boxValue} to your funds!`;
            encouragement();
        } else {
            alert(`Sorry! The answer was ${allAnswers.reactAnswers[react]}`);
            playAudio(wrong);
        }
        masterFunction();
        react++, questionAttempts++;
    } else if (react === 1) {
        const answer = prompt(allQuestions.reactQuestions[react])
        const lowercased = answer.toLowerCase();
        if (lowercased === allAnswers.reactAnswers[react]) {
            score = score + boxValue;
            playAudio(correct);
            document.getElementById("answering").innerHTML = `Correct! The answer is ${allAnswers.reactAnswers[react]}! You just added $${boxValue} to your funds!`;
            encouragement();
        } else {
            alert(`Sorry! The answer was ${allAnswers.reactAnswers[react]}`);
            playAudio(wrong);
        }
        masterFunction();
        react++, questionAttempts++;
    } else if (react === 2) {
        const answer = prompt(allQuestions.reactQuestions[react])
        if (answer === allAnswers.reactAnswers[react]) {
            score = score + boxValue;
            playAudio(correct);
            document.getElementById("answering").innerHTML = `Correct! The answer is ${allAnswers.reactAnswers[react]}! You just added $${boxValue} to your funds!`;
            encouragement();
        } else {
            alert(`Sorry! The answer was ${allAnswers.reactAnswers[react]}`);
            playAudio(wrong);
        }
        masterFunction();
        react++, questionAttempts++;
    } else if (react === 3) {
        const answer = prompt(allQuestions.reactQuestions[react])
        const lowercased = answer.toLowerCase();
        if (lowercased === allAnswers.reactAnswers[react]) {
            score = score + boxValue;
            playAudio(correct);
            document.getElementById("answering").innerHTML = `Correct! The answer is ${allAnswers.reactAnswers[react]}! You just added $${boxValue} to your funds!`;
            encouragement();
        } else {
            alert(`Sorry! The answer was ${allAnswers.reactAnswers[react]}`);
            playAudio(wrong);
        }
        masterFunction();
        react++, questionAttempts++;
    } else {
        const answer = prompt(allQuestions.reactQuestions[react]);
        const lowercased = answer.toLowerCase();
        if (lowercased === allAnswers.reactAnswers[react]) {
            score = score + boxValue;
            playAudio(correct);
            document.getElementById("answering").innerHTML = `Correct! The answer is ${allAnswers.reactAnswers[react]}! You just added $${boxValue} to your funds!`;
            encouragement();
        } else {
            alert(`Sorry! The answer was ${allAnswers.reactAnswers[react]}`);
            playAudio(wrong);
        }
        masterFunction();
        react++, questionAttempts++;
    }
    checkDailyDouble();
    checkEndOfGame();
}

