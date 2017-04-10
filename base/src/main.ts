import * as $ from "jquery";
window["$"] = window["jQuery"] = $; // jQuery is global for other objs
import * as angular from "angular";

import {app} from "./app/app.module";

class Main {

    static appReady(): void {
        Main.loadAngular();
    }

    static loadAngular(): void {
		const config: ng.IAngularBootstrapConfig = {strictDi: /* @echo STRICT_DI */};
        angular.bootstrap(app, [app], config);
    }
}

document.addEventListener("DOMContentLoaded", Main.appReady.bind(Main));