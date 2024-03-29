"use strict"
/* 
 Теоретичні питання
 1. Що таке цикл в програмуванні?
 У програмуванні термін "цикл" вказує на конструкцію мови програмування, яка дозволяє виконувати певну групу інструкцій 
 або блок коду кілька разів. 
 Цикли використовуються для автоматизації повторюваних завдань, щоб уникнути дублювання коду і зробити програму більш ефективною.

 2. Які види циклів є в JavaScript і які їх ключові слова?
 В мові програмування JavaScript існують два основних види циклів: цикл for і цикл while. 
 Також введено новий тип циклу for...of для перебору елементів ітерабельних об'єктів. 
 Ось короткий огляд кожного з них:
 Цикл for:
 Використовується для повторення блоку коду певну кількість разів.
 Синтаксис:
 for (ініціалізація; умова; ітерація) {
    // код, який виконується поки умова істинна
 }, де 
    ініціалізація виконується один раз на початку циклу і використовується для ініціалізації змінних.
    умова перевіряється перед кожним виконанням блоку коду.
    ітерація виконується після кожного виконання блоку коду і використовується для зміни значень змінних.

 Цикл while:
 Використовується для повторення блоку коду, доки задана умова залишається істинною.
 Синтаксис:
 while (умова) {
    // код, який виконується поки умова істинна
 }
 Код у циклі while виконується, доки умова залишається істинною.

 Цикл do...while:
 Подібний до циклу while, але гарантує, що код у блоку виконається принаймні один раз, навіть якщо умова вже відразу ложна.
 Синтаксис:
 do {
    // код, який виконується принаймні один раз
 } while (умова);

 Цикл for...of:
 Використовується для перебору елементів ітерабельних об'єктів (таких як масиви, строки тощо).
 Синтаксис:
 for (змінна of об'єкт) {
    // код, який виконується для кожного елемента об'єкта
 }
 Змінна отримає значення кожного елемента об'єкта в кожній ітерації.

 Ці цикли можна комбінувати з іншими ключовими словами, такими як break і continue, для більшої гнучкості у контролі над виконанням циклів.

 3. Чим відрізняється цикл do while від while?
 Цикли do...while і while в JS відрізняються у вигляді та порядку виконання їхніх блоків коду.
 
 Цикл do...while:
 Виконує блок коду принаймні один раз, навіть якщо умова вже ложна.
 Код у блоку do виконується, а потім перевіряється умова. Якщо умова вірна, блок коду буде виконуватися знову. 
 Якщо умова ложна, виконання циклу завершується.
 Отже, основна відмінність полягає в тому, що цикл do...while гарантує виконання блоку коду принаймні один раз, 
 навіть якщо умова відразу ложна. У циклі while блок коду може не виконатися, якщо умова вже на початку виклику ложна.

 Цикл while:
 Виконує блок коду, доки задана умова залишається істинною.
 Код у блоку while може ніколи не виконатися, якщо умова вже в першому виклику ложна.
*/

/*
 Практичні завдання
 1. Запитайте у користувача два числа. Перевірте, чи є кожне з введених значень числом. Якщо ні, то запитуйте у користувача нове занчення до тих пір, поки воно не буде числом. 
 Виведіть на екран всі числа від меншого до більшого за допомогою циклу for.

 2. Напишіть програму, яка запитує в користувача число та перевіряє, 
 чи воно є парним числом. Якщо введене значення не є парним числом, 
 то запитуйте число доки користувач не введе правильне значення.
 */

console.log('-----task#1-------')

let firstNumber, secondNumber;
do {
    firstNumber = +prompt("Enter first number:");
} while (isNaN(firstNumber));

do {
    secondNumber = +prompt("Enter second number:");
} while (isNaN(secondNumber));

let startNumber, endNumber;

if (firstNumber < secondNumber) {
    startNumber = firstNumber;
    endNumber = secondNumber;
} else if((secondNumber < firstNumber)) {
    startNumber = secondNumber;
    endNumber = firstNumber;
} else {
    console.log("Your numbers are the same");
}

for (let i = startNumber; i <= endNumber; i++) {
    console.log(i);
}

console.log('-----task#2-------')

let userNumber;
let isEven;

 do {
    let userImput = prompt("Enter your number");
    if (userImput === null) {
        alert("Operation cancelled. Please try again.");
    } else

    userNumber = +userImput;
    isEven = userNumber % 2 === 0;

    if (!isNaN(userNumber) && isEven) {
        console.log(userNumber, isEven);
        alert(`Your even number: ${userNumber}`);
    } else {
        alert("Your number is not an even. Please enter an even number.");
    }
} while (!isEven);