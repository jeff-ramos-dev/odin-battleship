require('./style.css');
const { styleShip, findIndex, getRandomTFIndex, getRandomCellIndex, calcStartandEnd } = require('./utils');
const Player = require('./player')
const Ship = require('./ship')
const startGame = require('./game');

const player1 = new Player('player1');
const random = document.querySelector('.random');
const reset = document.querySelector('.reset');
const submit = document.querySelector('.submit');
const nameInput = document.getElementById('name');
const axisToggle = document.querySelector('.axis-toggle');
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
const green = 'rgba(0, 255, 0, 0.5)';
const red = 'rgba(255, 0, 0, 0.5)';
const grey = 'rgba(255, 255, 255, 0.5)';
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
                cells[i * 10 + j].style.backgroundColor = green 
            } else {
                cells[i * 10 + j].style.backgroundColor = '';
            };
        };
    };
}

function removeShip(ship) { 
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
    if (nameInput.value !== '') {
        player1.myName = nameInput.value;
    } else {
        player1.myName = 'Player';
    }
    startGame(player1);
};

function flipAxis() { 
    vertical = !vertical;
    axis.textContent = vertical ? 'VERTICAL' : 'HORIZONTAL';
};

function clearBoard() { 
    player1.myBoard.resetBoard();
    alpha.remove();
    if (alpha.classList.contains('placed')) alpha.classList.remove('placed');
    alpha.style.transform = 'scale(0.9, 1)';
    beta.remove();
    if (beta.classList.contains('placed')) beta.classList.remove('placed');
    beta.style.transform = 'scale(1.3, 0.9)';
    gamma.remove();
    if (gamma.classList.contains('placed')) gamma.classList.remove('placed');
    gamma.style.transform= 'scale(1.1, 0.9)';
    delta.remove();
    if (delta.classList.contains('placed')) delta.classList.remove('placed');
    delta.style.transform = 'scale(1.1, 0.9)';
    epsilon.remove();
    if (epsilon.classList.contains('placed')) epsilon.classList.remove('placed');
    epsilon.style.transform = 'scale(1.2, 0.9)';

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



function placeShip(index) { 
    if (!currentShip) return;

    if (currentShip.classList.contains('placed')) {
        removeShip(currentShip);
    }
    const ship = currentShip.classList[1];
    const length = player1.myBoard.ships[ship].length
    const {start, end} = calcStartandEnd(index, length, vertical)
    try {
        if (!player1.myBoard.setShip(player1[ship], start, end)) {
            return;
        }
    } catch (err) {
        console.error(`ship: ${ship}, start: ${start}, end: ${end}:`, err);
        return;
    }
    cells[index].appendChild(currentShip);
    updateCellStyling();

    styleShip(currentShip, vertical)

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
                        if (cells[i + j * 10].style.backgroundColor === green) {
                            cells[i + j * 10].style.backgroundColor = red;
                        } else {
                            cells[i + j * 10].style.backgroundColor = grey;
                        }
                    };
                } else {
                    if (i % 10 + length > 10 && i % 10 + j < 10) {
                        cells[i + j].style.backgroundColor = red;
                    } else if (i % 10 + j < 10) {
                        if (cells[i + j].style.backgroundColor === green) {
                            for (let k = 0; k < length; k++) {
                            cells[i + j].style.backgroundColor = red;
                            }
                        } else {
                            cells[i + j].style.backgroundColor = grey;
                        };
                    };
                };
            };
        });
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
    axisToggle.addEventListener('click', flipAxis);

    window.addEventListener('click', e => {
        if (!e.target.classList.contains('ship') && e.target.localName !== 'button' && currentShip) {
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