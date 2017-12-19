import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpeciesListComponent } from './components/species-list/species-list.component';
import { CharacterCreationComponent } from './components/character-creation/character-creation.component';
import { RulesComponent } from './components/rules/rules.component';
import { SpeciesSingleComponent } from './components/species-single/species-single.component';
import { CareersListComponent } from './components/careers-list/careers-list.component';
import { CareersSingleComponent } from './components/careers-single/careers-single.component';
import { EquipmentsComponent } from './components/equipments/equipments.component';


const routes: Routes = [
  // Common routes
  { path: '', component: RulesComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'species', component: SpeciesListComponent },
  { path: 'species/:species', component: SpeciesSingleComponent },
  { path: 'careers', component: CareersListComponent },
  { path: 'careers/:career', component: CareersSingleComponent },
  { path: 'character-creation', component: CharacterCreationComponent },
  { path: 'equipments', component: EquipmentsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }