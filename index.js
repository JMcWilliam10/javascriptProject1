const box = document.querySelector('box');
const hidden = document.querySelector('hidden');
let score = 0;
let html = 0,
css = 0,
js = 0,
jquery = 0,
react = 0;

function bounce(){
    document.querySelector("h1").classList.toggle("bounce", "animated");
}
bounce();

function playAudio(placeholder) {
    placeholder.play();
}

let questionAttempts = 0;
let randomNumber = Math.floor(Math.random() * 25 + 1);
// console.log(`Random number =${randomNumber}`)
console.log(questionAttempts)

const checkDailyDouble = function(){
    if(randomNumber === questionAttempts) {
        // document.querySelector('body').style.background = 'white';
        playAudio(dailyDouble);
        
        dailyDoubleAnswer = prompt(`DAILY DOUBLE! What is the best college of technology?`);
        if(dailyDoubleAnswer === 'hackeryou'){
           score += 5000
           document.getElementById("theScore").innerHTML = score;
           playAudio(eye);
        }
    }
}

// const endGame = function(){
//     if(questionAttempts === 3){
//         location.reload();
//     }
// }

const allQuestions = {
    htmlQuestions: ["aHTML Question 1", "HTML Question 2", "HTML Question 3", "HTML Question 4", "HTML Question 5"],
    cssQuestions: ["CSS Question 1", "CSS Question 2", "CSS Question 3", "CSS Question 4", "CSS Question 5"],
    javaScriptQuestions: ["javaScript question 1", "javaScript question 2", "javaScript question 3", "javaScript question 4", "javaScript question 5"],
    jQueryQuestions: ["jQuery Question 1", "jQuery Question 2", "jQuery Question 3", "jQuery Question 4", "jQuery Question 5"],
    reactQuestions: ["React Question 1", "React Question 2", "React Question 3", "React Question 4", "React Question 5"]
}
const wrongAnswer = function(){
    playAudio(wrong);
}
function questionComplete(){
    box.style.background = 'white';
    box.style.color = 'white';

}
function masterFunction(){
    animate();
    increment();
    updateScore();
}

function animate(){
    document.querySelector('.rotate').classList.add('flip');
}
function increment(){
    html++, questionAttempts++;
}
function updateScore(){
    document.querySelector("#theScore").innerHTML = score;
    document.querySelector("#theScore2").innerHTML = score;
}
// function 
function htmlQuestion(box, boxValue) {
    
    box.style.background = 'white';
    box.style.color = 'white';
    box.onclick = null;

    if (html === 0) {
        const answer = prompt(allQuestions.htmlQuestions[0])
        if (answer === 'yes') {
            score = score + boxValue;
            alert(`Correct! You just won $${boxValue}, your total funds are $${score}`);
            playAudio(correct);
        } else {
           wrongAnswer();
        }
        masterFunction();
    } else if (html === 1) {
        const answer = prompt(allQuestions.htmlQuestions[1])
        if (answer === 'yes') {
            score = score + boxValue;
            alert(`Correct! You just won $${boxValue}, your total funds are $${score}`)
            playAudio(correct);
        } else {
            wrongAnswer();
        }
        increment();
        document.getElementById("theScore").innerHTML = score;
    } else if (html === 2) {
        const answer = prompt(allQuestions.htmlQuestions[2])
        if (answer === 'yes') {
            score = score + boxValue;
            alert(`Correct! It is aDIV selector. You just won $${boxValue}, your total funds are $${score}`)
            playAudio(correct);
        } else {
            wrongAnswer();
        }
        html++, questionAttempts++;
        document.getElementById("theScore").innerHTML = score;
    } else if (html === 3) {
        const answer = prompt(allQuestions.htmlQuestions[3])
        if (answer === 'yes') {
            score = score + boxValue;
            alert(`Correct! It is aDIV selector. You just won $${boxValue}, your total funds are $${score}`)
            playAudio(correct);
        } else {
            wrongAnswer();
        }
        html++, questionAttempts++;
        document.getElementById("theScore").innerHTML = score;
    } else {
        const answer = prompt(allQuestions.htmlQuestions[4])
        if (answer === 'yes') {
            alert(`Correct! It is aDIV selector. You just won $${boxValue}, your total funds are $${score}`)
            score = score + boxValue;
            playAudio(correct);
        } else {
            wrongAnswer();
        }
        html++, questionAttempts++;
        document.getElementById("theScore").innerHTML = score;
    }
    checkDailyDouble();
}

