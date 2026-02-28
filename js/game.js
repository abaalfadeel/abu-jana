// Game Logic for Collection and Guess Games

// Collection Game
function collectionGame(items) {
    let collected = [];
    items.forEach(item => {
        if (Math.random() > 0.5) { // Randomly decide to collect an item
            collected.push(item);
            console.log(`Collected: ${item}`);
        }
    });
    return collected;
}

// Guess Game
function guessGame(correctAnswer) {
    let attempts = 3;
    while (attempts > 0) {
        const guess = prompt('Guess the answer:');
        if (guess === correctAnswer) {
            console.log('Correct! You win!');
            return true;
        } else {
            attempts--;
            console.log(`Wrong guess. You have ${attempts} attempts left.`);
        }
    }
    console.log('Game over. You used all attempts.');
    return false;
}

// Example usage
const items = ['apple', 'banana', 'cherry', 'date'];
const collectedItems = collectionGame(items);
const answer = 'banana'; // Example answer for guess game
guessGame(answer);