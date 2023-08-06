import './style.css'
import Player from './player'
import Ship from './ship'
import './images/Alpha.png'
import './images/Beta.png'
import './images/Gamma.png'
import './images/Delta.png'
import './images/Epsilon.png'

const player1 = new Player('player1');
const reset = document.querySelector('.reset');
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

function selectShip(shipElem) { // Good to go
    currentShip = shipElem;
    alpha.style.border = beta.style.border = gamma.style.border = delta.style.border = epsilon.style.border = '';
    currentShip.style.border = '2px solid black';       
};

function updateCellStyling() {
    for (let i = 0; i < player1.myBoard.cells.length; i++) {
        for (let j = 0; j < player1.myBoard.cells[i].length; j++) {
            if (player1.myBoard.cells[i][j] instanceof Ship) {
                cells[i * 10 + j].style.backgroundColor = 'green'
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
    console.log(player1.myBoard.cells)
    updateCellStyling();
};

function flipAxis() { // Good to go
    vertical = !vertical;
    axis.textContent = vertical ? 'VERTICAL' : 'HORIZONTAL';
};

function clearBoard() { // Good to go
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

function placeShip(index) { // needs work
    if (!currentShip) return;

    if (currentShip.classList.contains('placed')) {
        // remove from current position
        removeShip(currentShip);
    }
    cells[index].appendChild(currentShip);
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
    player1.myBoard.setShip(player1[ship], start, end);

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
    };
};

function styleVertical(ship, length) { // Good to go
    ship.style.transform = 'rotate(90deg)';
    ship.style.top = `${(44 * (0.5 * (length - 1)))}px`;
    ship.style.left = `-${(44 * (0.5 * (length - 1))) - (length - 2) * 6}px`;
    if (ship.classList[1] === 'beta') {
        ship.style.left = `-${(44 * (0.5 * (length - 1))) - (length - 2) * 18}px`;
    };
};

function setupEventListeners() {

    for (let i = 0; i < ships.length; i++) {
        ships[i].addEventListener('click', e => {
            selectShip(e.target);
        });
    };

    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', e => {
            if (e.target.classList.contains('cell')) {
                placeShip(findIndex(e.target));
            };
        });


        cells[i].addEventListener('mouseenter', e => {
            if (!currentShip || cells[i].style.backgroundColor === 'green') return
            for (let j = 0; j < cells.length; j++) {
                cells[j].style.border = '2px solid grey';
            };
            const ship = currentShip.classList[1];
            const length = player1.myBoard.ships[ship].length;
            for (let j = 0; j < length; j++) {
                if (vertical) {
                    if (i + (length - 1) * 10 > 99 && i + j * 10 < 99) {
                        cells[i + j * 10].style.border = '20px solid red';
                    } else if (i + j * 10 < 99) {
                        cells[i + j * 10].style.border ='20px solid green';
                    };
                } else {
                    if (i % 10 + length > 10 && i % 10 + j < 10) {
                        cells[i + j].style.border = '20px solid red';
                    } else if (i % 10 + j < 10) {
                        cells[i + j].style.border = '20px solid green';
                    };
                };
            };
        });
    };

    board.addEventListener('mouseleave', e => {
        cells.forEach((cell) => cell.style.border = '2px solid grey');
    });

    reset.addEventListener('click', clearBoard);
    // submit.addEventListener('click', submitShips);

    window.addEventListener('click', e => {
        if (!e.target.classList.contains('ship') && currentShip) {
            currentShip.style.border = 'none';
            if (!e.target.classList.contains('cell')) {
                currentShip = undefined;
            };
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