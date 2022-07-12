//Computer randomly selects rock, paper, or scissors
function computerPlay() {
    //randomly generate 0-2
    let randomNumber = Math.floor(Math.random() * 3);
    //if 0 then rock
    if (randomNumber == 0) {
        return 'rock';
    //else if 1 paper
    } else if (randomNumber == 1) {
        return 'paper';
    //else scissor
    } else {
        return 'scissors';
    }
    
}

//player inputs rock, paper, or scissors
function playRound (playerSelection, computerSelection) {
    playerSelection = prompt('Rock, Paper, Scissors -- Shoot!')

    if (playerSelection == null) {
        while (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
            playerSelection = prompt('Please input rock, paper, or scissors!')
            if (playerSelection == null){
                break;
            }
        }
    } else {
        playerSelection = playerSelection.toLowerCase();
        while (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
            playerSelection = prompt('Please input rock, paper, or scissors!')
            if (playerSelection == null){
                break;
            } else {
                playerSelection = playerSelection.toLowerCase();
            }
        }
    }
    console.log('Your choice: ' + playerSelection);
    computerSelection = computerPlay();
    console.log('Opponent\'s choice: ' + computerSelection);
    //compare your choice to opponents
    //draw
    if (playerSelection === computerSelection) {
        alert('Draw, try again. :)');
        draw ++;
        total++;
    //rock vs paper, paper vs scissors, scissors vs rock result in a loss
    } else if (playerSelection == 'rock' && computerSelection == 'paper' || playerSelection == 'paper' && computerSelection == 'scissors' || playerSelection == 'scissors' && computerSelection == 'rock') {
        alert('You lose, loser! :^)')
        loss ++;
        total++;
    //else you win
    } else if(playerSelection == null){
        alert('Round Cancelled');
    } else {
        alert('You win! :)');
        win ++;
        total++;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log('Round ' + (i + 1) +':');
        playRound();
    }
    alert('This is the result of ' + total + ' games:\n \n' + 'Wins: ' + win + ' ' + 'Losses: ' + loss + ' ' + 'Draws: ' + draw);
    win = 0,
    loss = 0,
    draw = 0,
    total = 0;
}

//global variables to track wins, losses, and draws
let win = 0,
    loss = 0,
    draw = 0,
    total = 0;
    console.log(win + loss + draw)
game();
