import { Contact } from "./contact.model";

export default class ContactService {

    constructor() {
    }

    public getDescription(contact: Contact): string {
        return contact.desc + " of the lazy contact";
    }
}
