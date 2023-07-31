import './style.css';
import Player from './player';

const input = document.querySelector('.input');
const button = document.querySelector('.button');
const playerNameElement = document.querySelector('.player-name');
const reset = document.querySelector('.reset');
const shipContainer = document.querySelector('.ship-container');
const board = document.querySelector('.gameboard');

reset.addEventListener('click', () => {
    player1.myBoard.resetBoard();
    Array.from(document.querySelectorAll('.column')).forEach((elem) => elem.style.backgroundColor = '');
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
        alpha.style.filter = beta.style.filter = gamma.style.filter = delta.style.filter = epsilon.style.filter = 'invert(1)'
        currentShip.style.filter = 'none';
    });
};

const cells = Array.from(document.querySelectorAll('.column'));

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', () => {
        let startX = i <  10 ? i : i < 20 ? i - 10 : i < 30 ? i - 20 : i < 40 ? i - 30 : i < 50 ? i - 40 : i < 60 ? i - 50 : i < 70 ? i - 60 : i < 80 ? i - 70 : i < 90 ? i - 80 : i - 90;
        let startY = Math.floor(i / 10);
        let endX;
        let endY = startY;
        let ship = currentShip.classList[1]
        switch (ship) {
            case 'alpha': endX = startX + 1;break;
            case 'beta': endX = startX + 2;break;
            case 'gamma': endX = startX + 2;break;
            case 'delta': endX = startX + 3;break;
            case 'epsilon': endX = startX + 4;break;
        };
        let start = [startX, startY];
        let end = [endX, endY];
        player1.myBoard.setShip(player1[ship], start, end);
        let length = Math.abs(endX + 1 - startX);
        shipContainer.removeChild(currentShip);
        board.appendChild(currentShip);
        console.log(startX);
        console.log(startY);
        currentShip.style.margin = '0';
        currentShip.style.position = 'absolute';
        currentShip.style.top = `${(startY + 1) * 44 + 2}px`;
        currentShip.style.left = `${(startX + 1) * 46 + 4}px`;
        for (let j = 0; j < length; j++) {
            cells[i + j].style.backgroundColor = 'blue';
        };
    });
};