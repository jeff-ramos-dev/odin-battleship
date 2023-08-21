function styleVertical(ship, length) { 
    ship.style.transform = 'rotate(90deg)';
    ship.style.top = `${(44 * (0.5 * (length - 1)))}px`;
    ship.style.left = `-${(44 * (0.5 * (length - 1))) - (length - 2) * 6}px`;
    if (ship.classList[1] === 'beta' && !ship.parentElement.parentElement.parentElement.classList.contains('game-container')) {
        ship.style.left = `-${(44 * (0.5 * (length - 1))) - (length - 2) * 18}px`;
    };
};

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

module.exports = { styleVertical, findIndex, getRandomTFIndex, getRandomCellIndex, calcStartandEnd, calcXandY }