import template from "./todo-list.component.html";
import "./todo-list.component.scss";
import {
    ResponseWs,
    Logger,
} from "../shared/shared.module";
import {
    IUIUtilitiesService,
    IUtilitiesService,
} from "../app.module";
import TodoListService from "./todo-list.data-service";
import Todo from "./todo/todo.model";

export class TodoListController {
    public static $inject = ["$ocLazyLoad", "$translate", "UIUtilitiesService", "UtilitiesService", "TodoListService"];

    private ocLazyLoad: oc.ILazyLoad;
    private translate: ng.translate.ITranslateService;
    private uiUtilitiesService: IUIUtilitiesService;
    private utilitiesService: IUtilitiesService;
    private todoListService: TodoListService;

    private busy: boolean;
    public todos: Todo[];

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
        return this.busy === true;
    }

    public get hasNoData(): boolean {
        return this.todos !== undefined && this.todos.length === 0 && this.isLoadingData === false;
    }

    public get shouldRetry(): boolean {
        return this.todos === undefined && this.isLoadingData === false;
    }

    public get showData(): boolean {
        return this.isLoadingData === false && this.hasNoData === false && this.shouldRetry === false;
    }

    public $onInit(): void {
        this.busy = false;
        this.loadTodoList();
    }

    protected loadTodoList(): void {
        this.busy = true;

        this.todoListService.getTodos().then((response: ResponseWs<Todo[]>) => {

            if (response.isSuccess()) {
                this.todos = response.getData();
            }
            else if (response.hasBeenCanceled() === false) {

                // we do not notify the user in case of cancel request
                this.translate(["ERROR_ACCESS_DATA", "CLOSE"]).then((translations: any) => {
                    this.uiUtilitiesService.modalAlert(translations.ERROR_ACCESS_DATA, response.getMessage(), translations.CLOSE);
                });
            }
        }).catch((reason: any) => {
            this.translate(["ERROR_ACCESS_DATA_COMPONENT", "CLOSE"]).then((translations: any) => {
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
    },
};
