Звичайний синтаксис `{...}` дозволяє створити лише один об'єкт. Але часто нам потрібно створити багато однотипних об'єктів, таких як користувачі, елементи меню і т.д.

Це можна зробити за допомогою функції-конструктора та оператора `new`.

# Функції-конструктора

Функції-конструктори є стандартними функціями. Але є дві угоди:

1. Ім'я функції-конструктора має починатися з великої літери.
2. Функція-конструктор повинна викликатися за допомогою оператора "new".

# ```New Function(...)```

Коли функція викликається як "new Function(...)", відбувається наступне:

* Створюється новий порожній об'єкт, і він присвоюється `this`.
* Виконується код функції. Зазвичай він модифікує `this`, додає туди нові властивості.
* Повертається значення `this`.

```js

function Employer(name, role, salary){
this.name = name;
this.role = role;
this.salary = salary;
this.log = function(){
console.log(`Name: ${this.name}, Role: ${this.role}, Salary: ${this.salary}`);
}
};

````

## `return`

Зазвичай, конструктори нічого не повертають явно. Їхнє завдання – записати все необхідне в `this`, який у результаті стане результатом. Тобто можна вважати що за умовчанням конструктор повертає об'єкт `this`.

Але якщо `return` все ж таки є, то застосовується просте правило:

* При виклику return з об'єктом, буде повернуто об'єкт, а не `this`.
* При виклику return з примітивним значенням, примітивне значення буде відкинуто.

## Стрілочні функції
Стрілочні функції не можуть бути викликані через оператор `new` і не використовуються як конструктор.


# Прототипи
Прототипи – це механізм, за допомогою якого об'єкти JavaScript успадковують властивості один від одного.

JavaScript часто описують як мову прототипного успадкування - кожен об'єкт має об'єкт-прототип, який виступає як шаблон, від якого об'єкт успадковує методи і властивості.

Об'єкт-прототип може мати свій прототип і успадковувати його властивості і методи і так далі. Це часто називається ланцюжком прототипів і пояснює чому одним об'єктам доступні властивості та методи, які визначені в інших об'єктах.

```js

const object = {
     name: 'someObject',
     sayName(){
         alert(this.name);
     }
}
console.log(object)
console.log(object.hasOwnProperty('name')); //метод hasOwnProperty викликається з прототипу

````

## Властивість prototype
Спеціальна властивість об'єкта, де зберігається прототип.

Доступ до нього можна отримати через застарілий синтаксис, звертаючись до властивості `__proto__`:

```js

function Student(name){
this.name = name;
}

const jhon = new Student('Jhon');

console.log(jhon);
console.log(jhon.__proto__);

````

Не використовуйте властивість `__proto__`!

Сучасний синтаксис - методи `Object.getPrototypeOf(obj)` та `Object.setPrototypeOf(obj, proto)`;

```js

function Student(name){
     this.name = name;
}

const jhon = new Student('Jhon');

console.log(jhon);
console.log(Object.getPrototypeOf(jhon));

````

### Створення властивостей та методів у prototype
Властивості та методи можна додавати в прототип за допомогою звичного синтаксису через `.`: `Fenction.prototype.someMethod = function(){...}`

```js

function Student(name){
this.name = name;
}

Student.prototype.alertName = function(){alert(this.name)};

const jhon = new Student('Jhon');

console.log(jhon);
console.log(Object.getPrototypeOf(jhon));

jhon.alertName();

````

### Чому prototype?

```js

function Student(name){
     this.name = name;
     this.alertFromObject = function(){alert(this.name)};
}

Student.prototype.alertFromPrototype = function(){alert(this.name)};

const jhon = new Student('Jhon');
const sam = new Student('Sam');

console.log(jhon);
console.log(sam);

console.log('From object: ', jhon.alertFromObject === sam.alertFromObject);
console.log('From prototype: ', jhon.alertFromPrototype === sam.alertFromPrototype);

````

### Властивість constructor
Властивість `constructor` об'єкту `prototype` вказує на вихідну функцію-конструктор.

```js

function Student(name){
this.name = name;
}

const jhon = new Student('Jhon');

console.log(jhon);
console.log(jhon.constructor);

````