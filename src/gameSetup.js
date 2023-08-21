require('./style.css');
const { styleVertical } = require('./utils');
const Player = require('./player')
const Ship = require('./ship')
const startGame = require('./game');
require('./images/Alpha.png');
require('./images/Beta.png');
require('./images/Gamma.png');
require('./images/Delta.png');
require('./images/Epsilon.png');

const player1 = new Player('player1');
const random = document.querySelector('.random');
const reset = document.querySelector('.reset');
const submit = document.querySelector('.submit');
const shipContainer = document.querySelector('.ship-container');
const axis = document.querySelector('.axis');
const alpha = document.querySelector('.alpha');
const beta = document.querySelector('.beta');
const gamma = document.querySelector('.gamma');
const delta = document.querySelector('.delta');
const epsilon = document.querySelector('.epsilon');
const board = document.querySelector('.gameboard');
const ships = [alpha, beta, gamma, delta, epsilon];
const cells = Array.from(document.querySelectorAll('.cell'));
let currentShip;
let vertical = false;

function selectShip(event) { 
    const shipElem = event.target;
    currentShip = shipElem;
    alpha.style.border = beta.style.border = gamma.style.border = delta.style.border = epsilon.style.border = '';
    currentShip.style.border = '2px solid black';       
};

function updateCellStyling() {
    for (let i = 0; i < player1.myBoard.cells.length; i++) {
        for (let j = 0; j < player1.myBoard.cells[i].length; j++) {
            if (player1.myBoard.cells[i][j] instanceof Ship) {
                cells[i * 10 + j].style.backgroundColor = 'rgba(0, 255, 0, 0.5)'
            } else {
                cells[i * 10 + j].style.backgroundColor = '';
            };
        };
    };
}

function removeShip(ship) { // needs work
    ship.parentElement.removeChild(ship);
    const shipName = ship.classList[1];
    player1.myBoard.removeShip(shipName);
    ship.style.pointerEvents = '';
    updateCellStyling();
    disallowSubmit();
};

function disallowSubmit() {
    submit.style.opacity = 0.5;
    submit.removeEventListener('click', submitBoard);
};

function allowSubmit() {
    submit.style.opacity = 1;
    submit.addEventListener('click', submitBoard);
};

function submitBoard() {
    startGame(player1);
};

function flipAxis() { 
    vertical = !vertical;
    axis.textContent = vertical ? 'VERTICAL' : 'HORIZONTAL';
};

function clearBoard() { 
    player1.myBoard.resetBoard();
    alpha.parentElement.removeChild(alpha);
    if (alpha.classList.contains('placed')) alpha.classList.remove('placed');
    alpha.style.transform = '';
    beta.parentElement.removeChild(beta);
    if (beta.classList.contains('placed')) beta.classList.remove('placed');
    beta.style.transform = '';
    gamma.parentElement.removeChild(gamma);
    if (gamma.classList.contains('placed')) gamma.classList.remove('placed');
    gamma.style.transform= '';
    delta.parentElement.removeChild(delta);
    if (delta.classList.contains('placed')) delta.classList.remove('placed');
    delta.style.transform = '';
    epsilon.parentElement.removeChild(epsilon);
    if (epsilon.classList.contains('placed')) epsilon.classList.remove('placed');
    epsilon.style.transform = '';

    if (!shipContainer.parentElement !== document.body) {
        document.body.appendChild(shipContainer)
    };

    shipContainer.appendChild(alpha);
    shipContainer.appendChild(beta);
    shipContainer.appendChild(gamma);
    shipContainer.appendChild(delta);
    shipContainer.appendChild(epsilon);

    Array.from(document.querySelectorAll('.cell')).forEach((elem) => elem.style.backgroundColor = '');
};

function findIndex(cell) {
    const parent = cell.parentElement;
    const children = Array.from(parent.children);
    return children.indexOf(cell);
};

// function styleVertical(ship, length) { 
//     ship.style.transform = 'rotate(90deg)';
//     ship.style.top = `${(44 * (0.5 * (length - 1)))}px`;
//     ship.style.left = `-${(44 * (0.5 * (length - 1))) - (length - 2) * 6}px`;
//     if (ship.classList[1] === 'beta' && !ship.parentElement.parentElement.parentElement.classList.contains('game-container')) {
//         ship.style.left = `-${(44 * (0.5 * (length - 1))) - (length - 2) * 18}px`;
//     };
// };

