/**
 * Завдання 1.
 *
 * Отримати та вивести в консоль такі елементи сторінки:
 * - за ідентифікатором (id): елемент з ідентифікатором list;
 * - за класом - елементи з класом list-item;
 * - За тегом - елементи з тегом li;
 * - За CSS селектором (один елемент) - третій li зі всього списку;
 * - За CSS селектором (багато елементів) – всі доступні елементи li.
 *
 * Вивести в консоль і пояснити властивості елемента:
 * - innerText;
 * - innerHTML;
 * - outerHTML.
 */

const listElemetById = document.getElementById('list');
console.log(listElemetById);

const listItemCollectinByClass = document.getElementsByClassName('list-item');
console.log(listItemCollectinByClass);

const liTagCollection = document.getElementsByTagName('li');
console.log(liTagCollection);

const liCssElement = document.querySelector('li:nth-of-type(3)');
console.log(liCssElement);

const liCssCollection = document.querySelectorAll('li');
console.log(liCssCollection);

console.log(document.querySelector("main").innerText);
console.log(document.querySelector("main").innerHTML);
console.log(document.querySelector("main").outerHTML);