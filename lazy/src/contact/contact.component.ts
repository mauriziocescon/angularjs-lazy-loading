import template from "./contact.component.html";
import "./contact.component.scss";

import { Contact } from "./contact.model";
import ContactService from "./contact.service";

export class ContactController {
    public static $inject = ["ContactService"];
    public contact: Contact;

    protected contactService: ContactService;

    constructor(ContactService: ContactService) {
        this.contactService = ContactService;
    }

    public $onInit(): void {

    }

    public $onDestroy(): void {
        // do nothing
    }

    public getContactDesc(contact: Contact): string {
        return this.contactService.getDescription(this.contact);
    }
}

export const ContactComponent: ng.IComponentOptions = {
    bindings: {
        contact: "<",
    },
    controller: ContactController,
    template: () => {
        return template;
    },
};
