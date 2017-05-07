import template from "./todo.component.html";
import "./todo.component.scss";
import TodoService from "./todo.service";
import Todo from "./todo.model";

class TodoController {
    private todoService: TodoService;
    public todo: Todo;

    static $inject = ["TodoService"];

    constructor(TodoService) {
        this.todoService = TodoService;
    }

    public $onInit(): void {

    }

    public getTodoDesc(todo: Todo): string {
        return this.todoService.getDescription(this.todo);
    }

    public $onDestroy(): void {

    }
}

export const TodoComponent: ng.IComponentOptions = {
    bindings: {
        todo: "<"
    },
    controller: TodoController,
    template: () => {
        return template;
    }
};
