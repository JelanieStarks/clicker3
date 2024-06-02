// Import the Game class from the game.js file
import Game from './game.js';

// Create a new Game instance
const game = new Game();

// Attach the handleClick function to the window object
// This allows the function to be called from the HTML
window.handleClick = () => {
  // Call the handleClick function on the game instance
  game.handleClick();
};

document.getElementById('attack-button').addEventListener('click', () => {
  game.handleClick();
});

// document.getElementById('attack-button').addEventListener('click', () => {
//   game.startAttack();
// });

// Update the game state regularly
setInterval(() => {
  game.player.updateGameState();
  game.enemy.updateGameState();
  game.exp.updateGameState();
  game.bank.updateGameState();
  game.shop.updateGameState();
}, 1000 / 60); // Update 60 times per second