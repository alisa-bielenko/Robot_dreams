
"use strict"
/*
1. Наведіть кілька прикладів, коли доречно використовувати в коді конструкцію try...catch.
Конструкція try...catch в JS використовується для обробки помилок в коді. 
Ось кілька прикладів ситуацій, коли це доречно:
- Робота з зовнішніми ресурсами: 
Коли ваш код взаємодіє з зовнішніми ресурсами, такими як мережеві запити або доступ до файлової системи, 
помилки можуть виникати через недоступність ресурсів або неправильні дані. try...catch допомагає обробляти ці помилки 
без викидання виключення.
try {
    // Код, який взаємодіє з зовнішнім ресурсом
} catch (error) {
    // Обробка помилки, наприклад, виведення повідомлення про помилку
    console.error('Помилка під час взаємодії з зовнішнім ресурсом:', error);
}

- Робота з об'єктами і властивостями: 
Якщо звертатись до властивостей об'єкта, які можуть бути відсутніми, використання try...catch може запобігти 
викиданню помилки.
const obj = {};
try {
    console.log(obj.property); // Спроба отримати доступ до властивості, яка не існує
} catch (error) {
    console.error('Помилка під час доступу до властивості об'єкта:', error);
}

 - Робота з парсингом даних: 
При роботі з введеними користувачем даними або даними зовнішніх джерел можуть виникати помилки парсингу. 
Використання try...catch дозволяє елегантно обробляти ці ситуації.
const userInput = 'не валідний JSON';
try {
    const parsedData = JSON.parse(userInput);
    console.log(parsedData);
} catch (error) {
    console.error('Помилка під час парсингу даних:', error);
}

 - Робота з асинхронним кодом: 
При використанні асинхронних функцій, таких як setTimeout, помилки можуть виникати після того, як викликатись вже не можна. 
Використання try...catch у відповідному місці допомагає управляти цими помилками.
try {
    setTimeout(() => {
        throw new Error('Помилка в асинхронному коді');
    }, 1000);
} catch (error) {
    console.error('Цей код ніколи не буде викликаний через асинхронний характер setTimeout:', error);
}
Ці приклади показують ситуації, коли try...catch є важливою конструкцією для обробки помилок і забезпечення 
стабільності програмного забезпечення.

Завдання.
Дано масив books.
Виведіть цей масив на екран у вигляді списку (тег ul – список має бути згенерований за допомогою Javascript).
На сторінці повинен знаходитись div з id="root", куди і потрібно буде додати цей список (схоже завдання виконувалось 
в модулі basic).
Перед додаванням об'єкта на сторінку потрібно перевірити його на коректність (в об'єкті повинні міститися всі три 
властивості - author, name, price). Якщо якоїсь із цих властивостей немає, в консолі має висвітитися помилка із 
зазначенням - якої властивості немає в об'єкті.
Ті елементи масиву, які не є коректними за умовами попереднього пункту, не повинні з'явитися на сторінці.
*/

const books = [
    {
        author: "Люсі Фолі",
        name: "Список запрошених",
        price: 70
    },
    {
        author: "Сюзанна Кларк",
        name: "Джонатан Стрейндж і м-р Норрелл",
    },
    {
        name: "Дизайн. Книга для недизайнерів.",
        price: 70
    },
    {
        author: "Алан Мур",
        name: "Неономікон",
        price: 70
    },
    {
        author: "Террі Пратчетт",
        name: "Рухомі картинки",
        price: 40
    },
    {
        author: "Анґус Гайленд",
        name: "Коти в мистецтві",
    }
];

const rootElement = document.querySelector("#root");
const ulElement = document.createElement("ul");

class PropertyMissedError extends Error {
    constructor(property) {
        super(`пропущена властивість ${property}`);
        this.name = `PropertyMissedError`;
    }
}

class Book {
    constructor(author, name, price) {
        this.author = author;
        this.name = name;
        this.price = price;
    }

    checkProperty() {
        if (!this.name) {
            throw new PropertyMissedError('name');
        }

        if (!this.author) {
            throw new PropertyMissedError('author');
        }

        if (!this.price) {
            throw new PropertyMissedError('price');
        }
    }
} 

books.forEach(elem => {
    try {

        const bookHasAllProperty = new Book(elem.author, elem.name, elem.price);
        bookHasAllProperty.checkProperty(elem);
        const liElement = document.createElement("li");
        liElement.innerText = `У продажі є книга "${bookHasAllProperty.name}" автора ${bookHasAllProperty.author}, за ціною ${bookHasAllProperty.price} грн`;
        ulElement.appendChild(liElement);
        
    } catch (err) {
        if (err instanceof PropertyMissedError) {
            console.error(`В книзі "${elem.name}" - ${err}`);
        } else {
            throw err;
        }
    }
});

rootElement.appendChild(ulElement);