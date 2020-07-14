let gameOver = false;
let numOfColors = 6;
let colors = generateColors(6);

let pickedColor = pickColor();
let colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = pickedColor;
let messageDisplay = document.querySelector("#message");

let squares = document.querySelectorAll(".square");

for (let i = 0; i < squares.length; i++) {
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    // add event listeners to squares
    squares[i].addEventListener("click", function() {
        //grab color of clicked square
        let clickedColor = this.style.backgroundColor;
        //compare to picked color
        if (pickedColor === clickedColor) {
            messageDisplay.textContent = "Correct!";
            turnOnSquares();
            gameOver = true;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again"
        }
    });
}

function turnOnSquares() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = pickedColor;
    }
}

function pickColor() {
    let randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

function generateColors(numOfColors) {
    let colors = [];
    for (let i = 0; i < numOfColors; i++) {
        //generate 3 colors
        let rgb = new Array(3)
        for (let j = 0; j < 3; j++) {
            rgb[j] = Math.floor(Math.random() * 256);
            console.log(rgb[j]);
        }
        colors[i] = "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")";
    }
    return colors;
}