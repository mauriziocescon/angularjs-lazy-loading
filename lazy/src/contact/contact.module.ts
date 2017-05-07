import * as angular from "angular";
import ContactService from "./contact.service";
import { ContactComponent } from "./contact.component";

export * from "./contact.model";
export * from "./contact.service";

export const contact = angular.module("lazy.contact", [])
    .service("ContactService", ContactService)
    .component("contact", ContactComponent)
    .name;
