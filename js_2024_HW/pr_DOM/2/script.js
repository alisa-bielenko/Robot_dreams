/**
 * Завдання 2.
 *
 * Отримати елемент із класом .remove.
 * Видалити його з розмітки.
 *
 * Отримати елемент із класом .bigger.
 * Замінити йому CSS-клас .bigger на CSS-клас .active.
 *
 * Умови:
 * - Другу частину завдання вирішити у двох варіантах: в один рядок та в два рядки.
 */

const removeElements = document.querySelectorAll('.remove');
console.log(removeElements);

// searchedTagRemove.style.display = "none";

removeElements.forEach((elem) => {
    console.log(elem)
    //elem.style.display = "none";
    elem.remove();
});


const biggerElement = document.querySelector(".bigger");

console.log(biggerElement);

biggerElement.classList.replace("bigger", "active");

