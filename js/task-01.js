// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories,
// тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде
// і виведе в консоль текст заголовку елемента(тегу < h2 >)
// і кількість елементів в категорії(усіх < li >, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach()
// і властивості навігації по DOM.

const allItemsRef = document.querySelectorAll(".item");
console.log("Number of categories:", allItemsRef.length);
console.log(allItemsRef);

const getItemsTitle = document
	.querySelectorAll(".item h2")
	.forEach(item => console.log("Category:", item.textContent));

const getNumberOfCategorysElenents = document
	.querySelectorAll(".item ul")
	.forEach(item =>
		console.log("Elements:", item.querySelectorAll("li").length),
	);
