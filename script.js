let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = '';

    if (playerChoice === computerChoice) {
        result = `It's a tie! You both chose ${playerChoice}.`;
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = `You win! ${playerChoice} beats ${computerChoice}.`;
        playerScore++;
    } else {
        result = `You lose! ${computerChoice} beats ${playerChoice}.`;
        computerScore++;
    }

    document.getElementById('result').innerText = result;
    updateScore();
}

function updateScore() {
    document.getElementById('score').innerText = `Player: ${playerScore} | Computer: ${computerScore}`;
}

function checkQuit() {
    const input = document.getElementById('quitInput').value;
    if (input.trim().toLowerCase() === 'quit') {
        alert('Game over! Final Score:\nPlayer: ' + playerScore + ' | Computer: ' + computerScore);
        resetGame();
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScore();
    document.getElementById('result').innerText = '';
    document.getElementById('quitInput').value = '';
}
