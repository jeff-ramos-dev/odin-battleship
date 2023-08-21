function styleVertical(ship, length) { 
    ship.style.transform = 'rotate(90deg)';
    ship.style.top = `${(44 * (0.5 * (length - 1)))}px`;
    ship.style.left = `-${(44 * (0.5 * (length - 1))) - (length - 2) * 6}px`;
    if (ship.classList[1] === 'beta' && !ship.parentElement.parentElement.parentElement.classList.contains('game-container')) {
        ship.style.left = `-${(44 * (0.5 * (length - 1))) - (length - 2) * 18}px`;
    };
};

module.exports = { styleVertical }