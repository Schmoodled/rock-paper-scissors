//randomly selects rock, paper, or scissor for the computer
function getComputerChoice () {
    //sets a random interger between 0 - 2
    let randomNumber = Math.floor(Math.random() * 3);
    console.log(randomNumber);
    return randomNumber == 0 ? 'rock' 
           : randomNumber == 1 ? 'paper' 
           : 'scissor';
}

console.log (getComputerChoice());

//plays one round of rock-paper-scissors
function playRound (playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = prompt('Rock Paper Scissors -- Shoot!'); 
    //clicking cancel or escape ==  null | enter == ''
    console.log(playerSelection);
    //if null prompt user 'Are you sure you want to end the game?'
    //if '' ask user to input a string
    //else toLowerCase
    //check string for rock, paper, or scissors
    //if string is rock paper or scissors compare to computer choice
}

playRound();