# Контекст виконання (execution context)
це, якщо говорити спрощено, концепція, що описує оточення, в якому виконується виконання коду JavaScript. Код завжди виконується всередині певного контексту.

## У JavaScript існує три типи контекстів виконання:

* **_Глобальний контекст виконання._**
  Це базовий контекст, що використовується за умовчанням виконання. Якщо код знаходиться не всередині якої-небудь функції, значить цей код належить глобальному контексту. Глобальний контекст характеризується наявністю глобального об'єкта, яким, у випадку з браузером, є об'єкт window, і тим, що ключове слово це вказує на цей глобальний об'єкт. У програмі може лише один глобальний контекст.


* **_Контекст виконання функції._**
  Щоразу, коли викликається функція, нею створюється новий контекст. Кожна функція має власний контекст виконання. У програмі може одночасно бути безліч контекстів виконання функцій. Під час створення нового контексту виконання функції він проходить через певну послідовність кроків, яку ми поговоримо нижче.


* _**Контекст виконання функції eval.**_
  Код, який виконується всередині функції eval, також має власний контекст виконання. P.S. Не використовуйте функцію eval;


# This
Властивість контексту виконання коду (global, function чи eval), що у нестрогому режимі завжди є посиланням на об'єкт, а суворому режимі може мати будь-яке значення.

## Global контекст

У глобальному контексті виконання (за межами будь-яких функцій) цепосилається на глобальний об'єкт незалежно від режиму (суворий або нестрогий).

```js
console.log(this === window); // true

a = 37;
console.log(window.a); // 37

this.group = "FE-30";
console.log(window.group) // "FE-30"
console.log(group) // "FE-30"
````

Ви завжди можете легко отримати об'єкт "global", використовуючи глобальну властивість "globalThis", незалежно від поточного контексту, в якому виконується ваш код.

## Function контекст

Не в строгому режимі значення цього не встановлюється викликом і за замовчуванням буде використовуватися об'єкт global, яким у браузері є window.

```js
function logThis(){
     console.log(this);
}

logThis(); // window
````

У строгому режимі, якщо значення цього не встановлено в контексті виконання, воно залишається undefined


## У методі об'єкта

Коли функція викликається як метод об'єкта, використовується в цій функції ключове слово this приймає значення об'єкта, по відношенню до якого викликаний метод.

```js
function logThis(){
console.log(this);
}

const someObject = {
someString: 'Hello, I\'m pretty string ;)',
деякийNumber: 30,
isItAwesomeObject: true,
logThis,
}

someObject.logThis(); // someObject
```

## Стрілочні функції

У стрілочних функціях це прив'язано до оточення, в якому була створена функція.

Стрілочні функції не містять власний контекст this, а використовують значення this навколишнього контексту.
* У глобальній області видимості this буде вказувати на глобальний об'єкт (правила "use strict" щодо this ігноруються).
* Якщо стрілочна функція викликана з іншої функції - це буде дорівнювати this батьківської функції.

```js
const logArrowFunctionThis = () => console.log('arrowFunction: ', this);
logArrowFunctionThis(); // window


function globalFunction(){
     console.log(this)
     console.log('global function');
     logArrowFunctionThis();
}
GlobalFunction() // window
```

```js
const someObject = {
someString: 'Hello, I\'m pretty string ;)',
someNumber: 30,
isItAwesomeObject: true,
logArrowFunction: () => console.log(this),
logThis(){
const logInnerArrowFunction = () => {
console.log('logInnerArrowFunction:', this);
}

         const logInnerFunction = function(){
             console.log('logInnerFunction:', this);
         }

         logInnerArrowFunction();
         logInnerFunction();
     },
}
someObject.logArrowFunction(); // window
someObject.logThis();
````

## Метод ```call```

Метод call() викликає функцію із зазначеним значенням this та індивідуально наданими аргументами.

```js
func.call(context, arg1, arg2, ...)

// thisArg - Значення this, що надається для виклику функції func.
// arg1, arg2, ... – Аргументи для func.
````

```js
const showFullName = function(age, city){
     alert(`Name: ${this.firstName}, and lastname: ${this.lastName}, age: ${age}, city: ${city}`);
}

const user = {
     firstName: 'Brendan',
     lastName: 'Eich',
    
}

showFullName.call(user, 31, 'Pittsburgh');
````


## Метод ```apply```

Якщо нам невідомо, з якою кількістю аргументів потрібно викликати функцію, можна використовувати більш потужний метод: apply.

Виклик функції за допомогою func.apply працює аналогічно до func.call, але приймає масив аргументів замість списку.


## Метод ```bind```

Метод bind() створює нову функцію, яка при виклику встановлює як контекст виконання цього наданого значення. До методу також передається набір аргументів, які будуть встановлені перед переданими у прив'язану функцію аргументами під час її виклику.

```js
func.bind(context, arg1, arg2, ...)
````

### Втрата «this»

```js
const someObject = {
     someString: 'Hello, I\'m pretty string ;)',
     деякийNumber: 30,
     isItAwesomeObject: true,
     sayHi,
}

setTimeout(someObject.logAll, 1000); // Привіт, undefined!
````