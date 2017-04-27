import template from "./todo-list.component.html";
import "./todo-list.component.scss";
import {
	ResponseWs,
	Logger
} from "../shared/shared.module";
import {
	IUIUtilitiesService,
	IUtilitiesService
} from "../app.module";
import TodoListService from "./todo-list.service";
import Todo from "./todo/todo.model";

class TodoListController {
	private ocLazyLoad: oc.ILazyLoad;
	private uiUtilitiesService: IUIUtilitiesService;
	private utilitiesService: IUtilitiesService;
	private todoListService: TodoListService;

	private busy: boolean;
	private todos: Array<Todo>;

	static $inject = ["$ocLazyLoad", "UIUtilitiesService", "UtilitiesService", "TodoListService"];

	constructor($ocLazyLoad: oc.ILazyLoad,
				UIUtilitiesService: IUIUtilitiesService,
				UtilitiesService: IUtilitiesService,
				TodoListService: TodoListService) {
		this.ocLazyLoad = $ocLazyLoad;
		this.uiUtilitiesService = UIUtilitiesService;
		this.utilitiesService = UtilitiesService;
		this.todoListService = TodoListService;
	}

	public get isLoadingData(): boolean {
		return this.busy == true;
	}

	public $onInit(): void {
		this.busy = false;
		this.loadTodoList();
	}

	protected loadTodoList(): void {
		this.busy = true;

		this.todoListService.getTodos().then((response: ResponseWs<Array<Todo>>) => {

			if (response.isSuccess()) {
				this.todos = response.getData();
			}
			else if (response.hasBeenCanceled() == false) {
				// we do not notify the user in case of cancel request
				// todo this.uiUtilitiesService.modalAlert(this.localizedStringService.getLocalizedString("ERROR_ACCESS_DATA"), response.getMessage(), this.localizedStringService.getLocalizedString("CLOSE"));
			}
		}).catch((reason: any) => {
			// todo this.uiUtilitiesService.modalAlert(this.localizedStringService.getLocalizedString("ERROR_ACCESS_DATA_COMPONENT"), reason.toString(), this.localizedStringService.getLocalizedString("CLOSE"));
			Logger.log(reason);
		}).finally(() => {
			this.busy = false;
		});
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