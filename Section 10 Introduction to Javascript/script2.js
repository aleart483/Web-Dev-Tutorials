let key = 6;
alert("Let's play a game!");
let guess = prompt("Guess a number between 0 and 10!");

while (key !== Number(guess)) {
    let msg;
    if (!guess || isNaN(guess) || guess > 10 || guess < 0) {
        msg = "Invalid response. Please enter a NUMBER between 0 and 10";
    } else if (guess > key) {
        msg = "Wrong! Your guess was too high. Try again!";
    } else {
        msg = "Wrong! Your guess was too low. Try again!";
    }
    guess = prompt(msg);
}

alert("Congrats! You guessed my number!");