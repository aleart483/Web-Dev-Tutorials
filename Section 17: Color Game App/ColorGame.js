let numSquares = 6;
let colors = [];
let isEasy = false;
let pickedColor;
let colorDisplay = document.querySelector('#colorDisplay');
let messageDisplay = document.querySelector('#message');
let h1 = document.querySelector('h1');
let resetButton = document.querySelector('#reset');
let easyButton = document.querySelector('#easy');
let hardButton = document.querySelector('#hard');
let squares = document.querySelectorAll('.square');
let modeButtons = document.querySelectorAll('.mode');

init();

function init() {
    //mode buttons event listeners
    setUpModeListeners();
    //square event listeners
    setUpSquareListeners();
    //update the squares with random colors
    reset();
}

resetButton.addEventListener('click', function() {
    reset();
});

function reset() {
    colors = generateColors(numSquares);

    pickedColor = pickColor();

    colorDisplay.textContent = pickedColor;
    resetButton.textContent = 'New Colors';

    messageDisplay.textContent = '';

    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = colors[i] ? 'block' : 'none';
    }
    h1.style.backgroundColor = 'steelblue';
}

function setUpModeListeners() {
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener('click', function() {
            modeButtons[0].classList.remove('selected');
            modeButtons[1].classList.remove('selected');
            this.classList.add('selected');
            numSquares = this.textContent === 'Easy' ? 3 : 6;
            if (isEasy != (this.textContent === 'Easy')) {
                reset();
            }
            isEasy = this.textContent === 'Easy';
        });
    }
}

function setUpSquareListeners() {
    for (let i = 0; i < squares.length; i++) {
        // add event listeners to squares
        squares[i].addEventListener('click', function() {
            //grab color of clicked square
            let clickedColor = this.style.backgroundColor;
            //compare to picked color
            if (pickedColor === clickedColor) {
                userWon();
            } else {
                this.style.backgroundColor = '#232323';
                messageDisplay.textContent = 'Try Again';
                resetButton.textContent = 'Restart';
            }
        });
    }
}

function userWon() {
    messageDisplay.textContent = 'Correct!';
    resetButton.textContent = 'Play Again?';
    h1.style.backgroundColor = pickedColor;
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
        colors.push(randomColor());
    }
    return colors;
}

function randomColor() {
    let rgb = [0, 0, 0];
    for (let i = 0; i < 3; i++) {
        rgb[i] = Math.floor(Math.random() * 256);
    }
    color = 'rgb(' + rgb[0] + ', ' + rgb[1] + ', ' + rgb[2] + ')';
    return color;
}