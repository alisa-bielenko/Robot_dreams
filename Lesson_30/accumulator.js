function Accumulator(initialValue) {
    this.value = initialValue;

    this.increment = function() {
        this.value += 1;
    };

    this.decrement = function() {
        this.value -= 1;
    };
}

function CancelableAccumulator(initialValue) {
    Accumulator.call(this, initialValue);
    this.initialValue = initialValue;

    this.clear = function() {
        return this.value = this.initialValue;
    };
}

CancelableAccumulator.prototype = Accumulator.prototype;

module.exports = {
    Accumulator,
    CancelableAccumulator
}