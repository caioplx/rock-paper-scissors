let humanScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("button")
const humanScoreDisplay = document.createElement("div")
const computerScoreDisplay = document.createElement("div")
const announcementDisplay = document.createElement("div")

humanScoreDisplay.setAttribute("class", "humanScoreDisplay")
computerScoreDisplay.setAttribute("class","computerScoreDisplay")
announcementDisplay.setAttribute("class", "announcementDisplay")

const scores = document.querySelector(".scores")
scores.appendChild(humanScoreDisplay)
scores.appendChild(computerScoreDisplay)
scores.appendChild(announcementDisplay)




function getComputerChoice() {
    let numberChoice = Math.floor(Math.random()*3)+1
    switch (numberChoice) {
        case 1:
            return "rock";
            break;
        case 2:
            return "scissors";
            break;
        case 3:
            return "paper";
            break;
    }
}

// function getHumanChoice() {
//     let humanChoice = prompt("rock paper scissors?");
//     return humanChoice;
// }


function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice == computerChoice) {
                    announcementDisplay.textContent = (`your ${humanChoice} tied with ${computerChoice}`);
    } else {

        switch (humanChoice) {
            case "rock":
                switch (computerChoice) {
                    case "scissors":
                        announcementDisplay.textContent = (`you win! ${humanChoice} beats ${computerChoice}`);
                        humanScore += 1
                        break;
                    case "paper":
                        announcementDisplay.textContent = (`you lost :( ${humanChoice} loses to ${computerChoice}`);
                        computerScore += 1
                        break;
                }
                break;

            case "scissors":
                switch (computerChoice) {
                    case "paper":
                        announcementDisplay.textContent = (`you win! ${humanChoice} beats ${computerChoice}`);
                        humanScore += 1
                        break;
                    case "rock":
                        announcementDisplay.textContent = (`you lost :( ${humanChoice} loses to ${computerChoice}`);
                        computerScore += 1
                        break;
                }
                break;

            case "paper":
                switch (computerChoice) {
                    case "rock":
                        announcementDisplay.textContent = (`you win! ${humanChoice} beats ${computerChoice}`);
                        humanScore += 1
                        break;
                    case "scissors":
                        announcementDisplay.textContent = (`you lost :( ${humanChoice} loses to ${computerChoice}`);
                        computerScore += 1
                        break;
                }
                break;

        }
    }

}

function newGame(str) {
    alert(`${str}`);
    playGame();

}

function playGame (){
    humanScore = 0;
    computerScore = 0;

    humanScoreDisplay.textContent = 'your score: 0'
    computerScoreDisplay.textContent = "computer score: 0"
    announcementDisplay.textContent = ""


    buttons.forEach((button) => {
        button.addEventListener("click", (event) => {
            // alert(button.id)
            playRound(button.id, getComputerChoice());
            humanScoreDisplay.textContent = (`your score: ${humanScore}`)
            computerScoreDisplay.textContent = (`computer score: ${computerScore}`)

            if (computerScore == 5 && humanScore < 5) {
                console.log("yes")
                newGame(`you lost! final score ${humanScore} vs ${computerScore}`);

            } else if (humanScore == 5 && computerScore < 5) {
                console.log("yes")
                newGame(`you won! final score ${humanScore} vs ${computerScore}`)
            }

        })

    })



}

playGame()
