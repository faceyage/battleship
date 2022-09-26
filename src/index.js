import "./style.css";
//don't edit above
import Player from "./factories/player";
import Ship from "./factories/ship";

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
    this.player = new Player(false, "Player1", true);
    this.ai = new Player(false, "Player1", false);
    this.isPlacingStage = true;
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

  //initialize placeship stage before starting game
  placeShips() {
    this.player = new Player(false, "Player1", true);
    this.isPlacingStage = true;

    const gameArea = document.querySelector(".gameArea");
    gameArea.innerHTML = "";
    this.createGameBoard(this.player);

    const ships = document.createElement("div");
    ships.classList.add("ships");
    gameArea.appendChild(ships);

    const ship1 = this.createDraggableShip(5);
    const ship2 = this.createDraggableShip(2);
    const ship3 = this.createDraggableShip(4);
    const ship4 = this.createDraggableShip(3);

    ships.appendChild(ship1);
    ships.appendChild(ship2);
    ships.appendChild(ship3);
    ships.appendChild(ship4);

    const content = document.querySelector(".content");
    const randomPlaceBtn = document.createElement("button");
    randomPlaceBtn.classList.add("btn");
    randomPlaceBtn.classList.add("randomPlaceBtn");
    randomPlaceBtn.textContent = "Random Place";
    content.appendChild(randomPlaceBtn);
    randomPlaceBtn.onclick = () => {
      const shipsElements = ships.querySelectorAll(".ship");
      console.log(shipsElements);
      shipsElements.forEach((ship) => {
        console.log(ship);
        const addedShip = this.player.gameBoard.addRandomShip(Number(ship.dataset.length), Math.random() < 0.5);
        console.log(addedShip);
        this.addShipToBoard(this.player, addedShip);
        ship.remove();
      });
      ships.remove();
      randomPlaceBtn.remove();
      this.startGame();
    };
  }

  //add added ship to board in html
  addShipToBoard(player, ship) {
    const { startX, startY, endX, endY } = ship.coord;
    const boardSelector = player.isAI ? "#ai_board" : "#player_board";
    const board = document.querySelector(boardSelector);
    for (let i = startX; i < endX; i++) {
      for (let j = startY; j < endY; j++) {
        const sqr = board.querySelector(`[data-x='${i}'][data-y='${j}']`);
        sqr.classList.add("hasShip");
      }
    }
  }

  createDraggableShip(length) {
    // const container = document.createElement("div");
    // container.classList.add("container");

    // const quantityElement = document.createElement("div");
    // quantityElement.textContent = `${quantity}X`;
    // container.appendChild(quantityElement);

    const ship = document.createElement("div");
    ship.dataset.length = length;
    ship.dataset.isvertical = false;
    ship.classList.add("ship");
    ship.setAttribute("draggable", "true");
    ship.onclick = () => {
      if (ship.classList.contains("vertical")) {
        ship.classList.remove("vertical");
        ship.dataset.isvertical = false;
      } else {
        ship.classList.add("vertical");
        ship.dataset.isvertical = true;
      }
    };

    ship.ondragstart = () => {
      ship.classList.add("dragging");
    };

    ship.ondragend = () => {
      ship.classList.remove("dragging");
    };

    //to create length of ship
    for (let i = 0; i < length; i++) {
      const part = document.createElement("div");
      part.classList.add("part");
      ship.appendChild(part);
    }

    return ship;
  }

  startGame() {
    this.isPlacingStage = false;
    this.ai = new Player(true, "AI", false);

    this.ai.addSomeShip();

    //create game boards in html for ai and player
    // this.createGameBoard(this.player);
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

    this.placeShips();
  }

  //creates and adds game board on html
  createGameBoard(player) {
    const board = player.gameBoard.board;
    const gameArea = document.querySelector(".gameArea");
    const gameBoard = document.createElement("div");
    gameBoard.classList.add("gameboard");
    gameBoard.id = player.isAI ? "ai_board" : "player_board";

    for (let i = 0; i < board.length; i++) {
      const column = document.createElement("div");
      column.classList.add("column");
      gameBoard.appendChild(column);
      for (let j = 0; j < board[i].length; j++) {
        const sqr = document.createElement("div");
        sqr.classList.add("sqr");
        //add style for only hovering ai's board
        if (player.isAI) {
        }
        if (!player.isAI && board[i][j].hasShip) {
          sqr.classList.add("hasShip");
        }
        sqr.dataset.x = i;
        sqr.dataset.y = j;
        sqr.ondragover = () => {
          if (this.isPlacingStage) {
            if (!player.isAI) this.dragging(sqr, player, i, j);
            sqr.classList.add("hover");
          }
        };

        sqr.ondragleave = () => {
          sqr.classList.remove("hover");
        };
        sqr.onclick = () => {
          //for attacking to enemy
          if (player.isAI && this.player.isMyTurn && !board[i][j].isShot) {
            this.attack(sqr, player, i, j);
            //after player attacks to ai playAI
            this.aiPlay();
          }
        };
        column.appendChild(sqr);
      }
    }
    gameArea.appendChild(gameBoard);
  }

  //ondrag function for square
  dragging(sqr, player, i, j) {
    //gets ships dragging
    const ship = document.querySelector(".dragging");
    const length = Number(ship.dataset.length);
    const isVertical = ship.dataset.isvertical === "true" ? true : false;
    const newShip = new Ship(length, i, j, isVertical);

    //if ship is in available space place it
    const canPlace = player.gameBoard.canPlace(i, j, newShip.coord.endX, newShip.coord.endY);
    ship.ondragend = () => {
      ship.classList.remove("dragging");
      //if can place ship add ship to board
      if (canPlace) {
        this.addShipToBoard(player, newShip);
        player.gameBoard.addShip(newShip);
        ship.remove();
        const ships = document.querySelectorAll(".ships > .ship");
        if (ships.length === 0) {
          const randomPlaceBtn = document.querySelector(".randomPlaceBtn");
          randomPlaceBtn.remove();
          const content = document.querySelector(".content");
          const startGameBtn = document.createElement("button");
          startGameBtn.classList.add("btn");
          startGameBtn.classList.add("startGameBtn");
          startGameBtn.textContent = "Start Game";
          startGameBtn.onclick = () => {
            const shipsContainer = document.querySelector(".ships");
            shipsContainer.remove();
            this.startGame();
            startGameBtn.remove();
          };
          content.appendChild(startGameBtn);
        }
        console.log(`Remaining Ships length: ${ships.length}`);
      } else {
        console.log("You can't place ship there");
      }
    };
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
game.placeShips();
// game.startGame();
