import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-careers-single',
  templateUrl: './careers-single.component.html',
  styleUrls: ['./careers-single.component.css']
})
export class CareersSingleComponent implements OnInit {

  protected isPageLoaded = false;
  
  protected career: any;
  private sub: any;
  
  constructor(private route: ActivatedRoute, private api:ApiService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let careerParam = params['career']; // (+) converts string 'id' to a number

      this.api.localResource(ApiService.CAREERS).then(careers => {
        
        if (careers) {
          var careerToLoad = careers.find(c => c.key === careerParam);
          if (careerToLoad) {
            console.log(careerToLoad);
            this.career = careerToLoad;
          }
        }

        this.isPageLoaded = true;
      });

    });
  }

}
