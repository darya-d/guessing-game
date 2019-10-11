/**
 * GuessingGame - implement binary search
 */

class GuessingGame {
    constructor() {}
    // setRange(min, max) - range of numbers from min and max
    // 'this.' - reference to the current object 
    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    // split range in half using Binary search
    guess() {
        this.half = Math.round(this.min + (this.max - this.min)/2);
        return this.half;
    }

    // looking in the smaller part of range
    lower() {
        this.max = this.half;
    }

    // looking for the bigger part of range
    greater() {
        this.min = this.half;
    }
}

module.exports = GuessingGame;
