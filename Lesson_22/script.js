let firstNumber = prompt("Enter first number");
let secondNumber = prompt("Enter second number");

let sum = +firstNumber + +secondNumber;
let difference = firstNumber - secondNumber;
let multiplication = firstNumber * secondNumber;
let division = firstNumber / secondNumber;

if ((firstNumber === ``) || (secondNumber === ``)) {
    alert(`Error: not enough data!`);
} else 
if (secondNumber === 0) {
    alert(`Error: mustn't be divided by 0`);
} else 
if (firstNumber < secondNumber) {
    alert(`The first number is less than the second, do you want to continue?`);
    alert(`Difference = `+ (+difference));

    alert(`Sum = `+ (+sum));
    alert(`Addition = `+ (+multiplication));
    alert(`Division = `+ (+division));
}   