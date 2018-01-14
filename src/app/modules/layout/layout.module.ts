import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from '../../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [ ];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot(routes, {useHash: true}),

  ],
  declarations: [ HeaderComponent, FooterComponent ],
  exports: [ HeaderComponent, FooterComponent ]
})
export class LayoutModule { }
