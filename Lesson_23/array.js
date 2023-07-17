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

let elementAdd = '#';
let elementPlus = '#';
let index = 0;

while (index < 5) {
   console.log(elementAdd);
   elementAdd = elementAdd + elementPlus;
   index++;
}


console.log(`_____________ do .. while _______________`);

let elementAdd1 = '#';
let elementPlus1 = '#';
let k = 0;

do {
   console.log(elementAdd1);
   elementAdd1 = elementAdd1 + elementPlus1;
   k++;
} while (k < 5)


console.log(`________________ for ____________________`);

let elementAdd3 = '#';
let elementPlus3 = '#';

for (let j = 0; j < 5; j++) {
   console.log(elementAdd3);
   elementAdd3 = elementAdd3 + elementPlus3;
}