import './style.css';
import Player from './player';
import './images/Alpha.png'
import './images/Beta.png'
import './images/Gamma.png'
import './images/Delta.png'
import './images/Epsilon.png'

const input = document.querySelector('.input');
const button = document.querySelector('.button');
const playerNameElement = document.querySelector('.player-name');
const reset = document.querySelector('.reset');
const shipContainer = document.querySelector('.ship-container');
const board = document.querySelector('.gameboard');
const axis = document.querySelector('.axis');

let vertical = false;
reset.addEventListener('click', () => {
    player1.myBoard.resetBoard();
    board.removeChild(alpha);
    board.removeChild(beta);
    board.removeChild(gamma);
    board.removeChild(delta);
    board.removeChild(epsilon);
    
    shipContainer.appendChild(alpha);
    shipContainer.appendChild(beta);
    shipContainer.appendChild(gamma);
    shipContainer.appendChild(delta);
    shipContainer.appendChild(epsilon);

    Array.from(document.querySelectorAll('.cell')).forEach((elem) => elem.style.backgroundColor = '');
    console.log(player1.myBoard)
});

let playerName = '';
const player1 = new Player('player1');
button.addEventListener('click', () => {
    playerName = input.value;
    playerNameElement.textContent = playerName
    player1.myName = playerName
});


const alpha = document.querySelector('.alpha');
const beta = document.querySelector('.beta');
const gamma = document.querySelector('.gamma');
const delta = document.querySelector('.delta');
const epsilon = document.querySelector('.epsilon');

const ships = [alpha, beta, gamma, delta, epsilon];

let currentShip;

for (let i = 0; i < ships.length; i++) {
    ships[i].addEventListener('click', () => {
        currentShip = ships[i];
        alpha.style.border = beta.style.border = gamma.style.border = delta.style.border = epsilon.style.border = '';
            currentShip.style.border = '2px solid black';
    });
};

const cells = Array.from(document.querySelectorAll('.cell'));
const shipCells = [];

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', () => {
        let startX = i <  10 ? i : i < 20 ? i - 10 : i < 30 ? i - 20 : i < 40 ? i - 30 : i < 50 ? i - 40 : i < 60 ? i - 50 : i < 70 ? i - 60 : i < 80 ? i - 70 : i < 90 ? i - 80 : i - 90;
        let startY = Math.floor(i / 10);
        let endX;
        let endY = startY;
        let ship = currentShip.classList[1]
        let len
        switch (ship) {
            case 'alpha': endX = startX + 1; len = 2; break;
            case 'beta': endX = startX + 2; len = 3; break;
            case 'gamma': endX = startX + 2; len = 3; break;
            case 'delta': endX = startX + 3; len = 4; break;
            case 'epsilon': endX = startX + 4; len = 5; break;
        };
        let start = [startX, startY];
        let end = [endX, endY];
        player1.myBoard.setShip(player1[ship], start, end);
        if (currentShip.parentElement !== shipContainer) {
            let curr = currentShip.parentElement.nextElementSibling;
            for (let h = 0; h < len - 1; h++) {
                curr.removeChild(curr.children[0]);
                curr = curr.nextElementSibling;
            };
        };
        currentShip.parentElement.removeChild(currentShip);
        if (shipContainer.childElementCount === 0 && shipContainer.parentElement === document.body) {
            document.body.removeChild(shipContainer);
        };
        cells[i].appendChild(currentShip);
        if (vertical) {
            currentShip.style.transform = 'rotate(90deg)';
            currentShip.style.top = `${(44 * (0.5 * (len - 1)))}px`;
            currentShip.style.left = `-${(44 * (0.5 * (len - 1))) - (len - 2) * 6}px`;
            if (currentShip.classList[1] === 'beta') {
                currentShip.style.left = `-${(44 * (0.5 * (len - 1))) - (len - 2) * 18}px`;
            }
            for (let k = 0; k < endX - startX + 1; k++) {
                cells[i + (k * 10)].style.backgroundColor = 'green';
                if (k > 0) {
                    cells[i + (k * 10)].appendChild(document.createElement('div'));
                }
            };
        } else {
            for (let k = 0; k < endX - startX + 1; k++) {
                cells[i + k].style.backgroundColor = 'green';
                if (k > 0) {
                    cells[i + k].appendChild(document.createElement('div'));
                }
            };
        };
        currentShip.style.margin = '0';
        currentShip.style.position = 'absolute';
        for (let j = 0; j < cells.length; j++) {
            if (cells[j].style.backgroundColor === 'green' && cells[j].childElementCount === 0) {
                cells[j].style.backgroundColor = '';
            };
        };
  
    });
};

window.addEventListener('click', e => {
    if (!e.target.classList.contains('ship') && currentShip) {
        currentShip.style.border = 'none';
    };
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'Shift' && !vertical) {
        vertical = true;
        axis.textContent = 'VERTICAL';
    };
});

window.addEventListener('keyup', (e) => {
    if (e.key === 'Shift' && vertical) {
        vertical = false
        axis.textContent = 'HORIZONTAL';
    };
});