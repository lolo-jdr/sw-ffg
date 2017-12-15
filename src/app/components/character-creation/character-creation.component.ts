import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-character-creation',
  templateUrl: './character-creation.component.html',
  styleUrls: ['./character-creation.component.css']
})
export class CharacterCreationComponent implements OnInit {

  protected isPageLoaded:boolean = false;
  protected inspirations:any = [];

  constructor(private api:ApiService) { 

    this.api.localResource(ApiService.CHARACTER_CREATION_INSPIRATIONS).then(inspirations => {
      
    this.inspirations = inspirations;
    this.isPageLoaded = true;

    });
  }

  ngOnInit() {
  }

}
