const Ship = require('./ship.js');

class Gameboard {
    ships = this.#createShips();
    #cells = this.#createEmptyBoard();
    #attacks = [];
    #misses = [];

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
        const attackCoord = [x, y];
        for (let i = 0; i < this.#attacks.length; i++) {
            if (attackCoord.every((val, index) => val === this.#attacks[i][index])) {
                return;
            }
        }
        if (this.#cells[x][y].hit()) {
            this.#attacks.push([x, y]);
            return true
        } else {
            this.#attacks.push([x, y]);
            this.#misses.push([x, y]);
            return false
        };
    };

    setShip(ship, start, end) {
        if (
        start[0] > 9 || start[1] > 9 ||
        end[0] > 9 || end[1] > 9 ||
        start[0] < 0 || start[1] < 0 ||
        end[0] < 0 || end[1] < 0
        ) throw new Error('out of bounds');

        if (start[0] === end[0]) {
            // vertical
            if (start[1] < end[1]) {
                // go down
                for (let i = 0; i < ship.length; i++) {
                    this.#cells[start[0]][start[1] + i] = ship;
                };
            } else {
                // go up
                for (let i = 0; i < ship.length; i++) {
                    this.#cells[start[0]][start[1] - i] = ship;
                };
            };
        } else {
            // horizontal
            if (start[0] < end[0]) {
                // go right
                for (let i = 0; i < ship.length; i++) {
                    this.#cells[start[0] + i][start[1]] = ship;
                };
            } else {
                // go left
                for (let i = 0; i < ship.length; i++) {
                    this.#cells[start[0] - i][start[1]] = ship;
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

module.exports = Gameboard;