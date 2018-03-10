import * as angular from "angular";

import { ComponentLoaderComponent } from "./component-loader.component";

export const componentLoader = angular.module("app.componentLoader", [])
    .component("componentLoader", ComponentLoaderComponent)
    .name;
