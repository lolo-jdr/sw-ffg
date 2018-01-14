import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from '../../shared/shared.module';
import { SpeciesListComponent } from './species-list/species-list.component';
import { SpeciesSingleComponent } from './species-single/species-single.component';

const routes: Routes = [ ];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot(routes, {useHash: true})
    
  ],
  declarations: [ SpeciesListComponent, SpeciesSingleComponent ],
  exports: [ SpeciesListComponent, SpeciesSingleComponent ]
})
export class SpeciesModule { }
