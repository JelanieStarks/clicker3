import Player from './player.js';

// Cache DOM elements
const clickCountElement = document.getElementById("clickcount");
const bankElement = document.getElementById("bank");
const healthElement = document.getElementById("health");
const energyElement = document.getElementById("energy");
const attackElement = document.getElementById("attack");
const attackButton = document.getElementById("attack-button");
const button = document.getElementById("attack-button");
button.addEventListener("click", handleClick);

// Game variables
let clicks = 0;
let attackLevel = 1;
let attackInterval;
let health = 100;
let energy = 100;
let level = 1;
let cost = 25;
let exp = 0;
let bank = 0;
let interestRate = 1.1;
let attackUpgradeLevel = 1; // Initial attack upgrade level
let totalClicks = 0; // Total clicks counter

// Player object
const player = new Player(clicks, attackLevel, attackInterval, health, energy, level, cost, exp, bank, interestRate);


// Handle click function
function handleClick() {
  if (!player) {
    console.error('Player object is null');
    return;
  }

  clicks++;
  try {
    player.updateBank(attackLevel);
  } catch (error) {
    console.error('Error updating bank:', error);
    return;
  }
  totalClicks++;

  updateDisplay();

  if (player.health <= 0) {
    alert('Game over!');
    resetGame();
  }
}


// Attack event handler
function startAttack() {
  if (attackInterval) {
    clearInterval(attackInterval);
  }
  attackInterval = setInterval(() => {
    attackUpgradeLevel++; // Increase attack upgrade level
  }, 1000 / (7 * attackUpgradeLevel)); // Adjust the attack speed based on the attack upgrade level
}

// Attack button event listener
attackButton.addEventListener("click", () => {
  startAttack();

  // Increment clicks and total clicks
  clicks++;
  totalClicks++;

  // Check if attack level is greater than 1
  if (attackLevel > 1) {
    // Calculate attack damage based on attack level
    const attackDamage = Math.floor(attackLevel * 10);

    // Reduce enemy health by attack damage
    enemy.health -= attackDamage;
  }
});

// Reset game function
function resetGame() {
  clicks = 0;
  attackLevel = 1;
  attackInterval = null;
  health = 100;
  energy = 100;
  level = 1;
  cost = 25;
  exp = 0;
  bank = 0;
  attackUpgradeLevel = 1;
  totalClicks = 0;

  updateDisplay();
}