let numberFirst = prompt('Enter first number');
let numberSecond = prompt('Enter second number');

function checking(value) {
   if (typeof value === 'number' && !Number.isNaN(value)) {
      return true;
   } else {
      return false;
   }
}

function sum(a,b) {
   if (checking(a) && checking(b)) {
      return a + b;
   } else {
      return 'sum Error';    
   }
}
let iii = sum(+numberFirst,+numberSecond);

console.log('sum = ' + iii);
alert('sum = ' + iii);


let difference = function(a,b) {
   if (checking(a) && checking(b)) {
      console.log('difference = ' + (a - b));
      alert('difference = ' + (a - b));
   } else {
      console.log('difference Error');
      alert('difference Error');
   }
}

difference(+numberFirst,+numberSecond);


function multiplication(a,b) {
   if (checking(a) && checking(b)) {
      console.log('multiplication = ' + (a * b));
      alert('multiplication = ' + (a * b));
   } else {
      console.log('multiplication Error');
      alert('multiplication Error');
   }
}

multiplication(+numberFirst,+numberSecond);


let division = (a,b) => {
    if (checking(a) && checking(b)) {
        console.log('division '+ (a / b));
        alert('division '+ (a / b));
    } else {
        console.log('division Error');
        alert('division Error');
    }
}

division(+numberFirst,+numberSecond);


console.log(`________________ array ____________________`);

let y = [1, 607, null, 15, 0, 509, 111, 7, false, 13];
console.log(y);

function maxNumber(y) {
   let max = y[0];
   for (let item of y) {
      if (typeof(item) === typeof 1) {
         if (max < item) {
            max = item;
         }
      }
   }
   return max;
}

console.log('max number of array is ' + maxNumber(y));

function minNumber(y) {
   let min = y[0];
   for (let item of y) {
      if (typeof(item) === typeof 1) {
         if (min > item) {
            min = item;
         }
      }
   }
   return min;
}

console.log('min number of array is ' + minNumber(y));

function greeter(name) {
   return `Hi, ${name}!`
}

greeter();
console.log(greeter('Alla'));
console.log(greeter('Alisa'));



function greeter1(name1, partOfTheDay1) {
   return `Good ${partOfTheDay1}, ${name1}!`;
}
console.log(greeter1('Paul', 'night'));
console.log(greeter1('Anya', 'morning'));

function double(num) {
   return num * 2;
}
console.log(double(5));

function getLargestExpressionResultOfTwo(a, b) {
   if ((a+b) > (a-b)) {
     return a + b;
   }
   return a - b;
 }
 console.log(getLargestExpressionResultOfTwo(-20, 5));

 function getLargestExpressionResult(c, d) {
  let result = c + d;

  if ((c - d) > result) {
    result = c - d;
  }

  if ((c * d) > result) {
    result = c * d;
  }

  if ((c / d) > result) {
    result = c / d;
  }

  return result;
}
console.log(getLargestExpressionResult(10, 5))
console.log(getLargestExpressionResult(10, -5))
