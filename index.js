const box = document.querySelector('box');
const hidden = document.querySelector('hidden');
let score = 0;
let html = 0,
css = 0,
js = 0,
jQuery = 0,
react = 0;

//  AUDIO

function playAudio(placeholder) {
    placeholder.play();
}

let questionAttempts = 0;
let randomNumber = Math.round(Math.random() * (5 - 1) + 1);
// console.log(`Random number =${randomNumber}`)
console.log(questionAttempts)
if (randomNumber === questionAttempts) {
}

const allQuestions = {
    htmlQuestions: ["aHTML Question 1", "HTML Question 2", "HTML Question 3", "HTML Question 4", "HTML Question 5"],
    cssQuestions: ["CSS Question 1", "CSS Question 2", "CSS Question 3", "CSS Question 4", "CSS Question 5"],
    javaScriptQuestions: ["javaScript question 1", "javaScript question 2", "javaScript question 3", "javaScript question 4", "javaScript question 5"],
    jQueryQuestions: ["jQuery Question 1", "jQuery Question 2", "jQuery Question 3", "jQuery Question 4", "jQuery Question 5"],
    reactQuestions: ["React Question 1", "React Question 2", "React Question 3", "React Question 4", "React Question 5"]
}
const wrongAnswer = function(){
    playAudio(wrong);
    setTimeout( alert('Sorry!'), 1000)
}
function htmlQuestion(box, boxValue) {
    
    // toggle class
    // position: absolute;
    // top: 0;
    // width: 100%;
    // height: 100%;
    // background: red;
    // display: none;
    box.style.background = 'white';
    box.style.color = 'white';

    // box.style.position = 'absolute'
    box.onclick = null;


    if (html === 0) {
        const answer = prompt(allQuestions.htmlQuestions[0])
        if (answer === 'yes') {
            score = score + boxValue;
            alert(`Correct! It is a CSS selector. You just won $${boxValue}, your total funds are $${score}`);
            playAudio(correct);
        } else {
           wrongAnswer();
        }
        html++, questionAttempts++;
        document.getElementById("theScore").innerHTML = score;
    } else if (html === 1) {
        const answer = prompt(allQuestions.htmlQuestions[1])
        if (answer === 'yes') {
            score = score + boxValue;
            alert(`Correct! It is aDIV selector. You just won $${boxValue}, your total funds are $${score}`)
            playAudio(correct);
        } else {
            alert('Sorry!')
        }
        html++, questionAttempts++;
        document.getElementById("theScore").innerHTML = score;
    } else if (html === 2) {
        const answer = prompt(allQuestions.htmlQuestions[2])
        if (answer === 'yes') {
            score = score + boxValue;
            alert(`Correct! It is aDIV selector. You just won $${boxValue}, your total funds are $${score}`)
            playAudio(correct);
        } else {
            alert('Sorry!')
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
            alert('Sorry!')
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
            alert('Sorry!')
        }
        html++, questionAttempts++;
        document.getElementById("theScore").innerHTML = score;
    }
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
        } else {
            alert('Sorry!')
        }
        css++, questionAttempts++;
        document.getElementById("theScore").innerHTML = score;
    } else if (css === 1) {
        const answer = prompt(allQuestions.cssQuestions[1])
        if (answer === 'yes') {
            score = score + boxValue;
            alert(`Correct! It is aDIV selector. You just won $${boxValue}, your total funds are $${score}`)
        } else {
            alert('Sorry!')
        }
        css++, questionAttempts++;
        document.getElementById("theScore").innerHTML = score;
    } else if (css === 2) {
        const answer = prompt(allQuestions.cssQuestions[2])
        if (answer === 'yes') {
            score = score + boxValue;
            alert(`Correct! It is aDIV selector. You just won $${boxValue}, your total funds are $${score}`)
        } else {
            alert('Sorry!')
        }
        css++, questionAttempts++;
        document.getElementById("theScore").innerHTML = score;
    } else if (css === 3) {
        const answer = prompt(allQuestions.cssQuestions[3])
        if (answer === 'yes') {
            score = score + boxValue;
            alert(`Correct! It is aDIV selector. You just won $${boxValue}, your total funds are $${score}`)
        } else {
            alert('Sorry!')
        }
        css++, questionAttempts++;
        document.getElementById("theScore").innerHTML = score;
    } else {
        const answer = prompt(allQuestions.cssQuestions[4])
        if (answer === 'yes') {
            alert(`Correct! It is aDIV selector. You just won $${boxValue}, your total funds are $${score}`)
            score = score + boxValue;
        } else {
            alert('Sorry!')
        }
        css++, questionAttempts++;
        document.getElementById("theScore").innerHTML = score;
    }
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
        } else {
            alert('Sorry!')
        }
        js++, questionAttempts++;
        document.getElementById("theScore").innerHTML = score;
    } else if (css === 1) {
        const answer = prompt(allQuestions.javaScriptQuestions[1])
        if (answer === 'yes') {
            score = score + boxValue;
            alert(`Correct! It is aDIV selector. You just won $${boxValue}, your total funds are $${score}`)
        } else {
            alert('Sorry!')
        }
        js++, questionAttempts++;
        document.getElementById("theScore").innerHTML = score;
    } else if (css === 2) {
        const answer = prompt(allQuestions.javaScriptQuestions[2])
        if (answer === 'yes') {
            score = score + boxValue;
            alert(`Correct! It is aDIV selector. You just won $${boxValue}, your total funds are $${score}`)
        } else {
            alert('Sorry!')
        }
        js++, questionAttempts++;
        document.getElementById("theScore").innerHTML = score;
    } else if (css === 3) {
        const answer = prompt(allQuestions.javaScriptQuestions[3])
        if (answer === 'yes') {
            score = score + boxValue;
            alert(`Correct! It is aDIV selector. You just won $${boxValue}, your total funds are $${score}`)
        } else {
            alert('Sorry!')
        }
        js++, questionAttempts++;
        document.getElementById("theScore").innerHTML = score;
    } else {
        const answer = prompt(allQuestions.javaScriptQuestions[4])
        if (answer === 'yes') {
            alert(`Correct! It is aDIV selector. You just won $${boxValue}, your total funds are $${score}`)
            score = score + boxValue;
        } else {
            alert('Sorry!')
        }
        js++, questionAttempts++;
        document.getElementById("theScore").innerHTML = score;
    }

}

