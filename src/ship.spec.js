const Ship = require('./ship.js');

describe('tests for ship', () => {
    test('Ship takes in length arg', () => {
        const testShip = new Ship(2);
        expect(testShip.length).toBe(2);
    });

    test('Ship returns true if hit', () => {
        const testShip = new Ship(2);
        expect(testShip.hit()).toBe(true);
    });

    test('isSunk returns true if ship is sunk', () => {
        const testShip = new Ship(3);
        expect(testShip.isSunk()).toBe(false);
        testShip.hit();
        testShip.hit();
        testShip.hit();
        expect(testShip.isSunk()).toBe(true);
    });
});
