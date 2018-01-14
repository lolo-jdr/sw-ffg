import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/api.service';
import { HelperService } from 'app/services/helper.service';

@Component({
  selector: 'app-careers-list',
  templateUrl: './careers-list.component.html',
  styleUrls: ['./careers-list.component.css']
})
export class CareersListComponent implements OnInit {

  protected isPageLoaded = false;

  protected careers:any = [];

  constructor(private api:ApiService, private helper:HelperService) { 
    this.api.localResource(ApiService.CAREERS).then(careers => {
      var row = -1;
      this.careers = [];
  
      careers.sort(HelperService.sortArrayByProperty('label'));

      careers.forEach(c => {
        if (row === -1 || this.careers[row].length === 3) {
          row++;
          this.careers[row] = [];
        }
        this.careers[row].push(c);
      });

      console.log(this.careers);
      this.isPageLoaded = true;
    });
  }

  ngOnInit() {
  }

}
