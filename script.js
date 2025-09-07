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

function playGame() {
    // Initialize variables to store human score, computer score, and game round
    let humanScore = 0, computerScore = 0;
    let round = 0;

    function gameOver() {
        if (humanScore == computerScore) {
            alert("Game over! It's a tie. You are equally matched.");
        } else if (humanScore > computerScore) {
            alert("Game over! You win.");
        } else {
            alert("Game over! You lose.");
        }

        alert("Game has been reset. Have fun playing again.");
        humanScore = 0, computerScore = 0, round = 0;
    }

    // Function for one game round
    function playRound(humanChoice) {
        let computerChoice = getComputerChoice();

        alert(`Player chose ${humanChoice}.\nComputer chose ${computerChoice}.`);

        if (humanChoice === computerChoice) {
            alert(`It's a tie! Both chose ${humanChoice}.`);
        } else if (OUTCOMES[humanChoice] === computerChoice) {
            humanScore += 1;
            alert(`You win! ${humanChoice} beats ${computerChoice}.`);
        } else {
            computerScore += 1;
            alert(`You lose! ${computerChoice} beats ${humanChoice}.`);
        }

        alert(`Your score is ${humanScore} | Computer score is ${computerScore}`)

        round += 1;

        if (round > 4) {
            gameOver();
            return;
        }
    }

    weapons = document.querySelectorAll(".weapons-container button");
    weapons.forEach(weapon => {
        weapon.addEventListener("click", () => {
            let humanChoice;
            switch (weapon.id) {
                case "rock-btn":
                    humanChoice = "rock";
                    break;
                case "paper-btn":
                    humanChoice = "paper";
                    break;
                case "scissors-btn":
                    humanChoice = "scissors";
            }
            
            playRound(humanChoice);
        });
    });
}

playGame();