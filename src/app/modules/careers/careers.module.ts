import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from '../../shared/shared.module';
import { CareersListComponent } from './careers-list/careers-list.component';
import { CareersSingleComponent } from './careers-single/careers-single.component';

const routes: Routes = [ ];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot(routes, {useHash: true}),

  ],
  declarations: [ CareersListComponent, CareersSingleComponent ],
  exports: [ CareersListComponent, CareersSingleComponent ]
})
export class CareersModule { }
