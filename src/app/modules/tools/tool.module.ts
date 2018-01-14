import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from '../../shared/shared.module';
import { CharacterCreatorComponent } from './character-creator/character-creator.component';
import { CharacterGeneratorComponent } from './character-generator/character-generator.component';

const routes: Routes = [ ];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  declarations: [ CharacterCreatorComponent, CharacterGeneratorComponent ],
  exports: [ CharacterCreatorComponent ]
})
export class ToolModule { }
