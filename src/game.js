import  { player1 } from './gameSetup';
import Player from './player';
import Ship from './ship';
import alphaImg from './images/Alpha.png';
import betaImg from './images/Beta.png';
import gammaImg from './images/Gamma.png';
import deltaImg from './images/Delta.png';
import epsilonImg from './images/Epsilon.png';

export default function startGame() {
    console.log('game started')
    const computer = new Player('Computer');
    renderBoards();
    console.log(player1.myBoard);
    console.log(computer.myBoard);
    const alpha = new Image()
    alpha.classList.add('alpha', 'ship', 'placed');
    alpha.src = alphaImg;
    const beta = new Image()
    beta.classList.add('beta', 'ship', 'placed');
    beta.src = betaImg;
    const gamma = new Image()
    gamma.classList.add('gamma', 'ship', 'placed');
    gamma.src = gammaImg;
    const delta = new Image()
    delta.classList.add('delta', 'ship', 'placed');
    delta.src = deltaImg;
    const epsilon = new Image()
    epsilon.classList.add('epsilon', 'ship', 'placed');
    epsilon.src = epsilonImg;
    let playerTurn = true;
    const shipImagePlaced = {alpha: false, beta: false, gamma: false, delta: false, epsilon: false};
    const shipNameToImage = {'alpha': alpha, 'beta': beta, 'gamma': gamma, 'delta': delta, 'epsilon': epsilon};
    setupEventListeners();
    


    function renderBoards() {
        const setupBoard = document.querySelector('.gameboard');
        const playerBoard = document.createElement('div');
        playerBoard.classList.add('gameboard', 'player-board');
        const computerBoard = document.createElement('div');
        computerBoard.classList.add('gameboard', 'computer-board');
        for (let i = 0; i < 100; i++) {
            const newPlayerCell = document.createElement('div');
            const newComputerCell = document.createElement('div');
            newPlayerCell.classList.add('cell');
            newComputerCell.classList.add('cell');
            playerBoard.appendChild(newPlayerCell)
            computerBoard.appendChild(newComputerCell);
            const x = i % 10;
            const y = Math.floor(i / 10);
        };
        const gameContainer = document.createElement('div');
        gameContainer.classList.add('game-container');

        const submit = document.querySelector('.submit');
        const reset = document.querySelector('.reset');
        const axis = document.querySelector('.axis-instructions');
        const buttons = document.querySelector('.buttons');
        submit.parentElement.removeChild(submit);
        reset.parentElement.removeChild(reset);
        axis.parentElement.removeChild(axis);
        buttons.parentElement.removeChild(buttons);
        setupBoard.parentElement.removeChild(setupBoard);

        computer.myBoard.setShip(computer.myBoard.ships['alpha'], [0, 0], [1, 0]);
        computer.myBoard.setShip(computer.myBoard.ships['beta'], [0, 1], [2, 1]);
        computer.myBoard.setShip(computer.myBoard.ships['gamma'], [0, 2], [2, 2]);
        computer.myBoard.setShip(computer.myBoard.ships['delta'], [0, 3], [3, 3]);
        computer.myBoard.setShip(computer.myBoard.ships['epsilon'], [0, 4], [4, 4]);

        gameContainer.appendChild(playerBoard);
        gameContainer.appendChild(computerBoard);
        document.body.appendChild(gameContainer);
    };
    
    function playerAttack(x, y) {
        if (!playerTurn) {
            return;
        };
        console.log('player makes attack');
        if (computer.myBoard.receiveAttack(x, y)) {
            return true;
        } else return false;
    };

    function computerAttack(x, y) {
        if (playerTurn) {
            return
        };
        console.log('computer makes attack');
        if (player1.myBoard.receiveAttack(x, y)) {
            return true;
        } else return false;
    };

    function setComputerBoard() {
        const computerCells = document.querySelectorAll('.computer-board > .cell');
        for (let i = 0; i < 100; i++) {
            computerCells[i].style.border = '2px solid red';
            const x = i % 10;
            const y = Math.floor(i / 10);
            computerCells[i].addEventListener('click', () => {
                if (playerTurn && playerAttack(x, y)) {
                    console.log('player hit computer ship');
                    computerCells[i].style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
                    if (computer.myBoard.cells[y][x].isSunk()) {
                        console.log('computer ', computer.myBoard.cells[y][x].name, ' is sunk!');
                        // add image of computer ship to computer board
                        // add some sort of cross out over it?
                        if (computer.myBoard.isGameOver()) {
                            endGame();
                            return
                        };
                    }
                    playerTurn = !playerTurn;
                } else if (playerTurn) {
                    console.log('player missed');
                    computerCells[i].style.backgroundColor = 'grey';
                    playerTurn = !playerTurn;
                } else {
                    console.log('not player turn');
                }
            });
        };
    };

    function endGame() {
        console.log('game Over!');
    }

    function setPlayerBoard() {
        const playerCells = document.querySelectorAll('.player-board > .cell');
        for (let i = 0; i < 100; i++) {
            const x = i % 10;
            const y = Math.floor(i / 10);
            if (player1.myBoard.cells[y][x] instanceof Ship) {
                playerCells[i].style.backgroundColor = 'rgba(0, 255, 0, 0.5)';
            };
            playerCells[i].addEventListener('click', () => {
                if (!playerTurn && computerAttack(x,y)) {
                    console.log('computer hit player ship');
                    playerCells[i].style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
                    if (player1.myBoard.cells[y][x].isSunk()) {
                        console.log('player ', player1.myBoard.cells[y][x].name, ' is sunk!');
                        // add some sort of cross out over player ship?
                        if (player1.myBoard.isGameOver()) {
                            endGame();
                            return;
                        };
                    };
                    playerTurn = !playerTurn;
                } else if (!playerTurn) {
                    console.log('computer missed');
                    playerCells[i].style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
                    playerTurn = !playerTurn;
                } else {
                    console.log('not computer turn');
                };
            });
        };
    };


    function addShipImage(shipName) {
        const playerCells = document.querySelectorAll('.player-board > .cell');
        for (let i = 0; i < 100; i++) {
            const x = i % 10;
            const y = Math.floor(i / 10);
            if (player1.myBoard.cells[y][x] instanceof Ship && player1.myBoard.cells[y][x].name === shipName && !shipImagePlaced[shipName]) {
                playerCells[i].appendChild(shipNameToImage[shipName]);
                shipImagePlaced[shipName] = true;
            };
        };
    };

    function setupEventListeners() {
        setComputerBoard();
        setPlayerBoard();
        addShipImage('alpha');
        addShipImage('beta');
        addShipImage('gamma');
        addShipImage('delta');
        addShipImage('epsilon');
    };
};