// Напиши скрипт, який реагує на зміну значення
// input#font - size - control(подія input) і змінює
// інлайн - стиль span#text, оновлюючи властивість font - size.
// В результаті, перетягуючи повзунок, буде змінюватися
// розмір тексту.

const sliderRef = document.querySelector("#font-size-control");

const textRef = document.querySelector("#text");

sliderRef.addEventListener("input", () => {
	textRef.style.fontSize = sliderRef.value + "px";
});
