import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { HelperService } from '../../services/helper.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.css']
})
export class EquipmentsComponent implements OnInit {

  protected isPageLoaded = false;
  
  protected weaponsDistanceEnergy: any[] = [];
  protected weaponsDistancePercussion: any[] = [];
  protected weaponsDistanceJet: any[] = [];
  protected weaponsDistanceExplosive: any[] = [];

  protected weaponsContactPugilat: any[] = [];
  protected weaponsContactSword: any[] = [];
    
  constructor(private api:ApiService, private helper:HelperService) { }

  ngOnInit() {
     // Populate second levels lists
     this.getDynamicMenu().subscribe(data => {
      
      const [ 
        weaponsDistanceEnergy, 
        weaponsDistancePercussion,
        weaponsDistanceJet,
        weaponsDistanceExplosive,

        weaponsContactPugilat,
        weaponsContactSword

      ] = data;
      
      this.weaponsDistanceEnergy = weaponsDistanceEnergy;
      this.weaponsDistancePercussion = weaponsDistancePercussion;
      this.weaponsDistanceJet = weaponsDistanceJet;
      this.weaponsDistanceExplosive = weaponsDistanceExplosive;

      this.weaponsContactPugilat = weaponsContactPugilat;
      this.weaponsContactSword = weaponsContactSword;

      this.isPageLoaded = true;

    });
    
  }

  private getDynamicMenu() {
    return Observable.forkJoin(
      this.api.localResource(ApiService.WEAPONS_DISTANCE_ENERGY),
      this.api.localResource(ApiService.WEAPONS_DISTANCE_PERCUSSION),
      this.api.localResource(ApiService.WEAPONS_DISTANCE_JET),
      this.api.localResource(ApiService.WEAPONS_DISTANCE_EXPLOSIVE),

      this.api.localResource(ApiService.WEAPONS_CONTACT_PUGILAT),
      this.api.localResource(ApiService.WEAPONS_CONTACT_SWORD),
    );
  }

}
