function addTask() {
	// Create section element with class todo-list
	const section = document.createElement("section");
	section.className = "todo-list";

	// Create h2 element with text 'To-Do List'
	const h2 = document.createElement("h2");
	h2.textContent = "To-Do List";
	section.appendChild(h2);

	// Create ul element
	const ul = document.createElement("ul");

	// Create li elements for placeholder tasks
	const tasks = ["Task 1", "Task 2", "Task 3"];
	tasks.forEach((task) => {
		const li = document.createElement("li");
		li.textContent = task;
		ul.appendChild(li);
	});

	// Create li element for Date Created
	const dateCreatedLi = document.createElement("li");
	dateCreatedLi.textContent = "Date Created: ";
	const dateCreatedSpan = document.createElement("span");
	dateCreatedSpan.id = "date-created";
	dateCreatedSpan.textContent = "January 1, 2024";
	dateCreatedLi.appendChild(dateCreatedSpan);
	ul.appendChild(dateCreatedLi);

	// Create li element for Last Edited
	const lastEditedLi = document.createElement("li");
	lastEditedLi.textContent = "Last Edited: ";
	const lastEditedSpan = document.createElement("span");
	lastEditedSpan.id = "last-edited";
	lastEditedSpan.textContent = "January 2, 2024";
	lastEditedLi.appendChild(lastEditedSpan);
	ul.appendChild(lastEditedLi);

	// Create li element for Total Tasks
	const totalTasksLi = document.createElement("li");
	totalTasksLi.textContent = "Total Tasks: ";
	const totalTasksSpan = document.createElement("span");
	totalTasksSpan.id = "total-tasks";
	totalTasksSpan.textContent = "3";
	totalTasksLi.appendChild(totalTasksSpan);
	ul.appendChild(totalTasksLi);

	// Append ul to section
	section.appendChild(ul);

	// Create button element with id delete and class delete
	const deleteButton = document.createElement("button");
	deleteButton.id = "delete";
	deleteButton.className = "delete";
	deleteButton.textContent = "Delete";
	section.appendChild(deleteButton);

	// Append section to the document body or any other parent element
	document.body.appendChild(section);
}

export default addTask;
