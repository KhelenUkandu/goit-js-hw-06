// Напиши скрипт, який під час втрати фокусу
// на інпуті(подія blur), перевіряє його вміст
// щодо правильної кількості введених символів.

// Яка кількість символів повинна бути в інпуті,
// зазначається в його атрибуті data - length.

// Якщо введена правильна кількість символів,
// то border інпуту стає зеленим, якщо неправильна
// кількість - червоним.

// Для додавання стилів використовуй CSS - класи valid і
// invalid, які ми вже додали у вихідні файли завдання.

const textInput = document.querySelector("#validation-input");

textInput.addEventListener("focus", () => {
	textInput.addEventListener("input", event => {
		textInput.value = event.currentTarget.value;
	});
});

textInput.addEventListener("blur", () => {
	if (
		textInput.value.length === Number(textInput.getAttribute("data-length"))
	) {
		textInput.classList.add("valid");
		textInput.classList.replace("invalid", "valid");
	} else {
		textInput.classList.add("invalid");
	}
});
