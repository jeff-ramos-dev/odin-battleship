const Gameboard = require('./gameboard.js');
const Ship = require('./ship.js');

describe('new tests for gameboard', () => {
    test('ships initiate correctly', () => {
        const board = new Gameboard;
        expect(board.ships).toMatchObject({
            'alpha': expect.anything(),
            'beta': expect.anything(),
            'gamma': expect.anything(),
            'delta': expect.anything(),
            'epsilon': expect.anything()
        });
        expect(board.ships.alpha).toBeInstanceOf(Ship);
        expect(board.ships.beta).toBeInstanceOf(Ship);
        expect(board.ships.gamma).toBeInstanceOf(Ship);
        expect(board.ships.delta).toBeInstanceOf(Ship);
        expect(board.ships.epsilon).toBeInstanceOf(Ship);
    });

    test('ship can be placed on the board', () => {
        const board = new Gameboard;
        expect(board.setShip(board.ships['alpha'], [0, 0], [0, 1])).toBe(true);
    });

    test('ship placed out of bounds returns an error', () => {
        const board = new Gameboard;
        expect(() => {
            board.setShip(board.ships['alpha'], [10, 0], [0, 2])
        }).toThrow('out of bounds');
    });

    test('attacks register false for a miss', () => {
        const board = new Gameboard;
        expect(board.receiveAttack(0, 0)).toBe(false);
    });
    
    test('attacks register true for a hit', () => {
        const board = new Gameboard;
        board.setShip(board.ships['alpha'], [0, 0], [0, 1]);
        expect(board.receiveAttack(0, 0)).toBe(true);
    });
    
    test('ship registers as sunk', () => {
        const board = new Gameboard;
        board.setShip(board.ships['alpha'], [0, 0], [0, 1]);
        board.receiveAttack(0, 0);
        expect(board.ships.alpha.isSunk()).toBe(false);
        board.receiveAttack(0, 1);
        expect(board.ships.alpha.isSunk()).toBe(true);
    });
    
    test('cannot attack the same cell twice', () => {
        const board = new Gameboard;
        board.setShip(board.ships.alpha, [0, 0], [0, 1]);
        expect(board.receiveAttack(0, 0)).toBe(true);
        expect(board.receiveAttack(0, 0)).toBeUndefined();
    }); 

    test('checkGameWin returns true if all ships are sunk', () => {
        const board = new Gameboard;
        board.setShip(board.ships['alpha'], [0, 0], [0, 1]);
        board.setShip(board.ships['beta'], [1, 0], [1, 2]);
        board.setShip(board.ships['gamma'], [2, 0], [2, 2]);
        board.setShip(board.ships['delta'], [3, 0], [3, 3]);
        board.setShip(board.ships['epsilon'], [4, 0], [4, 4]);
        board.receiveAttack(0, 0);
        board.receiveAttack(0, 1);

        board.receiveAttack(1, 0);
        board.receiveAttack(1, 1);
        board.receiveAttack(1, 2);

        board.receiveAttack(2, 0);
        board.receiveAttack(2, 1);
        board.receiveAttack(2, 2);

        board.receiveAttack(3, 0);
        board.receiveAttack(3, 1);
        board.receiveAttack(3, 2);
        board.receiveAttack(3, 3);

        board.receiveAttack(4, 0);
        board.receiveAttack(4, 1);
        board.receiveAttack(4, 2);
        board.receiveAttack(4, 3);
        board.receiveAttack(4, 4);
        expect(board.isGameOver()).toBe(true);
    });

    test.todo('actions cannot be taken if game is over');
});