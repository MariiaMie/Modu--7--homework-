const controls = document.querySelector("#controls");
const input = controls.querySelector("input");
const createBoxBtn = controls.querySelector("[data-create]");
const destroyBoxBtn = controls.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

createBoxBtn.addEventListener("click", () => {
	const amount = parseInt(document.querySelector("input").value);
	createBoxes(amount);
});
destroyBoxBtn.addEventListener("click", () => {
	destroyBoxes();
});

function createBoxes(amount) {
	let boxSize = 30;
	for (let i = 0; i < amount; i++) {
		const box = document.createElement("div");
		box.style.width = `${boxSize}px`;
		box.style.height = `${boxSize}px`;
		box.style.backgroundColor = getRandomHexColor();
		boxSize += 10;
		boxesContainer.appendChild(box);
	}
}

function destroyBoxes() {
	boxesContainer.innerHTML = "";
}

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}
