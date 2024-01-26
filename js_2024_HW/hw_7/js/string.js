/*
Теоретичні питання
1. Як можна створити рядок у JavaScript?
- За допомогою літералу рядка: let myString = "Це мій рядок";
обгортаючи текст одинарними('), подвійними (") або зворотніми (``) лапками
- За допомогою конструктора рядка: let myString = new String("Це мій рядок");
Обидва способи створять рядок зі значенням "Це мій рядок". З літералом рядка 
працюють більшість випадків, але конструктор рядка може бути корисний у деяких особливих ситуаціях.

2. Яка різниця між одинарними (''), подвійними ("") та зворотніми (``) лапками в JavaScript?
Одинарні(') та  подвійні (") не відрізняються за властивостями
(тільки треба писати код однаковим стилем), а зворотні(``)
використовують для запису зміних в них: console.log(`You are ${userAge} years old.`);

3. Як перевірити, чи два рядки рівні між собою?
let str1 = "Привіт, світ!";
let str2 = "Привіт, світ!";

if (str1 === str2) {
    console.log("Рядки рівні");
} else {
    console.log("Рядки не рівні");
}

4. Що повертає Date.now()?
У браузерному середовищі JavaScript функція Date.now() повертає кількість мілісекунд, що пройшли 
з 1 січня 1970 року 00:00:00 UTC до поточного моменту. Це число називається "часовою міткою" (timestamp).

5. Чим відрізняється Date.now() від new Date()?
Date.now() та new Date() - це дві різні способи отримання даних про поточний час в середовищі JS.

Date.now():
Це статичний метод об'єкта Date.
Повертає кількість мілісекунд, що пройшли з 1 січня 1970 року 00:00:00 UTC до поточного моменту.
Це число (timestamp) використовується для зручної роботи з часом в числовому форматі.
Приклад використання:
let currentTime = Date.now();
console.log(currentTime);

new Date():
Це конструктор об'єкта Date, який створює новий об'єкт, що представляє поточний момент часу.
Повертає об'єкт Date, який може бути використаний для отримання різних значень, таких як година, 
хвилина, секунда, місяць і т.д.
Приклад використання:
let currentDate = new Date();
console.log(currentDate);
Взагалі, якщо вам просто потрібен timestamp для представлення поточного часу в числовому форматі, 
Date.now() є зручнішим. Якщо ж вам потрібно працювати з різними компонентами дати та часу, 
тоді new Date() буде кориснішим, оскільки він надає об'єкт, що дозволяє отримувати окремі 
компоненти дати.

Практичні завдання
1. Перевірити, чи є рядок паліндромом. Створіть функцію isPalindrome, яка приймає 
рядок str і повертає true, якщо рядок є паліндромом
(читається однаково зліва направо і справа наліво), або false в іншому випадку.
2. Створіть функцію, яка перевіряє довжину рядка. Вона приймає рядок, який потрібно перевірити, 
максимальну довжину і повертає true, якщо рядок менше або дорівнює вказаній довжині, і false, 
якщо рядок довший. Ця функція стане в нагоді для валідації форми. Приклади використання функції:
// Рядок коротше 20 символів
funcName('checked string', 20); // true
// Довжина рядка дорівнює 18 символів
funcName('checked string', 10); // false
3. Створіть функцію, яка визначає скільки повних років користувачу. 
Отримайте дату народження користувача через prompt. 
Функція повина повертати значення повних років на дату виклику функцію.
*/

console.log('_________________task#1_________________')

function isPalindrome(str) {
    let direct = '';
    let reversed = '';
    
    for (const ch of str) {
      if (!' ?!,.'.includes(ch)) {
        direct +=ch;
        reversed = ch + reversed;
      }
    }
    console.log (`target: "${str}"`);
    console.log (`direct: "${direct.toLowerCase()}"`);
    console.log (`reversed: "${reversed.toLowerCase()}"`);

    return direct.toLowerCase() === reversed.toLowerCase();
    
}

console.log(isPalindrome('Rotator?'));
console.log(isPalindrome('Date of your birthday'));


console.log('_________________task#2_________________')

function checkLengthOfString(inputString, maxLength) {
    //console.log(typeof inputString.length);
    return inputString.length <= maxLength;
    
}
console.log(checkLengthOfString('checked string', 20));
console.log(checkLengthOfString('checked string', 10));


console.log('_________________task#3_________________')

function calculateAge(birthDate) {
    //console.log(birthDate);
 
    const birthDateObj = new Date(birthDate);

    let currentDate = new Date();
    let yourAge = Math.floor((currentDate - birthDateObj) / (365.25 * 24 * 60 * 60 * 1000));
  
    return yourAge;
}
  
let userBirthDate = prompt("Enter your birthday as YYYY-MM-DD:"); 
let userAge = calculateAge(userBirthDate);

console.log(`You are ${userAge} years old.`);