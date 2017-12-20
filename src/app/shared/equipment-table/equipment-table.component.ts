import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-equipment-table',
  templateUrl: './equipment-table.component.html',
  styleUrls: ['./equipment-table.component.css']
})
export class EquipmentTableComponent implements OnInit {
  @Input() equipmentFile: string;

  private equipments:any = [];

  constructor(private api:ApiService) { }

  ngOnInit() {
    this.api.localResource(ApiService.EQUIPMENT_FOLDER + this.equipmentFile).then(equipments => {
      this.equipments = equipments;
    });
  }

}
