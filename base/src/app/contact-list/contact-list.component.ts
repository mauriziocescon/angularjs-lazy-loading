import template from "./contact-list.component.html";
import "./contact-list.component.scss";
import {
	IUIUtilitiesService,
	IUtilitiesService
} from "../app.module";
import ContactListService from "./contact-list.service";
import {Contact} from "../../../../lazy/src";

export class ContactListController {
	private ocLazyLoad: oc.ILazyLoad;
	private translate: ng.translate.ITranslateService;
	private uiUtilitiesService: IUIUtilitiesService;
	private utilitiesService: IUtilitiesService;
	private contactListService: ContactListService;

	private busy: boolean;
	private downloadSucceed: boolean;
	private contacts: Array<Contact>;

	static $inject = ["$ocLazyLoad", "$translate", "UIUtilitiesService", "UtilitiesService", "ContactListService"];

	constructor($ocLazyLoad: oc.ILazyLoad,
				$translate: ng.translate.ITranslateService,
				UIUtilitiesService: IUIUtilitiesService,
				UtilitiesService: IUtilitiesService,
				ContactListService: ContactListService) {
		this.ocLazyLoad = $ocLazyLoad;
		this.translate = $translate;
		this.uiUtilitiesService = UIUtilitiesService;
		this.utilitiesService = UtilitiesService;
		this.contactListService = ContactListService;
	}

	public get isLoadingData(): boolean {
		return this.busy == true;
	}

	public get shouldRetry(): boolean {
		return this.downloadSucceed == false && this.isLoadingData == false;
	}

	public get showData(): boolean {
		return this.isLoadingData == false && this.shouldRetry == false;
	}

	public $onInit(): void {
		this.downloadSucceed = false;
		this.loadModule();
		this.contacts = this.contactListService.getContacts();
	}

	public loadModule(): void {
		this.busy = true;

		this.ocLazyLoad.load(["lazy.js"]).then(() => {
			this.busy = false;
			this.downloadSucceed = true;
			this.addContact();
			this.translate(["MODULE_LOADED"]).then((translations: any) => {
				this.uiUtilitiesService.toast(translations.MODULE_LOADED);
			});
		}, (e) => {
			this.busy = false;
			this.uiUtilitiesService.toast(e.toString());
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