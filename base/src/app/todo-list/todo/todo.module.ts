import * as angular from "angular";
import { TodoComponent } from "./todo.component";
import TodoService from "./todo.service";

export const todo = angular.module("app.todo", [])
    .service("TodoService", TodoService)
    .component("todo", TodoComponent)
    .name;
