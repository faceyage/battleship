import "./style.css";
//don't edit above
import Player from "./factories/player";
import Gameboard from "./factories/gameboard";

//creates basic html structure
//immediately invoked
(function init() {
  const content = document.querySelector(".content");
  const logo = document.createElement("div");
  logo.classList.add("logo");
  logo.textContent = "BATTLESHIP";

  const gameArea = document.createElement("div");
  gameArea.classList.add("gameArea");

  content.appendChild(logo);
  content.appendChild(gameArea);
})();

//mostly dom manipulation on gameboard
class Game {
  constructor() {
    this.player = null;
    this.ai = null;
  }

  aiPlay() {
    //gets random available position on players board
    if (!this.ai.isMyTurn) {
      console.error("it's not ai's turn can't play!");
      return;
    }
    const coord = this.player.randomPos();
    const x = coord[0];
    const y = coord[1];
    //ai will attack to players board
    const gameArea = document.querySelector("#player_board");
    const sqr = gameArea.querySelector(`[data-x='${x}'][data-y='${y}']`);
    this.attack(sqr, this.player, coord[0], coord[1]);
  }

  startGame() {
    this.player = new Player(false, "Player1", true);
    this.ai = new Player(true, "AI", false);

    this.player.addSomeShip();
    this.ai.addSomeShip();

    //create game boards in html for ai and player
    this.createGameBoard(this.player);
    this.createGameBoard(this.ai);
  }

  endGame() {
    const winner = this.ai.gameBoard.isGameOver() ? this.player.name : this.ai.name;
    const gameArea = document.querySelector(".gameArea");
    console.log(winner);
    this.writeWinner(winner);
  }

  restartGame() {
    const content = document.querySelector(".content");
    const gameOver = document.querySelector(".gameOver");
    const gameArea = document.querySelector(".gameArea");

    content.classList.remove("blur");
    gameArea.innerHTML = "";
    gameOver.remove();

    this.startGame();
  }

  //create html game board element
  createGameBoard(player) {
    const board = player.gameBoard.board;
    const gameArea = document.querySelector(".gameArea");
    const gameBoard = document.createElement("div");
    gameBoard.classList.add("gameboard");
    if (player.isAI) gameBoard.id = "ai_board";
    else gameBoard.id = "player_board";
    for (let i = 0; i < board.length; i++) {
      const column = document.createElement("div");
      column.classList.add("column");
      gameBoard.appendChild(column);
      for (let j = 0; j < board[i].length; j++) {
        const sqr = document.createElement("div");
        if (board[i][j].isShot) {
          sqr.classList.add("shot");
        }
        if (!player.isAI && board[i][j].hasShip) {
          sqr.classList.add("hasShip");
        }
        sqr.classList.add("sqr");
        sqr.dataset.x = i;
        sqr.dataset.y = j;
        sqr.onclick = () => {
          if (player.isAI) {
            //after player attacks to ai create play ai
            //play ai if attack is sucessfull
            if (this.player.isMyTurn) {
              if (this.attack(sqr, player, i, j)) this.aiPlay();
            }
          }
        };
        column.appendChild(sqr);
      }
    }
    gameArea.appendChild(gameBoard);
  }

  //player is attacked player
  //if attack is sucessfull returns true false otherwise
  attack(sqr, player, x, y) {
    const attackingPlayer = player.isAI ? this.player : this.ai;
    if (!attackingPlayer.isMyTurn) {
      console.error(`It's not ${attackingPlayer.name}'s turn!`);
      return;
    }

    const board = player.gameBoard.board;
    //active only if shooting ai's board
    if (player.gameBoard.receiveAttack(x, y)) {
      if (board[x][y].hasShip) {
        sqr.classList.add("shot");
        const gameOver = player.gameBoard.isGameOver();
        // console.log(`Game Over: ${gameOver ? "Yes" : "No"}`);
        if (gameOver) game.endGame();
      } else {
        sqr.classList.add("miss");
      }
      attackingPlayer.isMyTurn = false;
      player.isMyTurn = true;
      return true;
    }
    return false;
  }

  writeWinner(name) {
    const content = document.querySelector(".content");
    content.classList.add("blur");

    const gameOver = document.createElement("div");
    gameOver.classList.add("gameOver");

    const gameOverText = document.createElement("div");
    gameOverText.textContent = "Game Over";

    const winner = document.createElement("div");
    winner.classList.add("winner");
    winner.textContent = `Winner is ${name}`;

    const restartBtn = document.createElement("button");
    restartBtn.classList.add("btn");
    restartBtn.textContent = "Restart Game";
    restartBtn.onclick = () => {
      this.restartGame();
    };

    gameOver.appendChild(gameOverText);
    gameOver.appendChild(winner);
    gameOver.appendChild(restartBtn);

    document.body.appendChild(gameOver);
  }
}

const game = new Game();
game.startGame();
