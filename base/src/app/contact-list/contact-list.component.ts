import template from "./contact-list.component.html";
import "./contact-list.component.scss";
import ContactListService from "./contact-list.service";
import {Contact} from "../../../../lazy/src";

class ContactListController {
	private ocLazyLoad: oc.ILazyLoad;
	private contactListService: ContactListService;

	private busy: boolean;
	private contacts: Array<Contact>;

	static $inject = ["$ocLazyLoad", "ContactListService"];

	constructor($ocLazyLoad: oc.ILazyLoad, ContactListService: ContactListService) {
		this.ocLazyLoad = $ocLazyLoad;
		this.contactListService = ContactListService;
	}

	public get isLoadingData(): boolean {
		return this.busy == true;
	}

	public $onInit(): void {
		this.loadModule();
		this.contacts = this.contactListService.getContacts();
	}

	public loadModule(): void {
		this.busy = true;

		this.ocLazyLoad.load(["lazy.js", "lazy.css"]).then(() => {
			this.busy = false;
			console.log("Third-party module loaded!");
		}, (e) => {
			this.busy = false;
			console.error(e);
		})
	}

	public addContact(): void {
		this.contactListService.addContact();
	}

	public $onDestroy(): void {

	}
}

export const ContactListComponent: ng.IComponentOptions = {
	bindings: {},
	controller: ContactListController,
	template: () => {
		return template;
	}
};