import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';

import { Observable } from 'rxjs';
import { ApiService } from '../../../services/api.service';
import { HelperService } from '../../../services/helper.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('navbarToggler') navbarToggler:ElementRef;

  protected isPageLoaded = false;

  protected species: any[] = [];
  protected careers: any[] = [];

  constructor(private api:ApiService, private helper:HelperService) { 

    // Populate second levels lists
    this.getDynamicMenu().subscribe(data => {
      
      const [ species , careers ] = data;

      species.sort(HelperService.sortArrayByProperty('label'));
      careers.sort(HelperService.sortArrayByProperty('label'));
      
      this.species = species;
      this.careers = careers;

      this.isPageLoaded = true;

    });
  }

  ngOnInit() {
  }

  private getDynamicMenu() {
    return Observable.forkJoin(
      this.api.localResource(ApiService.SPECIES),
      this.api.localResource(ApiService.CAREERS)
    );
  }

  navBarTogglerIsVisible() {
    return this.navbarToggler.nativeElement.offsetParent !== null;
  }

  protected collapseNav() {
    if (this.navBarTogglerIsVisible()) {
      this.navbarToggler.nativeElement.click();
    }
  }
}
