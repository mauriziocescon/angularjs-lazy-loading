import { Contact } from "./contact/contact.module";
export interface IContactListService {
    addContact(): void;
    getContacts(): Contact[];
}
export default class ContactListService implements IContactListService {
    protected contactList: Contact[];
    constructor();
    addContact(): void;
    getContacts(): Contact[];
}
