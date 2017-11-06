import { Contact } from "./contact/contact.module";

export interface IContactListService {
    addContact(): void;
    getContacts(): Contact[];
}

export default class ContactListService implements IContactListService {
    protected contactList: Contact[];

    constructor() {
        this.contactList = [];
    }

    public addContact(): void {
        const contact = new Contact("face", "Desc", "Note");
        this.contactList.push(contact);
    }

    public getContacts(): Contact[] {
        return this.contactList;
    }
}
