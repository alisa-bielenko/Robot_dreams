/* Теоретичні питання
1. Як можна сторити функцію та як ми можемо її викликати?
Щоб не повторювати той самий код у багатьох місцях, придумані функції. 
Функції є основними "будівельними блоками" програми.
function name([param,[, param,[..., param]]]) {
[statements]
} де
name - Ім'я функції.
paramN – Ім'я аргументу, переданого у функцію. Максимальна кількість аргументів, 
яку може прийняти функція, може змінюватись в залежності від движків.
statements - Інструкції, що становлять тіло функції.

Є декілька способів створити (оголосити) функцію:
а) Function declaration (оголошення функції) визначає ім'я функції за
допомогою ключового слова `function`. Зазвичай вони піднімаються (hoisted),
що означає, що вони доступні в усій області, в якій вони визначені, навіть якщо
вони оголошені після їх використання:
function getName() {
return 'John'
}

function logName() {
console.log('John')
}
Викликаємо функції:
getName();
logName(); 

та 
б) Function expression (функціональне оголошення)
Function Expression передбачає визначення функції та присвоювання її
змінній. Ці функції можуть бути анонімними або мати ім'я. Вони не піднімаються
(не доступні до виклику) і можуть бути використані лише після того, як їх
призначено

const getName = function() {
return 'John'
}

const logName = function() {
console.log('John')
}
Викликаємо функції
getName();
logName(); 

2. Що таке оператор return в JavaScript? Як його використовувати в функціях?
Оператор return в JavaScript використовується в тілі функцій для повернення значення з функції. 
Він припиняє виконання функції та повертає вказане значення. 
Це дозволяє функціям повертати результати обчислень або взаємодіяти з іншим кодом.
function sum(a, b) {
  let sum = a + b;
  return sum; // Повертає суму a і b
}

let result = sum(3, 5); // виклик ф-ції з заданими аргументами
console.log(result); // Виведе 8 у консоль

Оператор return також може використовуватися 
для припинення виконання функції у будь-який момент та негайного повернення з неї. Наприклад:
function dividing(a, b) {
  if (b === 0) {
    console.error("Error: division by zero");
    return; // Припинення виконання функції без повернення значення
  }
  return a / b;
}

let result = dividing(10, 2);
console.log(result); // Виведе 5 у консоль

result = dividing(10, 0);
// Виведе помилку у консоль, але функція завершиться без виклику console.log

3. Що таке параметри та аргументи в функіях та в яких випадках вони використовуються?
У мові програмування JavaScript терміни "параметри" та "аргументи" часто використовуються 
у контексті функцій, і вони мають свої визначення:

Параметри функції:
Визначення: Параметри - це змінні, які вказуються у визначенні функції.
Приклад:
function add(a, b) {
  // a та b - це параметри функції
  return a + b;
}

Аргументи функції:
Визначення: Аргументи - це значення, які передаються функції при її виклику.
Приклад:
let sum = add(3, 5);
// 3 та 5 - це аргументи, які передаються функції додати при її виклику
У вищенаведеному прикладі a та b у функції додати - це параметри, 
оскільки вони вказані у визначенні функції. 
При виклику функції add(3, 5), 3 та 5 - це аргументи, оскільки вони передаються функції.
Параметри використовуються для прийому вхідних даних у функцію, 
і вони фактично стають локальними змінними у тілі функції. 
Аргументи використовуються для передачі конкретних значень у функцію під час її виклику.

Один з інших аспектів цього питання - параметри функції можуть мати значення за замовчуванням, 
якщо аргумент не передається при виклику функції. 
Це дозволяє функціям працювати із значеннями, навіть якщо їм не передано аргументів.

4. Як передати функцію аргументом в іншу функцію?
У JS можна передавати функції як аргументи в інші функції, 
що дозволяє створювати більш гнучкі та динамічні шаблони програмування. Ось приклад:

// Функція, яка приймає іншу функцію як аргумент
function executeFunction(func) {
  console.log("Calling the function...");
  func(); // Виклик переданої функції
}
// Функція, яку ми будемо передавати
function greet() {
  console.log("Greetings from the passed function!");
}
//  Викликаємо функцію та передаємо іншу функцію як аргумент
executeFunction(greet);

У цьому прикладі функція executeFunction приймає іншу func як аргумент, 
а потім викликає цю передану функцію у своєму тілі. При виклику executeFunction(greet), 
функція greet передається як аргумент і викликається всередині executeFunction.

Це може бути корисним для створення більш абстрактного та гнучкого коду, 
особливо коли вам потрібно динамічно визначати, яку функцію викликати в певному контексті 
або для реалізації концепцій, таких як зворотні виклики (callbacks) або обробники подій. 
Також ніжче це було використано для обчислення факторіалу.

Практичні завдання
1. Напишіть функцію, яка повертає частку двох чисел. Виведіть результат роботи функції в консоль.
2. Завдання: Реалізувати функцію, яка виконуватиме математичні операції 
з введеними користувачем числами. 
Технічні вимоги:
- Отримати за допомогою модального вікна браузера два числа. Провалідувати отримані значення(перевірити, що отримано числа). Якщо користувач ввів не число, запитувати до тих пір, поки не введе число
- Отримати за допомогою модального вікна браузера математичну операцію, яку потрібно виконати. Сюди може бути введено +, -, *, /. Провалідувати отримане значення. Якщо користувач ввів не передбачене значення, вивести alert('Такої операції не існує').
- Створити функцію, в яку передати два значення та операцію.
- Вивести у консоль результат виконання функції.
3. Опціонально. Завдання: 
Реалізувати функцію підрахунку факторіалу числа.
Технічні вимоги:
- Отримати за допомогою модального вікна браузера число, яке введе користувач.
- За допомогою функції порахувати факторіал числа, яке ввів користувач і вивести його на екран.
- Використовувати синтаксис ES6 для роботи зі змінними та функціями. 
*/

