const gameData = {
    keywords: ["HYDROXYL", "TRIHYDROXYBENZENE", "C6H4OHR", "ETHANOL", "NHUOMHONG", "PHENOL", "NHUTƯƠNG", "NHIETDOSOI", "DELOCALIZED"],
};

let gameState = {
    redTeam: { score: 0, attempts: 0 },
    blueTeam: { score: 0, attempts: 0 },
    currentTeam: 'red',
};

const gridElement = document.getElementById('crossword-grid');
const clueElement = document.getElementById('clue-selection');
const notificationModal = document.getElementById('notification-modal');

function lockTeam() {
    const lockedTeam = gameState.currentTeam;
    // Logic to lock the current team after 2 wrong attempts
}

function switchTurn() {
    gameState.currentTeam = gameState.currentTeam === 'red' ? 'blue' : 'red';
}

function submitAnswer(answer) {
    const currentTeam = gameState[gameState.currentTeam];
    if (gameData.keywords.includes(answer)) {
        currentTeam.score += 10;
        // Update UI accordingly
        updateUI();
        notify(`${gameState.currentTeam} team scored!`);
    } else {
        currentTeam.attempts += 1;
        if (currentTeam.attempts >= 2) {
            lockTeam();
        } else {
            notify(`Wrong answer, ${gameState.currentTeam} team, try again!`);
            switchTurn();
        }
    }
}

function updateUI() {
    // Logic to update the UI elements based on the game state
}

function notify(message) {
    notificationModal.innerText = message;
    notificationModal.style.display = 'block';
    setTimeout(() => {
        notificationModal.style.display = 'none';
    }, 3000);
}

// Additional functionalities here to handle DOM elements for crossword grid and clue selection.