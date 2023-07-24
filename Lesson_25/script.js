console.log('_______cheking of empty________');

let obj = {};

function checkEmpty(obj) {
  if (Object.keys(obj).length === 0) {
    console.log('Object is empty');
  } else {
    console.log('Object is not empty');
  }
}

checkEmpty(obj);

console.log('_________sayHello___________');

let user = {
  name: "Alisa",
  age: "45",
  sayHello: function() {
    console.log("Hello, I'm " + this.name + ", I'm " + this.age + " years old!");
  },
};

user.sayHello();

console.log('_________calculator__________');

let myCalculator = {
  fistNumber: 0,
  secondNumber: 0,

  ask: function() {
    this.fistNumber = +prompt('Enter first number = ');
    this.secondNumber = +prompt('Enter second number = ');
  },

  sum: function() {
    return this.fistNumber + this.secondNumber;
  },

  mul: function() {
    return this.fistNumber * this.secondNumber;
  },

};

myCalculator.ask();
let sumResult = myCalculator.sum();
let mulResult = myCalculator.mul();

alert ('Sum = ' + (sumResult));
alert ('Multiplication = '+ (mulResult));

console.log('Sum = ' +(sumResult));
console.log('Multiplication = ' +(mulResult));