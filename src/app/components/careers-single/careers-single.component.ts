import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'app-careers-single',
  templateUrl: './careers-single.component.html',
  styleUrls: ['./careers-single.component.css']
})
export class CareersSingleComponent implements OnInit {

  protected isPageLoaded = false;
  
  protected career: any;
  private sub: any;

  protected obligationLabel:any;
  protected obligationType:any;
  
  constructor(private route: ActivatedRoute, private api:ApiService, private helper:HelperService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let careerParam = params['career']; // (+) converts string 'id' to a number

      this.api.localResource(ApiService.CAREERS).then(careers => {
        
        if (careers) {
          var careerToLoad = careers.find(c => c.key === careerParam);
          
          if (careerToLoad) {
            console.log(careerToLoad);

            if (careerToLoad.universKey === 'eoe') {
              this.obligationLabel = 'obligations';
              this.obligationType = 'obligations';
            } else if(careerToLoad.universKey === 'aor'){
              this.obligationLabel = 'devoirs';
              this.obligationType = 'duties';
            } else {
              this.obligationLabel = 'moralités';
              this.obligationType = 'moralities';
            }

            this.career = careerToLoad;
          }
        }

        this.isPageLoaded = true;
      });

    });
  }

}
