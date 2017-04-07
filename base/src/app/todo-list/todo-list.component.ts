import template from "./todo-list.component.html";
import "./todo-list.component.scss";
import TodoListService from "./todo-list.service";
import Todo from "./todo/todo.model";

class TodoListController {
	private ocLazyLoad: oc.ILazyLoad;
	private todoListService: TodoListService;

	private busy: boolean;
	private todos: Array<Todo>;

	static $inject = ["$ocLazyLoad", "TodoListService"];

	constructor($ocLazyLoad: oc.ILazyLoad, TodoListService: TodoListService) {
		this.ocLazyLoad = $ocLazyLoad;
		this.todoListService = TodoListService;
	}

	public get isLoadingData(): boolean {
		return this.busy == true;
	}

	public $onInit(): void {
		this.busy = false;
		this.todos = this.todoListService.getTodos();
	}

	public addTodo(): void {
		this.todoListService.addTodo();
	}

	public $onDestroy(): void {

	}
}

export const TodoListComponent: ng.IComponentOptions = {
	bindings: {},
	controller: TodoListController,
	template: () => {
		return template;
	}
};