import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpeciesListComponent } from './components/species-list/species-list.component';
import { CharacterCreationComponent } from './components/character-creation/character-creation.component';
import { RulesComponent } from './components/rules/rules.component';
import { SpeciesSingleComponent } from './components/species-single/species-single.component';
import { CareerListComponent } from './components/career-list/career-list.component';


const routes: Routes = [
  // Common routes
  { path: '', component: RulesComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'species', component: SpeciesListComponent },
  { path: 'species/:race', component: SpeciesSingleComponent },
  { path: 'careers', component: CareerListComponent },
  { path: 'character-creation', component: CharacterCreationComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }