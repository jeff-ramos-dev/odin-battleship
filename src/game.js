const { styleShip, calcXandY, getRandomTFIndex, getRandomCellIndex, calcStartandEnd } = require('./utils');
const Player = require('./player');
const Ship = require('./ship');
const alphaImg = require('./images/alpha.png');
const betaImg = require('./images/beta.png');
const gammaImg = require('./images/gamma.png');
const deltaImg = require('./images/delta.png');
const epsilonImg = require('./images/epsilon.png');

function startGame(player) {
    console.log('game started')
    const computer = new Player('Computer');
    const playerBoard = document.createElement('div');
    const computerBoard = document.createElement('div');


    renderBoards();

    const alpha = document.createElement('div');
    alpha.classList.add('alpha', 'ship', 'placed');
    alpha.backgroundImage = alphaImg
    const beta = document.createElement('div');
    beta.backgroundImage = betaImg
    beta.classList.add('beta', 'ship', 'placed');
    const gamma = document.createElement('div');
    gamma.classList.add('gamma', 'ship', 'placed');
    gamma.backgroundImage = gammaImg
    const delta = document.createElement('div');
    delta.classList.add('delta', 'ship', 'placed');
    delta.backgroundImage = deltaImg;
    const epsilon = document.createElement('div');
    epsilon.classList.add('epsilon', 'ship', 'placed');
    epsilon.backgroundImage = epsilonImg;

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
        const axisContainer = document.querySelector('.axis-container');
        const buttons = document.querySelector('.buttons');
        const playerName = document.createElement('h2');
        playerName.textContent = 'Player';
        playerName.classList.add('name');
        const computerName = document.createElement('h2');
        computerName.textContent = 'Computer';
        computerName.classList.add('name');
        submit.parentElement.removeChild(submit);
        reset.parentElement.removeChild(reset);
        axisContainer.remove()
        buttons.parentElement.removeChild(buttons);
        setupBoard.remove();

        function setComputerShip(shipName) {
            const tf = [true, false];
            let vertical = tf[getRandomTFIndex()];
            let index = getRandomCellIndex();
            let {x, y} = calcXandY(index);
            if (vertical) {
                while(y + computer.myBoard.ships[shipName].length > 10) {
                    index = getRandomCellIndex();
                    ({x, y} = calcXandY(index));
                };
            } else {
                while(x + computer.myBoard.ships[shipName].length > 10) {
                    index = getRandomCellIndex(); 
                    ({x, y} = calcXandY(index));
                };
            };
            let {start, end} = calcStartandEnd(index, computer.myBoard.ships[shipName].length, vertical);
            computer.myBoard.setShip(computer.myBoard.ships[shipName], start, end);
        };

        setComputerShip('alpha');
        setComputerShip('beta');
        setComputerShip('gamma');
        setComputerShip('delta');
        setComputerShip('epsilon');

        gameContainer.appendChild(playerName);
        gameContainer.appendChild(playerBoard);
        gameContainer.appendChild(computerName);
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
                                // const sunkShip = document.createElement('div');
                                // sunkShip.backgroundImage = `./images/${computer.myBoard.cells[y][x].name}.png`;
                                // sunkShip.classList.add('ship', computer.myBoard.cells[y][x].name, 'placed');
                                // computerCells[i].appendChild(sunkShip);
                                // styleShip(sunkShip, false);
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
            setTimeout(() => {
                debugger;
                const playerCells = Array.from(document.querySelectorAll('.player-board > .cell'));
                let playerCellTarget = playerCells[getRandomCellIndex()];
                while(playerCellTarget.style.backgroundColor === 'rgba(255, 0, 0, 0.5)' || playerCellTarget.style.backgroundColor === 'rgba(255, 255, 255, 0.5)') {
                    playerCellTarget = playerCells[getRandomCellIndex()];
                }
                playerCellTarget.click();
            }, 1500);
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
                    styleShip(shipNameToImage[shipName], true);
                } else {
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
