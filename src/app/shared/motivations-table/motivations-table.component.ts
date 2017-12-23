import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { HelperService } from '../../services/helper.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-motivations-table',
  templateUrl: './motivations-table.component.html',
  styleUrls: ['./motivations-table.component.css']
})
export class MotivationsTableComponent implements OnInit {
  @Input() type: string;

  protected isPageLoaded = false;

  protected types: any = [];
  protected motivations1: any = [];
  protected motivations2: any = [];
  protected motivations3: any = [];


  constructor(private api: ApiService, private helper: HelperService) {
    if (this.type === "motivationsEoe") {

      /*this.getDynamicMenu().subscribe(data => {

        const [species, careers] = data;

        species.sort(HelperService.sortArrayByProperty('label'));
        careers.sort(HelperService.sortArrayByProperty('label'));

        this.species = species;
        this.careers = careers;

        this.isPageLoaded = true;
      });*/
    }
  }

  ngOnInit() {
  }

  private getDynamicMenu(motivations1, motivations2, motivations3) {
    return Observable.forkJoin(
      this.api.localResource(motivations1),
      this.api.localResource(motivations2),
      this.api.localResource(motivations3),
    );
  }

}
