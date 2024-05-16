function editHandler() {
	const taskElements = this.parentNode.querySelectorAll(
		"ul li:not(:first-child):not(:nth-child(4))"
	); // Exclude the date and time li elements, and the title
	taskElements.forEach((li, index) => {
		const text = li.textContent.trim();
		const input = document.createElement("input");
		input.type = "text";
		input.value = text;
		li.textContent = ""; // Clear the li element
		li.appendChild(input); // Add the input element
	});
	const titleLi = this.parentNode.querySelector("ul li:first-child"); // Select the title li element
	const titleText = titleLi.textContent.trim();
	const titleInput = document.createElement("input");
	titleInput.type = "text";
	titleInput.value = titleText;
	titleLi.textContent = ""; // Clear the title li element
	titleLi.appendChild(titleInput); // Add the title input element
	this.textContent = "Update";
	this.removeEventListener("click", editHandler);
	this.addEventListener("click", updateHandler);
}

function updateHandler() {
	const taskElements = this.parentNode.querySelectorAll(
		"ul li:not(:first-child)"
	); // Exclude the date and time li elements
	taskElements.forEach((li) => {
		const input = li.querySelector("input");
		const text = input.value;
		li.textContent = text;
	});
	this.textContent = "Edit";
	this.removeEventListener("click", updateHandler);
	this.addEventListener("click", editHandler);
}

export { editHandler, updateHandler };
