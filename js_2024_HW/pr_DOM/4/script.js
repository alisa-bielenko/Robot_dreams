/*
* Завдання від SEO фахівця:
* на всіх зображеннях не вистачає аттрибутів alt та title
* Додати їх на всі зображення, текст брати з query параметра name у самому посиланні.
* Текст повинен мати людський вигляд - замість "_" повинні бути прогалини
* Текст title повинен містити назву нашого проекту (PE BASIC JS) через роздільник "|", всі літери повинні бути
* у верхньому регістрі
*
* Приклад:
* Зараз: <images src="https://loremflickr.com/300/300?name=Image_one" />
* Має бути: <images src="https://loremflickr.com/300/300?name=Image_one" alt="Image one" title="IMAGE ONE | PE BASIC JS" />
*
* */
const imageElements = document.querySelectorAll(".container>img");
console.log(imageElements);

imageElements.forEach(elem => {
    const altValue = elem.src.split("=")[1].replaceAll("_", " ");
    elem.alt = altValue;
    elem.title = `${altValue.toUpperCase()} | PE BASIC JS`;
    // elem.setAttribute("alt", altValue);
    // elem.setAttribute("title", `${altValue.toUpperCase()} | PE BASIC JS`);
})