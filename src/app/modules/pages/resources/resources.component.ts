import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/api.service';
import { HelperService } from 'app/services/helper.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  protected isPageLoaded = false;
  
  protected eoeCareers:any = [];
  protected aorCareers:any = [];
  protected fadCareers:any = [];

  protected careersFilesFolder = ApiService.RESOURCES_CAREERS_FOLDER;
  protected charactersFilesFolder = ApiService.RESOURCES_CHARACTERS_FOLDER;
  
  constructor(private api:ApiService, private helper:HelperService) {

    this.api.localResource(ApiService.CAREERS).then(careers => {
      
      this.eoeCareers = careers.filter(c => c.universKey === 'eoe');
      this.aorCareers = careers.filter(c => c.universKey === 'aor');
      this.fadCareers = careers.filter(c => c.universKey === 'fad');

      this.eoeCareers.sort(HelperService.sortArrayByProperty('label'));
      this.aorCareers.sort(HelperService.sortArrayByProperty('label'));
      this.fadCareers.sort(HelperService.sortArrayByProperty('label'));

      this.isPageLoaded = true;
    });
  }

  ngOnInit() {
  }

}
