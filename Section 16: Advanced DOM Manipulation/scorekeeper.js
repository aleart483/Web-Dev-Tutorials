let p1_score = 0;
let p2_score = 0;

let p1_button = document.getElementById("p1");
let p2_button = document.getElementById("p2");
let reset_button = document.getElementById("reset");

let limit_input = document.getElementById("limit");
let limit = 5;

let gameOver = false;

let p1t = document.querySelector("#p1t");
let p2t = document.querySelector("#p2t");
let lim = document.querySelector("#lim");

function resetGame() {
    p1_score = 0;
    p2_score = 0;
    p1t.textContent = p1_score;
    p2t.textContent = p2_score;
    p1t.classList.remove("winner");
    p2t.classList.remove("winner");
    gameOver = false;
}

reset_button.addEventListener("click", resetGame);

p1_button.addEventListener("click", function() {
    if (!gameOver) {
        p1_score++;
        p1t.textContent = p1_score;
        if (p1_score === limit) {
            p1t.classList.add("winner");
            gameOver = true;
        }
    }
});

p2_button.addEventListener("click", function() {
    if (!gameOver) {
        p2_score++;
        p2t.textContent = p2_score;
        if (p2_score === limit) {
            p2t.classList.add("winner");
            gameOver = true;
        }
    }
});

limit_input.addEventListener("change", function() {
    limit = Number(this.value);
    lim.textContent = limit;
    resetGame();
});