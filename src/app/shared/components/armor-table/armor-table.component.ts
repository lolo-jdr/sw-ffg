import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-armor-table',
  templateUrl: './armor-table.component.html',
  styleUrls: ['./armor-table.component.css']
})
export class ArmorTableComponent implements OnInit {
  @Input() armorFile: string;

  private armors:any = [];
  protected armorImagesFolder = ApiService.EQUIPMENT_IMG_FOLDER;

  constructor(private api:ApiService, private modalService:ModalService) { }

  ngOnInit() {
    this.api.localResource(ApiService.EQUIPMENT_FOLDER + this.armorFile).then(armors => {
      this.armors = armors;
    });
  }

  openImage(img, title) {
    this.modalService.show(img, title);
  }

}
