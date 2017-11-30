import * as angular from "angular";

import * as i18nEn from "../../assets/i18n/en.json";

import { IAppConstantsService, IUtilitiesService } from "../app.module";

import { TodoListController } from "./todo-list.component";
import Todo from "./todo/todo.model";

// Addition of angular-mocks and jasmine references is done on the gulpfile
describe("TodoListController", () => {
    let httpBackend: ng.IHttpBackendService;
    let componentController: ng.IComponentControllerService;

    // Set up the module
    beforeEach(angular.mock.module("app"));

    beforeEach(inject(($httpBackend: ng.IHttpBackendService,
                       $componentController: ng.IComponentControllerService,
                       AppConstantsService: IAppConstantsService) => {

        // Set up the mock http service responses
        httpBackend = $httpBackend;

        // The $componentController service is used to create instances of controllers
        componentController = $componentController;

        // returns a list of i18n strings
        httpBackend.whenGET((url: string) => {
            return url.startsWith("assets/i18n/");
        }).respond((method: string, url: string, data: string, headers: Object, params?: any) => { // tslint:disable-line:ban-types
            const response = i18nEn;
            return [200, response, headers, "ok"];
        });

        // returns the current list of todos
        httpBackend.whenGET((url: string) => {
            return url.startsWith(AppConstantsService.Api.todos);
        }).respond((method: string, url: string, data: string, headers: Object, params?: any) => { // tslint:disable-line:ban-types

            const response = [];

            for (let i = 0; i < 4; i++) {
                const todo = new Todo();

                todo.userId = 1;
                todo.id = i;
                todo.title = "title";
                todo.completed = Math.random() > 0.5;

                response.push(todo);
            }

            return [200, response, {}, "ok"];
        });
    }));

    afterEach(() => {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it("expect controller fetches data after $onInit", () => {
        const controller = componentController("todoList", {}, null) as TodoListController;
        controller.$onInit();
        httpBackend.flush();
    });

    it("controller.todos is not undefined after $onInit", () => {
        const controller = componentController("todoList", {}, null) as TodoListController;
        controller.$onInit();
        httpBackend.flush();
        expect(controller.todos).not.toBeUndefined("controller.todos is undefined...");
    });

    it("controller.todos is not null after $onInit", () => {
        const controller = componentController("todoList", {}, null) as TodoListController;
        controller.$onInit();
        httpBackend.flush();
        expect(controller.todos).not.toBeNull("controller.todos is null...");
    });

    it("controller.isLoadingData is false after $onInit", () => {
        const controller = componentController("todoList", {}, null) as TodoListController;
        controller.$onInit();
        httpBackend.flush();
        expect(controller.isLoadingData).toBeFalsy("isLoadingData is true after the loading...");
    });
});
