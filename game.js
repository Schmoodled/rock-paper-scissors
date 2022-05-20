//Computer randomly selects rock, paper, or scissor
function computerPlay(choice) {
    //randomly generate 0-2
    let randomNumber = Math.floor(Math.random() * 3);
    console.log (randomNumber);
    //if 0 then rock
    if (randomNumber == 0) {
        choice = 'rock';
    //else if 1 paper
    } else if (randomNumber == 1) {
        choice = 'paper';
    //else scissor
    } else {
        choice = 'scissor'
    }
    return choice;
    
}
let computerChoice = computerPlay();