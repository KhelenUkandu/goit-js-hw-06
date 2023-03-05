function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

// Напиши скрипт, который изменяет цвета фона элемента
//   < body > через инлайн стиль при клике
//   на button.change - color и выводит значение цвета
//   в span.color.

const bodyRef = document.querySelector("body");
const buttonRef = document.querySelector("button");
const spanRef = document.querySelector("span");

buttonRef.addEventListener("click", () => {
	spanRef.textContent = getRandomHexColor();
	bodyRef.style.backgroundColor = getRandomHexColor();
});
