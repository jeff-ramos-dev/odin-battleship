import  { player1 } from './gameSetup';
import Player from './player';
import Ship from './ship';

export default function startGame() {
    // render player board
    // render computer board
    // set up event listeners
        // if it's your turn, the enemy board should have full opacity, otherwise fade down.
        // On your turn, when you click on the enemy board, it should call hit on the gameBoard cell and depending on the result, display a miss or a hit. If it sinks the ship, reveal the whole ship.
    console.log('game started')
    const computer = new Player('Computer');
    renderBoards();
    console.log(player1.myBoard);
    console.log(computer.myBoard);
    setupEventListeners();
    
    let playerTurn = true;

    function renderBoards() {
        const alpha = document.querySelector('.alpha');
        const beta = document.querySelector('.beta');
        const gamma = document.querySelector('.gamma');
        const delta = document.querySelector('.delta');
        const epsilon = document.querySelector('.epsilon');
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
            if (player1.myBoard.cells[y][x] instanceof Ship) {
                const shipName = player1.myBoard.cells[y][x].name;
                // newPlayerCell.appendChild(document.querySelector(`.${shipName}`));
                newPlayerCell.backgroundColor = 'green';
            };
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
        playerTurn = !playerTurn;
        if (computer.myBoard.receiveAttack(x, y)) {
            return true;
        } else return false;
    };

    function computerAttack(x, y) {
        if (playerTurn) {
            return
        };
        playerTurn = !playerTurn;
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
                if (playerAttack(x, y)) {
                    computerCells[i].style.backgroundColor = 'red';
                } else {
                    computerCells[i].style.backgroundColor = 'white';
                };
            });
        };
    };

    function setPlayerBoard() {
        const playerCells = document.querySelectorAll('.player-board > .cell');
        for (let i = 0; i < 100; i++) {
            const x = i % 10;
            const y = Math.floor(i / 10);
            playerCells[i].addEventListener('click', () => {
                if (computerAttack(x,y)) {
                    playerCells[i].style.backgroundColor = 'red';
                } else {
                    playerCells[i].style.backgroundColor = 'white';
                };
            })
        }
    };

    function setupEventListeners() {
        setComputerBoard();
        setPlayerBoard();
    };
};