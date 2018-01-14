import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';

import { ModalService } from './services/modal.service';

import { CharacteristicsComponent } from './components/characteristics/characteristics.component';
import { ArmorTableComponent } from './components/armor-table/armor-table.component';
import { WeaponsTableComponent } from './components/weapons-table/weapons-table.component';
import { ModalImageComponent } from './components/modal-image/modal-image.component';
import { VehiculesTableComponent } from './components/vehicules-table/vehicules-table.component';
import { MotivationsTableComponent } from './components/motivations-table/motivations-table.component';
import { EquipmentTableComponent } from './components/equipment-table/equipment-table.component';
import { ObligationsComponent } from './components/obligations/obligations.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    LoadingModule
  ],
  declarations: [
    CharacteristicsComponent,
    ArmorTableComponent,
    WeaponsTableComponent,
    ModalImageComponent,
    VehiculesTableComponent,
    MotivationsTableComponent,
    EquipmentTableComponent,
    ObligationsComponent
  ],
  providers: [
    ModalService
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    LoadingModule,

    CharacteristicsComponent,
    ArmorTableComponent,
    WeaponsTableComponent,
    ModalImageComponent,
    VehiculesTableComponent,
    MotivationsTableComponent,
    EquipmentTableComponent,
    ObligationsComponent
  ]
})

export class SharedModule {
  static forRoot(/*culture: string*/) {
    return {
      ngModule: SharedModule,
      providers: [
        {
          provide:
            ModalService,
          /*, userValue: culture*/
        },
      ]
    }
  }
}
