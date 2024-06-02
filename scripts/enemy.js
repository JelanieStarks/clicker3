class Enemy {
  constructor(health, attackLevel, attackInterval, cost, interestRate) {
    this.health = health;
    this.attackLevel = attackLevel;
    this.attackInterval = attackInterval;
    this.cost = cost;
    this.interestRate = interestRate;
  }

  // Add any additional methods or properties you need for the enemy object
attack() {
    const maxAttackLevel = this.level ** 2 + 5;
    const minAttackLevel = Math.ceil(maxAttackLevel / 2);
    const randomAttackLevel = Math.floor(Math.random() * (maxAttackLevel - minAttackLevel + 1)) + minAttackLevel;

    const attackDamage = Math.floor(randomAttackLevel * 10);

    let enemyHealth = this.level + Math.floor(Math.random() * 4) - 2;
    if (enemyHealth < 50) {
      enemyHealth = 50;
    } else {
      enemyHealth = enemyHealth ** 2;
    }

    this.health -= attackDamage;
    return { attackDamage, enemyHealth };
  }
}
console.log("Enemy object:", Enemy);
console.log("Attack damage:", attackDamage);
console.log("Enemy health:", enemyHealth);  
console.log("Enemy health after attack:", enemyHealth);

export default Enemy;