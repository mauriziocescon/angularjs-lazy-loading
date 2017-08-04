import * as ng from "angular";

import { IAppConstantsService, IAppLanguageService, IUtilitiesService } from "../../app.module";

import template from "./navigation-bar.component.html";
import "./navigation-bar.component.scss";

export class NavigationBarController {
    public static $inject = ["$state", "AppConstantsService", "AppLanguageService", "UtilitiesService"];
    public name: string;
    public currentNavItem: string;
    public selectedLanguage: string;
    public supportedLanguages: string[];

    protected state: ng.ui.IStateService;
    protected appConstantsService: IAppConstantsService;
    protected appLanguageService: IAppLanguageService;
    protected utilitiesService: IUtilitiesService;

    constructor($state: ng.ui.IStateService,
                AppConstantsService: IAppConstantsService,
                AppLanguageService: IAppLanguageService,
                UtilitiesService: IUtilitiesService) {
        this.state = $state;
        this.appConstantsService = AppConstantsService;
        this.appLanguageService = AppLanguageService;
        this.utilitiesService = UtilitiesService;

        this.name = "NavigationBarComponent";
    }

    public $onInit(): void {
        if (this.utilitiesService.getCurrentPath() === "/todo-list") {
            this.currentNavItem = "todos";
        }
        else {
            this.currentNavItem = "contacts";
        }

        this.supportedLanguages = this.appConstantsService.Languages.SUPPORTED_LANG;
        this.selectedLanguage = this.appLanguageService.getLanguageId();
    }

    public $onDestroy(): void {
        // do nothing
    }

    public goToTodoList(): void {
        this.state.go("todo-list");
    }

    public goToContactList(): void {
        this.state.go("contact-list");
    }

    public selectLanguage(language: string): void {
        if (this.appLanguageService.getLanguageId() !== language) {
            this.selectedLanguage = language;
            this.appLanguageService.setLanguageId(this.selectedLanguage);
        }
    }
}

export const NavigationBarComponent: ng.IComponentOptions = {
    bindings: {},
    controller: NavigationBarController,
    template: () => {
        return template;
    },
};