function jqueryQuestion(box, boxValue) {

    box.style.background = 'white';
    box.style.color = 'white';
    box.onclick = null;


    if (js === 0) {
        const answer = prompt(allQuestions.javaScriptQuestions[0])
        if (answer === 'yes') {
            score = score + boxValue;
            alert(`Correct! It is a CSS selector. You just won $${boxValue}, your total funds are $${score}`)
        } else {
            alert('Sorry!')
        }
        js++, questionAttempts++;
        document.getElementById("theScore").innerHTML = score;
    } else if (css === 1) {
        const answer = prompt(allQuestions.javaScriptQuestions[1])
        if (answer === 'yes') {
            score = score + boxValue;
            alert(`Correct! It is aDIV selector. You just won $${boxValue}, your total funds are $${score}`)
        } else {
            alert('Sorry!')
        }
        js++, questionAttempts++;
        document.getElementById("theScore").innerHTML = score;
    } else if (css === 2) {
        const answer = prompt(allQuestions.javaScriptQuestions[2])
        if (answer === 'yes') {
            score = score + boxValue;
            alert(`Correct! It is aDIV selector. You just won $${boxValue}, your total funds are $${score}`)
        } else {
            alert('Sorry!')
        }
        js++, questionAttempts++;
        document.getElementById("theScore").innerHTML = score;
    } else if (css === 3) {
        const answer = prompt(allQuestions.javaScriptQuestions[3])
        if (answer === 'yes') {
            score = score + boxValue;
            alert(`Correct! It is aDIV selector. You just won $${boxValue}, your total funds are $${score}`)
        } else {
            alert('Sorry!')
        }
        js++, questionAttempts++;
        document.getElementById("theScore").innerHTML = score;
    } else {
        const answer = prompt(allQuestions.javaScriptQuestions[4])
        if (answer === 'yes') {
            alert(`Correct! It is aDIV selector. You just won $${boxValue}, your total funds are $${score}`)
            score = score + boxValue;
        } else {
            alert('Sorry!')
        }
        js++, questionAttempts++;
        document.getElementById("theScore").innerHTML = score;
    }

}


// Todos
// direct each question at object, then array

// Think about the daily double 
// Array of all [i] sum
// rand()
// if randSum = sun of I
// then do this
// else
//     do nothing