export class Contact {
    id: string;
    icon: string;
    desc: string;
    date: Date;
    note: string;

    constructor(icon: string, desc: string, note: string) {
        this.id = new Date().getTime().toString();
        this.icon = icon;
        this.desc = desc;
        this.date = new Date();
        this.note = note;
    }
}
