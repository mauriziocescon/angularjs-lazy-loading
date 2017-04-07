import * as angular from "angular";
import {navigationBar} from "./navigation-bar/navigation-bar.module";

export * from "./navigation-bar/navigation-bar.module";

const coreModule = angular.module("app.core", [
	navigationBar
]);

export const core = coreModule.name;