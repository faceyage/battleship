import Gameboard from "../factories/gameboard";
import Ship from "../factories/ship";

test("Gameboard's board created properly", () => {
  const gameBoard = new Gameboard();
  const arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push([]);
    for (let j = 0; j < 10; j++) {
      arr[i].push({ hasShip: false, isShot: false });
    }
  }
  expect(gameBoard.board).toEqual(arr);
});

test("Receives Attack", () => {
  const gameBoard = new Gameboard();
  //make sure no error
  expect(gameBoard.receiveAttack(3, 2)).toBe(true);
  //test if recieves attack
  expect(gameBoard.board[3][2].isShot).toBe(true);
});

test("Adds ship correctly", () => {
  const gameBoard = new Gameboard();
  const ship = new Ship(3, 0, 0, true);
  console.log(
    `Start X: ${ship.coord.startX} End X: ${ship.coord.endX} StartY: ${ship.coord.startY} EndY: ${ship.coord.endY}`
  );
  gameBoard.addShip(ship);
  let hasShip = true;
  for (let i = ship.coord.startX; i < ship.coord.endX; i++) {
    for (let j = ship.coord.startY; j < ship.coord.endY; j++) {
      if (!gameBoard.board[i][j].hasShip) {
        console.log(object);
        hasShip = false;
      }
    }
  }
  expect(hasShip).toBe(true);
});

test("Game over if no ship", () => {
  const gameBoard = new Gameboard();
  expect(gameBoard.isGameOver()).toBe(true);
});
