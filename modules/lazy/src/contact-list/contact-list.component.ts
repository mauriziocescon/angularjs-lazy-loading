import template from "./contact-list.component.html";
import "./contact-list.component.scss";

import {
    IUIUtilitiesService,
    IUtilitiesService,
} from "icore";

import { Contact } from "./contact/contact.module";

import { IContactListService } from "./contact-list.service";

export class ContactListController {
    public static $inject = ["$translate", "UIUtilitiesService", "UtilitiesService", "ContactListService"];
    public contacts: Contact[];

    protected translate: ng.translate.ITranslateService;
    protected uiUtilitiesService: IUIUtilitiesService;
    protected utilitiesService: IUtilitiesService;
    protected contactListService: IContactListService;

    protected busy: boolean;

    constructor($translate: ng.translate.ITranslateService,
                UIUtilitiesService: IUIUtilitiesService,
                UtilitiesService: IUtilitiesService,
                ContactListService: IContactListService) {
        this.translate = $translate;
        this.uiUtilitiesService = UIUtilitiesService;
        this.utilitiesService = UtilitiesService;
        this.contactListService = ContactListService;
    }

    public get isLoadingData(): boolean {
        return this.busy === true;
    }

    public get hasNoData(): boolean {
        return this.contacts !== undefined && this.contacts.length === 0 && this.isLoadingData === false;
    }

    public get shouldRetry(): boolean {
        return this.contacts === undefined && this.isLoadingData === false;
    }

    public get showData(): boolean {
        return this.isLoadingData === false && this.hasNoData === false && this.shouldRetry === false;
    }

    public get dataSource(): Contact[] {
        return this.contacts;
    }

    public $onInit(): void {
        this.busy = false;
        this.addContact();
        this.contacts = this.contactListService.getContacts();
    }

    public $onDestroy(): void {
        // do nothing
    }

    public addContact(): void {
        this.contactListService.addContact();
    }
}

export const ContactListComponent: ng.IComponentOptions = {
    bindings: {},
    controller: ContactListController,
    template: () => {
        return template;
    },
};
