//randomly selects rock, paper, or scissor for the computer
function getComputerChoice() {
    //sets a random interger between 0 - 2
    let randomNumber = Math.floor(Math.random() * 3);
    console.log(randomNumber);
    return randomNumber == 0 ? 'rock'
        : randomNumber == 1 ? 'paper'
            : 'scissor';
}

//plays one round of rock-paper-scissors
function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    console.log(computerSelection);
    playerSelection = prompt('Rock Paper Scissors -- Shoot!');
    //clicking cancel or escape ==  null | enter == ''
    //if null alert user 'game is ending'
    if (playerSelection == null) {
        return alert('Cancelling the round.');
    }
    else {
        playerSelection = playerSelection.toLowerCase();
        console.log(playerSelection);

        //checkString function
        let checkString = (stringToCheck = playerSelection) => stringToCheck != 'rock' && stringToCheck != 'paper' && stringToCheck != 'scissors';

        //update playerSelection
        let updatePlayerSelection = function() {
            while (checkString() == true) {
                console.log(checkString());
                playerSelection = prompt('Please enter rock, paper, or scissors:').toLowerCase();
                if (playerSelection == null) {
                    return alert('Cancelling the round.');
                }
            }
        }

        updatePlayerSelection();
        console.log(playerSelection);


    }
    //if '' ask user to input a string
    //else toLowerCase
    //check string for rock, paper, or scissors
    //if string is rock paper or scissors compare to computer choice
}

playRound();