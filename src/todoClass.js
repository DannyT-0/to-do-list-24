class Todo {
	constructor(todoId, title, task1, task2, task3, dateCreated, lastEdited) {
		this.todoId = todoId;
		this.title = title;
		this.tasks = [task1, task2, task3];
		this.dateCreated = dateCreated;
		this.lastEdited = lastEdited;
	}

	delete() {}

	edit(newTitle, newTasks) {
		this.title = newTitle;
		this.tasks = newTasks;
		this.lastEdited = new Date().toISOString(); // Update lastEdited to current date/time
	}
}

export default Todo;
