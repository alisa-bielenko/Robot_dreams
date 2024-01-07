/**
 * Завдання 3.
 *
 * На екрані вказано список товарів із зазначенням назви та кількості на складі.
 *
 * Знайти товари, які закінчилися та:
 * - Змінити 0 на «закінчився»;
 * - Змінити колір тексту на червоний;
 * - Змінити жирність тексту на 600.
 *
 * Вимоги:
 * - Колір елемента змінити за допомогою модифікації атрибуту style.
 */
const productElements = document.querySelectorAll('.store>li');
console.log(productElements)

productElements.forEach((elem) => {
    //console.log(elem.innerText);
    // console.log(elem.innerText.split(' ')[1])

    const textArr = elem.innerText.split(' ');
    console.log(textArr[0]);
    console.log(textArr[1]);

    if (textArr[1] === '0') {

        elem.innerText = `${textArr[0]} закінчився`;
        // elem.style.color = 'red';
        // elem.style.fontWeight = '600';
        elem.classList.add('sold-out');

    }
})
