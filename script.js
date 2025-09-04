const OUTCOMES = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
};

// Generate random number between 0-2
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Generate computer choice
function getComputerChoice() {
    let randomInt = getRandomInt(3);

    switch (randomInt) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

// Get human choice
function getHumanChoice() {
    let humanChoice = prompt("Choose 'rock', 'paper' or 'scissors':");
    return humanChoice.toLocaleLowerCase();
}

function playGame() {
    // Initialize variables to store human score, computer score, and game round
    let humanScore = 0, computerScore = 0;
    let round = 0;

    // Function for one game round
    function playRound(humanChoice, computerChoice) {
        console.log(`Player choice is ${humanChoice}.`);
        console.log(`Computer choice is ${computerChoice}.`);

        if (humanChoice === computerChoice) {
            console.log(`It's a tie! Both chose ${humanChoice}.`);
        } else if (OUTCOMES[humanChoice] === computerChoice) {
            humanScore += 1;
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        } else {
            computerScore += 1;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        }

        return `Your score is ${humanScore} | Computer score is ${computerScore}`
    }

    while (round < 5) {
        console.log(playRound(getHumanChoice(), getComputerChoice()));
        round += 1;
    }
}

playGame();