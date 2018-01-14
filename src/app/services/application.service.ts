import { Injectable } from '@angular/core';

import { Characteristic } from '../models/characteristics';
import { Skill } from '../models/skill';
import { Species } from '../models/species';
import { Career } from '../models/career';
import { careerSpecialization } from '../models/careerSpecialization';

@Injectable()
export class ApplicationService {

  private static characteristics: Characteristic[] = [];
  private static skills: Skill[] = [];
  private static species: Species[] = [];
  private static careers: Career[] = [];

  constructor() { }

  public static InitializeCharacteristics(characteristics: any) {
    ApplicationService.characteristics = characteristics.map(c => new Characteristic(c));
  }

  public static InitializeSkills(skills: any) {

    for (let skill of skills) {
      let s = new Skill(skill);
      let c = new Characteristic(ApplicationService.characteristics.filter(c => c.key === skill.characteristic)[0]);
      let cloned = new Characteristic(Object.assign({}, c));
      s.setCharacteristic(cloned);
      ApplicationService.skills.push(s);
    }
  }

  public static InitializeSpecies(species: any) {

    for (let spe of species) {
      let s = new Species(spe);

      for (let characteristicKey of Object.keys(spe.characteristics)) {
        let c = ApplicationService.characteristics.filter(c => c.key === characteristicKey)[0];
        
        let cloned = new Characteristic(Object.assign({}, c));
        cloned.setValue(spe.characteristics[characteristicKey]);

        s.addCharacteristic(cloned);
      }

      ApplicationService.species.push(s);
    }

    //console.log(ApplicationService.species);
  }

  public static InitializeCareers(careers: any) {

    for (let career of careers) {
      let c = new Career(career);
      c.skills = ApplicationService.skills.filter(s => career.skills.map(({ key }) => key).includes(s.key));

      for (let specialization of career.specialization) {
        let sp = new careerSpecialization(specialization);
        sp.skills = ApplicationService.skills.filter(s => specialization.skills.map(({ key }) => key).includes(s.key))
        c.addSpecialization(sp);
      }

      ApplicationService.careers.push(c);
    }

    //console.log(ApplicationService.careers);
  }

  public static GetSkills() {
    // return Object.assign([], ApplicationService.skills);
    return ApplicationService.skills.map(x => Object.assign({}, x));
  }

  public static GetSpecies() {
    return Object.assign([], ApplicationService.species);
  }

  public static GetCareers() {
    return Object.assign([], ApplicationService.careers);
  }

}
