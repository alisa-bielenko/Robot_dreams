// На кліку на картинку - створювати дубль цієї картинки, наприкінці списку картинок.
// Використовувати делегування подій

document.body.addEventListener("click", (event) => {
    console.log(event);
    console.log(event.target); // посилання на дом-елемент
    console.log(event.target.tagName);
    if (event.target.tagName.toLowerCase() === "img") {
        //const elem = event.target.cloneNode(true);
        //document.body.appendChild(elem);
        document.body.appendChild(event.target.cloneNode(true));
    }
});