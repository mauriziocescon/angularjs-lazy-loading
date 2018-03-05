import * as angular from "angular";
import { mcFilters } from "./filters/filters.module";
import { navigationBar } from "./navigation-bar/navigation-bar.module";

export * from "./filters/filters.module";
export * from "./navigation-bar/navigation-bar.module";
export * from "./utilities/utilities.module";
export * from "./ws/ws.module";

const sharedModule = angular.module("app.shared", [
    mcFilters,
    navigationBar,
]);

export const shared = sharedModule.name;
