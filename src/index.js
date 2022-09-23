import "./style.css";
//don't edit above

import Player from "./factories/player";

//create html board
function createGameBoard(player) {
  const board = player.board.board;
  const gameArea = document.querySelector(".gameArea");
  const gameBoard = document.createElement("div");
  gameBoard.classList.add("gameboard");
  for (let i = 0; i < board.length; i++) {
    const column = document.createElement("div");
    column.classList.add("column");
    gameBoard.appendChild(column);
    for (let j = 0; j < board[i].length; j++) {
      const sqr = document.createElement("div");
      if (player.isAI) {
        if (board[i][j].isShot) {
          sqr.classList.add("shot");
        }
      } else {
        if (board[i][j].hasShip) {
          sqr.classList.add("hasShip");
        }
      }
      sqr.classList.add("sqr");
      sqr.dataset.x = i;
      sqr.dataset.y = j;
      sqr.onclick = () => {
        if (player.isAI && player.board.receiveAttack(i, j)) {
          if (board[i][j].hasShip) {
            sqr.classList.add("shot");
          } else {
            sqr.classList.add("miss");
          }
        }
      };
      column.appendChild(sqr);
    }
  }
  gameArea.appendChild(gameBoard);
}

//creates basic html structure
//immediately invoked
(function init() {
  const gameArea = document.createElement("div");
  gameArea.classList.add("gameArea");
  document.body.appendChild(gameArea);
})();

const player = new Player(false);
player.addSomeShip();

const ai = new Player(true);
ai.addSomeShip();

createGameBoard(player);
createGameBoard(ai);
