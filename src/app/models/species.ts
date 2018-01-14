import { Characteristic } from "./characteristics";
import { Career } from "./career";

export class Species {

    key:string;
    label:string;
    genders:string[];
    description:string;
    descriptionLong:string;
    descriptionShort:string;
    characteristics:Characteristic[] = [];

    woundTreshold:string;
    strainTreshold:string;
    startingXp:number;
    forceSensitive:boolean;
    
    specialAbility:string;
    specialAbilityProcess:any[];
    otherAbilities:any[];

    constructor(species:any) {
        this.key = species.key;
        this.label = species.label;
        this.genders = species.genders;
        this.description = species.description;
        this.descriptionShort = species.descriptionShort;
        this.descriptionLong = species.descriptionLong;

        this.woundTreshold = species.woundTreshold;
        this.strainTreshold = species.strainTreshold;
        this.startingXp = species.startingXp;
        this.forceSensitive = species.forceSensitive;

        this.specialAbility = species.specialAbility;
        this.specialAbilityProcess = species.specialAbilityProcess;
        this.otherAbilities = species.otherAbilities;
    }

    public addCharacteristic(characteristics: Characteristic) {
        this.characteristics.push(characteristics);
    }
}