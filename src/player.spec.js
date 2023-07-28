import Player from './player.js';

describe('player test', () => {
    test('player can make an attack', () => {
        const player = new Player;
        player.placeAlpha([1, 1], [1, 2]);
        expect(player.attackCell(0, 2)).toBe(false);
        expect(player.attackCell(1, 2)).toBe(true);
    });

    test.todo('player can only make an attack on their turn');
});