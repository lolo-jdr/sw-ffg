import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { HelperService } from '../../../services/helper.service';

import { Observable } from 'rxjs';
import { Species } from '../../../models/species';
import { Career } from '../../../models/career';
import { ApplicationService } from '../../../services/application.service';
import { Character } from '../../../models/character';
import { Skill, SkillType } from '../../../models/skill';
import { forEach } from '@angular/router/src/utils/collection';

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

  protected careerEquipment: any[] = [];
  protected weapons: any[] = [];
  protected armors: any[] = [];
  protected equipments: any[] = [];
  protected vehicules: any[] = [];


  constructor(private api: ApiService, private helper: HelperService) { }

  ngOnInit() {
    this.getEquipmentData().subscribe(equip => {
      const [careerEquipment, weapons, armors, equipments, vehicules] = equip;

      this.careerEquipment = careerEquipment;

      for (let weaponType in weapons) {
        for (let weapon in weapons[weaponType]) {
          let w = weapons[weaponType][weapon];
          this.weapons.push(w);
        }
      }

      this.armors = armors[0]; // Shouldn't have to do that
      
      for (let equipmentType in equipments) {
        for (let equipment in equipments[equipmentType]) {
          let e = equipments[equipmentType][equipment];
          this.equipments.push(e);
        }
      }

      this.vehicules = vehicules[0]; // Shouldn't have to do that

      this.randomize();
      this.isPageLoaded = true;
    });
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

    // Assign an obligation/ duty / morality
    this.assignObligation();

    // Assign equipments
    this.assignEquipment();

    // Assign Ship
    this.assignShip();

    console.log(this.character);
  }

  public reRandomEquipments() {
    // Reset equipments
    this.character.weapons = [];
    this.character.armors = [];
    this.character.equipments = [];

    // Re-assign equipments
    this.assignEquipment();
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
    } else if (this.character.species.specialAbilityProcess.length > 1) {
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
      this.character.obligation = HelperService.GetRandomFromCollection(ApplicationService.obligations.filter(o => o.dice !== '"01-08'));
    } else if (this.character.career.universKey === 'aor') {
      this.character.obligation = HelperService.GetRandomFromCollection(ApplicationService.duties.filter(o => o.dice !== '"01-08'));
    } else {
      this.character.obligation = HelperService.GetRandomFromCollection(ApplicationService.moralities.filter(o => o.dice !== '"01-08'));
    }
  }

  private assignEquipment() {

    if (this.character && this.character.specializations.length > 0) {
      // find the career-weapon
      let careerEquipment = this.careerEquipment.find(cw => cw.specializationKey === this.character.specializations[0].key);
      console.log(careerEquipment);

      // Give random weapons
      for(let weaponKeys of careerEquipment.weaponKeys) {
        let weaponKey = HelperService.GetRandomFromCollection(weaponKeys);
        let weapon = this.weapons.find(w => w.key === weaponKey);
        if (weapon) {
          this.character.weapons.push(weapon);
        }
      }

      // Give random armor
      for(let armorKeys of careerEquipment.armorKeys) {
        let armorKey = HelperService.GetRandomFromCollection(armorKeys);
        let armor = this.armors.find(a => a.key === armorKey);
        if (armor) {
          this.character.armors.push(armor);
        }
      }

      // Give random equipments
      for(let equipmentKeys of careerEquipment.equipementKeys) {
        let equipmentKey = HelperService.GetRandomFromCollection(equipmentKeys);
        console.log(equipmentKey);
        console.log(this.equipments);
        let equipment = this.equipments.find(a => a.key === equipmentKey);
        if (equipment && equipment !== '') { // remove empty string condition when all equipments have a key
          this.character.equipments.push(equipment);
        }
      }
    }
  }

  public assignShip() {
    if (this.character && this.character.specializations.length > 0) {
      // find the career-weapon
      let careerEquipment = this.careerEquipment.find(cw => cw.specializationKey === this.character.specializations[0].key);
      console.log(careerEquipment);

      // Give random weapons
      for(let vehiculeKeys of careerEquipment.vehiculeKeys) {
        let vehiculeKey = HelperService.GetRandomFromCollection(vehiculeKeys);
        let vehicule = this.vehicules.find(w => w.key === vehiculeKey);
        if (vehicule) {
          this.character.vehicules.push(vehicule);
        }
      }
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

  private getEquipmentData() {
    return Observable.forkJoin(
      this.api.localResource(ApiService.CAREERS_EQUIPMENTS),
      this.getWeapons(),
      this.getArmor(),
      this.getEquipment(),
      this.getShip()
    );
  }

  private getWeapons() {
    return Observable.forkJoin(
      this.api.localResource(ApiService.EQUIPMENT_FOLDER + ApiService.WEAPONS_DISTANCE_ENERGY),
      this.api.localResource(ApiService.EQUIPMENT_FOLDER + ApiService.WEAPONS_DISTANCE_PERCUSSION),
      this.api.localResource(ApiService.EQUIPMENT_FOLDER + ApiService.WEAPONS_DISTANCE_JET),
      this.api.localResource(ApiService.EQUIPMENT_FOLDER + ApiService.WEAPONS_DISTANCE_EXPLOSIVE),
      this.api.localResource(ApiService.EQUIPMENT_FOLDER + ApiService.WEAPONS_CONTACT_SWORD),
      this.api.localResource(ApiService.EQUIPMENT_FOLDER + ApiService.WEAPONS_CONTACT_PUGILAT),
      this.api.localResource(ApiService.EQUIPMENT_FOLDER + ApiService.WEAPONS_CONTACT_PUGILAT)
    );
  }

  private getArmor() {
    return Observable.forkJoin(
      this.api.localResource(ApiService.EQUIPMENT_FOLDER + ApiService.ARMORS)
    );
  }

  private getEquipment() {
    return Observable.forkJoin(
      this.api.localResource(ApiService.EQUIPMENT_FOLDER + ApiService.EQUIPMENT_COMMUNICATION),
      this.api.localResource(ApiService.EQUIPMENT_FOLDER + ApiService.EQUIPMENT_CYBERNETIC),
      this.api.localResource(ApiService.EQUIPMENT_FOLDER + ApiService.EQUIPMENT_DETECTION),
      this.api.localResource(ApiService.EQUIPMENT_FOLDER + ApiService.EQUIPMENT_DROIDE),
      this.api.localResource(ApiService.EQUIPMENT_FOLDER + ApiService.EQUIPMENT_ENTERTAINMENT),
      this.api.localResource(ApiService.EQUIPMENT_FOLDER + ApiService.EQUIPMENT_MEDICAL),
      this.api.localResource(ApiService.EQUIPMENT_FOLDER + ApiService.EQUIPMENT_POISON),
      this.api.localResource(ApiService.EQUIPMENT_FOLDER + ApiService.EQUIPMENT_SECURITY_MATERIAL),
      this.api.localResource(ApiService.EQUIPMENT_FOLDER + ApiService.EQUIPMENT_SURVIVAL_MATERIAL),
      this.api.localResource(ApiService.EQUIPMENT_FOLDER + ApiService.WEAPONS_OTHER)
    );
  }

  private getShip() {
    return Observable.forkJoin(
      this.api.localResource(ApiService.VEHICULES_FOLDER + ApiService.VEHICULES)
    );
  }

}
