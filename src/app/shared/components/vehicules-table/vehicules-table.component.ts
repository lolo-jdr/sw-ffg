import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-vehicules-table',
  templateUrl: './vehicules-table.component.html',
  styleUrls: ['./vehicules-table.component.css']
})
export class VehiculesTableComponent implements OnInit {
  @Input() filter: string;

  private vehicules:any = [];
  protected vehiculesImagesFolder = ApiService.VEHICULES_IMG_FOLDER;

  constructor(private api:ApiService, private modalService:ModalService) { }

  ngOnInit() {
    this.api.localResource(ApiService.VEHICULES_FOLDER + "vehicules.json").then(vehicules => {
      this.vehicules = vehicules;
    });
  }

  openImage(img, title) {
    this.modalService.show(img, title);
  }

}
