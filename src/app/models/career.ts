import { Skill } from "./skill";
import { careerSpecialization } from "./careerSpecialization";

export class Career {

    key:string;
    label:string;
    descriptionShort:string;
    description:string;
    universKey:string;
    univers:string;
    careerTreeFile:string;

    skills:Skill[] = [];
    specializations:careerSpecialization[] = [];

    constructor(career:any) {
        this.key = career.key;
        this.label = career.label;
        this.descriptionShort = career.descriptionShort;
        this.description = career.description;
        this.universKey = career.universKey;
        this.univers = career.univers;
        this.careerTreeFile = career.careerTreeFile;
    }

    public addSkill(skill:Skill) {
        this.skills.push(skill);
    }

    public addSpecialization(specialization:careerSpecialization) {
        this.specializations.push(specialization);
    }
}