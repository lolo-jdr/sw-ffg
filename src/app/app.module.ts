import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { SpeciesListComponent } from './components/species-list/species-list.component';
import { CharacterCreationComponent } from './components/character-creation/character-creation.component';
import { RulesComponent } from './components/rules/rules.component';
import { SpeciesSingleComponent } from './components/species-single/species-single.component';
import { CareerListComponent } from './components/career-list/career-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterCreationComponent,
    SpeciesListComponent,
    HeaderComponent,
    RulesComponent,
    SpeciesSingleComponent,
    CareerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
