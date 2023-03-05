// Напиши скрипт, який під час набору тексту в інпуті
// input#name - input(подія input), підставляє його поточне
// значення в span#name - output.Якщо інпут порожній,
// у спані повинен відображатися рядок "Anonymous".

const textInputRef = document.querySelector("#name-input");
const nameGreetingRef = document.querySelector("#name-output");

textInputRef.addEventListener(
	"input",
	event => (nameGreetingRef.textContent = event.currentTarget.value),
);
