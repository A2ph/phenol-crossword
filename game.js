// Crossword Game Logic

// Game Configuration
const keywords = ["apple", "banana", "cherry", "date", "fig", "grape"];  
let gameState = {
    teamOneScore: 0,
    teamTwoScore: 0,
    currentTeam: 1,
    lockedKeywords: [],
    attempts: {
        teamOne: 0,
        teamTwo: 0,
    }
};

// Initialize the game
function initGame() {
    renderCrosswordGrid();
    renderClues();
    addEventListeners();
}

// Render crossword grid
function renderCrosswordGrid() {
    const gridContainer = document.getElementById('crossword-grid');
    // Logic to create and render the crossword grid
}

// Render clues for the crossword
function renderClues() {
    const cluesContainer = document.getElementById('clues');
    // Logic to display clues
}

// Add event listeners for answer submissions
function addEventListeners() {
    document.getElementById('submit-answer').addEventListener('click', submitAnswer);
}

// Submit answer logic
function submitAnswer() {
    const answerInput = document.getElementById('answer-input').value;
    const currentKeyword = getCurrentKeyword();
    if (lockedKeywords.includes(currentKeyword)) {
        alert('This keyword is locked!');
        return;
    }
    if (answerInput.toLowerCase() === currentKeyword.toLowerCase()) {
        updateScore();
        alert('Correct! 10 points awarded.');
    } else {
        handleWrongAnswer();
    }
    document.getElementById('answer-input').value = ''; // Clear input
}

// Handle wrong answer logic
function handleWrongAnswer() {
    if (gameState.currentTeam === 1) {
        gameState.attempts.teamOne++;
        gameState.currentTeam = 2;
        if (gameState.attempts.teamOne >= 2) {
            lockKeyword();
        }
    } else {
        gameState.attempts.teamTwo++;
        gameState.currentTeam = 1;
        if (gameState.attempts.teamTwo >= 2) {
            lockKeyword();
        }
    }
    alert('Wrong answer! Switching to Team ' + gameState.currentTeam);
}

// Update score based on current team
function updateScore() {
    if (gameState.currentTeam === 1) {
        gameState.teamOneScore += 10;
    } else {
        gameState.teamTwoScore += 10;
    }
}

// Lock the keyword
function lockKeyword() {
    const currentKeyword = getCurrentKeyword();
    gameState.lockedKeywords.push(currentKeyword);
    resetAttempts();
    alert('Keyword locked: ' + currentKeyword);
}

// Get current keyword (to be implemented based on game state)
function getCurrentKeyword() {
    // Logic to return the current keyword being guessed
}

// Reset attempts after locking a keyword
function resetAttempts() {
    gameState.attempts.teamOne = 0;
    gameState.attempts.teamTwo = 0;
}

// Start the game
initGame();