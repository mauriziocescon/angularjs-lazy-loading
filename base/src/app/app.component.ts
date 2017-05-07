import template from "./app.component.html";
import "./app.component.scss";

export default class AppController {
    public static $inject = [];

    constructor() {

    }

    public $onInit(): void {

    }

    public $onDestroy(): void {

    }
}

export const AppComponent: ng.IComponentOptions = {
    controller: AppController,
    template: () => {
        return template;
    },
};
