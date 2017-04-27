import * as $ from "jquery";
window["$"] = window["jQuery"] = $; // jQuery is global for other objs
import * as angular from "angular";

import {app} from "./app/app.module";
import {appDev} from "./app/app-dev.module";

class Main {

    static appReady(): void {
        Main.loadAngular();
    }

    static loadAngular(): void {
		const config: ng.IAngularBootstrapConfig = {strictDi: /* @echo STRICT_DI */};

		//start angular

		// @if MOCK_BACKEND = "false"
		angular.bootstrap(document.querySelector(app), [app], config);
		// @endif

		// @if MOCK_BACKEND = "true"
		angular.bootstrap(document.querySelector(app), [appDev], config);
		// @endif
	}
}

document.addEventListener("DOMContentLoaded", Main.appReady.bind(Main));