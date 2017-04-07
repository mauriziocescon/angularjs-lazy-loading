import * as angular from "angular";
import {appConfigFunc} from "./app-config.module";
import {routingConfigFunc} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {core} from "./core/core.module";
import {todoList} from "./todo-list/todo-list.module";
import {contactList} from "./contact-list/contact-list.module";

const appModule = angular.module("app", [
	"ngAnimate",
	"ngMaterial",
	"ngMessages",
	"ngSanitize",
	"oc.lazyLoad",
	"pascalprecht.translate",
	"ui.router",
	core,
	todoList,
	contactList
]);

// config providers
appModule.config(appConfigFunc);

// config route provider
appModule.config(routingConfigFunc);

// register app component
appModule.component(appModule.name, AppComponent);

export const app = appModule.name;
