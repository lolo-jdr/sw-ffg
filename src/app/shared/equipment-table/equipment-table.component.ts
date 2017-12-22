import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-equipment-table',
  templateUrl: './equipment-table.component.html',
  styleUrls: ['./equipment-table.component.css']
})
export class EquipmentTableComponent implements OnInit {
  @Input() equipmentFile: string;

  private equipments:any = [];
  protected equipmentImagesFolder = ApiService.EQUIPMENT_IMG_FOLDER;

  constructor(private api:ApiService, private modalService:ModalService) { }

  ngOnInit() {
    this.api.localResource(ApiService.EQUIPMENT_FOLDER + this.equipmentFile).then(equipments => {
      this.equipments = equipments;
    });
  }

  openImage(img, title) {
    this.modalService.show(img, title);
  }

}
