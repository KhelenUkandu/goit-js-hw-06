// Створи змінну counterValue, в якій буде зберігатися поточне значення
// лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй
// або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const value = document.querySelector("#value");
let counterValue = 0;

const onDecrementBtn = document.querySelector(
	'button[data-action = "decrement"]',
);
const onIncrementBtn = document.querySelector(
	'button[data-action = "increment"]',
);

onDecrementBtn.addEventListener("click", () => {
	counterValue -= 1;
	value.textContent = counterValue;
});
onIncrementBtn.addEventListener("click", () => {
	counterValue += 1;
	value.textContent = counterValue;
});
