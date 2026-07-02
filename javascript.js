let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
    let humanChoice = prompt("rock paper scissors?");
    return humanChoice;
}


function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice == computerChoice) {
                    console.log(`your ${humanChoice} tied with ${computerChoice}`);
    } else {

        switch (humanChoice) {
            case "rock":
                switch (computerChoice) {
                    case "scissors":
                        console.log(`you win! ${humanChoice} beats ${computerChoice}`);
                        humanScore += 1
                        break;
                    case "paper":
                        console.log(`you lost :( ${humanChoice} loses to ${computerChoice}`);
                        computerScore += 1
                        break;
                }
                break;

            case "scissors":
                switch (computerChoice) {
                    case "paper":
                        console.log(`you win! ${humanChoice} beats ${computerChoice}`);
                        humanScore += 1
                        break;
                    case "rock":
                        console.log(`you lost :( ${humanChoice} loses to ${computerChoice}`);
                        computerScore += 1
                        break;
                }
                break;

            case "paper":
                switch (computerChoice) {
                    case "rock":
                        console.log(`you win! ${humanChoice} beats ${computerChoice}`);
                        humanScore += 1
                        break;
                    case "scissors":
                        console.log(`you lost :( ${humanChoice} loses to ${computerChoice}`);
                        computerScore += 1
                        break;
                }
                break;

        }
    }

}

function playGame (){
    humanScore = 0;
    computerScore = 0;

    for (let i=0; i<5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
        console.log(`your score: ${humanScore}`);
        console.log(`computer score: ${computerScore}`);
    }

    if (computerScore > humanScore) {
        console.log(`you lost! final score ${humanScore} vs ${computerScore}`)
    } else {
        console.log(`you won! final score ${humanScore} vs ${computerScore}`)
    }

}


playGame()
