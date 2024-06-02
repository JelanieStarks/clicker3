
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
}

// Example usage
const player = new Player("Alice");
player.gainExp(100); // Alice gains 100 exp
player.gainExpFromEnemy(5); // Alice defeats an enemy level 5 and gains 125 exp
console.log(player);
