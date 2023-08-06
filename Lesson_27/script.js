function sum(a,b) {
   return a + b;
}

function substract(a,b) {
   return (a - b);
}

function multiply(a,b) {
   return (a * b);
}

function division(a,b) {
   return (a / b);
}

const OPERATIONS = {
   sum: '+',
   substract: '-',
   multiply: '*',
   division: '/'
};

function calculate ({ a, b, operation }) {
   let result = null;

   switch (operation) {
      case OPERATIONS.sum:
         result = + sum(a, b);
         break;
      
      case OPERATIONS.substract:
         result = + substract(a, b);
         break;
      
      case OPERATIONS.multiply:
         result = + multiply(a, b);
         break;

      case OPERATIONS.division:
         result = + division(a, b);
         break;
   
      default:
         break;
   }
   return result;
};

const inputANode = document.querySelector('.js-input-a');
const inputBNode = document.querySelector('.js-input-b');
const selectOperationNode = document.querySelector('.js-select-operation');
const btnResultNode = document.querySelector('.js-btn-result');
const outputNode = document.querySelector('.js-output');

btnResultNode.addEventListener('click', function() {
   const a = Number(inputANode.value);
   const b = Number(inputBNode.value);
   const operation = selectOperationNode.value;

   const result = calculate({ a, b, operation });

   console.log(result);
   if (result < 0) {
      outputNode.style.color = 'red';
      outputNode.innerHTML = result;
   } else {
      outputNode.style.color = 'green';
      outputNode.innerHTML = result;
   }
});

let myArray = [0, 18, -8, 310, 630, 13, -1, 98, 907, 3, true]; 
let outputArray = document.getElementById('my-array');
console.log (myArray);
outputArray.innerText = `My Array = ${myArray.join(', ')}`;

let min = myArray[0]; 
let max = myArray[0];

function maxValue(myArray) {
  let i = 1;
  while (i < myArray.length) {
    if (myArray[i] > max) {
      max = myArray[i];
    }
    i++;
  }
}

function minValue(myArray) {
  for(let m = 0; m < myArray.length; m++) {
    if (myArray[m] < min) {
      min = myArray[m];
    }
  }
}

maxValue(myArray);
minValue(myArray);

document.getElementById('min-element').innerHTML = `Min element of array is <p class = "minValue">${min}</p>`;
document.getElementById('max-element').innerHTML = `Max element of array is <p class = "maxValue">${max}</p>`;

document.addEventListener('DOMContentLoaded', () => {
   const inp = document.getElementById('inp1'),
         p = document.getElementById('your-array'),
         btn = document.getElementById('btn1');
   btn.addEventListener('click', function () {
     if (inp.value.length)
       p.innerHTML += inp.value; // хотіла спитати: а як тепер отримати масив з р your-array в js?
   });
 });
