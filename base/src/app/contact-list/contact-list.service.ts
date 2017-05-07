import { Contact } from "../../../../lazy/src";

export default class ContactListService {
    private contactList: Array<Contact>;

    constructor() {
        this.contactList = [];
    }

    public addContact(): void {
        let contact = new Contact("face", "Desc", "Note");
        this.contactList.push(contact);
    }

    public getContacts(): Array<Contact> {
        return this.contactList;
    }
}
