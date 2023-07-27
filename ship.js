class Ship {
    length;
    #numOfHits;

    constructor(len) {
        this.length = len;
        this.numOfHits = 0;
    };

    hit() {
        this.numOfHits++;
        return true;
    };

    isSunk() {
        if (this.numOfHits >= this.length) return true;
        else return false;
    };

};

module.exports = Ship;