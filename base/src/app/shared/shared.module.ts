import * as angular from "angular";
import {mcFilters} from "./filters/filters.module";

export * from "./filters/filters.module";
export * from "./utilities/utilities.module";
export * from "./ws/ws.module";

const sharedModule = angular.module("app.shared", [
	mcFilters
]);

export const shared = sharedModule.name;