function cssQuestion(box, boxValue) {

    box.style.background = 'white';
    box.style.color = 'white';
    box.onclick = null;

    if (css === 0) {
        const answer = prompt(allQuestions.cssQuestions[0])
        if (answer === 'yes') {
            score = score + boxValue;
            alert(`Correct! It is a CSS selector. You just won $${boxValue}, your total funds are $${score}`)
            playAudio(correct);
        } else {
            wrongAnswer();
        }
        css++, questionAttempts++;
        document.getElementById("theScore").innerHTML = score;
    } else if (css === 1) {
        const answer = prompt(allQuestions.cssQuestions[1])
        if (answer === 'yes') {
            score = score + boxValue;
            alert(`Correct! It is aDIV selector. You just won $${boxValue}, your total funds are $${score}`)
            playAudio(correct);
        } else {
            wrongAnswer();
        }
        css++, questionAttempts++;
        document.getElementById("theScore").innerHTML = score;
    } else if (css === 2) {
        const answer = prompt(allQuestions.cssQuestions[2])
        if (answer === 'yes') {
            score = score + boxValue;
            alert(`Correct! It is aDIV selector. You just won $${boxValue}, your total funds are $${score}`)
            playAudio(correct);
        } else {
            wrongAnswer();
        }
        css++, questionAttempts++;
        document.getElementById("theScore").innerHTML = score;
    } else if (css === 3) {
        const answer = prompt(allQuestions.cssQuestions[3])
        if (answer === 'yes') {
            score = score + boxValue;
            alert(`Correct! It is aDIV selector. You just won $${boxValue}, your total funds are $${score}`)
            playAudio(correct);
        } else {
            wrongAnswer();
        }
        css++, questionAttempts++;
        document.getElementById("theScore").innerHTML = score;
    } else {
        const answer = prompt(allQuestions.cssQuestions[4])
        if (answer === 'yes') {
            alert(`Correct! It is aDIV selector. You just won $${boxValue}, your total funds are $${score}`)
            score = score + boxValue;
            playAudio(correct);
        } else {
            wrongAnswer();
        }
        css++, questionAttempts++;
        document.getElementById("theScore").innerHTML = score;
    }
    checkDailyDouble();
}

function jsQuestion(box, boxValue) {

    box.style.background = 'white';
    box.style.color = 'white';
    box.onclick = null;


    if (js === 0) {
        const answer = prompt(allQuestions.javaScriptQuestions[0])
        if (answer === 'yes') {
            score = score + boxValue;
            alert(`Correct! It is a CSS selector. You just won $${boxValue}, your total funds are $${score}`)
            playAudio(correct);
        } else {
            wrongAnswer();
        }
        js++, questionAttempts++;
        document.getElementById("theScore").innerHTML = score;
    } else if (css === 1) {
        const answer = prompt(allQuestions.javaScriptQuestions[1])
        if (answer === 'yes') {
            score = score + boxValue;
            alert(`Correct! It is aDIV selector. You just won $${boxValue}, your total funds are $${score}`)
            playAudio(correct);
        } else {
            wrongAnswer();
        }
        js++, questionAttempts++;
        document.getElementById("theScore").innerHTML = score;
    } else if (css === 2) {
        const answer = prompt(allQuestions.javaScriptQuestions[2])
        if (answer === 'yes') {
            score = score + boxValue;
            alert(`Correct! It is aDIV selector. You just won $${boxValue}, your total funds are $${score}`)
            playAudio(correct);
        } else {
            wrongAnswer();
        }
        js++, questionAttempts++;
        document.getElementById("theScore").innerHTML = score;
    } else if (css === 3) {
        const answer = prompt(allQuestions.javaScriptQuestions[3])
        if (answer === 'yes') {
            score = score + boxValue;
            alert(`Correct! It is aDIV selector. You just won $${boxValue}, your total funds are $${score}`)
            playAudio(correct);
        } else {
            wrongAnswer();
        }
        js++, questionAttempts++;
        document.getElementById("theScore").innerHTML = score;
    } else {
        const answer = prompt(allQuestions.javaScriptQuestions[4])
        if (answer === 'yes') {
            alert(`Correct! It is aDIV selector. You just won $${boxValue}, your total funds are $${score}`)
            playAudio(correct);
            score = score + boxValue;
        } else {
            wrongAnswer();
        }
        js++, questionAttempts++;
        document.getElementById("theScore").innerHTML = score;
    }
    checkDailyDouble();
}

