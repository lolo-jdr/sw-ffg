import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { HelperService } from '../../../services/helper.service';

import { Observable } from 'rxjs';
import { Species } from '../../../models/species';
import { Career } from '../../../models/career';
import { ApplicationService } from '../../../services/application.service';
import { Character } from '../../../models/character';
import { Skill, SkillType } from '../../../models/skill';

@Component({
  selector: 'app-character-generator',
  templateUrl: './character-generator.component.html',
  styleUrls: ['./character-generator.component.css']
})
export class CharacterGeneratorComponent implements OnInit {

  protected isPageLoaded = false;

  protected character: Character;

  protected speciesList: Species[] = [];
  protected careerList: Career[] = [];

  constructor(private api: ApiService, private helper: HelperService) { }

  ngOnInit() {
    this.randomize();
    this.isPageLoaded = true;
  }

  private InitializeCharacter() {
    this.speciesList = ApplicationService.GetSpecies();
    this.careerList = ApplicationService.GetCareers();

    let skills = ApplicationService.GetSkills();
    this.character = new Character(skills);
  }

  private randomize() {

    this.InitializeCharacter();

    // Get randomize species
    this.character.species = HelperService.GetRandomFromCollection(this.speciesList);

    // Get Career
    // Droides cannot be jedi
    if (this.character.species.key === 'droid') {
      this.careerList = this.careerList.filter(c => c.universKey !== 'fad');
    }

    this.character.career = HelperService.GetRandomFromCollection(this.careerList);
    this.character.specializations.push(HelperService.GetRandomFromCollection(this.character.career.specializations));

    // Determine if Force sensitive
    if (this.character.career.universKey === 'fad' || HelperService.GetDice100() <= 25) {
      this.character.hasForce = true;
    }

    this.assignSpeciesSkills();

    // Assign career skills randomly
    this.assignCareerSkills();

    // Assign specializations skills randomly
    this.assignSpecializationSkills();

    this.assignObligation();

    console.log(this.character);
  }

  private assignSpeciesSkills() {
    if (this.character.species.key === 'human') {

      // Take out of career skills
      var outOfCareerSkill = this.character.skills.filter(s => !this.character.career.skills.map(({ key }) => key).includes(s.key));

      var firstHumanSkill = HelperService.GetRandomFromCollection(outOfCareerSkill);
      this.increaseSkill(this.character.skills.find(s => s.key === firstHumanSkill.key), SkillType.Species);
      outOfCareerSkill = outOfCareerSkill.filter(s => s.key !== firstHumanSkill.key);

      var secondHumanSkill = HelperService.GetRandomFromCollection(outOfCareerSkill);
      this.increaseSkill(this.character.skills.find(s => s.key === secondHumanSkill.key), SkillType.Species);

    } else if (this.character.species.specialAbilityProcess.length === 1) {
      var speciesSkill = this.character.species.specialAbilityProcess[0];
      this.increaseSkill(this.character.skills.find(s => s.key === speciesSkill.skillKey), SkillType.Species);   
    } else  if (this.character.species.specialAbilityProcess.length > 1) {
      var ability = HelperService.GetRandomFromCollection(this.character.species.specialAbilityProcess);
      this.increaseSkill(this.character.skills.find(s => s.key === ability.skillKey), SkillType.Species);
    }
  }

  private assignCareerSkills() {

    var nbCareerSkillsAssigned = 0;
    var clonedSkills = Object.assign([], this.character.career.skills);

    while (nbCareerSkillsAssigned < this.character.getNbCareerSkills()) {
      var careerSkill = HelperService.GetRandomFromCollection(clonedSkills);
      this.increaseSkill(this.character.skills.find(s => s.key === careerSkill.key), SkillType.Career);
      nbCareerSkillsAssigned++;
      // console.log('Career: ' + careerSkill.key);

      clonedSkills = clonedSkills.filter(s => s.key !== careerSkill.key);
    }
  }

  private assignSpecializationSkills() {

    for (let specialization of this.character.specializations) {

      var nbSpSkillsAssigned = 0;
      var clonedSpSkills = Object.assign([], specialization.skills);

      while (nbSpSkillsAssigned < this.character.getNbSPecializationSkills()) {
        var spSkill = HelperService.GetRandomFromCollection(clonedSpSkills);
        this.increaseSkill(this.character.skills.find(s => s.key === spSkill.key), SkillType.Specialization);
        nbSpSkillsAssigned++;
        // console.log('Specialisation: ' + specialization.label + ' : ' + spSkill.key);

        clonedSpSkills = clonedSpSkills.filter(s => s.key !== spSkill.key);
      }
    }
  }

  private assignObligation() {
    if (this.character.career.universKey === 'eoe') {
      this.character.obligation = HelperService.GetRandomFromCollectionWithoutLast(ApplicationService.obligations);
    } else if (this.character.career.universKey === 'aor') {
      this.character.obligation = HelperService.GetRandomFromCollectionWithoutLast(ApplicationService.duties);
    } else {
      this.character.obligation = HelperService.GetRandomFromCollectionWithoutLast(ApplicationService.moralities);
    }
  }

  // Move to Skill class ?
  private increaseSkill(skill: Skill, skillType: SkillType) {
    skill.value++;

    switch (skillType) {
      case SkillType.Species:
        skill.isSpecies = true;
        break;
      case SkillType.Career:
        skill.isCareer = true;
        break;
      case SkillType.Specialization:
        skill.isSpecialization = true;
        break;

      default:
        break;
    }
  }

}
