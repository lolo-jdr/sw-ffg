import { Species } from "./species";
import { Career } from "./career";
import { Skill } from "./skill";
import { careerSpecialization } from "./careerSpecialization";

export class Character {

	species: Species;
	career: Career;
	specializations: careerSpecialization[] = [];
	skills: Skill[];
	obligation:any;

	hasForce:boolean = false;

	constructor(skills: Skill[]) {
		this.skills = skills;
	}

	public setSpecies(species: Species) {
		this.species = species;
	}

	public setCareer(career: Career) {
		this.career = career;
	}

	public addSpecialization(specialization: careerSpecialization) {
		this.specializations.push(specialization);
	}

	public getNbCareerSkills() {
		var nbSkills = 0;

		if (this.species && this.career) {
			if (this.species.key === 'droid') {
				nbSkills = 6;
			} else {
				// If Jedi, 3 skills instead of 4 (1 for Force)
				nbSkills = (this.career.universKey === 'fad') ? 3 : 4;
			}
		}

		return nbSkills;
	}

	public getNbSPecializationSkills() {
		var nbSkills = 0;

		if (this.species && this.career) {
			nbSkills = (this.species.key === 'droid') ? 3 : 2;
		}

		return nbSkills;
	}
}