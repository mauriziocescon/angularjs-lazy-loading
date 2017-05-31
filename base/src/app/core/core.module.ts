import * as angular from "angular";

import { mcServices } from "./services/services.module";

export * from "./services/services.module";

const coreModule = angular.module("app.core", [
    mcServices,
]);

export const core = coreModule.name;
