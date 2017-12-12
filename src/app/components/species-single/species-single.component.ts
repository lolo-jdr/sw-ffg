import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-species-single',
  templateUrl: './species-single.component.html',
  styleUrls: ['./species-single.component.css']
})
export class SpeciesSingleComponent implements OnInit {

  private race: any;
  private sub: any;

  constructor(private route: ActivatedRoute) {

   }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.race = params['race']; // (+) converts string 'id' to a number
      console.log(this.race);

      // In a real app: dispatch action to load the details here.
   });
  }

}
