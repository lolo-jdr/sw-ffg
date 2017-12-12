import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpeciesListComponent } from './components/species-list/species-list.component';
import { CharacterCreationComponent } from './components/character-creation/character-creation.component';
import { RulesComponent } from './components/rules/rules.component';
import { SpeciesSingleComponent } from './components/species-single/species-single.component';


const routes: Routes = [
  // Common routes
  { path: '', component: SpeciesListComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'species', component: SpeciesListComponent },
  { path: 'species/:race', component: SpeciesSingleComponent },
  { path: 'character-creation', component: CharacterCreationComponent },

  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }