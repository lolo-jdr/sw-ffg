import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LoadingModule, ANIMATION_TYPES  } from 'ngx-loading';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
import { ResourcesComponent } from './components/resources/resources.component';
import { CharacterCreatorComponent } from './components/tools/character-creator/character-creator.component';
import { ArmorTableComponent } from './shared/armor-table/armor-table.component';
import { WeaponsTableComponent } from './shared/weapons-table/weapons-table.component';
import { ModalImageComponent } from './shared/modal-image/modal-image.component';
import { ModalService } from './services/modal.service';
import { VehiculesTableComponent } from './shared/vehicules-table/vehicules-table.component';
import { MotivationsTableComponent } from './shared/motivations-table/motivations-table.component';

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
    EquipmentTableComponent,
    ResourcesComponent,
    CharacterCreatorComponent,
    ArmorTableComponent,
    WeaponsTableComponent,
    ModalImageComponent,
    VehiculesTableComponent,
    MotivationsTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    LoadingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [
    ApiService,
    HelperService,
    ModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
