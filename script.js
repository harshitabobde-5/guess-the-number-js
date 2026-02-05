let numbersEl = document.getElementById("numbers");
let resultEl = document.getElementById("result");
let attemptsEl = document.getElementById("attempts");

let randomNum = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function clickBtn() {
    let userNum = Number(numbersEl.value);

    if (!userNum || userNum < 1 || userNum > 100) {
        resultEl.textContent = "⚠️ Enter a number between 1 and 100";
        return;
    }

    attempts++;

    if (userNum === randomNum) {
        resultEl.textContent = "🎉 Correct! You guessed it!";
        attemptsEl.textContent = `Attempts: ${attempts}`;
    } else if (userNum < randomNum) {
        resultEl.textContent = "⬇️ Too Low! Try again";
    } else {
        resultEl.textContent = "⬆️ Too High! Try again";
    }
}

function resetGame() {
    randomNum = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    numbersEl.value = "";
    resultEl.textContent = "Game Reset! Guess again";
    attemptsEl.textContent = "";
}
