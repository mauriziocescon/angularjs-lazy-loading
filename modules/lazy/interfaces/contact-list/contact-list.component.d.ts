import './contact-list.component.scss';
import { IUIUtilitiesService, IUtilitiesService } from 'icore';
import { Contact } from './contact/contact.module';
import { IContactListService } from './contact-list.service';
export declare class ContactListController {
    protected translate: ng.translate.ITranslateService;
    protected uiUtilitiesService: IUIUtilitiesService;
    protected utilitiesService: IUtilitiesService;
    protected contactListService: IContactListService;
    static $inject: string[];
    contacts: Contact[] | undefined;
    protected busy: boolean;
    constructor(translate: ng.translate.ITranslateService, uiUtilitiesService: IUIUtilitiesService, utilitiesService: IUtilitiesService, contactListService: IContactListService);
    get isLoadingData(): boolean;
    get hasNoData(): boolean;
    get shouldRetry(): boolean;
    get showData(): boolean;
    get dataSource(): Contact[] | undefined;
    $onInit(): void;
    $onDestroy(): void;
    addContact(): void;
}
export declare const ContactListComponent: ng.IComponentOptions;
