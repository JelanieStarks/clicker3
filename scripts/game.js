// game.js
import Player from './player.js';
import Enemy from './enemy.js';
import Exp from './exp.js';
import Bank from './bank.js';
import Shop from './shop.js';

class Game {
  constructor() {
    this.player = new Player();
    this.enemy = new Enemy();
    this.exp = new Exp();
    this.bank = new Bank();
    this.shop = new Shop();

    this.totalClicks = 0;
    this.attackInterval = null;
  }

  handleClick() {
    if (!this.attackInterval) {
      this.attackInterval = setInterval(() => {
        this.player.clicks++;
        this.player.updateBank(1);
      }, 1000);
    }
    this.totalClicks++;
    this.player.updateDisplay();
  }

  resetGame() {
    this.player.reset();
    this.enemy.reset();
    this.exp.reset();
    this.bank.reset();
    this.shop.reset();

    this.totalClicks = 0;
    if (this.attackInterval) {
      clearInterval(this.attackInterval);
      this.attackInterval = null;
    }
  }
}

const game = new Game();
window.game = game;
window.handleClick = () => {
  game.handleClick();
};

export default game;