import * as ng from "angular";

import { IUtilitiesService } from "../services/services.module";

import template from "./navigation-bar.component.html";
import "./navigation-bar.component.scss";

export class NavigationBarController {
    public static $inject = ["$state", "UtilitiesService"];
    public name: string;
    public currentNavItem: string;

    protected state: ng.ui.IStateService;
    protected utilitiesService: IUtilitiesService;

    constructor($state: ng.ui.IStateService, UtilitiesService: IUtilitiesService) {
        this.state = $state;
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
}

export const NavigationBarComponent: ng.IComponentOptions = {
    bindings: {},
    controller: NavigationBarController,
    template: () => {
        return template;
    },
};
