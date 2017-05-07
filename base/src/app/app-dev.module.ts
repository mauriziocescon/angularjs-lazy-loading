import * as angular from "angular";
import { app } from "./app.module";

import { todoListRunFuncMocks } from "./todo-list/todo-list.data-service-mocks";

const appDevModule = angular.module("appDev", [app, "ngMockE2E"]);

const defaultRunFuncMocks = ($httpBackend: ng.IHttpBackendService) => {

    // by default call the real ws
    $httpBackend.whenGET((url: string) => {
        return true;
    }).passThrough();

    $httpBackend.whenPOST((url: string) => {
        return true;
    }).passThrough();
};

defaultRunFuncMocks.$inject = ["$httpBackend"];

// run functions
appDevModule.run(todoListRunFuncMocks);

appDevModule.run(defaultRunFuncMocks);

export const appDev = appDevModule.name;
