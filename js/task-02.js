const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];

const ulList = document.querySelector("#ingredients");
const liList = ingredients.forEach((ingredient) => {
	let items = document.createElement("li");
	items.innerHTML = ingredient;
	ulList.appendChild(items);
});

console.log(ulList);
