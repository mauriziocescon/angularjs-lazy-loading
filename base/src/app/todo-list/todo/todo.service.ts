import Todo from "./todo.model";

export default class TodoService {

    constructor() {
        // do nothing
    }

    public getDescription(todo: Todo): string {
        return todo.title + " of todo";
    }
}
