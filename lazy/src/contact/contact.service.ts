import { Contact } from "./contact.model";

export default class ContactService {

    constructor() {
        // do nothing
    }

    public getDescription(contact: Contact): string {
        return contact.desc + " of the lazy contact";
    }
}
