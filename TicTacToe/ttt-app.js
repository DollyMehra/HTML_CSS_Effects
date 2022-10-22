let boxes = document.querySelectorAll(".box");
let turnHeading = document.querySelector(".turn");
let start = document.querySelector(".start-btn");
let reset = document.querySelector(".reset-btn");
let data = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let gameOver = false;
let count = 0;
let turn = '';
let winner = '';
let resetBox = function () {
    for (box of boxes) {
        box.innerText = "";
    }
}
let resetTurn = function () {
    turn = '';
    displayTurn();
    resetBox();
    start.disabled = false;
    reset.disabled = true;
}
let newGame = function () {
    resetBox();
    data = [];
    count = 0;
    gameOver = false;
    let value = Math.floor(Math.random() * 10 + 1);
    if (value < 6) {
        turn = 'Orange';
    } else {
        turn = 'Blue';
    }
    displayTurn();
    start.disabled = true;
    reset.disabled = false;
}
let checkWinner = function () {
    if (data[0] === data[1] && data[0] === data[2]) return winner = data[0];
    if (data[3] === data[4] && data[3] === data[5]) return winner = data[3];
    if (data[6] === data[7] && data[6] === data[8]) return winner = data[6];
    if (data[0] === data[3] && data[0] === data[6]) return winner = data[0];
    if (data[1] === data[4] && data[1] === data[7]) return winner = data[1];
    if (data[2] === data[5] && data[2] === data[8]) return winner = data[2];
    if (data[0] === data[4] && data[0] === data[8]) return winner = data[0];
    if (data[2] === data[4] && data[2] === data[6]) return winner = data[2];
}
let changeTurn = function () {
    if (turn === "Blue") {
        turn = "Orange";
    } else {
        turn = "Blue";
    }
}
let checkGameOver = function () {
    if (count === 9) {
        gameOver = true;
        reset.disabled = false;
        turnHeading.textContent = "Game Over";
    }
    if (winner) {
        gameOver = true;
        reset.disabled = false;
        turnHeading.textContent = "Winner is " + winner + "!";
    }
}
let displayTurn = function () {
    if (turn) {
        turnHeading.textContent = turn + "'s Turn";
    } else {
        turnHeading.textContent = turn;
    }
}
let applyColor = function (box) {
    if (turn === "Blue") {
        box.style.color = "#3581B8";
        box.innerText = "X";
    }
    else {
        box.style.color = "#FCB07E";
        box.innerText = "O";
    }
}

reset.disabled = true;


start.onclick = newGame;
reset.onclick = resetTurn;
for (let i = 0; i <= 9; i++) {
    if (boxes[i]) {
        boxes[i].addEventListener("click", function () {
            if (!gameOver && !data[i] && data[i] !== 0) {
                applyColor(this);
                data[i] = turn;
                count++;
                checkWinner();
                changeTurn();
                displayTurn();
                checkGameOver();
            }
        });
    }
}











