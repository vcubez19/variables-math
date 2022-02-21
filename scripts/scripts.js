// Data
const winningNumber = Math.floor(Math.random() * 1001);


// UI
let button = document.getElementById("guess-button");


button.onclick = () => {
    let currentGuess = parseFloat(document.getElementById("guess").value);
    let guessStatus = document.getElementById("guess-status");


    if ( isNaN(currentGuess) ) {
        guessStatus.innerText = "Please enter a number";
    } else {
        if ( currentGuess == winningNumber ) {
            guessStatus.innerText = `Winner! Number was ${winningNumber}!`;
            guessStatus.style = "color: green;";
        } else if ( currentGuess < winningNumber ) {
            guessStatus.innerText = `Guess is higher!`;
        } else {
            guessStatus.innerText = `Guess is lower!`;
        }
    }


}

