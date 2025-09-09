const OUTCOMES = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
};

const weaponButtons = document.querySelectorAll(".weapons-container button");

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
    const computerChoiceIcon = document.querySelector("#computer-choice-icon");
    const resultText = document.querySelector("#result-text");
    const roundCounter = document.querySelector("#round");
    const livesText = document.querySelector("#lives")
    let humanLives = 5, computerLives = 5;
    let round = 0;

    // Function for one game round
    function playRound(humanChoice, computerChoice) {
        
        round += 1;

        roundCounter.textContent = `Round: ${round}`;
        
        switch (computerChoice) {
            case "rock":
                computerChoiceIcon.classList = "fa-solid fa-hand-back-fist";
                break;
            case "paper":
                computerChoiceIcon.classList = "fa-solid fa-hand";
                break;
            case "scissors":
                computerChoiceIcon.classList = "fa-solid fa-hand-scissors";
                break;
            default:
                computerChoiceIcon.classList = "fa-regular fa-circle-question";
                break;
        }
        
        if (humanChoice === computerChoice) {
            resultText.textContent = `CLASH! It's a tie. Both chose ${humanChoice}.`;
        } else if (OUTCOMES[humanChoice] === computerChoice) {
            resultText.textContent = `${humanChoice} beats ${computerChoice}.`;
            humanLives -= 1;
        } else {
            resultText.textContent = `${computerChoice} beats ${humanChoice}.`;
            computerLives -= 1;
        }

        livesText.textContent = `Your Lives: ${humanLives} | Enemy's Lives: ${computerLives}`;
    }

    function endGame() {
        if (humanLives === 0 || computerLives === 0) {
            weaponButtons.forEach((weapon) => {
                weapon.setAttribute("disabled", "");
            });

            if (humanLives > computerLives) {
                resultText.textContent = `You've fried the computer's brain!`;
            } else {
                resultText.textContent = `A mere human beating a computer? Pfft... as if`;
            }
        }
    }

    weaponButtons.forEach(weapon => {
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
                    break;
            }
            
            playRound(humanChoice, getComputerChoice());
            endGame();
        });
    });
}

playGame();