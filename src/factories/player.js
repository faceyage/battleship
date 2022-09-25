import Gameboard from "./gameboard";

class Player {
  constructor(isAI, name, isMyTurn) {
    this.name = name;
    this.isAI = isAI;
    this.isMyTurn = isMyTurn;
    this.gameBoard = new Gameboard();
  }

  //returns random available x, y position
  randomPos() {
    const availablePos = this.gameBoard.availablePositions();
    const randomPos = availablePos[Math.floor(Math.random() * availablePos.length)];
    return [randomPos[0], randomPos[1]];
  }

  addSomeShip() {
    this.gameBoard.addRandomShip(4, false);
    this.gameBoard.addRandomShip(3, false);
    this.gameBoard.addRandomShip(2, true);
    this.gameBoard.addRandomShip(1, false);
  }
}

export default Player;
