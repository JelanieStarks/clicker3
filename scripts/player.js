class Player {
  constructor(name) {
    this.name = name;
    this.level = 1;
    this.exp = 0;
    this.health = 100;
    this.energy = 100;
  }

  gainExp(amount) {
    this.exp += amount;
    while (this.exp >= this.expToNextLevel()) {
      this.levelUp();
    }
  }

  expToNextLevel() {
    return Math.pow(this.level, 3);
  }

  levelUp() {
    this.level++;
    this.health += Math.floor(Math.random() * 3) + 1;
    this.energy += Math.floor(Math.random() * 3) + 1;
    this.exp -= this.expToNextLevel();
  }

  gainExpFromEnemy(enemyLevel) {
    this.gainExp(Math.floor(enemyLevel ** 3 / 2));
  }
  updateDisplay() {
    clickCountElement.textContent = this.getClickCount();
    bankElement.textContent = `Bank: ${this.getBank()}`;
    healthElement.textContent = this.getHealth();
    energyElement.textContent = this.getEnergy();
    attackElement.textContent = `Attack: ${this.getAttackLevel()}`;
  }

  getClickCount() {
    return clicks;
  }

  getBank() {
    return bank;
  }

  getHealth() {
    return this.health;
  }

  getEnergy() {
    return this.energy;
  }

  getAttackLevel() {
    return attackLevel;
  }
}

export default Player;