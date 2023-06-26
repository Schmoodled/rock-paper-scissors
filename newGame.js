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
    console.log(playerSelection);
    computerSelection = getComputerChoice();
    if (playerSelection == null) {
    playerSelection = prompt('Rock Paper Scissors -- Shoot!');
    }
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
                rounds ++;
                return alert('Draw, you both chose ' + playerSelection);
            }
            //in the case user loses
            else if ((playerSelection == 'rock' && computerSelection == 'paper') ||
                (playerSelection == 'paper' && computerSelection == 'scissors') ||
                (playerSelection == 'scissors' && computerSelection == 'rock')) {
                loseRound++;
                rounds ++;
                return alert('You lose! ' + computerSelection + ' beats ' + playerSelection)
            }
            //in the case user wins
            else {
                winRound++;
                rounds ++;
                return alert('You win! ' + playerSelection + ' beats ' + computerSelection)
            }
        }
        if (playerSelection === null) {
            return
        }
        else {
            compareSelections();
            console.log('You have played ' + (parseFloat(rounds) - parseFloat(cancelledRound)) +
            ' rounds.' +
            '\nHere are the results of those rounds:\n' +
            'Rounds Won: ' + winRound + '\n' +
            'Rounds Loss: ' + loseRound + '\n' +
            'Rounds Drew: ' + drawRound + '\n')
        }
    }
}

let drawRound = 0;
let winRound = 0;
let loseRound = 0;
let cancelledRound = 0;
let rounds = 0;
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

const selectRock = document.querySelector('.rock');
    selectRock.addEventListener('click', function selectRock() {
        playRound('rock');
    });

const selectPaper = document.querySelector('.paper');
    selectPaper.addEventListener('click', function selectPaper() {
        playRound('paper');
    });

const selectScissors = document.querySelector('.scissors');
    selectScissors.addEventListener('click', function selectScissors() {
        playRound('scissors');
    });

// function playSound(e) {
//     const audio = document.querySelector(`audio[code="${e.code}"]`);
//     const key = document.querySelector(`.key[code="${e.code}"]`);
//     if(!audio) return;
//     audio.currentTime = 0; //rewinds audio to start
//     audio.play();
//     //console.log(e);

//     //transition to another style once this class is added note css transition and scaling effect speed 
//     key.classList.add('playing');
//   }

//   function removeTransition(e) {
//     if(e.propertyName !== 'transform') return;
//     this.classList.remove('playing');
//   }

//   const keys = document.querySelectorAll('.key');
//   keys.forEach(key => key.addEventListener('transitionend', removeTransition));
//   window.addEventListener ('keydown', playSound);


// const body = document.querySelector('body');

// const red = document.createElement('p');
// red.classList.add('red');
// red.textContent ='Hey I\'m red!';
// red.style.color = 'red';
// body.appendChild(red);

// const blue = document.createElement('h3');
// blue.classList.add('blue');
// blue.textContent = 'I\'m a blue h3!';
// blue.style.color = 'blue';
// body.appendChild(blue);

// const container = document.createElement('div');
// container.classList.add('container');
// container.setAttribute('style', 'border-style: solid; border-color: black; background: pink;');
// const containerHeader = document.createElement('h1');
// const pDiv = document.createElement('p');
// containerHeader.textContent = 'I\'m in a div';
// pDiv.textContent = 'ME TOO!';
// container.appendChild(containerHeader);
// container.appendChild(pDiv);
// body.appendChild(container);

// //Events
// // const btn = document.querySelector('#btn');
// // btn.onclick = () => alert("Hello World");

//   btn.addEventListener('click', function (e) {
//     console.log(e);
//   });