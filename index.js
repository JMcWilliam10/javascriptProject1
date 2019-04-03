let box = document.querySelector('box');
let score = 0;

let allQuestions = {
    htmlQuestions: ["HTML Question 1", "HTML Question 2", "HTML Question 3", "HTML Question 4", "HTML Question 5"],
}
let htmlArray = ["HTML Question 1", "HTML Question 2", "HTML Question 3", "HTML Question 4", "HTML Question 5"];
// declare counters for each section
let i = 0, css = 0, javaScript = 0, jQuery = 0, react = 0;

function htmlQuestion(box, boxValue) {
    
    // const answer = prompt(htmlArray[i])
    // const answer = prompt('Question 1')
    box.style.background = 'white';
    box.style.color = 'white';
    box.onclick = null;
    

    if(i === 0){
        const answer = prompt(htmlArray[0])
        if (answer === 'yes') {
            score = score + boxValue;
            alert(`Correct! It is a CSS selector. You just won ${score}, your total funds are $${score}`)
        } else {
            alert('Sorry!')
        }
        i++
        document.getElementById("theScore").innerHTML = score;
    } else if(i === 1){
        const answer = prompt(htmlArray[1])
        if (answer === 'yes') {
            score = score + boxValue;
            alert(`Correct! It is aDIV selector. You just won ${score}, your total funds are $${score}`)
        } else {
            alert('Sorry!')
        }
        i++
        document.getElementById("theScore").innerHTML = score;
    } else if(i === 2){
        const answer = prompt(htmlArray[2])
        if (answer === 'yes') {
            score = score + boxValue;
            alert(`Correct! It is aDIV selector. You just won ${score}, your total funds are $${score}`)
        } else {
            alert('Sorry!')
        }
        i++
        document.getElementById("theScore").innerHTML = score;
    } else if(i === 3){
        const answer = prompt(htmlArray[3])
        if (answer === 'yes') {
            score = score + boxValue;
            alert(`Correct! It is aDIV selector. You just won ${score}, your total funds are $${score}`)
        } else {
            alert('Sorry!')
        }
        i++
        document.getElementById("theScore").innerHTML = score;
    } else{
        const answer = prompt(htmlArray[4])
        if (answer === 'yes') {
            alert(`Correct! It is aDIV selector. You just won ${score}, your total funds are $${score}`)
            score = score + boxValue;
        } else {
            alert('Sorry!')
        }
        i++
        document.getElementById("theScore").innerHTML = score;
    }
}
function cssQuestion(box, boxValue) {
    
    // const answer = prompt(htmlArray[i])
    // const answer = prompt('Question 1')
    box.style.background = 'white';
    box.style.color = 'white';
    box.onclick = null;
    

    if(css === 0){
        const answer = prompt(htmlArray[0])
        if (answer === 'yes') {
            score = score + boxValue;
            alert(`Correct! It is a CSS selector. You just won ${score}, your total funds are $${score}`)
        } else {
            alert('Sorry!')
        }
        i++
        document.getElementById("theScore").innerHTML = score;
    } else if(css === 1){
        const answer = prompt(htmlArray[1])
        if (answer === 'yes') {
            score = score + boxValue;
            alert(`Correct! It is aDIV selector. You just won ${score}, your total funds are $${score}`)
        } else {
            alert('Sorry!')
        }
        i++
        document.getElementById("theScore").innerHTML = score;
    } else if(css === 2){
        const answer = prompt(htmlArray[2])
        if (answer === 'yes') {
            score = score + boxValue;
            alert(`Correct! It is aDIV selector. You just won ${score}, your total funds are $${score}`)
        } else {
            alert('Sorry!')
        }
        i++
        document.getElementById("theScore").innerHTML = score;
    } else if(css === 3){
        const answer = prompt(htmlArray[3])
        if (answer === 'yes') {
            score = score + boxValue;
            alert(`Correct! It is aDIV selector. You just won ${score}, your total funds are $${score}`)
        } else {
            alert('Sorry!')
        }
        i++
        document.getElementById("theScore").innerHTML = score;
    } else{
        const answer = prompt(htmlArray[4])
        if (answer === 'yes') {
            alert(`Correct! It is aDIV selector. You just won ${score}, your total funds are $${score}`)
            score = score + boxValue;
        } else {
            alert('Sorry!')
        }
        i++
        document.getElementById("theScore").innerHTML = score;
    }
}



    // CSS 








