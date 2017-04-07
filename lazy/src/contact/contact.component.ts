import template from "./contact.component.html";
import "./contact.component.scss";
import ContactService from "./contact.service";
import {Contact} from "./contact.model";

class ContactController {
	private contactService: ContactService;
	public contact: Contact;

	static $inject = ["ContactService"];

	constructor(ContactService: ContactService) {
		this.contactService = ContactService;
	}

	public $onInit(): void {

	}

	public getContactDesc(contact: Contact): string {
		return this.contactService.getDescription(this.contact);
	}

	public $onDestroy(): void {

	}
}

export const ContactComponent: ng.IComponentOptions = {
	bindings: {
		contact: "<"
	},
	controller: ContactController,
	template: () => {
		return template;
	}
};