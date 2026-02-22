// game.js

// Game data
const teams = [{ name: 'Team A', score: 0, correctAnswers: 0 }, { name: 'Team B', score: 0, correctAnswers: 0 }];
const keywords = [{ word: 'JavaScript', attempts: 0, locked: false }, { word: 'HTML', attempts: 0, locked: false }, { word: 'CSS', attempts: 0, locked: false }];

let currentTeamIndex = 0;

// State management
function getCurrentTeam() {
    return teams[currentTeamIndex];
}

function nextTurn() {
    currentTeamIndex = (currentTeamIndex + 1) % teams.length;
}

function lockKeyword(keyword) {
    const foundKeyword = keywords.find(k => k.word === keyword);
    if (foundKeyword) {
        foundKeyword.locked = true;
    }
}

// Rendering functions
function renderScoreboard() {
    console.log('Scoreboard:');
    teams.forEach(team => {
        console.log(`${team.name}: ${team.score} points`);
    });
}

// Event handlers
function answerQuestion(keyword, isCorrect) {
    const currentTeam = getCurrentTeam();
    if (isCorrect) {
        currentTeam.score += 10;
        currentTeam.correctAnswers += 1;
        console.log(`${currentTeam.name} answered correctly!`);
    } else {
        currentTeam.score -= currentTeam.score > 0 ? 0 : 0;  // Prevent negative scores
        const foundKeyword = keywords.find(k => k.word === keyword);
        if (foundKeyword) {
            foundKeyword.attempts += 1;
            console.log(`${currentTeam.name} answered incorrectly! Attempts: ${foundKeyword.attempts}`);
            if (foundKeyword.attempts >= 2) {
                lockKeyword(keyword);
                console.log(`${keyword} is now locked!`);
            }
        }
    }
    renderScoreboard();
    nextTurn();
}

// Initialize the game
console.log('Game started!');
renderScoreboard();