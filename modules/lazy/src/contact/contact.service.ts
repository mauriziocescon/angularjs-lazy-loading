import { Contact } from "./contact.model";

export interface IContactService {
    getDescription(contact: Contact): string;
}

export default class ContactService implements IContactService {

    constructor() {
        // do nothing
    }

    public getDescription(contact: Contact): string {
        return contact.desc + " of the lazy contact";
    }
}
