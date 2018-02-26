import template from "./contact.component.html";
import "./contact.component.scss";

import { Contact } from "./contact.model";
import { IContactService } from "./contact.service";

export class ContactController {
    public static $inject = ["ContactService"];
    public contact!: Contact;

    constructor(protected contactService: IContactService) {
    }

    public $onInit(): void {
        // do nothing
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
