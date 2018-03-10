import { Contact } from "./contact.model";
export interface IContactService {
    getDescription(contact: Contact): string;
}
export default class ContactService implements IContactService {
    constructor();
    getDescription(contact: Contact): string;
}
