//randomly selects sword, lance, or scissor for the computer
function getComputerChoice() {
    //sets a random interger between 0 - 2
    let randomNumber = Math.floor(Math.random() * 3);
    console.log(randomNumber);
    return randomNumber == 0 ? 'sword'
        : randomNumber == 1 ? 'lance'
            : 'axe';
}

//plays one round of sword-lance-axe
function playRound(playerSelection, computerSelection) {
    console.log(playerSelection);
    computerSelection = getComputerChoice();
    console.log(playerSelection);

        //checkString function
        let checkString = (stringToCheck = playerSelection) => stringToCheck != 'sword' && stringToCheck != 'lance' && stringToCheck != 'axe';


        //compareSelections function to compare user input to computer selection
        let compareSelections = function () {
            //in the case there is a draw
            if (playerSelection === computerSelection) {
                drawRound++;
                rounds ++;
                console.log('Draw, you both chose ' + playerSelection);
            }
            //in the case user loses
            else if ((playerSelection == 'sword' && computerSelection == 'lance') ||
                (playerSelection == 'lance' && computerSelection == 'axe') ||
                (playerSelection == 'axe' && computerSelection == 'sword')) {
                loseRound++;
                rounds ++;
                console.log('You lose! ' + computerSelection + ' beats ' + playerSelection)
            }
            //in the case user wins
            else {
                winRound++;
                rounds ++;
                console.log('You win! ' + playerSelection + ' beats ' + computerSelection)
            }
        }
            compareSelections();
            results.textContent = 'You have played ' + (parseFloat(rounds) - parseFloat(cancelledRound)) +
                ' rounds.\n' + '\n' +
                'Here are the results of those rounds:\n' +
                'Rounds Won: ' + winRound + '\n' +
                'Rounds Loss: ' + loseRound + '\n' +
                'Rounds Drew: ' + drawRound + '\n';
            console.log('You have played ' + (parseFloat(rounds) - parseFloat(cancelledRound)) +
                ' rounds.\n' +
                'Here are the results of those rounds:\n' +
                'Rounds Won: ' + winRound + '\n' +
                'Rounds Loss: ' + loseRound + '\n' +
                'Rounds Drew: ' + drawRound + '\n')
            
            let checkScore = function() {
                    if (loseRound == 5) {
                        console.log('You lost!');
                    }
                    else {
                        console.log('You reached 5 wins first!')
                    }
                    if (loseRound == 5 || winRound == 5){
                        winRound = 0;
                        loseRound = 0;
                        drawRound = 0;
                        rounds = 0;
                        return results.textContent = 'You have played ' + (parseFloat(rounds) - parseFloat(cancelledRound)) +
                            ' rounds.\n' + '\n' +
                            'Here are the results of those rounds:\n' +
                            'Rounds Won: ' + winRound + '\n' +
                            'Rounds Loss: ' + loseRound + '\n' +
                            'Rounds Drew: ' + drawRound + '\n';
                        }
                    
            }
            checkScore();
            
        }


let drawRound = 0;
let winRound = 0;
let loseRound = 0;
let cancelledRound = 0;
let rounds = 0;

const selectsword = document.querySelector('.sword');
    selectsword.addEventListener('click', function selectsword() {
        playRound('sword');
    });

const selectlance = document.querySelector('.lance');
    selectlance.addEventListener('click', function selectlance() {
        playRound('lance');
    });

const selectaxe = document.querySelector('.axe');
    selectaxe.addEventListener('click', function selectaxe() {
        playRound('axe');
    });

const playerContainer = document.querySelector('.playerContainer');

const results = document.createElement('p');
results.classList.add('results');
results.setAttribute('style', 'white-space: pre;');
results.textContent = 'You have played ' + (parseFloat(rounds) - parseFloat(cancelledRound)) +
    ' rounds.\n' + '\n' +
    'Here are the results of those rounds:\n' +
    'Rounds Won: ' + winRound + '\n' +
    'Rounds Loss: ' + loseRound + '\n' +
    'Rounds Drew: ' + drawRound + '\n';
playerContainer.appendChild(results);

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


// const body = document.querySelector('div');

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