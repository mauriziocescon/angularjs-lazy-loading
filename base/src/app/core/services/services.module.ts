/* shared services */
import * as angular from "angular";
import { AppConstantsService, IAppConstantsService } from "./app-constants.service";
import { DelayExecutionService, IDelayExecutionService } from "./delay-execution.service";
import { uiUtilitiesConstants } from "./ui-utilities.constants";
import { IUIUtilitiesService, UIUtilitiesService } from "./ui-utilities.service";
import { IUtilitiesService, UtilitiesService } from "./utilities.service";

// core services
export { IAppConstantsService } from "./app-constants.service";
export { IDelayExecutionService } from "./delay-execution.service";
export { IUIUtilitiesService } from "./ui-utilities.service";
export { IUtilitiesService } from "./utilities.service";

export const mcServices = angular.module("core.mcServices", [])
    .service("AppConstantsService", AppConstantsService)
    .service("DelayExecutionService", DelayExecutionService)
    .constant("UIUtilitiesConstants", uiUtilitiesConstants)
    .service("UIUtilitiesService", UIUtilitiesService)
    .service("UtilitiesService", UtilitiesService)
    .name;
