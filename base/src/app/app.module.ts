import * as angular from "angular";
import { angularStats } from "angular-stats";

// locales
import "angular-i18n/angular-locale_de.js";
import "angular-i18n/angular-locale_en.js";
import "angular-i18n/angular-locale_it.js";

import { core } from "./core/core.module";
import { shared } from "./shared/shared.module";

import { contactList } from "./contact-list/contact-list.module";
import { todoList } from "./todo-list/todo-list.module";

import { appConfigFunc } from "./app-config.module";
import { routingConfigFunc } from "./app-routing.module";

import { AppComponent } from "./app.component";

export * from "./core/core.module";

const appModule = angular.module("app", [
    "ngAnimate",
    "ngLocale",
    "ngMaterial",
    "ngMessages",
    "ngSanitize",
    "oc.lazyLoad",
    "tmh.dynamicLocale",
    "pascalprecht.translate",
    "ui.router",
    angularStats,
    core,
    shared,
    todoList,
    contactList,
]);

// config providers
appModule.config(appConfigFunc);

// config route provider
appModule.config(routingConfigFunc);

// register app component
appModule.component(appModule.name, AppComponent);

export const app = appModule.name;
