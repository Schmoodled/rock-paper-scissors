//randomly selects rock, paper, or scissor for the computer
function getComputerChoice() {
    //sets a random interger between 0 - 2
    let randomNumber = Math.floor(Math.random() * 3);
    console.log(randomNumber);
    return randomNumber == 0 ? 'rock'
        : randomNumber == 1 ? 'paper'
            : 'scissors';
}

//plays one round of rock-paper-scissors
function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    console.log(computerSelection);
    playerSelection = prompt('Rock Paper Scissors -- Shoot!');
    //clicking cancel or escape ==  null | enter == ''
    //if null alert user 'game is ending'
    if (playerSelection == null) {
        cancelledRound++;
        return alert('Cancelling the round.');
    }
    else {
        playerSelection = playerSelection.toLowerCase();
        console.log(playerSelection);

        //checkString function
        let checkString = (stringToCheck = playerSelection) => stringToCheck != 'rock' && stringToCheck != 'paper' && stringToCheck != 'scissors';

        //update playerSelection
        let updatePlayerSelection = function () {
            while (checkString() == true) {
                playerSelection = prompt('Please enter rock, paper, or scissors:');
                if (playerSelection == null) {
                    cancelledRound++;
                    return alert('Cancelling the round.');
                }
                else {
                    playerSelection = playerSelection.toLowerCase();
                }
            }
        }

        updatePlayerSelection();

        //compareSelections function to compare user input to computer selection
        let compareSelections = function () {
            //in the case there is a draw
            if (playerSelection === computerSelection) {
                drawRound++;
                return alert('Draw, you both chose ' + playerSelection);
            }
            //in the case user loses
            else if ((playerSelection == 'rock' && computerSelection == 'paper') ||
                (playerSelection == 'paper' && computerSelection == 'scissors') ||
                (playerSelection == 'scissors' && computerSelection == 'rock')) {
                loseRound++;
                return alert('You lose! ' + computerSelection + ' beats ' + playerSelection)
            }
            //in the case user wins
            else {
                winRound++;
                return alert('You win! ' + playerSelection + ' beats ' + computerSelection)
            }
        }
        if (playerSelection === null) {
            return
        }
        else {
            compareSelections();
        }
    }
}

let drawRound = 0;
let winRound = 0;
let loseRound = 0;
let cancelledRound = 0;
//playBestOf function
function playBestOf(rounds = 5) {
    drawRound = 0;
    winRound = 0;
    loseRound = 0;
    cancelledRound = 0;
    for (let i = 0; i < rounds; i++) {
        playRound();
    }
    return alert('You have played ' + (parseFloat(rounds) - parseFloat(cancelledRound)) + ' rounds.' 
        + '\nHere are the results of those rounds:\n'
        + 'Rounds Won: ' + winRound + '\n'
        + 'Rounds Loss: ' + loseRound + '\n'
        + 'Rounds Drew: ' + drawRound + '\n');
}

playBestOf();

playBestOf();