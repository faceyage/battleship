import Gameboard from "./gameboard";

class Player {
  constructor(isAI) {
    this.board = new Gameboard();
    this.isAI = isAI;
  }

  shot(x, y) {
    this.board.receiveAttack(x, y);
  }

  addSomeShip() {
    this.board.addRandomShip(4, false);
    this.board.addRandomShip(3, false);
    this.board.addRandomShip(2, true);
    this.board.addRandomShip(1, false);
  }
}

export default Player;
