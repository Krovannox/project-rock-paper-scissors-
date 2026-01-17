let playerScore = 0;
let computerScore = 0;
let roundCounter = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

const playerChoiceDisplay = document.querySelector('#player-choice-display');
const computerChoiceDisplay = document.querySelector('#computer-choice-display');
const roundNumberDisplay = document.querySelector('#round-number-display');
const resultDisplay = document.querySelector('#result-display');

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();

    playerChoiceDisplay.textContent = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
    computerChoiceDisplay.textContent = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
    roundNumberDisplay.textContent = roundCounter + 1;

    if (computerChoice === playerChoice) {
        resultDisplay.textContent = 'Tie';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultDisplay.textContent = 'Victory';
        playerScore += 1;
    } else {
        resultDisplay.textContent = 'Defeat';
        computerScore += 1;
    }
}

const playerScoreDisplay = document.querySelector('#player-score-display');
const computerScoreDisplay = document.querySelector('#computer-score-display');
const gameResults = document.querySelector('.game-result');

const gameButtons = document.querySelectorAll('.game-button');
gameButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playRound(e.currentTarget.dataset.value);
        roundCounter += 1;
        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;

        if (roundCounter === 5) {
            gameButtons.forEach(button => button.disabled = true);
            const gameResultDisplay = document.createElement('p');
            
            if (playerScore > computerScore) {
                gameResultDisplay.textContent = 'You won the game!';
            } else if (computerScore > playerScore) {
                gameResultDisplay.textContent = 'You lost the game!';
            } else if (computerScore === playerScore) {
                gameResultDisplay.textContent = 'The game was a tie!';
            }

            gameResults.appendChild(gameResultDisplay);
        }
    });
});