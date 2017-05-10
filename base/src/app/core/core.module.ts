import * as angular from "angular";

import { navigationBar } from "./navigation-bar/navigation-bar.module";
import { mcServices } from "./services/services.module";

export * from "./services/services.module";
export * from "./navigation-bar/navigation-bar.module";

const coreModule = angular.module("app.core", [
    mcServices,
    navigationBar,
]);

export const core = coreModule.name;
