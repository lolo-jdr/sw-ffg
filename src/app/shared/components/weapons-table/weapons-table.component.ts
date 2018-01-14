import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-weapons-table',
  templateUrl: './weapons-table.component.html',
  styleUrls: ['./weapons-table.component.css']
})
export class WeaponsTableComponent implements OnInit {
  @Input() weaponFile: string;

  private weapons:any = [];
  protected weaponImagesFolder = ApiService.EQUIPMENT_IMG_FOLDER;

  constructor(private api:ApiService, private modalService:ModalService) { }

  ngOnInit() {
    this.api.localResource(ApiService.EQUIPMENT_FOLDER + this.weaponFile).then(weapons => {
      this.weapons = weapons;
    });
  }

  openImage(img, title) {
    this.modalService.show(img, title);
  }

}
