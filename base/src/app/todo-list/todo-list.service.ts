import Todo from "./todo/todo.model";

export default class TodoListService {
	private todoList: Array<Todo>;

	constructor() {
		this.todoList = [];
	}

	public addTodo(): void {
		let todo = new Todo("face", "Desc", "Note");
		this.todoList.push(todo);
	}

	public getTodos(): Array<Todo> {
		return this.todoList;
	}
}