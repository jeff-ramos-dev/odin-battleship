import Ship from './ship.js';

export default class Gameboard {
    ships = this.#createShips();
    cells = this.#createEmptyBoard();
    #attacks = [];
    #misses = [];
    #placedShips = [];

    resetBoard() {
        this.cells = this.#createEmptyBoard();
    };

    #createShips() {
        const shipObject = {};
        shipObject['alpha'] = new Ship(2);
        shipObject['alpha'].name = 'alpha';
        shipObject['beta'] = new Ship(3);
        shipObject['beta'].name = 'beta';
        shipObject['gamma'] = new Ship(3);
        shipObject['gamma'].name = 'gamma';
        shipObject['delta'] = new Ship(4);
        shipObject['delta'].name = 'delta';
        shipObject['epsilon'] = new Ship(5)
        shipObject['epsilon'].name = 'epsilon';

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
        if (this.cells[y][x].hit()) {
            this.#attacks.push([y, x]);
            return true
        } else {
            this.#attacks.push([y, x]);
            this.#misses.push([y, x]);
            return false
        };
    };

    removeShip(shipName) {
        const emptyCell = {
            hit: () => {
                return false
            }, 
            isSunk: () => null
        };

        for (let i = 0; i < this.cells.length; i++) {
            for (let j = 0; j < this.cells[i].length; j++) {
                if (this.cells[i][j] === this.ships[shipName]) {
                    this.cells[i][j] = emptyCell
                };
            };
        };

        for (let i = 0; i < this.#placedShips.length; i++) {
            if (shipName === this.#placedShips[i]) {
                this.#placedShips.splice(i, 1);
            };
        };
    };

    setShip(ship, start, end) {
        if (
        start[1] > 9 || start[0] > 9 ||
        end[1] > 9 || end[0] > 9 ||
        start[1] < 0 || start[0] < 0 ||
        end[1] < 0 || end[0] < 0
        ) throw new Error('out of bounds');

        if (this.#placedShips.includes(ship.name)) {
            this.removeShip(ship);
        }

        if (start[1] === end[1]) {
            // vertical
            if (start[0] < end[0]) {
                // go down
                for (let i = 0; i < ship.length; i++) {
                    if (this.cells[start[1]][start[0] + i] instanceof Ship) {
                        throw new Error('ship overlaps');
                    };
                    this.cells[start[1]][start[0] + i] = ship;
                };
            } else {
                // go up
                for (let i = 0; i < ship.length; i++) {
                    if (this.cells[start[1]][start[0] - i] instanceof Ship) {
                        throw new Error('ship overlaps');
                    };
                    this.cells[start[1]][start[0] - i] = ship;
                };
            };
        } else {
            // horizontal
            if (start[1] < end[1]) {
                // go right
                for (let i = 0; i < ship.length; i++) {
                    if (this.cells[start[1] + i][start[0]] instanceof Ship) {
                        throw new Error('ship overlaps');
                    };
                    this.cells[start[1] + i][start[0]] = ship;
                };
            } else {
                // go left
                for (let i = 0; i < ship.length; i++) {
                    if (this.cells[start[1] - i][start[0]] instanceof Ship) {
                        throw new Error('ship overlaps');
                    };
                    this.cells[start[1] - i][start[0]] = ship;
                };
            };
        };
        this.#placedShips.push(ship.name);
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