import Ship from "../factories/ship";

test("Check Ship has valid properties", () => {
  const ship = new Ship(3);
  expect(ship.length).toBe(3);
  expect(ship.health).toBe(3);
});

test("Check hit", () => {
  const ship = new Ship(3);
  ship.hit();
  expect(ship.health).toBe(2);
});

test("Not Sunk the ship!", () => {
  const ship = new Ship(3);
  expect(ship.isSunk()).toBe(false);
  ship.hit();
  expect(ship.isSunk()).toBe(false);
});

test("Sunk the ship!", () => {
  const ship = new Ship(3);
  for (let i = 0; i < ship.length; i++) {
    ship.hit();
  }
  expect(ship.isSunk()).toBe(true);
});
