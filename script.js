function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();

    const playerChoiceDisplay = document.querySelector('#player-choice-display');
    playerChoiceDisplay.textContent = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
    console.log(`Player choice: ${playerChoice}`);

    const computerChoiceDisplay = document.querySelector('#computer-choice-display');
    computerChoiceDisplay.textContent = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
    console.log(`Computer choice: ${computerChoice}`);

    const resultDisplay = document.querySelector('#result-display');

    if (computerChoice === playerChoice) {
        resultDisplay.textContent = 'Tie';
        console.log('Tie');
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultDisplay.textContent = 'Victory';
        console.log('Victory');
    } else {
        resultDisplay.textContent = 'Defeat';
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