function placeShip(index) { 
    if (!currentShip) return;

    if (currentShip.classList.contains('placed')) {
        removeShip(currentShip);
    }
    const ship = currentShip.classList[1];
    const length = player1.myBoard.ships[ship].length
    const startX = index % 10;
    const startY = Math.floor(index / 10);
    let endX;
    let endY;
    if (vertical) {
        endX = startX     
        endY = startY + (length - 1);
    } else {
        endX = startX + (length - 1);
        endY = startY;
    };
    const start = [startX, startY];
    const end = [endX, endY];
    try {
        if (!player1.myBoard.setShip(player1[ship], start, end)) {
            return;
        }
    } catch (err) {
        alert('out of bounds!');
        console.error(`ship: ${ship}, start: ${start}, end: ${end}:`, err);
        return;
    }
    cells[index].appendChild(currentShip);
    updateCellStyling();

    if (vertical) {
        styleVertical(currentShip, length);
    } else {
        currentShip.style.transform = '';
        currentShip.style.top = '';
        currentShip.style.left = '';
    };

    if (!currentShip.classList.contains('placed')) {
        currentShip.classList.add('placed');
        currentShip.pointerEvents = 'none';
    };

    let shipsPlacedCount = 0
    ships.forEach((ship) => {
        if (ship.classList.contains('placed')) {
            shipsPlacedCount++;
        };
    });
    if (shipsPlacedCount === 5) {
        document.body.removeChild(shipContainer);
        allowSubmit();
    };
    return true;
};


function handleCellClick(event) {
    if (event.target.classList.contains('cell')) {
        placeShip(findIndex(event.target));
    };
};

function setupEventListeners() {

    for (let i = 0; i < ships.length; i++) {
        ships[i].addEventListener('click', selectShip);
    };

    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', handleCellClick);



        cells[i].addEventListener('mouseenter', e => {
            if (!currentShip) {
                updateCellStyling();
                return;
            };

            currentShip.style.pointerEvents = 'none';
            updateCellStyling();

            const ship = currentShip.classList[1];
            const length = player1.myBoard.ships[ship].length;
            for (let j = 0; j < length; j++) {
                if (vertical) {
                    if (i + (length - 1) * 10 > 99 && i + j * 10 < 99) { // if the end of the ship goes out of bounds
                        cells[i + j * 10].style.backgroundColor = 'red';
                    } else if (i + j * 10 < 100) {
                        if (cells[i + j * 10].style.backgroundColor === 'rgba(0, 255, 0, 0.5') {
                            cells[i + j * 10].style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
                        } else {
                            cells[i + j * 10].style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
                        }
                    };
                } else {
                    if (i % 10 + length > 10 && i % 10 + j < 10) {
                        cells[i + j].style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
                    } else if (i % 10 + j < 10) {
                        if (cells[i + j].style.backgroundColor === 'rgba(0, 255, 0, 0.5)') {
                            for (let k = 0; k < length; k++) {
                            cells[i + j].style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
                            }
                        } else {
                            cells[i + j].style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
                        };
                    };
                };
            };
        });
    };

    function getRandomTFIndex() {
        return Math.floor(Math.random() * 2);
    };

    function getRandomCellIndex() {
        return Math.floor(Math.random() * 100);
    };

    function placeShipsRandomly() {
        clearBoard(); 
        const tf = [true, false];
        currentShip = alpha;
        vertical = tf[getRandomTFIndex()];
        while (!placeShip(getRandomCellIndex())) {
        };
        vertical = tf[getRandomTFIndex()];
        currentShip = beta; 
        while (!placeShip(getRandomCellIndex())) {
        };
        vertical = tf[getRandomTFIndex()];
        currentShip = gamma;
        while (!placeShip(getRandomCellIndex())) {
        };
        vertical = tf[getRandomTFIndex()];
        currentShip = delta;
        while (!placeShip(getRandomCellIndex())) {
        };
        vertical = tf[getRandomTFIndex()];
        currentShip = epsilon;
        while (!placeShip(getRandomCellIndex())) {
        };
        vertical = false;
    };

    board.addEventListener('mouseleave', e => {
        updateCellStyling();
    });

    reset.addEventListener('click', clearBoard);
    random.addEventListener('click', placeShipsRandomly);

    window.addEventListener('click', e => {
        if (!e.target.classList.contains('ship') && currentShip) {
            currentShip.style.border = 'none';
            if (!e.target.classList.contains('cell')) {
                currentShip = undefined;
            };
        };
        if (!currentShip) {
            ships.forEach((ship) => ship.style.pointerEvents = '');
        };
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Shift' && !vertical) {
            flipAxis();
        };
    });

    window.addEventListener('keyup', (e) => {
        if (e.key === 'Shift' && vertical) {
            flipAxis();
        };
    });
};

setupEventListeners();

module.exports = { styleVertical };
