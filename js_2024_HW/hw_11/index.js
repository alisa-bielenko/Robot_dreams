'use strict'

/*
Теоретичні питання
 1. Що таке події в JavaScript і для чого вони використовуються?
В JS події (events) представляють собою спеціальні моменти або дії, 
які відбуваються під час взаємодії користувача з веб-сторінкою чи під час виникнення інших подій 
в середовищі виконання JS.
Приклади подій включають натискання кнопки миші, клавіші на клавіатурі, завантаження сторінки, 
зміна розміру вікна браузера та інші події, що відбуваються в середовищі виконання.
Події використовуються для обробки реакцій на взаємодію користувача та забезпечення динамічності веб-сторінок. 
Для обробки подій в JS використовуються обробники подій (event handlers). 
Обробник події - це функція, яка викликається автоматично, коли відбувається певна подія. 
Наприклад, обробник події "click" викликається, коли користувач натискає кнопку миші.

2. Які події миші доступні в JavaScript? Наведіть кілька прикладів.
В JS найпоширеніших подій миші:
1) click: виникає при натисканні лівої кнопки миші.
element.addEventListener('click', function() {
    console.log('click');
});

2) dblclick: виникає при подвійному натисканні лівої кнопки миші.
element.addEventListener('dblclick', function() {
    console.log('doublle click');
});

3) mousedown: виникає при натисканні будь-якої кнопки миші.
element.addEventListener('mousedown', function() {
    console.log('mouse button pressed');
});

4) mouseup: - при відпусканні будь-якої кнопки миші.
element.addEventListener('mouseup', function() {
    console.log('mouse button released');
});

5) mousemove: - при русі миші над елементом.
element.addEventListener('mousemove', function(event) {
    console.log('mouse movement: ' + event.clientX + ', ' + event.clientY);
});

6) mouseover і mouseout: - при наведенні миші на елемент та виходженні миші за межі елемента відповідно.
element.addEventListener('mouseover', function() {
    console.log('mouseover');
});

element.addEventListener('mouseout', function() {
    console.log('mouseout');
});
Ці події дозволяють вам реагувати на взаємодію користувача з мишею і виконувати 
відповідні дії в залежності від контексту вашого додатку чи веб-сторінки.

3. Що таке подія "contextmenu" і як вона використовується для контекстного меню?
Подія "contextmenu" є подією, яка виникає при спробі користувача викликати контекстне меню у веб-додатку, 
зазвичай натисканням правої кнопки миші. Ця подія дозволяє розробникам обробляти цю взаємодію і 
визначати власні дії або відображати власні контекстні меню.

Простий приклад використання події "contextmenu" для заборони відображення браузерного контекстного 
меню виводить сповіщення про власне контекстне меню:
element.addEventListener('contextmenu', function(event) {
    event.preventDefault(); // Забороняє відображення браузерного контекстного меню
    // Ваш код для відображення власного контекстного меню або виконання інших дій
    // Наприклад, відображення власного div або виклик функції з обробкою подальших дій
    showCustomContextMenu(event);
});
У цьому прикладі event.preventDefault() використовується для того, 
щоб заборонити відображення стандартного браузерного контекстного меню. 
Після цього виводиться сповіщення про власне контекстне меню.
Ця подія може бути корисною, коли потрібно виконати певні дії,
nакі як відображення власного контекстного меню, при натисканні правої кнопки миші 
на певному елементі в вашому додатку чи на веб-сторінці.
*/

/*
Практичні завдання
1. Додати новий абзац по кліку на кнопку:
По кліку на кнопку <button id="btn-click">Click Me</button>, 
створіть новий елемент <p> з текстом "New Paragraph" 
і додайте його до розділу <section id="content">
*/
/*
2. Додати новий елемент форми із атрибутами:
Створіть кнопку з id "btn-input-create", додайте її на сторінку в section перед footer.
По кліку на створену кнопку, створіть новий елемент <input> і додайте до нього власні атрибути, 
наприклад, type, placeholder, і name. та додайте його під кнопкою.
*/

document.querySelector('#btn-click').addEventListener('click', () => {
    const newParagraph = document.createElement('p');
    newParagraph.innerText = 'New Paragraph';
    const contentSection = document.querySelector('#content');
    contentSection.appendChild(newParagraph);
});

const createInputButton = document.createElement('button');
createInputButton.id = 'btn-input-create';
createInputButton.innerText = 'Create input';
createInputButton.classList.add('create-input-btn');
document.querySelector('#main-content').prepend(createInputButton);

document.querySelector('#btn-input-create').addEventListener('click', addInput);

function addInput() {
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.placeholder = 'Enter text';
    newInput.name = 'newInput';

    const container = document.querySelector('#input-container');
    container.append(newInput);
}