import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-equipment-table',
  templateUrl: './equipment-table.component.html',
  styleUrls: ['./equipment-table.component.css']
})
export class EquipmentTableComponent implements OnInit {
  @Input() equipments: string;

  constructor() { }

  ngOnInit() {
  }

}
