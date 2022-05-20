//Computer randomly selects rock, paper, or scissors
function computerPlay(choice) {
    //randomly generate 0-2
    let randomNumber = Math.floor(Math.random() * 3);
    //if 0 then rock
    if (randomNumber == 0) {
        choice = 'rock';
    //else if 1 paper
    } else if (randomNumber == 1) {
        choice = 'paper';
    //else scissor
    } else {
        choice = 'scissors'
    }
    return choice;
    
}

//player inputs rock, paper, or scissors
function playRound (playerSelection, computerSelection) {
    playerSelection = prompt('Rock, Paper, Scissors -- Shoot!');
    playerSelection = playerSelection.toLowerCase();
    console.log('Your choice: ' + playerSelection);
    computerSelection = computerPlay();
    console.log('Opponent\'s choice: ' + computerSelection);
    console.log(playerSelection == computerPlay);
    //compare your choice to opponents
    //draw
    if (playerSelection === computerSelection) {
        alert('Draw, try again. :)');
    //rock vs paper, paper vs scissors, scissors vs rock result in a loss
    } else if (playerSelection == 'rock' && computerSelection == 'paper' || playerSelection == 'paper' && computerSelection == 'scissors' || playerSelection == 'scissors' && computerSelection == 'rock') {
        alert('You lose, loser! :^)')
    //else you win
    } else {
        alert('You win! :)')
    }
}

playRound();