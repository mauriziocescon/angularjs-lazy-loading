import * as angular from "angular";

import { ContactLoaderComponent } from "./contact-loader.component";

export const contactLoader = angular.module("app.contactLoader", [])
    .component("contactLoader", ContactLoaderComponent)
    .name;
