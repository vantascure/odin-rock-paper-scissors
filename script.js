const OUTCOMES = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
};

const weaponButtons = document.querySelectorAll(".weapons-container button");
const computerChoiceIcon = document.querySelector("#computer-choice-icon");
const roundCounter = document.querySelector("#round");
const livesText = document.querySelector("#lives")
const statusText = document.querySelector("#status-text");
const outputContainer = document.querySelector(".output-container");
const computerChoiceContainer = document.querySelector(".computer-choice-container");

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
            statusText.textContent = `CLASH! It's a tie. Both chose ${humanChoice}.`;
            outputContainer.style.border = "5px yellow solid";
            computerChoiceContainer.style.borderRight = "5px yellow solid";
        } else if (OUTCOMES[humanChoice] === computerChoice) {
            statusText.textContent = `${humanChoice[0].toLocaleUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`;
            outputContainer.style.border = "5px green solid";
            computerChoiceContainer.style.borderRight = "5px green solid";
            computerLives -= 1;
        } else {
            statusText.textContent = `${computerChoice[0].toLocaleUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`;
            outputContainer.style.border = "5px red solid";
            computerChoiceContainer.style.borderRight = "5px red solid";
            humanLives -= 1;
        }

        livesText.textContent = `Your Lives: ${humanLives} | Enemy's Lives: ${computerLives}`;
    }

    function endGame() {
        if (humanLives === 0 || computerLives === 0) {
            weaponButtons.forEach((weapon) => {
                weapon.setAttribute("disabled", "");
            });

            if (humanLives > computerLives) {
                statusText.textContent = `You've fried the computer's brain!`;
            } else {
                statusText.textContent = `A mere human beating a computer? Pfft... as if`;
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

            weaponButtons.forEach(btn => btn.classList.remove("active-weapon"));

            weapon.classList.add("active-weapon");
            
            playRound(humanChoice, getComputerChoice());
            endGame();
        });
    });
}

playGame();