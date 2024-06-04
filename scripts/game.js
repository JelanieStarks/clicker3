// Game State
let money = 0;
let clickStrength = 1;
let enemyHealth = 100;
let experience = 0;
let level = 1;
let enemyLevel = 1;
let multiplierCost = 100;
let autoClickerCost = 10;
let clickValueUpgradeCost = 50;
let experienceNeededForLevel = 100;

// Upgrades
let autoClickers = [];
let clickValueUpgrades = 0; // Changed to a single value
let multipliers = 1; // Changed to a single value

// Shop
function buyAutoClicker() {
  if (money >= autoClickerCost) {
    money -= autoClickerCost;
    autoClickerCost = Math.floor(autoClickerCost * 1.1); // Raise the price of the auto clicker cost each time an autoclicker is purchased
    autoClickers.push(setInterval(clickButton, 1000)); // Set interval immediately
  } else {
    alert("You don't have enough money!");
  }
}

function buyClickValueUpgrade() {
  if (money >= clickValueUpgradeCost) {
    money -= clickValueUpgradeCost;
    clickValueUpgrades += 0.1; // Increment the value
    clickValueUpgradeCost = Math.floor(clickValueUpgradeCost * 1.1); // Raise the price of the click value upgrade cost each time an click value upgrade is purchased
  } else {
    alert("You don't have enough money!");
  }
}

/**
 * Buy a multiplier upgrade for the click button.
 * The cost of the upgrade is stored in the variable multiplierCost.
 * The multiplier upgrade increases the click value by 20%.
 */
function buyMultiplier() {
  if (money >= multiplierCost) { // Check if the player has enough money
    money -= multiplierCost; // Deduct the cost of the upgrade from the player's money
    multipliers *= 1.2; // Apply the multiplier
    multiplierCost = Math.floor(multiplierCost * 1.5); // Raise the cost of the multiplier upgrade
  } else {
    alert("You don't have enough money!"); // Alert the player if they don't have enough money
  }
}

// Game Mechanics
function clickButton() {
  let totalClickValue = clickStrength + clickValueUpgrades; // Calculate total click value
  totalClickValue *= multipliers; // Apply multipliers
  money += totalClickValue;
  enemyHealth -= totalClickValue;

  if (enemyHealth <= 0) {
    let randomizedExp = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
    experience += randomizedExp * enemyLevel; // Experience gained is randomized between 5 and 10 times enemy level
    levelUp();
  }

  updateStatus();
}

function levelUp() {
  if (experience >= experienceNeededForLevel) {
    experience -= experienceNeededForLevel;
    level++;
    enemyLevel++;
    clickStrength++;
    experienceNeededForLevel = Math.floor(experienceNeededForLevel * 1.5);
    enemyHealth = 100 * enemyLevel; // Enemy health scales with enemy level
  }
}

// Update Status Function
function updateStatus() {
  document.getElementById("money").textContent = "Money: " + money.toFixed(2);
  document.getElementById("clickStrength").textContent = "Click Strength: " + clickStrength.toFixed(2);
  document.getElementById("enemyHealth").textContent = "Enemy Health: " + enemyHealth.toFixed();
  document.getElementById("experience").textContent = "Experience: " + experience;
  document.getElementById("level").textContent = "Player Level: " + level;
  document.getElementById("enemyLevel").textContent = enemyLevel;
  document.getElementById("autoClickerCost").textContent = autoClickerCost;
  document.getElementById("clickValueUpgradeButton").textContent = "Click Value Upgrade Cost: " + clickValueUpgradeCost;
  document.getElementById("multiplierCost").textContent = multiplierCost;
}

// Event Listeners
document.getElementById("clickButton").addEventListener("click", clickButton);
document.getElementById("autoClickerButton").addEventListener("click", buyAutoClicker);
document.getElementById("clickValueUpgradeButton").addEventListener("click", buyClickValueUpgrade);
document.getElementById("multiplierButton").addEventListener("click", buyMultiplier);

// Update status initially
updateStatus();

