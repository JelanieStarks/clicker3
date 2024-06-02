function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("show");
  }

function upgradeHealth() {
    if(bank >= cost) {
        bank -= cost;
        health += 10;
        cost *= 1.5;
        document.getElementById("bank").innerHTML = "Bank: " + bank;
        document.getElementById("health").innerHTML = "Health: " + health;
        document.getElementById("cost").innerHTML = "Cost: " + cost;
    }
}
function upgradeEnergy() {
    if (bank >= cost) {
      bank -= cost;
      energy += 10;
      cost *= 1.5;
      document.getElementById("bank").innerHTML = "Bank: " + bank;
      document.getElementById("energy").innerHTML = "Energy: " + energy;
      document.getElementById("cost").innerHTML = "Cost: " + cost;
    }
  }
  function upgradeAttack() {
    if (bank >= cost) {
      bank -= cost;
      attackLevel += 1;
      cost *= 1.2;
      document.getElementById("bank").innerHTML = "Bank: " + bank;
      document.getElementById("attack").innerHTML = "Attack: " + attackLevel;
      document.getElementById("cost").innerHTML = "Cost: " + cost;
    }
  }