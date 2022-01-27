// VARIABLES
let userChoices = document.querySelectorAll('.choice');
let userPick = '';

let cpuChoices = ['rock', 'paper', 'scissors'];
let cpuPick = cpuChoices[Math.floor(Math.random() * cpuChoices.length)];

// EVENTS

userChoices.forEach(choice => {
    choice.addEventListener('click', () => {
        userPick = choice.value;
        console.log(userPick + ' vs ' + cpuPick);
    })
})




// FUNCTIONS