//#1
console.log('---------task#1---------------');

const calcDividing = (firstNumber, secondNumber) => firstNumber / secondNumber;

console.log(calcDividing(5, 10));
console.log(calcDividing(9, 3));
console.log(calcDividing(40, 5));
console.log(calcDividing(3, 0));

// або з перевіркою ділення на нуль

const calcDividing1 = (firstNumber1, secondNumber1) => {
    
    if (secondNumber1 === 0) {
        console.error("Error: division by zero");
        return;
    }

    return firstNumber1 / secondNumber1;
};

console.log(calcDividing1(5, 10));
console.log(calcDividing1(9, 3));
console.log(calcDividing1(40, 5));
console.log(calcDividing1(3, 0));

//#2
console.log('---------task#2---------------');
  
function getNumberFromUser(message) {
    let input;
    do {
      input = prompt(message);
    } while (isNaN(input)); 
    return +input;
}

function getOperationFromUser() {
    let operation;
    do {
      operation = prompt("Enter math operation only (+, -, *, /)");
    } while (!['+', '-', '*', '/'].includes(operation));
    return operation;
}

function calculate(num1, num2, operation) {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        alert('Error: division by zero');
      }
      break;
  }
}

const numberFirst = getNumberFromUser("Enter first number:");
const numberSecond = getNumberFromUser("Enter second number:");
const operation = getOperationFromUser();

const result = calculate(numberFirst, numberSecond, operation);
console.log(`Result of ${numberFirst} ${operation} ${numberSecond} = ${result}`);

//#3
console.log('------task#3_factorial--------');

function factorial(n) {
    
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

let userInput = prompt("Enter a number to calculate the factorial:");

let userNumber = +userInput;

if (!isNaN(userNumber)) {
    //console.log(!isNaN(userNumber));
    
    let result = factorial(userNumber);

    console.log(`Factorial of number: ${userNumber} is ${result}`);
    alert(`Factorial of number: ${userNumber} is ${result}`);
} else {
    alert("Please enter a valid number!");
}