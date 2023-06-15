function getComputerChoice () {
    //sets a random interger between 0 - 2
    let randomNumber = Math.floor(Math.random() * 3);
    console.log(randomNumber);
    return randomNumber == 0 ? 'rock' : randomNumber == 1 ? 'paper' : 'scissor';
}

// let message = (login == 'Employee') ? 'Hello' : 
// (login == 'Director') ? 'Greetings' :
// (login = '') ? 'No Login' : '';
console.log (getComputerChoice());