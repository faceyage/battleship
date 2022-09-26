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
    } else {
      this.board[x][y].isShot = true;
      return true;
    }
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
      const startX = Math.floor(Math.random() * 10);
      const startY = Math.floor(Math.random() * 10);
      const endX = isVertical ? startX + 1 : startX + length;
      const endY = isVertical ? startY + length : startY + 1;
      const positionAvailable = this.canPlace(startX, startY, endX, endY);
      if (positionAvailable) {
        const ship = new Ship(length, startX, startY, isVertical);
        return ship;
      }
    }
  }

  //adds random ship to board using getRandomShip private function
  addRandomShip(length, isVertical) {
    const ship = this.#getRandomShip(length, isVertical);
    this.addShip(ship);
    return ship;
  }

  //checks if ship can place without cross the board
  canPlace(startX, startY, endX, endY) {
    const coords = { startX, startY, endX, endY };
    //checks if coordinates inside of board
    for (const key in coords) {
      const coord = coords[key];
      if (!(coord >= 0 && coord <= 10)) {
        return false;
      }
    }
    //checks if has ship inside of coordinates
    for (let i = startX; i < endX; i++) {
      for (let j = startY; j < endY; j++) {
        if (this.board[i][j].hasShip) {
          return false;
        }
      }
    }
    return true;
  }

  //returns available unplayed positions in board
  availablePositions() {
    const arr = [];
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        if (!this.board[i][j].isShot) {
          arr.push([i, j]);
        }
      }
    }
    return arr;
  }
}

export default Gameboard;
