import * as angular from "angular";

import { ContactListComponent } from "./contact-list.component";
import ContactListService from "./contact-list.service";

export const contactList = angular.module("app.contactList", [])
    .service("ContactListService", ContactListService)
    .component("contactList", ContactListComponent)
    .name;
