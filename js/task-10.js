function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает
// кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один
// параметр - число.Функция создает столько < div >, сколько указано
// в amount и добавляет их в div#boxes.

// 1. Размеры самого первого < div > - 30px на 30px.

// 2. Каждый элемент после первого, должен быть шире и выше
// предыдущего на 10px.

// 3. Все элементы должены иметь случайный цвет фона в формате HEX.
// Используй готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое
// div#boxes, тем самым удаляя все созданные элементы.

const fieldRef = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxesRef = document.querySelector("#boxes");

function createBoxes(amount) {
	const container = [];
	let boxWidth = 30;
	let boxHeight = 30;

	while (container.length < amount) {
		let div = document.createElement("div");
		div.style.width = `${boxWidth}px`;
		div.style.height = `${boxHeight}px`;

		div.style.backgroundColor = getRandomHexColor();

		container.push(div);

		boxWidth += 10;
		boxHeight += 10;
	}

	return container;
}

// function createBoxes(amount) {
// 	const container = [];

// 	for (let i = 0; i < amount; i += 1) {
// 		let div = document.createElement("div");
// 		div.style.width = `${30 + 10 * i}px`;
// 		div.style.height = `${30 + 10 * i}px`;

// 		div.style.backgroundColor = getRandomHexColor();

// 		container.push(div);
// 	}

// 	return container;
// }

function insertCreatedBoxes() {
	const boxes = createBoxes(fieldRef.value);
	boxesRef.append(...boxes);
}

function destroyBoxes() {
	boxesRef.innerHTML = "";
}

createBtn.addEventListener("click", insertCreatedBoxes);

destroyBtn.addEventListener("click", destroyBoxes);
