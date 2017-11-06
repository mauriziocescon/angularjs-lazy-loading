import * as angular from "angular";

import { ContactListComponent } from "./contact-list.component";

export const contactList = angular.module("app.contactList", [])
    .component("contactListContainer", ContactListComponent)
    .name;
