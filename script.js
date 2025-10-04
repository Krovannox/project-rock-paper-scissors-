//Generate random number
function getComputerChoice() {
    let randomNumber = (Math.floor(Math.random() * 3) + 1);
    let computerChoice = '';

    switch (randomNumber) {
        case 1:
            computerChoice = 'rock';
            break;
        case 2:
            computerChoice = 'paper';
            break;
        case 3:
            computerChoice = 'scissors';
            break;
    }

    return computerChoice;

}

//Ask user input
function getHumanChoice() {
    let humanChoice = (prompt('Input your choice: ')).toLowerCase();
    return humanChoice;
}

//Create variables for score
let humanScore = 0;
let computerScore = 0;

//TESTING
playRound(humanSelection, computerSelection);