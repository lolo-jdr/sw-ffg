import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { HelperService } from '../../../services/helper.service';

import { Observable } from 'rxjs';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-character-creator',
  templateUrl: './character-creator.component.html',
  styleUrls: ['./character-creator.component.css']
})
export class CharacterCreatorComponent implements OnInit {

  protected isPageLoaded = false;

  protected species: any[] = [];
  protected careers: any[] = [];
  protected skills: any[] = [];

  protected character = {
    species: { specialAbilityProcess: [], key: "" }, // create class
    career: { specialization: [] },
    specialization: {},
    hasForce: false,
    isRecrue: false,
    characteristics: {
      brawn: 2,
      agility: 2,
      intellect: 2,
      cunning: 2,
      willpower: 2,
      presence: 2,
    },
    skills: []
  };

  protected selectedSpecies: any;
  protected selectedCareer: any;
  protected selectedSpecialization: any;

  protected humanSpeciesSelectedFirstSkill: any;
  protected humanSpeciesSelectedSecondSkill: any;

  protected nbSkillsCareerAvailable = 4;
  protected nbSkillsSpecializationAvailable = 2;

  constructor(private api: ApiService, private helper: HelperService) {
    // Populate second levels lists
    this.getFormData().subscribe(data => {

      const [species, careers, skills] = data;

      species.sort(HelperService.sortArrayByProperty('label'));
      careers.sort(HelperService.sortArrayByProperty('label'));
      skills.sort(HelperService.sortArrayByProperty('label'));

      this.species = species;
      this.careers = careers;
      this.skills = skills;

      // Instanciate character
      this.skills.forEach(skill => {
        this.character.skills.push({
          "key": skill.key,
          "label": skill.label,
          "value": 0,
          "career": false,
          "specialization": false,
          "species": false,
          "selectedCareer": false,
          "selectedSpecialization": false,
          "selectedSpecies": false,

          "selectedHumanFirstSkill": false,
          "selectedHumanSecondSkill": false
        });
      });

      console.log(this.character);

      this.selectedSpecies = species[0];
      this.selectedCareer = careers[0];
      this.changeSpecies();
      this.changeCareer();

      this.isPageLoaded = true;

    });
  }

  ngOnInit() {
  }

  private getFormData() {
    return Observable.forkJoin(
      this.api.localResource(ApiService.SPECIES),
      this.api.localResource(ApiService.CAREERS),
      this.api.localResource(ApiService.SKILLS)
    );
  }

  protected changeSpecies() {
    console.log('Change Species');
    this.isPageLoaded = false;

    this.character.species = this.selectedSpecies;
    this.character.characteristics.brawn = this.selectedSpecies.characteristics.brawn;
    this.character.characteristics.agility = this.selectedSpecies.characteristics.agility;
    this.character.characteristics.intellect = this.selectedSpecies.characteristics.intellect;
    this.character.characteristics.cunning = this.selectedSpecies.characteristics.cunning;
    this.character.characteristics.willpower = this.selectedSpecies.characteristics.willpower;
    this.character.characteristics.presence = this.selectedSpecies.characteristics.presence;

    // Set species skills + talents
    this.resetCharacterSkills();
    this.changeCareer();

    // Reset species skills (function)
    this.character.skills.forEach(skill => {
      skill.species = false;
      if (skill.selectedSpecies) {
        skill.value--;
        skill.selectedSpecies = false;
      }
    });

    this.nbSkillsCareerAvailable = 4;
    this.nbSkillsSpecializationAvailable = 2;

    if (this.character.species.key === "human") {

    } else if (this.character.species.key === "droid") {
      this.nbSkillsCareerAvailable = 6;
      this.nbSkillsSpecializationAvailable = 3;
    }
    // If only one -> automap 
    else if (this.character.species.specialAbilityProcess.length === 1) {
      console.log("1 characteristic species");
      var speciesSkillKey = this.character.species.specialAbilityProcess[0].skillKey;
      var skill = this.character.skills.find(s => s.key === speciesSkillKey);
      skill.value++;
      skill.species = true;
      skill.selectedSpecies = true;

    } else if (this.character.species.specialAbilityProcess.length > 1) {
      console.log("2 or more characteristic species");
      this.character.species.specialAbilityProcess.forEach(specialAbility => {
        console.log(specialAbility);
        var skill = this.character.skills.find(s => s.key === specialAbility.skillKey);
        skill.species = true;
      });

    }

    this.isPageLoaded = true;
  }

  protected changeSpeciesSkill(specialAbilityToAdd) {
    // Rset species skills (function)
    this.character.skills.forEach(skill => {
      if (skill.selectedSpecies) {
        skill.value--;
        skill.selectedSpecies = false;
      }
    });

    var skill = this.character.skills.find(s => s.key === specialAbilityToAdd.skillKey);
    skill.value++;
    skill.selectedSpecies = true;
  }

