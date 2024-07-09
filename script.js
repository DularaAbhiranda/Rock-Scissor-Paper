function playerChoice(choice) {
    const computerChoice = computerPlay();
    const result = playRound(choice, computerChoice);
    document.getElementById("result").innerText = result;
    
    // Add shake animation to computer choice button
    document.getElementById(computerChoice).classList.add("shake");
  
    // Remove shake animation after 0.5s
    setTimeout(() => {
      document.getElementById(computerChoice).classList.remove("shake");
    }, 500);
  }
  
  function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
  }
  
  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return "It's a tie!";
    } else if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
      return "You win!";
    } else {
      return "You lose!";
    }
  }

    // Global variables to keep track of points
let playerPoints = 0;
let computerPoints = 0;

// Function to update the point table
function updatePointTable() {
    document.getElementById('playerPoints').textContent = playerPoints;
    document.getElementById('computerPoints').textContent = computerPoints;
}

// Example of updating points when player wins
function playerWins() {
    playerPoints++;
    updatePointTable();
}

// Example of updating points when computer wins
function computerWins() {
    computerPoints++;
    updatePointTable();
}

// Call updatePointTable() initially to set the initial points
updatePointTable();


  