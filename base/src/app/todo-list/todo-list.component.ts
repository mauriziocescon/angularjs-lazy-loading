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
	private translate: ng.translate.ITranslateService;
	private uiUtilitiesService: IUIUtilitiesService;
	private utilitiesService: IUtilitiesService;
	private todoListService: TodoListService;

	private busy: boolean;
	private todos: Array<Todo>;

	static $inject = ["$ocLazyLoad", "$translate", "UIUtilitiesService", "UtilitiesService", "TodoListService"];

	constructor($ocLazyLoad: oc.ILazyLoad,
				$translate: ng.translate.ITranslateService,
				UIUtilitiesService: IUIUtilitiesService,
				UtilitiesService: IUtilitiesService,
				TodoListService: TodoListService) {
		this.ocLazyLoad = $ocLazyLoad;
		this.translate = $translate;
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
				this.translate(["ERROR_ACCESS_DATA", "CLOSE"]).then((translations: any) => {
					this.uiUtilitiesService.modalAlert(translations.ERROR_ACCESS_DATA, response.getMessage(), translations.CLOSE);
				}, (translations: any) => {
					this.uiUtilitiesService.modalAlert(translations.ERROR_ACCESS_DATA, response.getMessage(), translations.CLOSE);
				});
			}
		}).catch((reason: any) => {
			this.translate(["ERROR_ACCESS_DATA_COMPONENT", "CLOSE"]).then((translations: any) => {
				this.uiUtilitiesService.modalAlert(translations.ERROR_ACCESS_DATA, reason.toString(), translations.CLOSE);
			}, (translations: any) => {
				this.uiUtilitiesService.modalAlert(translations.ERROR_ACCESS_DATA, reason.toString(), translations.CLOSE);
			});
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