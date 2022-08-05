import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanerComponent } from './pages/planer/planer.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { HeaderComponent } from './shared/components/header/header.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RegistrationFormComponent } from './pages/registration-page/registration-form/registration-form.component';
import { CharactersComponent } from './pages/characters/characters.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { LocationsComponent } from './pages/locations/locations.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanerComponent,
    PageNotFoundComponent,
    RegistrationPageComponent,
    HeaderComponent,
    RegistrationFormComponent,
    CharactersComponent,
    LocationsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
