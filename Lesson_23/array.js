console.log(`____________ create Array _______________`);

let Array = [371, null, 435, 5, false, 81, 101, 'name', 13, 40];
console.log(Array);

console.log(`_______ sum of all Array number _________`);

let sumAllNumber = 0;

for (let i = 0; i < Array.length; i++) {
   if (typeof Array[i] == typeof 1){
      sumAllNumber = sumAllNumber + Array[i];
   }  
}

console.log(`sumAllNumber = ` + sumAllNumber);

console.log(`____________ find min, max ______________`);

let minNumber = Array[0];
let maxNumber = Array[0]; 

for (let i = 0; i < Array.length; i++) {
   if (typeof Array[i] == typeof 1){
      if (Array[i] > maxNumber){
         maxNumber = Array[i];
      } else if (Array[i] < minNumber) {
         minNumber = Array[i];
      }
   }  
}

console.log(`minNumber = ` + minNumber);
console.log(`maxNumber = ` + maxNumber);


console.log(`________________ # ______________________`);
console.log(`_______________ while ___________________`);

let elemetAdd = '#';
let elemetPlus = '#';
let index = 0;

while (index < 5) {
   console.log(elemetAdd);
   elemetAdd = elemetAdd + elemetPlus;
   index++;
}


console.log(`_____________ do .. while _______________`);

let elemetAdd1 = '#';
let elemetPlus1 = '#';
let k = 0;

do {
   console.log(elemetAdd1);
   elemetAdd1 = elemetAdd1 + elemetPlus1;
   k++;
} while (k < 5)


console.log(`________________ for ____________________`);

let elemetAdd3 = '#';
let elemetPlus3 = '#';

for (let j = 0; j < 5; j++) {
   console.log(elemetAdd3);
   elemetAdd3 = elemetAdd3 + elemetPlus3;
}