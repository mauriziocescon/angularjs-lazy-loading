/* shared services */
import * as angular from "angular";
import { AppConstantsService, IAppConstantsService } from "./app-constants.service";
import { AppLanguageService, IAppLanguageService } from "./app-language.service";
import { DelayExecutionService, IDelayExecutionService } from "./delay-execution.service";
import { ILocalStorageService, LocalStorageService } from "./local-storage.service";
import { uiUtilitiesConstants } from "./ui-utilities.constants";
import { IUIUtilitiesService, UIUtilitiesService } from "./ui-utilities.service";
import { IUtilitiesService, UtilitiesService } from "./utilities.service";

// core services
export { IAppConstantsService } from "./app-constants.service";
export { IAppLanguageService } from "./app-language.service";
export { IDelayExecutionService } from "./delay-execution.service";
export { ILocalStorageService } from "./local-storage.service";
export { IUIUtilitiesService } from "./ui-utilities.service";
export { IUtilitiesService } from "./utilities.service";

export const mcServices = angular.module("core.mcServices", [])
    .service("AppConstantsService", AppConstantsService)
    .service("AppLanguageService", AppLanguageService)
    .service("DelayExecutionService", DelayExecutionService)
    .service("LocalStorageService", LocalStorageService)
    .constant("UIUtilitiesConstants", uiUtilitiesConstants)
    .service("UIUtilitiesService", UIUtilitiesService)
    .service("UtilitiesService", UtilitiesService)
    .name;
