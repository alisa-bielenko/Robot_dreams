// Отримуємо посилання на елементи DOM
const itemInput = document.getElementById("itemInput");
const shoppingList = document.getElementById("shoppingList");

// Функція для додавання покупок до списку
function addItem() {
    const itemName = itemInput.value.trim();
    if (itemName !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
            <input type="checkbox">
            <span>${itemName}</span>
        `;
        shoppingList.appendChild(li);
        itemInput.value = "";
    }
}

// Функція для видалення відмічених покупок
function deleteCheckedItems() {
    const items = shoppingList.querySelectorAll("li");
    items.forEach((item) => {
        const checkbox = item.querySelector("input[type='checkbox']");
        if (checkbox.checked) {
            item.remove();
        }
    });
}

// Функція для редагування відмічених покупок
function editItems() {
    const items = shoppingList.querySelectorAll("li");
    items.forEach((item) => {
        const checkbox = item.querySelector("input[type='checkbox']");
        if (checkbox.checked) {
            const span = item.querySelector("span");
            const newItemName = prompt("Редагувати покупку:", span.textContent);
            if (newItemName !== null && newItemName !== "") {
                span.textContent = newItemName;
            }
        }
    });
}