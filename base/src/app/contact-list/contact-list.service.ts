import { Contact } from "../../../../lazy/src";

export default class ContactListService {
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
