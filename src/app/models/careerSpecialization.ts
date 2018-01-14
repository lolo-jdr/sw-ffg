import { Skill } from "./skill";

export class careerSpecialization {

    key: string;
    label: string;
    subLabel: string;
    description: string;
    book: string;

    skills: Skill[];

    public constructor(sp: any) {
        this.key = sp.key;
        this.label = sp.label;
        this.subLabel = sp.subLabel;
        this.description = sp.description;
        this.book = sp.book;
    }
}