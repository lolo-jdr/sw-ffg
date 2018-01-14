import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";

import { LoadingModule, ANIMATION_TYPES  } from 'ngx-loading';
import { SharedModule } from '../../shared/shared.module';

import { CharacterCreationComponent } from './character-creation/character-creation.component';
import { EquipmentsComponent } from './equipments/equipments.component';
import { ResourcesComponent } from './resources/resources.component';
import { RulesComponent } from './rules/rules.component';

const routes: Routes = [ ];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot(routes, {useHash: true}),
    
    LoadingModule
  ],
  declarations: [ CharacterCreationComponent, EquipmentsComponent, ResourcesComponent, RulesComponent ],
  exports: [ CharacterCreationComponent, EquipmentsComponent, ResourcesComponent, RulesComponent ]
})
export class PagesModule { }