  protected changeCareer() {
    this.character.career = this.selectedCareer;

    // this.character.hasForce = (this.character.career.universKey === 'fad');
    // this.character.hasForce = (this.character.career.universKey === 'fad');

    // Change specialization
    this.selectedSpecialization = this.character.career.specialization[0];

    console.log('Selected career');
    console.log(this.selectedCareer);
    console.log(this.character);

    this.resetCharacterSkills();

    // TODO : add skills from species

    // Add new career skills
    this.selectedCareer.skills.forEach(skill => {
      this.character.skills.find(s => s.key === skill.key.toString()).career = true;
    });

    // Add new specialization skills
    this.changeSpecialization();

    this.character.skills.sort(HelperService.sortArrayByProperty('career', false));

    this.humanSpeciesSelectedFirstSkill = undefined;
    this.humanSpeciesSelectedSecondSkill = undefined;
  }

  protected changeSpecialization() {

    // Reset specialization skills
    this.character.skills.forEach(skill => {
      skill.specialization = false;

      if (skill.selectedSpecialization) {
        skill.selectedSpecialization = false;
        skill.value--;
      }
      
      if (skill.selectedHumanFirstSkill) {
        skill.selectedHumanFirstSkill = false;
        skill.value--;
      }

      if (skill.selectedHumanSecondSkill) {
        skill.selectedHumanSecondSkill = false;
        skill.value--;
      }
    });

    console.log('changeSpecialization');
    console.log(this.selectedSpecialization);
    this.character.specialization = this.selectedSpecialization;
    this.selectedSpecialization.skills.forEach(skill => {
      this.character.skills.find(s => s.key === skill.key.toString()).specialization = true;
    });
  }

  protected upSkillCa(skill) {
    if (skill.value + 1 <= 2 && this.countSelectedCareers() <= this.nbSkillsCareerAvailable) {
      skill.value++;
      skill.selectedCareer = true;
    }
  }

  protected downSkillCa(skill) {
    if (skill.value - 1 >= 0) {
      skill.value--;
      skill.selectedCareer = false;
    }
  }

  protected upSkillSp(skill) {
    if (skill.value + 1 <= 2 && this.countSelectedSpecializations() <= this.nbSkillsSpecializationAvailable) {
      skill.value++;
      skill.selectedSpecialization = true;
    }
  }

  protected downSkillSp(skill) {
    if (skill.value - 1 >= 0) {
      skill.value--;
      skill.selectedSpecialization = false;
    }
  }

  private resetCharacterSkills() {
    if (this.skills && this.character && this.character.skills) {
      this.character.skills.forEach(skill => {
        skill.career = false;
        skill.specialization = false;

        if (skill.selectedCareer) {
          skill.selectedCareer = false;
          skill.value--;
        }

        if (skill.selectedSpecialization) {
          skill.selectedSpecialization = false;
          skill.value--;
        }

        if (skill.selectedHumanFirstSkill) {
          skill.selectedHumanFirstSkill = false;
          skill.value--;
        }

        if (skill.selectedHumanSecondSkill) {
          skill.selectedHumanSecondSkill = false;
          skill.value--;
        }
      });
    }
  }

  protected countSelectedCareers() {
    return this.character.skills.filter(s => s.career && s.selectedCareer).length;
  }

  protected countSelectedSpecializations() {
    return this.character.skills.filter(s => s.specialization && s.selectedSpecialization).length;
  }

  protected humanAbilityChanged(needFilter = false) {
    this.getNotCareerSkills(needFilter);

    // reset some flag/attribute?

    var skillToUpdate = (!needFilter) ? this.humanSpeciesSelectedFirstSkill : this.humanSpeciesSelectedSecondSkill;

    if (needFilter) {
      this.character.skills.forEach(skill => {
        if (skill.selectedHumanSecondSkill) {
          skill.selectedHumanSecondSkill = false;
          skill.value--;
        }
      });
      skillToUpdate.selectedHumanSecondSkill = true;
      skillToUpdate.value++;
    } else {
      this.character.skills.forEach(skill => {
        if (skill.selectedHumanFirstSkill) {
          skill.selectedHumanFirstSkill = false;
          skill.value--;
        }
      });
      skillToUpdate.selectedHumanFirstSkill = true;
      skillToUpdate.value++;
    }
  }

  protected getNotCareerSkills(needFilter = false) {

    if (needFilter && this.humanSpeciesSelectedFirstSkill !== undefined) {
      return this.character.skills.filter(s => !s.career && !s.specialization && s.key !== this.humanSpeciesSelectedFirstSkill.key);
    } else {
      return this.character.skills.filter(s => !s.career && !s.specialization);
    }
  }

}
