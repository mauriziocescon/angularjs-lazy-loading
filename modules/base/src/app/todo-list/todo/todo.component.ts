import template from "./todo.component.html";
import "./todo.component.scss";

import Todo from "./todo.model";
import { ITodoService } from "./todo.service";

class TodoController {
    public static $inject = ["TodoService"];
    public todo!: Todo;
    public date!: Date;
    public amount!: number;

    constructor(protected todoService: ITodoService) {
    }

    public $onInit(): void {
        this.date = new Date();
        this.amount = 10000.12;
    }

    public $onDestroy(): void {
        // do nothing
    }

    public getTodoDesc(todo: Todo): string {
        return this.todoService.getDescription(this.todo);
    }
}

export const TodoComponent: ng.IComponentOptions = {
    bindings: {
        todo: "<",
    },
    controller: TodoController,
    template: () => {
        return template;
    },
};
