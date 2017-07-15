import * as ng from "angular";

import { IAppConstantsService, IUtilitiesService } from "../../app.module";

import template from "./navigation-bar.component.html";
import "./navigation-bar.component.scss";

export class NavigationBarController {
    public static $inject = ["$state", "$translate", "AppConstantsService", "UtilitiesService"];
    public name: string;
    public currentNavItem: string;
    public selectedLanguage: string;
    public supportedLanguages: string[];

    protected state: ng.ui.IStateService;
    protected translate: ng.translate.ITranslateService;
    protected appConstantsService: IAppConstantsService;
    protected utilitiesService: IUtilitiesService;

    constructor($state: ng.ui.IStateService,
                $translateService: ng.translate.ITranslateService,
                AppConstantsService: IAppConstantsService,
                UtilitiesService: IUtilitiesService) {
        this.state = $state;
        this.translate = $translateService;
        this.appConstantsService = AppConstantsService;
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
        this.selectedLanguage = this.translate.proposedLanguage();
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
        this.selectedLanguage = language;
        this.translate.use(this.selectedLanguage);
    }
}

export const NavigationBarComponent: ng.IComponentOptions = {
    bindings: {},
    controller: NavigationBarController,
    template: () => {
        return template;
    },
};
