/*
Допишіть логіку функцій writeAverageGrade, writeMinGrade, writeMaxGrade
які вважають оцінки та малюють їх у відповідні осередки таблиці.

Імітуючи завантаження даних, виводьте оцінки в таблицю (використовуйте селектори з об'єкта) через 3, 5, 6 секунд.
При цьому прелоадер потрібно видаляти.

Використовуйте bind! :)
 */

const grades = {
	selectors: {
		average: '#average',
		max: '#max',
		min: '#min',
	},
	list: {
		math: 10,
		english: 8,
		literature: 11,
		history: 7,
		biology: 9,
		programming: 12,
	},
	writeAverageGrade(){},
	writeMinGrade(){},
	writeMaxGrade(){},
};

setTimeout(grades.writeMinGrade, 2000);
setTimeout(grades.writeMaxGrade, 4000);
setTimeout(grades.writeAverageGrade, 6000);
