// Game State
let money = 0;
let clickStrength = 1;
let enemyHealth = 100;
let experience = 0;

// Upgrades
let autoClickers = [];
let clickValueUpgrades = 0; // Changed to a single value
let multipliers = 1; // Changed to a single value

// Shop
function buyAutoClicker() {
  if (money >= 10) {
    money -= 10;
    autoClickers.push(setInterval(clickButton, 1000)); // Set interval immediately
  }
}

function buyClickValueUpgrade() {
  if (money >= 50) {
    money -= 50;
    clickValueUpgrades += 0.1; // Increment the value
  }
}

function buyMultiplier() {
  if (money >= 100) {
    money -= 100;
    multipliers *= 2; // Apply the multiplier
  }
}

// Game Mechanics
function clickButton() {
  let totalClickValue = clickStrength + clickValueUpgrades; // Calculate total click value
  totalClickValue *= multipliers; // Apply multipliers
  money += totalClickValue;
  enemyHealth -= totalClickValue;
  if (enemyHealth <= 0) {
    enemyHealth = 100;
    experience += 10;
    if (experience >= 100) {
      experience -= 100;
      clickStrength += 1;
    }
  }
  updateStatus();
}

// Update Status Function
function updateStatus() {
  document.getElementById("money").textContent = money.toFixed(2);
  document.getElementById("clickStrength").textContent = clickStrength.toFixed(2);
  document.getElementById("enemyHealth").textContent = enemyHealth;
  document.getElementById("experience").textContent = experience;
}

// Event Listeners
document.getElementById("clickButton").addEventListener("click", clickButton);
document.getElementById("autoClickerButton").addEventListener("click", buyAutoClicker);
document.getElementById("clickValueUpgradeButton").addEventListener("click", buyClickValueUpgrade);
document.getElementById("multiplierButton").addEventListener("click", buyMultiplier);

// Update status initially
updateStatus();
