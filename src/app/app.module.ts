import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LoadingModule, ANIMATION_TYPES  } from 'ngx-loading';

import { ApiService } from './services/api.service';
import { HelperService } from './services/helper.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { SpeciesListComponent } from './components/species-list/species-list.component';
import { CharacterCreationComponent } from './components/character-creation/character-creation.component';
import { RulesComponent } from './components/rules/rules.component';
import { SpeciesSingleComponent } from './components/species-single/species-single.component';
import { CareersListComponent } from './components/careers-list/careers-list.component';
import { ObligationsComponent } from './shared/obligations/obligations.component';
import { CharacteristicsComponent } from './shared/characteristics/characteristics.component';
import { CareersSingleComponent } from './components/careers-single/careers-single.component';
import { FooterComponent } from './layout/footer/footer.component';
import { EquipmentsComponent } from './components/equipments/equipments.component';
import { EquipmentTableComponent } from './shared/equipment-table/equipment-table.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterCreationComponent,
    SpeciesListComponent,
    HeaderComponent,
    RulesComponent,
    SpeciesSingleComponent,
    CareersListComponent,
    ObligationsComponent,
    CharacteristicsComponent,
    CareersSingleComponent,
    FooterComponent,
    EquipmentsComponent,
    EquipmentTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    LoadingModule
  ],
  providers: [
    ApiService,
    HelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
