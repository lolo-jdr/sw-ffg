import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.css']
})
export class EquipmentsComponent implements OnInit {

  protected isPageLoaded = false;
  
  protected weaponsDistanceEnergy       = ApiService.WEAPONS_DISTANCE_ENERGY;
  protected weaponsDistancePercussion   = ApiService.WEAPONS_DISTANCE_PERCUSSION;
  protected weaponsDistanceJet          = ApiService.WEAPONS_DISTANCE_JET;
  protected weaponsDistanceExplosive    = ApiService.WEAPONS_DISTANCE_EXPLOSIVE;

  protected weaponsContactPugilat       = ApiService.WEAPONS_CONTACT_PUGILAT;
  protected weaponsContactSword         = ApiService.WEAPONS_CONTACT_SWORD;

  protected armors                      = ApiService.ARMORS;

  protected equipmentCommunication      = ApiService. EQUIPMENT_COMMUNICATION;
  protected equipmentCybernetic         = ApiService. EQUIPMENT_CYBERNETIC;
  protected equipmentDetection          = ApiService. EQUIPMENT_DETECTION;
  protected equipmentEntertainment      = ApiService. EQUIPMENT_ENTERTAINMENT;
  protected equipmentMedical            = ApiService. EQUIPMENT_MEDICAL;
  protected equipmentPoison             = ApiService. EQUIPMENT_POISON;
  protected equipmentSecurityMaterial   = ApiService. EQUIPMENT_SECURITY_MATERIAL;
  protected equipmentSurvivalMaterial   = ApiService. EQUIPMENT_SURVIVAL_MATERIAL;
  protected equipmentTool               = ApiService. EQUIPMENT_TOOL;
  protected equipmentdroide             = ApiService. EQUIPMENT_DROIDE;
    
  constructor(private api:ApiService) { }

  ngOnInit() {
    
  }
}
