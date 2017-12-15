import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'app-species-list',
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.css']
})
export class SpeciesListComponent implements OnInit {

  protected isPageLoaded = false;
  
  protected speciesList:any = [];

  constructor(private api:ApiService, private helper:HelperService) { 
    this.api.localResource(ApiService.SPECIES).then(species => {
      var row = -1;
      this.speciesList = [];

      species.sort(HelperService.sortArrayByProperty('label'));

      species.forEach(sp => {
        if (row === -1 || this.speciesList[row].length === 3) {
          row++;
          this.speciesList[row] = [];
        }
        this.speciesList[row].push(sp);
      });

      console.log(this.speciesList);
      this.isPageLoaded = true;
    });
  }

  ngOnInit() {
  }

}
