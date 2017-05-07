import * as angular from "angular";
import TodoListService from "./todo-list.data-service";
import { TodoListComponent } from "./todo-list.component";
import { todo } from "./todo/todo.module";

export const todoList = angular.module("app.todoList", [todo])
    .service("TodoListService", TodoListService)
    .component("todoList", TodoListComponent)
    .name;
