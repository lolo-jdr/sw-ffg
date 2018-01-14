import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ToolModule } from './modules/tools/tool.module';
import { CareersModule } from './modules/careers/careers.module';
import { SpeciesModule } from './modules/species/species.module';
import { PagesModule } from './modules/pages/pages.module';

import { RulesComponent } from './modules/pages/rules/rules.component';
import { CharacterCreationComponent } from './modules/pages/character-creation/character-creation.component';
import { SpeciesListComponent } from './modules/species/species-list/species-list.component';
import { SpeciesSingleComponent } from './modules/species/species-single/species-single.component';
import { CareersSingleComponent } from './modules/careers/careers-single/careers-single.component';
import { CareersListComponent } from './modules/careers/careers-list/careers-list.component';
import { EquipmentsComponent } from './modules/pages/equipments/equipments.component';
import { CharacterCreatorComponent } from './modules/tools/character-creator/character-creator.component';
import { ResourcesComponent } from './modules/pages/resources/resources.component';
import { CharacterGeneratorComponent } from './modules/tools/character-generator/character-generator.component';

const routes: Routes = [
  // Common routes
  { path: '', component: RulesComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'character-creation', component: CharacterCreationComponent },

  { path: 'species', component: SpeciesListComponent },
  { path: 'species/:species', component: SpeciesSingleComponent },
  { path: 'careers', component: CareersListComponent },
  { path: 'careers/:career', component: CareersSingleComponent },

  { path: 'equipments', component: EquipmentsComponent },

  { path: 'tools/character-creator', component: CharacterCreatorComponent },
  { path: 'tools/character-generator', component: CharacterGeneratorComponent },

  { path: 'resources', component: ResourcesComponent },
];

@NgModule({
  imports: [ 
    PagesModule,
    SpeciesModule,
    CareersModule,
    ToolModule,
    RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }