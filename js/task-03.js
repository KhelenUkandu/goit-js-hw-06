const images = [
	{
		url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "White and Black Long Fur Cat",
	},
	{
		url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "Orange and White Koi Fish Near Yellow Koi Fish",
	},
	{
		url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "Group of Horses Running",
	},
];

// Використовуй масив об'єктів images для створення елементів <img>,
// вкладених в < li >.Для створення розмітки використовуй шаблонні
// рядки і метод insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.

const galleryRef = document.querySelector(".gallery");

galleryRef.style.display = "flex";
galleryRef.style.justifyContent = "center";
galleryRef.style.alignItems = "center";
galleryRef.style.gap = "60px";

// const arrayItemsRef = images.map(({ url, alt }) => {
// 	const itemRef = document.createElement("li");

// 	const imgRef = document.createElement("img");

// 	imgRef.src = url;
// 	imgRef.alt = alt;
// 	imgRef.width = "380px";

// 	itemRef.insertAdjacentHTML("afterbegin", imgRef);

// 	console.log(itemRef);

// 	return itemRef;
// });

const arrayItemsRef = images
	.map(({ url, alt }) => `<li><img src=${url} alt=${alt} width=380px/></li>`)
	.join(" ");

galleryRef.insertAdjacentHTML("afterbegin", arrayItemsRef);
