/*

При натисканні на сабміт збирати всі значення з інпутів в об'єкт 
і виводити в консоль. Очищати усі поля введення. 
Сторінка не повинна перезавантажуватись!
   {
      name: 'John',
      tel: '+76546623462',
   }

   
Реалізувати подію сабміта форми при натисканні 
Enter 


При введенні в інпут тексту забороняти вводити 
спец. символи html тегів (<, >, </)


За розфокусом з інпуту repeatPassword 
перевіряти чи відповідають введені дані полю password. Якщо ні – показувати помилку (додавати текст червоного кольору під полем введення). За фокусом приховувати помилку.

*/

const form = document.querySelector('.sign-up-form');

form.addEventListener('submit', (event) => {
   event.preventDefault();

   const inputCollection = event.target.querySelectorAll('input');
   console.log(inputCollection);

   inputCollection.forEach(el => {
      values[el.name] = el.value;

   });

   event.target.reset();
   console.log(values);

});

const inputName = document.querySelector('#login');

inputName.addEventListener('input', (event) => {
   event.target.value = event.target.value.replaceAll('>', '').replaceAll('<', '');
})

const inputPassword = document.querySelector('#password');
const inputRepPassword = document.querySelector('#repeat_password');
const err = document.querySelector('.error');

inputRepPassword.addEventListener('blur', (event) => {
	if (inputPassword.value !== event.target.value) {
		err.innerText = "Паролі не збігаються";
	} else {
		err.innerText = '';
	}
})

inputRepPassword.addEventListener('focus', (event) => {
	if (err.innerText.length > 0) {
		err.innerText = '';
	} 
})