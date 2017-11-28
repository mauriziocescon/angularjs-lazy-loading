import template from "./todo-list.component.html";
import "./todo-list.component.scss";

import {
    IUIUtilitiesService,
    IUtilitiesService,
} from "../app.module";
import {
    Logger,
    ResponseWs,
} from "../shared/shared.module";

import { ITodoListService } from "./todo-list.data-service";
import Todo from "./todo/todo.model";

export class TodoListController {
    public static $inject = ["$translate", "UIUtilitiesService", "UtilitiesService", "TodoListService"];
    public todos: Todo[] | undefined;

    protected translate: ng.translate.ITranslateService;
    protected uiUtilitiesService: IUIUtilitiesService;
    protected utilitiesService: IUtilitiesService;
    protected todoListService: ITodoListService;

    protected busy: boolean;

    constructor($translate: ng.translate.ITranslateService,
                UIUtilitiesService: IUIUtilitiesService,
                UtilitiesService: IUtilitiesService,
                TodoListService: ITodoListService) {
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

    public get dataSource(): Todo[] | undefined {
        return this.todos;
    }

    public $onInit(): void {
        this.busy = false;
        this.loadDataSource();
    }

    public $onDestroy(): void {
        // do nothing
    }

    public loadDataSource(): void {
        this.busy = true;

        this.todoListService.getTodos()
            .then((response: ResponseWs<Todo[]>) => {

                if (response.isSuccess()) {
                    this.todos = response.getData();
                }
                else if (response.hasBeenCanceled() === false) {

                    // we do not notify the user in case of cancel request
                    this.translate(["TODO_LIST.ERROR_ACCESS_DATA", "TODO_LIST.CLOSE"])
                        .then((translations: any) => {
                            this.uiUtilitiesService.modalAlert(translations.ERROR_ACCESS_DATA, response.getMessage(), translations.CLOSE);
                        });
                }
            })
            .catch((reason: any) => {
                this.translate(["TODO_LIST.ERROR_ACCESS_DATA_COMPONENT", "TODO_LIST.CLOSE"])
                    .then((translations: any) => {
                        this.uiUtilitiesService.modalAlert(translations.ERROR_ACCESS_DATA, reason.toString(), translations.CLOSE);
                    });
                Logger.log(reason);
            })
            .finally(() => {
                this.busy = false;
            });
    }
}

export const TodoListComponent: ng.IComponentOptions = {
    bindings: {},
    controller: TodoListController,
    template: () => {
        return template;
    },
};
