class Todo {
	constructor(title, task1, task2, task3, dateCreated, lastEdited) {
		this.title = title;
		this.tasks = [task1, task2, task3];
		this.dateCreated = dateCreated;
		this.lastEdited = lastEdited;
	}

	delete() {
		// Implement deletion logic here
	}

	edit(newTitle, newTasks) {
		this.title = newTitle;
		this.tasks = newTasks;
		this.lastEdited = new Date().toISOString(); // Update lastEdited to current date/time
	}
}

export default Todo;
