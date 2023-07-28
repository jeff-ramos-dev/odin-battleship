import Ship from './ship.js';

export default class Gameboard {
    ships = this.#createShips();
    #cells = this.#createEmptyBoard();
    #attacks = [];
    #misses = [];

    resetBoard() {
        this.#cells = this.#createEmptyBoard();
    };

    #createShips() {
        const shipObject = {};
        shipObject['alpha'] = new Ship(2);
        shipObject['beta'] = new Ship(3);
        shipObject['gamma'] = new Ship(3);
        shipObject['delta'] = new Ship(4);
        shipObject['epsilon'] = new Ship(5)

        return shipObject;
    };

    #createEmptyBoard() {
        const w = 10;
        const h = 10;
        const board = [];
        for (let i = 0; i < w; i++) {
            board.push([])
            for (let j = 0; j < h; j++) {
                const emptyCell = {
                    hit: () => {
                        return false
                    }, 
                    isSunk: () => null,
                };
                board[i].push(emptyCell);
            };
        };
        return board;
    };

    receiveAttack(x, y) {
        const attackCoord = [y, x];
        for (let i = 0; i < this.#attacks.length; i++) {
            if (attackCoord.every((val, index) => val === this.#attacks[i][index])) {
                return;
            }
        }
        if (this.#cells[y][x].hit()) {
            this.#attacks.push([y, x]);
            return true
        } else {
            this.#attacks.push([y, x]);
            this.#misses.push([y, x]);
            return false
        };
    };

    setShip(ship, start, end) {
        if (
        start[1] > 9 || start[0] > 9 ||
        end[1] > 9 || end[0] > 9 ||
        start[1] < 0 || start[0] < 0 ||
        end[1] < 0 || end[0] < 0
        ) throw new Error('out of bounds');

        if (start[1] === end[1]) {
            // vertical
            if (start[0] < end[0]) {
                // go down
                for (let i = 0; i < ship.length; i++) {
                    this.#cells[start[1]][start[0] + i] = ship;
                };
            } else {
                // go up
                for (let i = 0; i < ship.length; i++) {
                    this.#cells[start[1]][start[0] - i] = ship;
                };
            };
        } else {
            // horizontal
            if (start[1] < end[1]) {
                // go right
                for (let i = 0; i < ship.length; i++) {
                    this.#cells[start[1] + i][start[0]] = ship;
                };
            } else {
                // go left
                for (let i = 0; i < ship.length; i++) {
                    this.#cells[start[1] - i][start[0]] = ship;
                };
            };
        };
        return true;
    };

    isGameOver() {
        for (let i = 0; i < this.ships.length; i++) {
            if (!this.ships[i].isSunk()) {
                return false;
            };
        };
        return true;
    };
};