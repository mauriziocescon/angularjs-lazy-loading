import Todo from "./todo.model";

export default class TodoService {

	constructor() {
	}

	public getDescription(todo: Todo): string {
		return todo.desc + " of todo";
	}
}