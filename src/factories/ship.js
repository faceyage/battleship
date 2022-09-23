class Ship {
  constructor(length, startX, startY, isVertical) {
    this.length = length;
    this.health = length;
    //[startX, startY, endX, endY]
    this.coord = {
      startX,
      startY,
      endX: isVertical ? startX + 1 : startX + length,
      endY: isVertical ? startY + length : startY + 1,
    };
  }

  hit() {
    if (this.health <= 0) {
      console.error("Ship is already dead you can't damage more!");
    }
    this.health--;
  }

  isSunk() {
    return this.health === 0;
  }
}

export default Ship;
