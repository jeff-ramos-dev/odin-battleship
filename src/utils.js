function styleShip(ship, vertical) {
    if (vertical) {
        if (ship.classList.contains('alpha')) {
            ship.style.top = '22px';
            ship.style.left = `-22px`; 
            ship.style.transform = 'scale(0.9, 0.9) rotate(90deg)'

        } else if (ship.classList.contains('beta')) {
            ship.style.top = '44px';
            ship.style.left = `-28px`;
            ship.style.transform = 'scale(1, 1.5) rotate(90deg)'

        } else if (ship.classList.contains('gamma')) {
            ship.style.top = '44px';
            ship.style.left = `-40px`;
            ship.style.transform = 'scale(0.9, 1.1) rotate(90deg)'

        } else if (ship.classList.contains('delta')) {
            ship.style.top = '64px';
            ship.style.left = `-56px`;
            ship.style.transform = 'scale(1, 1.2) rotate(90deg)'

        } else if (ship.classList.contains('epsilon')) {
            ship.style.top = '84px';
            ship.style.left = `-64px`;
            ship.style.transform = 'scale(1.2, 1.2) rotate(90deg)'

        }
    } else {
        if (ship.classList.contains('alpha')) {
            ship.style.top = '0';
            ship.style.left = `0`;
            ship.style.transform = 'scale(0.9, 1)'

        } else if (ship.classList.contains('beta')) {
            ship.style.top = '0';
            ship.style.left = '0'; 
            ship.style.transform = 'scale(1.3 , 0.9)' 

        } else if (ship.classList.contains('gamma')) {
            ship.style.top = '0';
            ship.style.left = '0';
            ship.style.transform = 'scale(1.1, 0.9)'

        } else if (ship.classList.contains('delta')) {
            ship.style.top = '0';
            ship.style.left = '0';
            ship.style.transform = 'scale(1.1, 0.9)'

        } else if (ship.classList.contains('epsilon')) {
            ship.style.top = '0';
            ship.style.left = '10px';
            ship.style.transform = 'scale(1.2, 0.9)'

        }
    }
}

function findIndex(cell) {
    const parent = cell.parentElement;
    const children = Array.from(parent.children);
    return children.indexOf(cell);
};

function getRandomTFIndex() {
    return Math.floor(Math.random() * 2);
};

function getRandomCellIndex() {
    return Math.floor(Math.random() * 100);
};

function calcXandY(index) {
    const x = index % 10;
    const y = Math.floor(index / 10);
    return { x, y }
};

function calcStartandEnd(index, length, vertical) {
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
    return { start, end }
};

module.exports = {
    styleShip,
    findIndex,
    getRandomTFIndex,
    getRandomCellIndex,
    calcStartandEnd,
    calcXandY
}