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

    let updateEnemyProfile = function () {
        if (computerSelection === 'sword') {
            enemyWeapon.src ='./images/lyn.png'
            
        }
        else if(computerSelection === 'lance') {
            enemyWeapon.src ='./images/andrew.png'
        }
        else {
            enemyWeapon.src ='./images/hector.png'
        }
    }

    updateEnemyProfile();

    console.log(playerSelection);

        //checkString function
        let checkString = (stringToCheck = playerSelection) => stringToCheck != 'sword' && stringToCheck != 'lance' && stringToCheck != 'axe';


        //compareSelections function to compare user input to computer selection
        let compareSelections = function () {
            //in the case there is a draw
            if (playerSelection === computerSelection) {
                drawRound++;
                rounds ++;
                if (computerSelection == 'sword') {
                    results.textContent = 'You ran into Lyn with your ' + playerSelection + ' draw!' +
                        '\n' + '\n' +
                        'Amount of Clashes: ' + (parseFloat(rounds) - parseFloat(cancelledRound)) +
                        '\n' + '\n' +
                        'Player\'s HP: ' + enemyHealth + ' | ' +
                        'Enemy Team\'s HP: ' + playerHealth + '\n';
                }
                else if (computerSelection == 'lance') {
                    playerHealth--;
                    results.textContent = 'You ran into Andrew with your ' + playerSelection + ' time to die!' +
                        '\n' + '\n' + 
                        'Amount of Clashes: ' + (parseFloat(rounds) - parseFloat(cancelledRound)) +
                        '\n' + '\n' +
                        'Player\'s HP: ' + enemyHealth + ' | ' +
                        'Enemy Team\'s HP: ' + playerHealth + '\n';
                } 
                else {
                    results.textContent = 'You ran into Hector with your ' + playerSelection + ' draw!' +
                        '\n' + '\n' + 
                        'Amount of Clashes: ' + (parseFloat(rounds) - parseFloat(cancelledRound)) +
                        '\n' + '\n' +
                        'Player\'s HP: ' + enemyHealth + ' | ' +
                        'Enemy Team\'s HP: ' + playerHealth + '\n';
                }
            }
            //in the case user loses
            else if ((playerSelection == 'sword' && computerSelection == 'lance') ||
                (playerSelection == 'lance' && computerSelection == 'axe') ||
                (playerSelection == 'axe' && computerSelection == 'sword')) {
                playerHealth--;
                rounds ++;
                
                if (computerSelection == 'sword') {
                    results.textContent = 'You ran into Lyn with your ' + playerSelection + ' big mistake!' +
                        '\n' + '\n' +
                        'Amount of Clashes: ' + (parseFloat(rounds) - parseFloat(cancelledRound)) +
                        '\n' + '\n' +
                        'Player\'s HP: ' + enemyHealth + ' | ' +
                        'Enemy Team\'s HP: ' + playerHealth + '\n';
                }
                else if (computerSelection == 'lance') {
                    results.textContent = 'You ran into Andrew with your ' + playerSelection + ' big mistake!' +
                        '\n' + '\n' + 
                        'Amount of Clashes: ' + (parseFloat(rounds) - parseFloat(cancelledRound)) +
                        '\n' + '\n' +
                        'Player\'s HP: ' + enemyHealth + ' | ' +
                        'Enemy Team\'s HP: ' + playerHealth + '\n';
                } 
                else {
                    results.textContent = 'You ran into Hector with your ' + playerSelection + ' big mistake!' +
                        '\n' + '\n' + 
                        'Amount of Clashes: ' + (parseFloat(rounds) - parseFloat(cancelledRound)) +
                        '\n' + '\n' +
                        'Player\'s HP: ' + enemyHealth + ' | ' +
                        'Enemy Team\'s HP: ' + playerHealth + '\n';
                }

            }
            //in the case user wins
            else {
                enemyHealth--;
                rounds ++;

                if (computerSelection == 'sword') {
                    results.textContent = 'You ran into Lyn with your ' + playerSelection + ' good hit!' +
                        '\n' + '\n' +
                        'Amount of Clashes: ' + (parseFloat(rounds) - parseFloat(cancelledRound)) +
                        '\n' + '\n' +
                        'Player\'s HP: ' + enemyHealth + ' | ' +
                        'Enemy Team\'s HP: ' + playerHealth + '\n';
                }
                else if (computerSelection == 'lance') {
                    enemyHealth++;
                    results.textContent = 'You ran into Andrew with your ' + playerSelection + ' good try!' +
                        '\n' + '\n' + 
                        'Amount of Clashes: ' + (parseFloat(rounds) - parseFloat(cancelledRound)) +
                        '\n' + '\n' +
                        'Player\'s HP: ' + enemyHealth + ' | ' +
                        'Enemy Team\'s HP: ' + playerHealth + '\n';
                } 
                else {
                    results.textContent = 'You ran into Hector with your ' + playerSelection + ' good hit!' +
                        '\n' + '\n' + 
                        'Amount of Clashes: ' + (parseFloat(rounds) - parseFloat(cancelledRound)) +
                        '\n' + '\n' +
                        'Player\'s HP: ' + enemyHealth + ' | ' +
                        'Enemy Team\'s HP: ' + playerHealth + '\n';
                }
            }
        }
            compareSelections();

    
            console.log('You have played ' + (parseFloat(rounds) - parseFloat(cancelledRound)) +
                ' rounds.\n' +
                'Here are the results of those rounds:\n' +
                'Rounds Won: ' + enemyHealth + '\n' +
                'Rounds Loss: ' + playerHealth + '\n' +
                'Rounds Drew: ' + drawRound + '\n')
            
            let checkScore = function() {
        
                    if (playerHealth == 0 || enemyHealth == 0){
                        if (playerHealth == 0) {
                            results.textContent = ('Game Over!');
                        }
                        else {
                            results.textContent = ('Victory!')
                        }
                        enemyHealth = 5;
                        playerHealth = 5;
                        drawRound = 0;
                        rounds = 0;
                        return
                        }
                    
            }
            checkScore();
            
        }


let drawRound = 0;
let enemyHealth = 5;
let playerHealth = 5;
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

const enemyContainer = document.querySelector('.enemyContainer');

//image added based on computers selection
const enemyWeapon = document.createElement('img')
enemyWeapon.src ='./images/who.png'
enemyContainer.appendChild(enemyWeapon);


const results = document.createElement('p');
results.classList.add('results');
results.setAttribute('style', 'white-space: pre;');
results.textContent = 'Amount of Clashes: ' + (parseFloat(rounds) - parseFloat(cancelledRound)) +
    '\n' + '\n' +
    'Player\'s HP: ' + enemyHealth + ' | ' +
    'Enemy Team\'s HP: ' + playerHealth + '\n';
enemyContainer.appendChild(results);

