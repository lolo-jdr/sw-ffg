import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ApiService {

  public static EQUIPMENT_FOLDER = 'assets/data/equipments/';
  public static EQUIPMENT_IMG_FOLDER = 'assets/images/equipments/';
  public static VEHICULES_FOLDER = 'assets/data/vehicules/';
  public static VEHICULES_IMG_FOLDER = 'assets/images/vehicules/';
  public static RESOURCES_CAREERS_FOLDER = 'assets/resources/files/careers/';
  public static RESOURCES_CHARACTERS_FOLDER = 'assets/resources/files/characters/';

  public static SPECIES = 'assets/data/species.json';
  public static CAREERS = 'assets/data/careers.json';
  public static SKILLS = 'assets/data/skills.json';

  public static OBLIGATIONS = 'assets/data/obligations.json';
  public static DUTIES = 'assets/data/duties.json';
  public static MORALITIES = 'assets/data/moralities.json';

  public static WEAPONS_DISTANCE_ENERGY = "weapons-distance-energy.json";
  public static WEAPONS_DISTANCE_PERCUSSION = "weapons-distance-percussion.json";
  public static WEAPONS_DISTANCE_JET = "weapons-distance-jet.json";
  public static WEAPONS_DISTANCE_EXPLOSIVE = "weapons-distance-explosive.json";

  public static WEAPONS_CONTACT_PUGILAT = "weapons-contact-pugilat.json";
  public static WEAPONS_CONTACT_SWORD = "weapons-contact-sword.json";

  public static ARMORS = "armor.json";

  public static EQUIPMENT_COMMUNICATION = "equipment-communication.json";
  public static EQUIPMENT_CYBERNETIC = "equipment-cybernetic.json";
  public static EQUIPMENT_DETECTION = "equipment-detection.json";
  public static EQUIPMENT_ENTERTAINMENT = "equipment-entertainment.json";
  public static EQUIPMENT_MEDICAL = "equipment-medical.json";
  public static EQUIPMENT_POISON = "equipment-poison.json";
  public static EQUIPMENT_SECURITY_MATERIAL = "equipment-security-material.json";
  public static EQUIPMENT_SURVIVAL_MATERIAL = "equipment-survival-material.json";
  public static EQUIPMENT_TOOL = "equipment-tool.json";

  public static CHARACTER_CREATION_INSPIRATIONS = 'assets/data/character-creation-inspirations.json';

  constructor(private http:Http) { }

  public localResource(path:string) : Promise<any> {
    return this.http.get(path)
    .toPromise()
    .then(this.handleSuccess)
    .catch(this.handleError);
  }

   /** Local functions */
   private handleSuccess(result) {
    let data = result.json();
    return data || {};
  }

  private handleError(error: any) {
    console.log('An error occurred')
    console.log(error);
    return Promise.reject(error.json());
  }

}