function jqueryQuestion(box, boxValue) {

    box.style.background = 'white';
    box.style.color = 'white';
    box.onclick = null;


    if (jquery === 0) {
        const answer = prompt(allQuestions.javaScriptQuestions[0])
        if (answer === 'yes') {
            score = score + boxValue;
            alert(`Correct! It is a CSS selector. You just won $${boxValue}, your total funds are $${score}`)
            playAudio(correct);
        } else {
            wrongAnswer();
        }
        jquery++, questionAttempts++;
        document.getElementById("theScore").innerHTML = score;
    } else if (css === 1) {
        const answer = prompt(allQuestions.javaScriptQuestions[1])
        if (answer === 'yes') {
            score = score + boxValue;
            alert(`Correct! It is aDIV selector. You just won $${boxValue}, your total funds are $${score}`)
            playAudio(correct);
        } else {
            wrongAnswer();
        }
        jquery++, questionAttempts++;
        document.getElementById("theScore").innerHTML = score;
    } else if (css === 2) {
        const answer = prompt(allQuestions.javaScriptQuestions[2])
        if (answer === 'yes') {
            score = score + boxValue;
            alert(`Correct! It is aDIV selector. You just won $${boxValue}, your total funds are $${score}`)
            playAudio(correct);
        } else {
            wrongAnswer();
        }
        jquery++, questionAttempts++;
        document.getElementById("theScore").innerHTML = score;
    } else if (css === 3) {
        const answer = prompt(allQuestions.javaScriptQuestions[3])
        if (answer === 'yes') {
            score = score + boxValue;
            alert(`Correct! It is aDIV selector. You just won $${boxValue}, your total funds are $${score}`)
            playAudio(correct);
        } else {
            wrongAnswer();
        }
        jquery++, questionAttempts++;
        document.getElementById("theScore").innerHTML = score;
    } else {
        const answer = prompt(allQuestions.javaScriptQuestions[4])
        if (answer === 'yes') {
            alert(`Correct! It is aDIV selector. You just won $${boxValue}, your total funds are $${score}`)
            score = score + boxValue;
            playAudio(correct);
        } else {
            wrongAnswer();
        }
        jquery++, questionAttempts++;
        document.getElementById("theScore").innerHTML = score;
    }
    checkDailyDouble();
}
function reactQuestion(box, boxValue) {

    box.style.background = 'white';
    box.style.color = 'white';
    box.onclick = null;


    if (react === 0) {
        const answer = prompt(allQuestions.javaScriptQuestions[0])
        if (answer === 'yes') {
            score = score + boxValue;
            alert(`Correct! It is a CSS selector. You just won $${boxValue}, your total funds are $${score}`)
            playAudio(correct);
        } else {
            wrongAnswer();
        }
        react++, questionAttempts++;
        document.getElementById("theScore").innerHTML = score;
    } else if (css === 1) {
        const answer = prompt(allQuestions.javaScriptQuestions[1])
        if (answer === 'yes') {
            score = score + boxValue;
            alert(`Correct! It is aDIV selector. You just won $${boxValue}, your total funds are $${score}`)
            playAudio(correct);
        } else {
            wrongAnswer();
        }
        react++, questionAttempts++;
        document.getElementById("theScore").innerHTML = score;
    } else if (css === 2) {
        const answer = prompt(allQuestions.javaScriptQuestions[2])
        if (answer === 'yes') {
            score = score + boxValue;
            alert(`Correct! It is aDIV selector. You just won $${boxValue}, your total funds are $${score}`);
            playAudio(correct);
        } else {
            wrongAnswer();
        }
        react++, questionAttempts++;
        document.getElementById("theScore").innerHTML = score;
    } else if (css === 3) {
        const answer = prompt(allQuestions.javaScriptQuestions[3])
        if (answer === 'yes') {
            score = score + boxValue;
            alert(`Correct! It is aDIV selector. You just won $${boxValue}, your total funds are $${score}`)
            playAudio(correct);
        } else {
            wrongAnswer();
        }
        react++, questionAttempts++;
        document.getElementById("theScore").innerHTML = score;
    } else {
        const answer = prompt(allQuestions.javaScriptQuestions[4])
        if (answer === 'yes') {
            alert(`Correct! It is aDIV selector. You just won $${boxValue}, your total funds are $${score}`)
            score = score + boxValue;
            playAudio(correct);
        } else {
            wrongAnswer();
        }
        react++, questionAttempts++;
        document.getElementById("theScore").innerHTML = score;
    }
    checkDailyDouble();
}
