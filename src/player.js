import Gameboard from './gameboard.js';

export default class Player {
    myName; 
    myBoard = new Gameboard;
    alpha = this.myBoard.ships['alpha'];
    beta = this.myBoard.ships['beta'];
    gamma = this.myBoard.ships['gamma'];
    delta = this.myBoard.ships['delta'];
    epsilon = this.myBoard.ships['epsilon'];

    constructor(name) {
        this.myName = name;
    }

    attackCell(x, y) {
        return this.myBoard.receiveAttack(x, y);
    }
    
    placeAlpha(start, end) {
        this.myBoard.setShip(this.alpha, start, end)
    }

    placeBeta(start, end) {
        this.myBoard.setShip(this.beta, start, end)
    }

    placeGamma(start, end) {
        this.myBoard.setShip(this.gamma, start, end)
    }

    placeDelta(start, end) {
        this.myBoard.setShip(this.delta, start, end)
    }

    placeEpsilon(start, end) {
        this.myBoard.setShip(this.epsilon, start, end)
    }
};
