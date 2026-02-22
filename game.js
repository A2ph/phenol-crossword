// Game Logic for Two-Team Crossword Game

// Keywords
const keywords = ["crossword", "clue", "answer", "team1", "team2"];

// Game State Management
let gameState = {
    currentTeam: "team1",
    scores: { team1: 0, team2: 0 },
    board: [],
    currentClue: null,
};

// Initialize the game board
function initializeBoard(size) {
    gameState.board = Array.from({ length: size }, () => Array(size).fill(null));
}

// Submit Answer Function
function submitAnswer(answer) {
    if (gameState.currentClue && answer === gameState.currentClue.answer) {
        gameState.scores[gameState.currentTeam] += 1;
        nextClue();
    }
}

// Switch Teams Function
function switchTeam() {
    gameState.currentTeam = gameState.currentTeam === "team1" ? "team2" : "team1";
}

// Next Clue Function
function nextClue() {
    // Logic to select the next clue
    gameState.currentClue = pickNextClue();
    switchTeam();
}

// Dummy function for picking the next clue
function pickNextClue() {
    return { prompt: "New Clue", answer: "correctAnswer" };
}

// Start Game Function
function startGame(size) {
    initializeBoard(size);
    nextClue();
}

// Example Usage
startGame(5); // Start a 5x5 crossword game
console.log(gameState);