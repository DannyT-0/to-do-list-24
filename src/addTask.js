import Todo from "./todoClass.js";

let todoIdCounter = 1;
// const todos = [];
let todos = JSON.parse(localStorage.getItem("todos")) || [];

function addTask(event) {
	event.preventDefault(); // Prevent default form submission behavior

	// Get form inputs
	const taskTitle = document.getElementById("taskTitle").value;
	const dateCreated = document.getElementById("dateCreated").value;
	const lastEdited = document.getElementById("lastEdited").value;
	const task1 = document.getElementById("task1").value;
	const task2 = document.getElementById("task2").value;
	const task3 = document.getElementById("task3").value;

	const todoId = `todo-${todoIdCounter++}`;

	const todo = new Todo(
		todoId,
		taskTitle,
		task1,
		task2,
		task3,
		dateCreated,
		lastEdited
	);

	console.log(todo);
	todos.push(todo);

	localStorage.setItem("todos", JSON.stringify(todos));

	// Create section element with class todo-list
	const section = document.createElement("section");
	section.className = "todo-list";

	// Create h2 element with text from the title input
	const h2 = document.createElement("h2");
	h2.textContent = taskTitle; // Set the text content to the value of the title input
	section.appendChild(h2);

	// Create ul element
	const ul = document.createElement("ul");

	// Create li elements for tasks
	const tasks = [task1, task2, task3];
	tasks.forEach((task) => {
		if (task.trim() !== "") {
			const li = document.createElement("li");
			li.textContent = task;
			ul.appendChild(li);
		}
	});

	// Create li element for Date Created
	const dateCreatedLi = document.createElement("li");
	dateCreatedLi.textContent = "Date Created: ";
	const dateCreatedSpan = document.createElement("span");
	dateCreatedSpan.id = "date-created";
	dateCreatedSpan.textContent = dateCreated;
	dateCreatedLi.appendChild(dateCreatedSpan);
	ul.appendChild(dateCreatedLi);

	// Create li element for Last Edited
	const lastEditedLi = document.createElement("li");
	lastEditedLi.textContent = "Last Edited: ";
	const lastEditedSpan = document.createElement("span");
	lastEditedSpan.id = "last-edited";
	lastEditedSpan.textContent = lastEdited;
	lastEditedLi.appendChild(lastEditedSpan);
	ul.appendChild(lastEditedLi);

	// Append ul to section
	section.appendChild(ul);

	// Create edit button
	const editButton = document.createElement("button");
	editButton.textContent = "Edit";
	editButton.className = "edit";
	editButton.addEventListener("click", editHandler);
	section.appendChild(editButton);

	// Create delete button
	const deleteButton = document.createElement("button");
	deleteButton.className = "delete";
	deleteButton.textContent = "Delete";
	deleteButton.addEventListener("click", () => {
		// Remove the parent section element when delete button is clicked
		section.remove();
	});
	section.appendChild(deleteButton);

	// Append section to the main container
	const mainContainer = document.querySelector(".flex-container");
	mainContainer.appendChild(section);

	// Clear form inputs
	document.getElementById("taskForm").reset();
}

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

function loadTodosFromLocalStorage() {
	todos = JSON.parse(localStorage.getItem("todos")) || [];
	const mainContainer = document.querySelector(".flex-container");

	todos.forEach((todo) => {
		const section = document.createElement("section");
		section.className = "todo-list";

		const h2 = document.createElement("h2");
		h2.textContent = todo.title;
		section.appendChild(h2);

		const ul = document.createElement("ul");

		todo.tasks.forEach((task) => {
			if (task.trim() !== "") {
				const li = document.createElement("li");
				li.textContent = task;
				ul.appendChild(li);
			}
		});

		const dateCreatedLi = document.createElement("li");
		dateCreatedLi.textContent = "Date Created: ";
		const dateCreatedSpan = document.createElement("span");
		dateCreatedSpan.id = "date-created";
		dateCreatedSpan.textContent = todo.dateCreated;
		dateCreatedLi.appendChild(dateCreatedSpan);
		ul.appendChild(dateCreatedLi);

		const lastEditedLi = document.createElement("li");
		lastEditedLi.textContent = "Last Edited: ";
		const lastEditedSpan = document.createElement("span");
		lastEditedSpan.id = "last-edited";
		lastEditedSpan.textContent = todo.lastEdited;
		lastEditedLi.appendChild(lastEditedSpan);
		ul.appendChild(lastEditedLi);

		section.appendChild(ul);

		const editButton = document.createElement("button");
		editButton.textContent = "Edit";
		editButton.className = "edit";
		editButton.addEventListener("click", editHandler);
		section.appendChild(editButton);

		const deleteButton = document.createElement("button");
		deleteButton.className = "delete";
		deleteButton.textContent = "Delete";
		deleteButton.addEventListener("click", () => {
			section.remove();
			// Add logic to remove todo from todos array and update local storage
		});
		section.appendChild(deleteButton);

		mainContainer.appendChild(section);
	});
}

// Export addTask function
export default addTask;

window.addEventListener("load", loadTodosFromLocalStorage);
