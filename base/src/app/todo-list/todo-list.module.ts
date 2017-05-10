import * as angular from "angular";

import { todo } from "./todo/todo.module";

import { TodoListComponent } from "./todo-list.component";
import TodoListService from "./todo-list.data-service";

export const todoList = angular.module("app.todoList", [todo])
    .service("TodoListService", TodoListService)
    .component("todoList", TodoListComponent)
    .name;
