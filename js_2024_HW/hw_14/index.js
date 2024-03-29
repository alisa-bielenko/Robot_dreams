'use strict';

/* Теоритичні питання:
1. В чому полягає відмінність localStorage і sessionStorage?
localStorage та sessionStorage - це дві технології для зберігання даних в браузері, 
але вони мають кілька ключових відмінностей:

Тривалість зберігання:
localStorage: Дані зберігаються постійно і залишаються в браузері навіть після закриття вкладки 
чи вимкнення браузера. Вони зберігаються до того часу, поки користувач вручну не видалить їх або 
не очистить кеш браузера.
sessionStorage: Дані зберігаються лише під час активної сесії браузера. Якщо ви закриєте вкладку 
або вимкнете браузер, дані будуть видалені.

Обсяг зберігання:
Обидва механізми мають обмеження на обсяг даних, які можна зберігати (зазвичай приблизно 5-10 МБ).

Спільний доступ:
localStorage: Дані, збережені в localStorage, доступні для всіх вкладок і вікон в межах одного домену.
sessionStorage: Дані, збережені в sessionStorage, доступні лише для поточної вкладки чи вікна.

Використання:
localStorage може використовуватися для зберігання даних, які повинні залишатися в браузері довго (наприклад, налаштування користувача).
sessionStorage може бути використаний для тимчасового зберігання даних, які потрібно зберігати лише під час однієї сесії користувача.
Приклад використання в JavaScript:

// Збереження в localStorage
localStorage.setItem('key', 'value');

// Збереження в sessionStorage
sessionStorage.setItem('key', 'value');

// Отримання значення з localStorage
const valueFromLocalStorage = localStorage.getItem('key');

// Отримання значення з sessionStorage
const valueFromSessionStorage = sessionStorage.getItem('key');
Важливо вибирати між localStorage та sessionStorage в залежності від того, наскільки тривало потрібно зберігати дані та яким рівнем доступу потрібно користуватися.


2. Які аспекти безпеки слід враховувати при збереженні чутливої інформації, такої як паролі, 
за допомогою localStorage чи sessionStorage?
Не можна зберігати чутливу інформацію (паролі, банківські карти, токени), її можуть вкрасти та використати.
Також ці дані можуть бути змінені з боку клієнта, тому потрібно їх валідувати.
Загалом, ці сховища призначені для локального збереження даних на стороні клієнта, 
тому не можемо їх викоритстовувати для речей, які можуть впливати на безпеку чи перфоманс програми.

3. Що відбувається з даними, збереженими в sessionStorage, коли завершується сеанс браузера?
sessionStorage - дані зберігаються тільки при перезавантаженні сторінки. 
Після завершення сесії, видаляються.

Практичне завдання:

Реалізувати можливість зміни колірної теми користувача.

Технічні вимоги:

- Взяти готове домашнє завдання HW-4 "Price cards" з блоку Basic HMTL/CSS.
- Додати на макеті кнопку "Змінити тему".
- При натисканні на кнопку - змінювати колірну гаму сайту (кольори кнопок, 
  фону тощо) на ваш розсуд. 
  При повторному натискання - повертати все як було спочатку - 
  начебто для сторінки доступні дві колірні теми.
- Вибрана тема повинна зберігатися після перезавантаження сторінки.

Примітки: 
- при виконанні завдання перебирати та задавати стилі всім 
елементам за допомогою js буде вважатись помилкою;
- зміна інших стилів сторінки, окрім кольорів буде 
вважатись помилкою.

Додаткові матеріали: 
https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties.
*/

const changeThemeButton = document.querySelector('.change-theme-button');
const styleTheme = document.querySelector('#themeStyle');
const savedTheme = localStorage.getItem('dataTheme');

document.addEventListener('DOMContentLoaded', () => {
	
	if (savedTheme === 'dark') {
		styleTheme.href = './css/dark-theme.css';
		changeThemeButton.dataset.theme = 'dark';
	} else {
		styleTheme.href = './css/light-theme.css';
		changeThemeButton.dataset.theme = 'light';
	}
});


changeThemeButton.addEventListener('click', (event) => {

	if (event.target.dataset.theme === 'light') {
		event.target.dataset.theme = 'dark';
		styleTheme.href = './css/dark-theme.css';
	} else if (event.target.dataset.theme === 'dark') {
		event.target.dataset.theme = 'light';
		styleTheme.href = './css/light-theme.css';
	}

	localStorage.setItem('dataTheme', `${event.target.dataset.theme}`);
});