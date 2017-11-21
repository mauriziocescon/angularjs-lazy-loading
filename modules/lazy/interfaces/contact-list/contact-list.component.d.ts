/// <reference types="angular" />
import "./contact-list.component.scss";
import { IUIUtilitiesService, IUtilitiesService } from "icore";
import { Contact } from "./contact/contact.module";
import { IContactListService } from "./contact-list.service";
export declare class ContactListController {
    static $inject: string[];
    contacts: Contact[];
    protected translate: ng.translate.ITranslateService;
    protected uiUtilitiesService: IUIUtilitiesService;
    protected utilitiesService: IUtilitiesService;
    protected contactListService: IContactListService;
    protected busy: boolean;
    constructor($translate: ng.translate.ITranslateService, UIUtilitiesService: IUIUtilitiesService, UtilitiesService: IUtilitiesService, ContactListService: IContactListService);
    readonly isLoadingData: boolean;
    readonly hasNoData: boolean;
    readonly shouldRetry: boolean;
    readonly showData: boolean;
    readonly dataSource: Contact[];
    $onInit(): void;
    $onDestroy(): void;
    addContact(): void;
}
export declare const ContactListComponent: ng.IComponentOptions;
