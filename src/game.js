const { styleShip, calcXandY } = require('./utils');
const Player = require('./player');
const Ship = require('./ship');
const alphaImg = require('./images/Alpha.png');
const betaImg = require('./images/Beta.png');
const gammaImg = require('./images/Gamma.png');
const deltaImg = require('./images/Delta.png');
const epsilonImg = require('./images/Epsilon.png');

function startGame(player) {
    console.log('game started')
    const computer = new Player('Computer');
    const playerBoard = document.createElement('div');
    const computerBoard = document.createElement('div');


    renderBoards();

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

    setupEventListeners2();
    


    function renderBoards() {
        const setupBoard = document.querySelector('.gameboard');
        playerBoard.classList.add('gameboard', 'player-board');
        computerBoard.classList.add('gameboard', 'computer-board');
        for (let i = 0; i < 100; i++) {
            const newPlayerCell = document.createElement('div');
            const newComputerCell = document.createElement('div');
            newPlayerCell.classList.add('cell');
            newComputerCell.classList.add('cell');
            playerBoard.appendChild(newPlayerCell)
            computerBoard.appendChild(newComputerCell);
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
        setupBoard.remove();

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
        if (player.myBoard.receiveAttack(x, y)) {
            return true;
        } else return false;
    };

    function displayMessage(message, element) {
        let oldOverlays = Array.from(document.querySelectorAll('.overlay-msg'));
        for (let i = 0; i < oldOverlays.length; i++) {
            oldOverlays[i].remove();
        };
        const overlayMsg = document.createElement('h1');
        overlayMsg.classList.add('overlay-msg');
        overlayMsg.textContent = message;
        element.appendChild(overlayMsg);
        overlayMsg.style.opacity = '100%';
        setTimeout(() => {overlayMsg.remove()}, 2000);
    };

    function setComputerBoard() {
        const computerCells = document.querySelectorAll('.computer-board > .cell');
        for (let i = 0; i < 100; i++) {
            const { x, y } = calcXandY(i);
            computerCells[i].addEventListener('click', () => {
                if (playerTurn && !computerCells[i].classList.contains('attacked') && playerAttack(x, y)) {
                    console.log('player hit computer ship');
                    computerCells[i].classList.add('attacked');
                    computerCells[i].style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
                    computerCells[i].textContent = 'X';
                    if (computer.myBoard.cells[y][x].isSunk()) {
                        for (let i = 0; i < 100; i++) {
                            const { x, y } = calcXandY(i);
                            if (computer.myBoard.cells[y][x].isSunk()) {
                                computerCells[i].style.borderColor = 'red';
                                computerCells[i].style.color = 'black';
                            };
                        };
                        console.log('computer ', computer.myBoard.cells[y][x].name, ' is sunk!');
                        displayMessage(`${computer.myBoard.cells[y][x].name.toUpperCase()} SUNK!`, computerBoard);
                        if (computer.myBoard.isGameOver()) {
                            endGame('PLAYER');
                            return
                        };
                    } else {
                        displayMessage('HIT', computerBoard);
                    }
                    playerTurn = !playerTurn;
                } else if (playerTurn && !computerCells[i].classList.contains('attacked')) {
                    computerCells[i].classList.add('attacked');
                    displayMessage('MISS', computerBoard);
                    computerCells[i].style.backgroundColor = 'grey';
                    computerCells[i].textContent = 'O';
                    playerTurn = !playerTurn;
                };
            });
        };
    };

    function endGame(winner) {
        console.log('game Over!');
        const endScreen = document.createElement('div');
        endScreen.classList.add('end-screen');
        const endMsg = document.createElement('h1');
        endMsg.classList.add('end-msg');
        endMsg.textContent = `${winner} WON!`;
        endScreen.appendChild(endMsg);
        const replayButton = document.createElement('button');
        replayButton.classList.add('replay');
        replayButton.textContent = 'Play Again';
        endScreen.appendChild(replayButton);
        document.body.appendChild(endScreen);
    };

    function setPlayerBoard() {
        const playerCells = document.querySelectorAll('.player-board > .cell');
        for (let i = 0; i < 100; i++) {
            const { x, y } = calcXandY(i);
            if (player.myBoard.cells[y][x] instanceof Ship) {
                playerCells[i].style.backgroundColor = 'rgba(0, 255, 0, 0.5)';
                playerCells[i].style.border = '2px solid green';
            };
            playerCells[i].addEventListener('click', () => {
                if (!playerTurn && !playerCells[i].classList.contains('attacked') && computerAttack(x,y)) {
                    console.log('computer hit player ship');
                    playerCells[i].classList.add('attacked');
                    displayMessage('HIT', playerBoard);
                    playerCells[i].style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
                    const X = document.createElement('p');
                    X.textContent = 'X';
                    X.style.color = 'white';
                    X.style.fontSize = '1.5rem';
                    playerCells[i].appendChild(X);
                    if (player.myBoard.cells[y][x].isSunk()) {
                        for (let i = 0; i < 100; i++) {
                            const { x, y } = calcXandY(i);
                            if (player.myBoard.cells[y][x].isSunk()) {
                                playerCells[i].style.borderColor = 'red';
                                playerCells[i].children[playerCells[i].children.length - 1].style.color = 'black';
                            };
                        };
                        console.log('player ', player.myBoard.cells[y][x].name, ' is sunk!');
                        displayMessage(`${player.myBoard.cells[y][x].name.toUpperCase()} SUNK!`, playerBoard);
                        // add some sort of cross out over player ship?
                        if (player.myBoard.isGameOver()) {
                            endGame('COMPUTER');
                            return;
                        };
                    };
                    playerTurn = !playerTurn;
                } else if (!playerTurn && !playerCells[i].classList.contains('attacked')) {
                    console.log('computer missed');
                    playerCells[i].classList.add('attacked');
                    displayMessage('MISS', playerBoard);
                    playerCells[i].style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
                    playerCells[i].textContent = 'O';
                    playerTurn = !playerTurn;
                };
            });
        };
    };


    function addShipImage(shipName) {
        const playerCells = document.querySelectorAll('.player-board > .cell');
        for (let i = 0; i < 100; i++) {
            const { x, y } = calcXandY(i);
            if (player.myBoard.cells[y][x] instanceof Ship && player.myBoard.cells[y][x].name === shipName && !shipImagePlaced[shipName]) {
                if (player.myBoard.cells[y][x+1] !== player.myBoard.cells[y][x]) {
                    debugger;
                    styleShip(shipNameToImage[shipName], true);
                } else {
                    debugger;
                    styleShip(shipNameToImage[shipName], false);
                };

                playerCells[i].appendChild(shipNameToImage[shipName]);
                shipImagePlaced[shipName] = true;
            };
        };
    };

    function setupEventListeners2() {
        setComputerBoard();
        setPlayerBoard();
        addShipImage('alpha');
        addShipImage('beta');
        addShipImage('gamma');
        addShipImage('delta');
        addShipImage('epsilon');
    };
};

module.exports = startGame;
