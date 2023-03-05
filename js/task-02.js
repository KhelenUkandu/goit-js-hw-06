const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredientsRef = document.querySelector("#ingredients");

const arrayItemsRef = ingredients.map(ingredient => {
	const itemRef = document.createElement("li");
	itemRef.classList.add("item");
	itemRef.textContent = ingredient;

	return itemRef;
});

console.log(arrayItemsRef);

ingredientsRef.append(...arrayItemsRef);
