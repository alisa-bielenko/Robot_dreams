function Accumulator() {
  this.digit = +prompt("Enter starting digit:");
  this.startingDigit = this.digit;
  console.log(`Entered digit = ${this.digit}`);
}

Accumulator.prototype.increment = function() {
  this.digit++;
  console.log(`Increment = ${this.digit}`);
}

Accumulator.prototype.decrement = function() {
  this.digit--;
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

let img = document.querySelector('img');

const addSomeClassToElement = (element) => {
    element.addEventListener('click', () => {
        if (element.classList.contains('test')) {
            element.classList.remove('test');
        } else {
            element.classList.add('test');
        }
    });
}

addSomeClassToElement(img);


let imgs = document.querySelector('.gallery');

imgs.addEventListener('click', (event) => {
    let img = event.target;
    if (img.classList.contains('zoomed-img')) {
        img.classList.remove('zoomed-img');   
    } else {
        img.classList.add('zoomed-img');
    }
});
