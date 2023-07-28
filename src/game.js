import './style.css';
import Player from './player';

const input = document.querySelector('.input');
const button = document.querySelector('.button');
const playerNameElement = document.querySelector('.player-name')
const reset = document.querySelector('.reset');

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
        console.log(currentShip);
    });
};

const cells = Array.from(document.querySelectorAll('.column'));

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', () => {
        let startX = i <  10 ? i : i < 20 ? i - 10 : i < 30 ? i - 20 : i < 40 ? i - 30 : i < 50 ? i - 40 : i < 60 ? i - 50 : i < 70 ? i - 60 : i < 80 ? i - 70 : i < 90 ? i - 80 : i - 90;
        console.log(startX)
        let startY = Math.floor(i / 10);
        console.log(startY)
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
        console.log(endX);
        console.log(endY);
        let start = [startX, startY];
        let end = [endX, endY];
        console.log(start, end);
        player1.myBoard.setShip(player1[ship], start, end);
        console.log(player1.myBoard);
        let length = Math.abs(endX + 1 - startX);
        for (let j = 0; j < length; j++) {
            cells[i + j].style.backgroundColor = 'blue';
        };
    });
};