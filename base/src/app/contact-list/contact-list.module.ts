import * as angular from "angular";
import ContactListService from "./contact-list.service";
import { ContactListComponent } from "./contact-list.component";

export const contactList = angular.module("app.contactList", [])
    .service("ContactListService", ContactListService)
    .component("contactList", ContactListComponent)
    .name;
