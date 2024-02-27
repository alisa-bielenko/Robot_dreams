"use strict"

/*
1. Поясніть своїми словами, як ви розумієте, як працює прототипне наслідування в Javascript

Прототипне наслідування в JS - це механізм, за допомогою якого об'єкти можуть успадковувати 
властивості та методи від інших об'єктів. У мові програмування JS кожен об'єкт має посилання 
на інший об'єкт, який називається "прототипом". Коли властивість чи метод звертається на об'єкті, 
якщо вона не знайдена в самому об'єкті, JS автоматично шукає цю властивість чи метод 
у прототипі.
Усі об'єкти у JS є екземплярами об'єктів, і кожен об'єкт може мати свій власний прототип. 
Якщо у вас є метод чи властивість в об'єкта, і він не знайдений у самому об'єкті, JS буде шукати 
його у прототипі цього об'єкта. Цей процес може продовжуватися вгору по ланцюжку прототипів, 
поки не буде знайдено відповідну властивість чи метод або доки не буде досягнутий кінець ланцюжка 
прототипів (який, як правило, є об'єктом Object.prototype).
Отже, прототипне наслідування в JS дозволяє створювати ієрархії об'єктів, де один об'єкт 
може успадковувати властивості та методи іншого, що спрощує створення та управління кодом.

2. Для чого потрібно викликати super() у конструкторі класу-нащадка?
Виклик super() у конструкторі класу-нащадка в JS використовується для виклику конструктора його 
батьківського класу. Це необхідно для правильної ініціалізації об'єкта унаслідованого класу, 
включаючи встановлення властивостей, які визначені в батьківському класі.
Коли клас успадковує інший клас в JS, він може мати свій власний конструктор. Однак, щоб забезпечити 
коректне унаслідування і ініціалізацію, потрібно викликати конструктор батьківського класу з 
використанням super(). Це дозволяє виконати код конструктора батьківського класу перед виконанням 
власного коду конструктора класу-нащадка.
Коротко кажучи, super() забезпечує правильний порядок ініціалізації при успадкуванні класів у JS та 
потрібен для:
- ініціалізації об'єкта у підкласі.
- виконання будь-яких додаткових операцій, що виконуються в конструкторі батьківського класу.
- забезпечення правильного ланцюга наслідування конструкторів.
*/

/*
Завдання
1. Створити клас Employee, у якому будуть такі характеристики - name (ім'я), age (вік), 
salary (зарплата). Зробіть так, щоб ці характеристики заповнювалися під час створення об'єкта.
2. Створіть гетери та сеттери для цих властивостей.
3. Створіть клас Programmer, який успадковуватиметься від класу Employee, і який матиме 
властивість lang (список мов).
4. Для класу Programmer перезапишіть гетер для властивості salary. 
Нехай він повертає властивість salary, помножену на 3.
5. Створіть кілька екземплярів об'єкта Programmer, виведіть їх у консоль.
*/

class Employee {
    constructor(name, age, salary) {
        this._name = name;
        this._age = age;
        this._salary = salary;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }

    get salary() {
        return this._salary;
    }

    set salary(value) {
        this._salary = value;
    }
}

class Programmer extends Employee {
    constructor(name, age, salary, language) {
        super(name, age, salary);
        this._language = language;
    }

    get salary() {
        return super.salary * 3;
    }

    get language() {
        return this._language;
    }

    set language(value) {
        this._language = value;
    }
}

const programmer1 = new Programmer("Bob", 22, 12000, "Java");
console.log(programmer1);

const programmer2 = new Programmer("Nick", 55, 25000, "JavaScript");
console.log(programmer2);

const programmer3 = new Programmer("Alice", 38, 17000, "Python");
console.log(programmer3);

console.log("Programmer 1:");
console.log("Name:", programmer1.name);
console.log("Age:", programmer1.age);
console.log("Salary:", programmer1.salary);
console.log("Languages:", programmer1.language);
console.log();

console.log("Programmer 2:");
console.log("Name:", programmer2.name);
console.log("Age:", programmer2.age);
console.log("Salary:", programmer2.salary);
console.log("Languages:", programmer2.language);

console.log("Programmer 3:");
console.log("Name:", programmer3.name);
console.log("Age:", programmer3.age);
console.log("Salary:", programmer3.salary);
console.log("Languages:", programmer3.language);