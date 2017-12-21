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

  protected character = {
    species: '',
    career: '',
    characteristics : {
      brawn: 2,
      agility: 2,
      intellect: 2,
      cunning: 2,
      willpower: 2,
      presence: 2,
    }
  };
  protected selectedSpecies:any;
  protected selectedCareer:any;

  constructor(private api:ApiService, private helper:HelperService) { 
     // Populate second levels lists
     this.getFormData().subscribe(data => {
      
      const [ species , careers ] = data;

      species.sort(HelperService.sortArrayByProperty('label'));
      careers.sort(HelperService.sortArrayByProperty('label'));
      
      this.species = species;
      this.careers = careers;

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
      this.api.localResource(ApiService.CAREERS)
    );
  }

  protected changeSpecies() {
    this.isPageLoaded = false;
    console.log(this.selectedSpecies);
    this.character = this.selectedSpecies;
    this.character.characteristics.brawn = this.selectedSpecies.characteristics.brawn;
    this.character.characteristics.agility = this.selectedSpecies.characteristics.agility;
    this.character.characteristics.intellect = this.selectedSpecies.characteristics.intellect;
    this.character.characteristics.cunning = this.selectedSpecies.characteristics.cunning;
    this.character.characteristics.willpower = this.selectedSpecies.characteristics.willpower;
    this.character.characteristics.presence = this.selectedSpecies.characteristics.presence;
    this.isPageLoaded = true;
  }

  protected changeCareer() {
    this.character = this.selectedCareer;
  }

}
