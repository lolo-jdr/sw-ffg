import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'app-species-single',
  templateUrl: './species-single.component.html',
  styleUrls: ['./species-single.component.css']
})
export class SpeciesSingleComponent implements OnInit {

  protected isPageLoaded = false;

  protected species: any;
  private sub: any;

  constructor(private route: ActivatedRoute, private api:ApiService, private helper:HelperService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let speciesParam = params['species']; // (+) converts string 'id' to a number

      this.api.localResource(ApiService.SPECIES).then(species => {
        
        if (species) {
          var speciesToLoad = species.find(c => c.key === speciesParam);
          
          if (speciesToLoad) {
            console.log(speciesToLoad);

            // Format data for HTML view
            speciesToLoad.woundTreshold = HelperService.stickTextForHtml(speciesToLoad.woundTreshold)
            speciesToLoad.strainTreshold = HelperService.stickTextForHtml(speciesToLoad.strainTreshold)
            
            this.species = speciesToLoad;
          }
        }

        this.isPageLoaded = true;
      });

    });
  }

}
