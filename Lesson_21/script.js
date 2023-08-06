console.log('hello world!!!');
let message = 'Alisa';
alert('Hello, ' + message + '!');

let a = +prompt("Enter first number", "");
let b = +prompt("Enter second number", "");

alert(`Sum = `+ ( a + b ));
alert(`Difference = `+ ( a - b ));
alert(`Addition = `+ ( a * b ));
alert(`Division = `+ ( a / b ));

console.log('_______let/var_______');

let x = 100;
var y = 3;
if (10 > 7) {
    let x = 1;
    var y = 300;

    console.log(x);
    console.log(y);
}
console.log(x);
console.log(y);