/* Теоретичні питання
 1. Як можна оголосити змінну у Javascript?
    const age = 1; 
    let age = 10; 
    Зазвичай, рекомендується використовувати let для оголошення змінних, 
    якщо нам потрібна змінна, значення якої може змінюватися. 
    const використовується для оголошення констант або значень, які не мають бути змінені.
    раніше ще була var, але зараз не використовується.

 2. Що таке рядок (string) і як його створити (перерахуйте всі можливі варіанти)?
    Рядок (string) - це послідовність символів, яку можна використовувати для представлення текстової інформації. 
    Рядки можна створювати за допомогою різних методів. Ось декілька способів створення рядків в JS:
    let myString1 = 'це рядок з одинарними лапками';
    let myString2 = "це рядок з подвійними лапками"; //тільки треба використовувати якись один спосіб,
    якщо в рядку буде наприклад слово ім'я, "ім'я" - використовувати краще
    let myString3 = `це рядок з зворотними лапками - в нього можно вписувати значення інших змінніх так ${age}`;

 3. Як перевірити тип даних змінної в JavaScript?
    В JS для перевірки типу даних змінної використовується оператор typeof. 
    Оператор typeof повертає рядок, який представляє тип даних змінної. Наприклад:
    let userAge = 42;
    let userName = 'John';
    let isUserMarried = true;

    console.log(typeof userAge); // 'number'
    console.log(typeof userName); // 'string'
    console.log(typeof isUserMarried); // 'boolean'
    
 4. Поясніть чому '1' + 1 = 11.
    У JS оператор + використовується як оператор конкатенації для рядків, 
    якщо хоча б один з операндів є рядком. Тому, коли додається рядок до числа, JS вважає, 
    що вам потрібно сконкатенувати (злипити) рядок та число, а не виконати арифметичне додавання. 
    В результаті числове значення перетворюється у рядок, і вони об'єднуються разом.

 Практичні завдання
 1. Оголосіть змінну і присвойте в неї число. Перевірте, чи ця змінна має тип "number" і виведіть результат в консоль.

 2. Оголосіть змінну name і присвойте їй ваше ім'я. 
 Оголосіть змінну lastName і присвойте в неї Ваше прізвище.
 Виведіть повідомлення у консоль у форматі `Мене звати {ім'я}, {прізвище}` використовуючи ці змінні.

 3. Оголосіть змінну з числовим значенням і виведіть в консоль її значення всередині рядка.
*/


// Практика
// #1
let myNumber = 13;
console.log(`Змінна myNumber має тип: ${typeof myNumber}`);
console.log(myNumber);
myNumber = 131; // змінну оголошену через let можна змінити, тоді в консолі буде нове значення 
console.log(myNumber);

// #2
const firstName = 'Alisa'; // не збіраюсь змінювати ім'я :)
let lastName = 'Bielenko';
console.log(`Мене звати ${firstName}, ${lastName}`);
// console.log(typeof firstName);

// #3
let numberVariable = 123454321;
console.log(`Значення числової змінної: ${numberVariable}`);