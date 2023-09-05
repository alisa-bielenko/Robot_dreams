// 1
console.log(`________Task #1_________`);
function calculateAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }

    let avg = sum / arr.length;
    return avg;
}

let numbers = [1, 2, 3, 4, 5];

let avg = calculateAverage(numbers);
console.log("The average is: " + avg); // має бути 3

// 2
console.log(`_________Task #2_________`);
function User(name, age) {
    this.name = name;
    this.age = age;
}

User.prototype.sayHello = function () {
    console.log(`Hi. My name is ${this.name} and I'm ${this.age} years old`) ;
};

const user = new User("Sherlock", 27);
user.sayHello(); // має вивести "Hi. My name is Sherlock and I'm 27 years old"

// 3
console.log(`_________Task #3_________`);

const calculator = function (init = 1) {
    return function () {
        return init++;
    };
};

const c = calculator();
console.log(c()); // має вивести 1
console.log(c()); // має вивести 2