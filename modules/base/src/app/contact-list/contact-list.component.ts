import template from "./contact-list.component.html";
import "./contact-list.component.scss";

import {
    IUIUtilitiesService,
    IUtilitiesService,
} from "../app.module";

import { Contact } from "../../../../lazy/src/contact/contact.module";
import { IContactListService } from "./contact-list.service";

export class ContactListController {
    public static $inject = ["$ocLazyLoad", "$translate", "UIUtilitiesService", "UtilitiesService", "ContactListService"];
    public contacts: Contact[];

    protected ocLazyLoad: oc.ILazyLoad;
    protected translate: ng.translate.ITranslateService;
    protected uiUtilitiesService: IUIUtilitiesService;
    protected utilitiesService: IUtilitiesService;
    protected contactListService: IContactListService;

    protected busy: boolean;
    protected downloadSucceed: boolean;

    constructor($ocLazyLoad: oc.ILazyLoad,
                $translate: ng.translate.ITranslateService,
                UIUtilitiesService: IUIUtilitiesService,
                UtilitiesService: IUtilitiesService,
                ContactListService: IContactListService) {
        this.ocLazyLoad = $ocLazyLoad;
        this.translate = $translate;
        this.uiUtilitiesService = UIUtilitiesService;
        this.utilitiesService = UtilitiesService;
        this.contactListService = ContactListService;
    }

    public get isLoadingData(): boolean {
        return this.busy === true;
    }

    public get shouldRetry(): boolean {
        return this.downloadSucceed === false && this.isLoadingData === false;
    }

    public get showData(): boolean {
        return this.isLoadingData === false && this.shouldRetry === false;
    }

    public get dataSource(): Contact[] {
        return this.contacts;
    }

    public $onInit(): void {
        this.downloadSucceed = false;
        this.loadModule();
        this.contacts = this.contactListService.getContacts();
    }

    public $onDestroy(): void {
        // do nothing
    }

    public loadModule(): void {
        this.busy = true;

        this.ocLazyLoad.load(["lazy.js"]).then(() => {
            this.busy = false;
            this.downloadSucceed = true;
            this.addContact();
            this.translate(["CONTACT_LIST.MODULE_LOADED"]).then((translations: any) => {
                this.uiUtilitiesService.toast(translations["CONTACT_LIST.MODULE_LOADED"]);
            });
        }, (e) => {
            this.busy = false;
            this.uiUtilitiesService.toast(e.toString());
        });
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
