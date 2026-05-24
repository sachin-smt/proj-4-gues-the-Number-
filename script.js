
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userIput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaning = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuesses = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
       const guess =  parseInt(userIput.value);
       validateGuess(guess);
       
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number')
    }else if(guess<1){
         alert('Number should be between 1 to 100')
    }else if (guess>100){
        alert('Number should be between 1 to 100, you are out of range')
    }else{
        prevGuess.push(guess);
        if(numGuesses === 11){
            displayGuess(guess);
            displayMessage(`Game Over . Random number was ${randomNumber}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`you guess it right`)
    }else if(guess < randomNumber){
        displayMessage(`Number is too low`)
    
    }else if(guess > randomNumber){
        displayMessage(`Number is too High`)
    }
}
function displayGuess(guess){
    userIput.value = '';
    guessSlot.innerHTML += `${guess}, `
    numGuesses++;
    remaning.innerHTML = `${11-numGuesses}`
}
function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}
function endGame(){
    userIput.value = '';
    userIput.setAttribute('disabled','')
    p.classList.add('button');
    p.innerHTML = `<h2 id ="newGame">Start</h2> `;
    startOver.appendChild(p)
    playGame = false;
    newGame();
}
function newGame(){
    const newButton = document.querySelector('#newGame')
    newButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuesses = 1;
        guessSlot.innerHTML = '';
        remaning.innerHTML = `${11-numGuesses}`;
        userIput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}