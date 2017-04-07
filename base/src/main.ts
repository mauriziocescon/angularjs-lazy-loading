import * as $ from "jquery";
window["$"] = window["jQuery"] = $; // jQuery is global for other objs
import * as angular from "angular";
import "angular-animate";
import "angular-aria";
import "angular-messages";
import "angular-sanitize";

import "angular-material";
import "angular-translate";
import "angular-translate-loader-static-files";
import "angular-translate-storage-local";
import "angular-ui-router";
import "babel-polyfill";
import "oclazyload";

import "./main.scss";

import {app} from "./app/app.module";

class Main {

    static appReady(): void {
        Main.loadAngular();
    }

    static loadAngular(): void {
		const config: ng.IAngularBootstrapConfig = {strictDi: true};
        angular.bootstrap(app, [app], config);
    }
}

document.addEventListener("DOMContentLoaded", Main.appReady.bind(Main));