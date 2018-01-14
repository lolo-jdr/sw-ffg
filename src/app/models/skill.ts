import { Characteristic } from "./characteristics";

export enum SkillType {Species, Career, Specialization};

export class Skill {

    key: string;
    label: string;
    description: string;
    characteristic: Characteristic;
    type: string;

    value: number = 0;

    //
    isSpecies: boolean; 
    isCareer: boolean;
    isSpecialization: boolean;

    constructor(skill: any) {
        this.key = skill.key;
        this.label = skill.label;
        this.description = skill.description;
        this.type = skill.type;
    }

    public setCharacteristic(characteristic: Characteristic) {
        this.characteristic = characteristic;
    }
}