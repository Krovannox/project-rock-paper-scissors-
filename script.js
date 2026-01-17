function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();

    console.log(`Player choice: ${playerChoice}`);
    console.log(`Computer choice: ${computerChoice}`);

    if (computerChoice === playerChoice) {
        console.log('Tie');
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log('Victory');
    } else {
        console.log('Defeat');
    }
}

const gameButtons = document.querySelectorAll('.game-button');
gameButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playRound(e.currentTarget.dataset.value);
    });
});
/*

//Create variables for score
let humanScore = 0;
let computerScore = 0;
let tieScore = 0;

//Make a function to play 5 rounds
function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log(`You WON with a score of ${humanScore} against the computer score of ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`You LOST with a score of ${humanScore} against the computer score of ${computerScore}`);
    }
} */

//playGame();