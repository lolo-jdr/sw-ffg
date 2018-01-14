/* Angular Imports */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* App Routing */
import { AppRoutingModule } from './app-routing.module';

import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

/* Services TODO: Create a CoreModule*/
import { ApiService } from './services/api.service';
import { HelperService } from './services/helper.service';
import { ApplicationService } from './services/application.service';

/* App Imports */
import { AppComponent } from './app.component';

/* App Initialization */
import { AppLoadModule } from './app-load/app-load.module';

/* Custom Modules */
import { LayoutModule } from './modules/layout/layout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,

    AppLoadModule,
    LayoutModule
  ],
  providers: [
    ApiService,
    HelperService,
    ApplicationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
