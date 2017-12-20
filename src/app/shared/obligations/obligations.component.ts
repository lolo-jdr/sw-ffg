import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-obligations',
  templateUrl: './obligations.component.html',
  styleUrls: ['./obligations.component.css']
})
export class ObligationsComponent implements OnInit {
  @Input() type: string;

  protected types:any = [];
  protected obligations:any = [];

  constructor(private api:ApiService) { 
    this.types['obligations'] = ApiService.OBLIGATIONS;
    this.types['duties'] = ApiService.DUTIES;
    this.types['moralities'] = ApiService.MORALITIES;
  }

  ngOnInit() {
    
    let jsonFilesToLoad = this.types[this.type];

    if (jsonFilesToLoad) {
      this.api.localResource(jsonFilesToLoad).then(obligations => {
        this.obligations = obligations;
      });
    }
  
  }

}
