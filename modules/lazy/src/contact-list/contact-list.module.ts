import * as angular from "angular";

import { contact } from "./contact/contact.module";

import { ContactListComponent } from "./contact-list.component";
import ContactListService from "./contact-list.service";

export * from "./contact/contact.module";

export const contactList = angular.module("lazy.contactList", [contact])
    .service("ContactListService", ContactListService)
    .component("contactList", ContactListComponent)
    .name;
