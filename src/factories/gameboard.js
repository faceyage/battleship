import Ship from "./ship";

class Gameboard {
  constructor() {
    this.board = this.#createBoard();
  }

  //create board without attacked false means not yet visited true means visited
  #createBoard() {
    const board = [];
    for (let i = 0; i < 10; i++) {
      board.push([]);
      for (let j = 0; j < 10; j++) {
        board[i].push({ hasShip: false, isShot: false });
      }
    }
    return board;
  }

  //adds ship to board
  addShip(ship) {
    //update board with new ship
    for (let i = ship.coord.startX; i < ship.coord.endX; i++) {
      for (let j = ship.coord.startY; j < ship.coord.endY; j++) {
        this.board[i][j].hasShip = true;
      }
    }
  }

  //returns true if successfully receives attack false otherwise
  receiveAttack(x, y) {
    if (this.board[x][y].isShot) {
      console.log("position already attacked!");
      return false;
    }
    this.board[x][y].isShot = true;
    return true;
  }

  //checks if all ships are sunk
  isGameOver() {
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        //has ship and not shot so game still continues
        if (this.board[i][j].hasShip && !this.board[i][j].isShot) {
          return false;
        }
      }
    }
    return true;
  }

  //returns ship in available random position
  #getRandomShip(length, isVertical) {
    if (length > 9 || length <= 0) {
      console.error("Ships length can't be above 9 or under 0");
    }
    while (true) {
      let startX = Math.floor(Math.random() * 10);
      let startY = Math.floor(Math.random() * 10);
      let endX = isVertical ? startX + 1 : startX + length;
      let endY = isVertical ? startY + length : startY + 1;
      //out of board try create another one
      if (endX > 9 || endY > 9) {
        continue;
      }
      let positionAvailable = true;
      loop1: for (let i = startX; i < endX; i++) {
        for (let j = startY; j < endY; j++) {
          //has ship in location break loop and try to create another coordinate
          if (this.board[i][j].hasShip) {
            positionAvailable = false;
            break loop1;
          }
        }
      }
      if (positionAvailable) {
        const ship = new Ship(length, startX, startY, isVertical);
        return ship;
      }
    }
  }

  addRandomShip(length, isVertical) {
    const ship = this.#getRandomShip(length, isVertical);
    this.addShip(ship);
  }
}

export default Gameboard;
