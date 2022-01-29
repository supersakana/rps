// VARIABLES
let userChoices = document.querySelectorAll('.choice');
let userScore = document.querySelector('.user-score');
let userPick = '';

let cpuChoices = ['rock', 'paper', 'scissors'];
let cpuScore = document.querySelector('.cpu-score');
let cpuPick = '';

let gameHistory = document.querySelector('.history');

// EVENTS

userChoices.forEach(choice => {
    choice.addEventListener('click', () => {
        userPick = choice.value;
        cpuPick = cpuChoices[Math.floor(Math.random() * cpuChoices.length)]
        playRound();
    })
})

// FUNCTIONS

function playRound(){
// User Picks Rock
    if(userPick == 'rock' && cpuPick == 'scissors'){
        gameHistory.innerHTML += 'User +1  Rock vs Scissors <br>';
        userScore.innerHTML++;

    } else if(userPick == 'rock' && cpuPick == 'paper'){
        gameHistory.innerHTML += 'CPU +1  Rock vs Paper <br>';
        cpuScore.innerHTML++;
    } else {
        gameHistory.innerHTML += 'Tie!  Rock vs Rock <br>';
    }
    break
// User Picks Paper
    if(userPick == 'paper' && cpuPick == 'rock'){
        gameHistory.innerHTML += 'User +1  Paper vs Rock <br>';
        userScore.innerHTML++;

    } else if(userPick == 'paper' && cpuPick == 'scissors'){
        gameHistory.innerHTML += 'CPU +1  Paper vs Scissors <br>';
        cpuScore.innerHTML++;
    } else {
        gameHistory.innerHTML += 'Tie!  Paper vs Paper <br>';
    }
    break
// User Picks Scissors
    if(userPick == 'scissors' && cpuPick == 'paper'){
        gameHistory.innerHTML += 'User +1  Scissors vs Paper <br>';
        userScore.innerHTML++;

    } else if(userPick == 'scissors' && cpuPick == 'rock'){
        gameHistory.innerHTML += 'CPU +1  Scissors vs Rock <br>';
        cpuScore.innerHTML++;
    } else {
        gameHistory.innerHTML += 'Tie!  Scissors vs Scissors <br>';
    }
    break
}
