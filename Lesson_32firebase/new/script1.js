function saveDataToFirebase(data) {
    const firebaseUrl = 'https://rd-api-bbe0d-default-rtdb.europe-west1.firebasedatabase.app/';
    const databaseName = 'shoppingList.json'; // Назва вашого списку в базі даних

    fetch(`${firebaseUrl}${databaseName}`, {
        method: 'POST', // Метод HTTP-запиту для додавання даних
        headers: {
            'Content-Type': 'application/json', // Тип вмісту - JSON
        },
        body: JSON.stringify(data), // Дані, які ви хочете відправити (у форматі JSON)
    })
    .then((response) => {
        if (response.ok) {
            console.log('Дані успішно відправлено на сервер Firebase.');
        } else {
            console.error('Помилка при відправленні даних на сервер Firebase.');
        }
    })
    .catch((error) => {
        console.error('Помилка при відправленні даних на сервер Firebase:', error);
    });
}

// Приклад використання:
const dataToSend = {
    shoppingList: ["Покупка 1", "Покупка 2", "Покупка 3"]
};

saveDataToFirebase(dataToSend);