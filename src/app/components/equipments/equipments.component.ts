import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.css']
})
export class EquipmentsComponent implements OnInit {

  protected isPageLoaded = false;
  
  protected weaponsDistanceEnergy     = ApiService.WEAPONS_DISTANCE_ENERGY;
  protected weaponsDistancePercussion = ApiService.WEAPONS_DISTANCE_PERCUSSION;
  protected weaponsDistanceJet        = ApiService.WEAPONS_DISTANCE_JET;
  protected weaponsDistanceExplosive  = ApiService.WEAPONS_DISTANCE_EXPLOSIVE;

  protected weaponsContactPugilat     = ApiService.WEAPONS_CONTACT_PUGILAT;
  protected weaponsContactSword       = ApiService.WEAPONS_CONTACT_SWORD;
    
  constructor(private api:ApiService) { }

  ngOnInit() {
    
  }
}
