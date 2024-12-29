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

    // Check if any player has reached 5 points
    if (playerScore === 5 || computerScore === 5) {
        announceWinner();
    }
}

function updateScore() {
    document.getElementById('score').innerText = `Player: ${playerScore} | Computer: ${computerScore}`;
}

function announceWinner() {
    const winner = playerScore === 5 ? 'Player' : 'Computer';
    alert(`${winner} wins the game! Final Score:\nPlayer: ${playerScore} | Computer: ${computerScore}`);
    resetGame();
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
