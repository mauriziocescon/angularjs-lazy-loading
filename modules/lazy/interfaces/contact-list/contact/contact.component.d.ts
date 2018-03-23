/// <reference types="angular" />
import './contact.component.scss';
import { Contact } from './contact.model';
import { IContactService } from './contact.service';
export declare class ContactController {
    protected contactService: IContactService;
    static $inject: string[];
    contact: Contact;
    constructor(contactService: IContactService);
    $onInit(): void;
    $onDestroy(): void;
    getContactDesc(contact: Contact): string;
}
export declare const ContactComponent: ng.IComponentOptions;
