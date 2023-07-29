function Accumulator() {
  this.digit = +prompt("Enter starting digit:");
  this.startingDigit = this.digit;
  console.log(`Entered digit = ${this.digit}`);
}

Accumulator.prototype.increment = function() {
  this.digit += 1;
  console.log(`Increment = ${this.digit}`);
}

Accumulator.prototype.decrement = function() {
  this.digit -= 1;
  console.log(`Decrement = ${this.digit}`);
}

function CancelableAccumulator(digit, startingDigit) {
  Accumulator.call(this, digit, startingDigit);
}

CancelableAccumulator.prototype = Accumulator.prototype;

CancelableAccumulator.prototype.clear = function() {
  this.digit = this.startingDigit;
  console.log(`Accumulator-clear: ${this.digit}`);
}

let myFunction = new CancelableAccumulator();
myFunction.increment();
myFunction.clear();
myFunction.decrement();
