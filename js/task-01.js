const categoriesList = document.querySelector("#categories");
const totalCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${totalCategories.length}\n`);

totalCategories.forEach((category) => {
	const categoryName = category.querySelector("h2").textContent;
	const categoryElements = category.querySelectorAll("li").length;
	console.log(`Category: ${categoryName}\n Elements: ${categoryElements}\n`);
});
